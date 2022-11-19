import React, {useState} from 'react';


const readMore = () =>  {
const [readMore, setReadMore] = useState(false);
const [expanded, setExpanded] = useState(false);

const expansion = readMore ? "Show Less" : "...Read More";

const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleReadMore = (event) => {
    event.preventDefault();
    setReadMore(!readMore);
  }

  return (

  )
};


export default readMore;