import React, { useRef, useCallback } from 'react';
import './CodeEditor.css';
import { codeEditorPropTypes, codeEditorDefaultProps } from './CodeEditorPropTypes';

const CodeEditor = ({
  value,
  onValueChange,
  highlight: highlightCallback,
  tabSize,
  insertSpaces,
  ignoreTabKey,
  padding,
  textareaId,
  textareaClassName,
  preClassName,
  ...textareaProps
}) => {
  const textareaRef = useRef(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab' && !ignoreTabKey) {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const tabCharacter = insertSpaces ? ' '.repeat(tabSize) : '\t';
      const newValue = value.slice(0, selectionStart) + tabCharacter + value.slice(selectionEnd);
      const newCursorPosition = selectionStart + tabCharacter.length;

      onValueChange(newValue);
      setTimeout(() => {
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = newCursorPosition;
      }, 0);
    }
  }, [value, tabSize, insertSpaces, ignoreTabKey, onValueChange]);

  const handleChange = (e) => {
    onValueChange(e.target.value);
  };

  return (
    <div style={{ position: 'relative', padding }}>
      <pre className={preClassName} aria-hidden="true" style={{ margin: 0, position: 'absolute', top: padding, left: padding, right: padding, bottom: padding, overflow: 'auto', pointerEvents: 'none' }}>
        <code dangerouslySetInnerHTML={{ __html: highlightCallback(value) }} />
      </pre>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        id={textareaId}
        className={textareaClassName}
        style={{ width: '100%', height: '100%', padding, border: 'none', outline: 'none', resize: 'none', background: 'transparent', color: 'transparent', caretColor: 'black', fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.5' }}
        {...textareaProps}
      />
    </div>
  );
};

CodeEditor.propTypes = codeEditorPropTypes;
CodeEditor.defaultProps = codeEditorDefaultProps;

export default CodeEditor;
