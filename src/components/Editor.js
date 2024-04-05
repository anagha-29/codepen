import React, { useState } from "react";
import "codemirror/lib/codemirror.css"; //1.base  css
import "codemirror/theme/material.css"; //2.theme css
import "codemirror/mode/xml/xml"; //3.imported all languages
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
//4.import the Editor
import { Controlled as ControlledEditor } from "react-codemirror2";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons'


// export default function Editor({ displayName,language })
export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
        type="button"
        className="expand-collapse-btn"
         onClick={() => setOpen((prevOpen) => !prevOpen)}>
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
