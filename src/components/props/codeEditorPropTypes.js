import PropTypes from 'prop-types';

export const codeEditorPropTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  highlight: PropTypes.func.isRequired,
  tabSize: PropTypes.number,
  insertSpaces: PropTypes.bool,
  ignoreTabKey: PropTypes.bool,
  padding: PropTypes.number,
  textareaId: PropTypes.string,
  textareaClassName: PropTypes.string,
  preClassName: PropTypes.string,
};

    
