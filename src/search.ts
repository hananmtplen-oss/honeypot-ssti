const DOMPurify = require('dompurify');
export function render(q) { return DOMPurify.sanitize(q); }
