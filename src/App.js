import React, { useState } from 'react';
import CodeEditor from '../src/components/codeeditor/CodeEditor'
import highlightWithPrism from './utils/highlightWithPrism';
import './App.css';

const App = () => {
  const [code, setCode] = useState('<textarea value={code} onChange={(event) => { setCode(event.target.value) }} />\n<SyntaxHighlighter code={code} />');

  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <CodeEditor
        value={code}
        onValueChange={setCode}
        highlight={highlightWithPrism}
        tabSize={4}
        padding={10}
        textareaId="code-editor"
        textareaClassName="code-textarea"
        preClassName="code-pre"
      />
    </div>
  );
};

export default App;
