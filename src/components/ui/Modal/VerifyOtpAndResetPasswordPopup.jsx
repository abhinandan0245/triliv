// import React, { useState } from "react";

// import { toast } from "react-toastify";
// import { useResetPasswordMutation, useVerifyOtpMutation } from "../../../services/resetPassApi";

// const VerifyOtpAndResetPasswordPopup = ({ show, onClose, email }) => {
//   const [step, setStep] = useState("verify");
//   const [code, setCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const [verifyOtp] = useVerifyOtpMutation();
//   const [resetPassword] = useResetPasswordMutation();

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await verifyOtp({ email, code }).unwrap();
//       toast.success(res.message || "verified")
//       // setMessage("OTP verified. Please set a new password.");
//       setStep("reset");
//     } catch (err) {
//       console.error(err);
//       // setMessage(err?.data?.message || "Invalid OTP.");
//       toast.error(err.message || err || "Failed Otp")
//     }
//   };

//   const handleResetPassword = async (e) => {
//   e.preventDefault();

//   if (newPassword !== confirmPassword) {
//     toast.error("Passwords do not match.");
//     return;
//   }

//   try {
//     const res = await resetPassword({
//       email,
//       code , // ✅ pass OTP here
//       newPassword,
//       confirmPassword,
//     }).unwrap();

//     toast.success(res.message || "Password successfully reset.");
//      // ✅ Close popup after short delay
//     setTimeout(() => {
//       onClose();
//     }, 2000);
//   } catch (err) {
//     console.error(err);
//     toast.error(err?.data?.message || "Failed to reset password.");
//   }
// };


//   return (
//     <div
//       className={`offcanvas offcanvas-end popup-style-1 popup-reset-pass ${
//         show ? "show d-block" : ""
//       }`}
//       style={{ visibility: show ? "visible" : "hidden" }}
//     >
//       <div className="canvas-wrapper">
//         <div className="canvas-header popup-header">
//           <span className="title">
//             {step === "verify" ? "Verify OTP" : "Reset Password"}
//           </span>
//           <button className="icon-close icon-close-popup" onClick={onClose} />
//         </div>
//         <div className="canvas-body popup-inner">
//           {step === "verify" ? (
//             <form onSubmit={handleVerifyOtp} className="form-login">
//               <p className="text text-sm text-main-2">
//                 Enter the OTP sent to your email.
//               </p>
//               <fieldset className="mb_12">
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={code}
//                   onChange={(e) => setCode(e.target.value)}
//                   required
//                 />
//               </fieldset>
//               {message && <p className="text text-sm text-danger mb-3">{message}</p>}
//               <div className="button-wrap">
//                 <button className="tf-btn animate-btn bg-dark-2 w-100" type="submit">
//                   Verify OTP
//                 </button>
//                 <button
//                   type="button"
//                   className="tf-btn btn-out-line-dark2 w-100 mt-2"
//                   onClick={onClose}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <form onSubmit={handleResetPassword} className="form-login">
//               <p className="text text-sm text-main-2">Enter your new password.</p>
//               <fieldset className="mb_12">
//                 <input
//                   type="password"
//                   placeholder="New Password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//               </fieldset>
//               <fieldset className="mb_12">
//                 <input
//                   type="password"
//                   placeholder="Confirm New Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//               </fieldset>
//               {message && <p className="text text-sm text-danger mb-3">{message}</p>}
//               <div className="button-wrap">
//                 <button className="tf-btn animate-btn bg-dark-2 w-100" type="submit">
//                   Reset Password
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtpAndResetPasswordPopup;

import React, { useState, useEffect, useRef } from "react";
import { useVerifyOtpMutation, useResetPasswordMutation } from "../../../services/resetPassApi";
import { toast } from "react-toastify";

const VerifyOtpAndResetPasswordPopup = ({ show, onClose, email }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
  const [resetPassword, { isLoading: isResetting }] = useResetPasswordMutation();
  const otpInputRefs = useRef([]);

  // Reset state when popup opens/closes or email changes
  useEffect(() => {
    if (show) {
      setOtp(Array(6).fill(""));
      setNewPassword("");
      setConfirmPassword("");
      setIsVerified(false);
    }
  }, [show, email]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Only allow numbers
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus to next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) {
      toast.error("Please enter complete 6-digit OTP");
      return;
    }
    
    try {
      const res = await verifyOtp({ code, email }).unwrap();
      toast.success(res.message || "OTP verified successfully");
      setIsVerified(true);
    } catch (err) {
      toast.error(err?.data?.message || "OTP verification failed");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const res = await resetPassword({
        email,
        code: otp.join(""),
        newPassword,
        confirmPassword,
      }).unwrap();
      
      toast.success(res.message || "Password reset successfully");
      setTimeout(() => {
        onClose();
        // Clear all states after successful reset
        setOtp(Array(6).fill(""));
        setNewPassword("");
        setConfirmPassword("");
        setIsVerified(false);
      }, 1500);
    } catch (err) {
      toast.error(err?.data?.message || "Password reset failed");
    }
  };

  if (!show) return null;

  return (
    <div className={`offcanvas offcanvas-end popup-style-1 ${show ? "show d-block" : ""}`}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">{isVerified ? "Reset Password" : "Verify OTP"}</span>
          <button
            className="icon-close icon-close-popup"
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={isVerified ? handleResetPassword : handleVerifyOtp}>
            {!isVerified ? (
              <>
                <p className="text text-sm text-main-2 mb-4">
                  Enter the 6-digit OTP sent to {email}
                </p>  
                <div className="otp-container d-flex justify-content-between mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      className="otp-input form-control text-center"
                      style={{
                        width: "60px",
                        height: "50px",
                        fontSize: "16px",
                        // margin: "0 5px"
                      }}
                      required
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <fieldset className="email mb_12">
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </fieldset>
                <fieldset className="email mb_12">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </fieldset>
              </>
            )}
            
            <div className="button-wrap">
              <button
                className="subscribe-button tf-btn animate-btn bg-dark-2 w-100"
                type="submit"
                disabled={isVerifying || isResetting}
              >
                {isVerified 
                  ? isResetting ? "Resetting..." : "Reset Password"
                  : isVerifying ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="tf-btn btn-out-line-dark2 w-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpAndResetPasswordPopup;