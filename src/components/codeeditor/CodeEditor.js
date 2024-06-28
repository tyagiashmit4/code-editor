import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; 
import './CodeEditor.css';

const CodeEditor = ({ code, setCode, padding = 10, style = {} }) => {
  return (
    <div className="code-editor-container" style={{ padding }}>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        padding={padding}
        style={{
          ...style,
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
        textareaClassName="code-editor-textarea"
        preClassName="code-editor-pre"
      />
    </div>
  );
};

export default CodeEditor;
