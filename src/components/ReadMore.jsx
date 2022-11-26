import React, { useState } from "react";
//import { postData } from "../PostSeedData";

const ReadMore = ({ content, link }) => {
  const [readMore, setReadMore] = useState(true);
  const expansion = readMore ? " Show Less" : "    Read More";
  const text = content;

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <p className="readMoreText">
        {link == undefined || link === null ? (
          readMore ? (
            text
          ) : (
            text.slice(0, 100)
          )
        ) : (
          <a
            style={{ color: "inherit" }}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {readMore ? text : text.slice(0, 100)}
          </a>
        )}
        {text.length < 101 ? null : (
          <span
            onClick={toggleReadMore}
            style={{ color: "orange", textDecoration: "underline" }}
          >
            {expansion}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
