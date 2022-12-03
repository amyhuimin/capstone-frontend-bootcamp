import LeftNavBar from "./LeftNavBar";
import NewsFeed from "./NewsFeed";
import RightNewsBar from "./RightNewsBar";

import "./cssFiles/landingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="LeftnavBar">
        <LeftNavBar />
      </div>
      <div className="postFeed">
        <NewsFeed />
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
