import RightNewsBar from "./RightNewsBar";
import "./cssFiles/landingPage.css";

export default function IdeasPage() {
  return (
    <div className="landingPage">
      <div className="postFeed">{/* ideasfeed */}</div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
