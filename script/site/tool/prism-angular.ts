import * as Prism from "node-prismjs";

// https://prismjs.com/docs/Prism.languages.html#.extend
// 代码扩展
Prism.languages.angular = Prism.languages.extend('typescript', {});

Prism.languages.insertBefore('angular', 'string', {
    'template-string': {
        pattern: /template[\s]*:[\s]*`(?:\\[\s\S]|[^\\`])*`/,
        greedy : true,
        inside : {
            'html': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside : Prism.languages.html
            }
        }
    },
    'styles-string': {
        pattern: /styles[\s]*:[\s]*\[[\s]*`(?:\\[\s\S]|[^\\`])*`[\s]*\]/,
        greedy : true,
        inside : {
            'css': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside : Prism.languages.css
            }
        }
    }
});

export default Prism