// import global branding styles
import './src/styles/global.scss'

// import prismjs syntax highlighting styles
import 'prismjs/themes/prism-tomorrow.css'

// IntersectionObserver polyfill for gatsby-image (Safari, IE)
if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
}
