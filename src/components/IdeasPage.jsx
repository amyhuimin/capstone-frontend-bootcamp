import RightNewsBar from "./RightNewsBar";
import "./cssFiles/landingPage.css";
import NewIdeaForm from "./NewIdeaForm";
import IdeasFeed from "./IdeasFeed";

export default function IdeasPage() {
  return (
    <div className="landingPage">
      <div className="postFeed">
        <NewIdeaForm />
        <IdeasFeed/>
      </div>
      <div className="newsFeed">
        <RightNewsBar />
      </div>
    </div>
  );
}
