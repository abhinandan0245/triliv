import SocialIcons from './SocialIcons';
import Marquee from './Marquee';

const TopBar = () => (
  <div className="tf-topbar bg-light-blue topbar-bg">
    <div className="container">
      <div className="topbar-wraper">
        <div className="d-none d-xl-block flex-shrink-0">
          <SocialIcons />
        </div>
        <Marquee />
      </div>
    </div>
  </div>
);

export default TopBar;