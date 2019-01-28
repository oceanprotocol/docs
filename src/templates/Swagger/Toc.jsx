import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import { cleanPathKey } from './utils'

const Toc = ({ data }) => {
    const items = Object.keys(data.paths).map(key => (
        <li key={key}>
            <a href={`#${slugify(cleanPathKey(key))}`}>
                <code>{cleanPathKey(key)}</code>
            </a>
        </li>
    ))

    return <ul>{items}</ul>
}

Toc.propTypes = {
    data: PropTypes.array
}

export default Toc
