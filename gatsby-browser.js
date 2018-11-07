// import global branding styles
import './src/styles/global.scss'

// IntersectionObserver polyfill for gatsby-image (Safari, IE)
if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
}
