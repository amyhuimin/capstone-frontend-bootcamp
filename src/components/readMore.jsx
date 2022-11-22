import React, { useState } from "react";
//import { postData } from "../PostSeedData";

const ReadMore = ({ content }) => {
  const [readMore, setReadMore] = useState(false);
  const expansion = readMore ? " Show Less" : "...Read More";
  const text = content;

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <p className="readMoreText">
        {readMore ? text : text.slice(0, 100)}
        {text.length < 101 ? null : (
          <span onClick={toggleReadMore}>{expansion}</span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
