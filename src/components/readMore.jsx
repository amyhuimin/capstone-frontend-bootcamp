import React, { useState } from "react";
import { postData } from "../PostSeedData";

const ReadMore = () => {
  const [readMore, setReadMore] = useState(false);
  const expansion = readMore ? "Show Less" : "...Read More";

  const handleReadMore = (event) => {
    event.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <div>
      {readMore ? postData.text : postData.text.slice(0, 150)}
      {/* <h2>{postData.text}</h2> */}
      <span onClick={handleReadMore}>{expansion}</span>;
    </div>
  );
};

export default ReadMore;
