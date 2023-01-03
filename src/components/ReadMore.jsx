import React, { useState } from "react";

const ReadMore = ({ content, link }) => {
  const [readMore, setReadMore] = useState(false);
  const expansion = readMore ? " Show Less" : " ...Read More";
  const text = content;

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <span className="readMoreText">
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
    </span>
  );
};

export default ReadMore;
