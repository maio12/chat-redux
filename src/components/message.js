import React from 'react';
//import { emojify } from 'react-emojione';

// function strToRGB(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     hash = str.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   const c = (hash & 0x00FFFFFF)
//     .toString(16)
//     .toUpperCase();
//   return `#${"00000".substring(0, 6 - c.length)}${c}`;
// }

const Message = (props) => {
  const { author, content } = props.message;
  //const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Message;