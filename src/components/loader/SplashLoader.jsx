import { useEffect, useState } from "react";
import loaderGif from "../../assets/images/lg.gif";
import Homepage from "../../pages/Home/Homepage";

const SplashLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-loader">
        <img src={loaderGif} alt="Loading..." />
      </div>
    );
  }

  return <Homepage />; // Apna HomePage component
};
