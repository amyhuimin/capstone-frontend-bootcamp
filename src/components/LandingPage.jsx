import LeftNavBar from "./LeftNavBar";
import PostCard from "./PostCard";
import IdeaCard from "./IdeaCard";
import RightNewsBar from "./RightNewsBar";
import "./cssFiles/landingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="LeftnavBar">
        <LeftNavBar />
      </div>
      <div className="postFeed">
        <PostCard />
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
