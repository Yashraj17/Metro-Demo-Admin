import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  // buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
  readonly: false,
};

const TextField = ({ initialValue, getValue }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={initialValue}
      config={config}
      tabIndex={1}
      //   onBlur={(newContent) => getValue(newContent)}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default TextField;
