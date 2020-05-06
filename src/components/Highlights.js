import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Highlights = (props) => {
  return (
    <>
      <SyntaxHighlighter language={'javascript'} style={cb}>
        {props.value}
      </SyntaxHighlighter>
    </>
  );
};

export default Highlights;
