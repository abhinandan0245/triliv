// import React, { useState } from "react";
// import { useSendOtpMutation } from "../../../services/resetPassApi";
// import { toast } from "react-toastify";

// const ResetPasswordPopup = ({ show, onClose , onSubmitted  }) => {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//  const [sendOtp, { isLoading, isError, error }] = useSendOtpMutation();

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await sendOtp(email).unwrap();
//     toast.success("Sent OTP");
//     console.log("OTP sent:", res.message);
//     setIsSubmitted(true);
//     if (onSubmitted) {
//       onSubmitted(email);  // 👈 OPEN VERIFY POPUP
//     }
//     setEmail("");
//   } catch (err) {
//     console.error("Failed to send OTP:", err);
//     toast.error(err?.data?.message || err?.error || "Failed to send OTP");
//   }
// };

//   return (
//     <div
//      className={`offcanvas offcanvas-end popup-style-1 popup-reset-pass ${show ? "show d-block" : ""}`}
//       style={{ visibility: show ? "visible" : "hidden" }}
//       id="resetPass"
//     >
//       <div className="canvas-wrapper">
//         <div className="canvas-header popup-header">
//           <span className="title">Reset Your Password</span>
//           <button
//             className="icon-close icon-close-popup"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//             onClick={() => { onClose(); setIsSubmitted(false); }} />
          
//         </div>
//         <div className="canvas-body popup-inner">
//           {isSubmitted ? (
//             <div className="success-message">
//               <p className="text text-sm text-main-2">
//                 If an account exists with this email, you'll receive a password
//                 reset link shortly.
//               </p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="form-login">
//               <div>
//                 <p className="text text-sm text-main-2">
//                   Forgot your password? No worries! Enter your registered email
//                   to receive a link and securely reset it in just a few steps.
//                 </p>
//                 <fieldset className="email mb_12">
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email*"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </fieldset>
//               </div>
//               <div className="bot">
//                 <div className="button-wrap">
//                   <button
//                     className="subscribe-button tf-btn animate-btn bg-dark-2 w-100"
//                     type="submit"
//                   >
//                      {isLoading ? "Sending..." : "Send OTP"}
//                   </button>
//                   <button
//                     type="button"
//                     data-bs-dismiss="offcanvas"
//                     // type="button"
//                     onClick={onClose}
//                     className="tf-btn btn-out-line-dark2 w-100"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//                  {isError && (
//                   <p className="text-danger text-sm mt-2">
//                     {error?.data?.message || "Failed to send OTP"}
//                   </p>
//                 )}
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordPopup;

import React, { useEffect, useState } from "react";
import { useSendOtpMutation } from "../../../services/resetPassApi";
import { toast } from "react-toastify";

const ResetPasswordPopup = ({ show, onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [sendOtp, { isLoading, isError, error }] = useSendOtpMutation();



      // backdrop fix 
  
    // LoginPopup, RegisterPopup, ResetPasswordPopup, VerifyOtpAndResetPasswordPopup में add करें:
    
  useEffect(() => {
    if (!show) return;
    
    const modalElement = document.getElementById('modalId'); // अपना modal ID use करें
    
    if (modalElement) {
      const handleHidden = () => {
        // Cleanup after modal is hidden
        setTimeout(() => {
          const backdrops = document.querySelectorAll('.modal-backdrop, .offcanvas-backdrop');
          backdrops.forEach(b => b.remove());
          document.body.classList.remove('modal-open', 'offcanvas-open');
          document.body.style.overflow = '';
        }, 50);
      };
  
      modalElement.addEventListener('hidden.bs.modal', handleHidden);
      
      return () => {
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, [show]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendOtp(email).unwrap();
      toast.success("OTP sent to your email");
      onSuccess(email); // This will open verify popup with the email
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send OTP");
    }
  };


  



  return (
    <div className={`offcanvas offcanvas-end popup-style-1 popup-reset-pass ${show ? "show d-block" : ""}`}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Reset Your Password</span>
          <button
            className="icon-close icon-close-popup"
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="canvas-body popup-inner">
          <form onSubmit={handleSubmit} className="form-login">
            <div>
              <p className="text text-sm text-main-2">
                Forgot your password? No worries! Enter your registered email
                to receive a link and securely reset it in just a few steps.
              </p>
              <fieldset className="email mb_12">
                <input
                  type="email"
                  placeholder="Enter Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </fieldset>
            </div>
            <div className="bot">
              <div className="button-wrap">
                <button
                  className="subscribe-button tf-btn animate-btn bg-dark-2 w-100"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="tf-btn btn-out-line-dark2 w-100"
                >
                  Cancel
                </button>
              </div>
              {isError && (
                <p className="text-danger text-sm mt-2">
                  {error?.data?.message || "Failed to send OTP"}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPopup;


