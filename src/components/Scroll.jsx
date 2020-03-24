import smoothscroll from 'smoothscroll-polyfill'
import React from 'react'
import PropTypes from 'prop-types'

export default class TocScroll extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        element: PropTypes.string,
        offset: PropTypes.number,
        timeout: PropTypes.number,
        children: PropTypes.node.isRequired
    }

    componentDidMount() {
        smoothscroll.polyfill()
    }

    handleClick = (e) => {
        e.preventDefault()

        let elem = 0
        let scroll = true
        const { type, element, offset, timeout } = this.props

        if (type && element) {
            switch (type) {
                case 'class':
                    // eslint-disable-next-line prefer-destructuring
                    elem = document.getElementsByClassName(element)[0]
                    scroll = !!elem
                    break
                case 'id':
                    elem = document.getElementById(element)
                    scroll = !!elem
                    break
                default:
            }
        }

        if (scroll) {
            this.scrollTo(elem, offset, timeout)

            // update browser url
            if (typeof window !== 'undefined') {
                window.history.pushState({}, null, `#${element}`)
            }
        } else {
            console.log(`Element not found: ${element}`) // eslint-disable-line
        }
    }

    scrollTo(element, offSet = 0, timeout = null) {
        const elemPos = element
            ? element.getBoundingClientRect().top + window.pageYOffset
            : 0

        if (timeout) {
            setTimeout(() => {
                window.scroll({
                    top: elemPos + offSet,
                    left: 0,
                    behavior: 'smooth'
                })
            }, timeout)
        } else {
            window.scroll({
                top: elemPos + offSet,
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    render() {
        return (
            <a
                onClick={this.handleClick}
                href={`#${this.props.element}`}
                {...this.props}
            >
                {this.props.children}
            </a>
        )
    }
}
