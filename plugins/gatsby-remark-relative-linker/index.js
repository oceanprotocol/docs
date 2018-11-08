//
// https://stackoverflow.com/a/48864225/733677
//

// const visit = require('unist-util-visit')

// module.exports = ({ markdownAST }) => {
//     visit(markdownAST, 'link', node => {
//         if (node.url && node.url.endsWith('.md') && node.url.startsWith('./')) {
//             node.url = node.url.replace(
//                 /(.*)\.(\w{2}).md(#.*)?$/gi,
//                 (match, base, hash) => {
//                     return `/`
//                 }
//             )
//         }

//         if (
//             node.url &&
//             node.url.endsWith('.md') &&
//             node.url.startsWith('../')
//         ) {
//             node.url = node.url.replace(
//                 /(.*)\.(\w{2}).md(#.*)?$/gi,
//                 (match, base, hash) => {
//                     return `/`
//                 }
//             )
//         }
//     })

//     return markdownAST
// }
