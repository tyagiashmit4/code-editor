import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

const highlightWithPrism = (code) => {
  return Prism.highlight(code, Prism.languages.javascript, 'javascript');
};

export default highlightWithPrism;
