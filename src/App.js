import React, { useState } from 'react';
import CodeEditor from './components/codeeditor/CodeEditor';
import './components/codeeditor/CodeEditor.css';

const App = () => {
  const [code, setCode] = useState(`import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction App() {\n  return (\n    <h1>Hello world</h1>\n  );\n}\n\nReactDOM.render(<App />, document.getElementById('root'));\n`);

  return (
    <div className="editor-wrapper">
      <div className="editor-box">
        <CodeEditor
          code={code}
          setCode={setCode}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
          }}
        />
      </div>
    </div>
  );
};

export default App;
