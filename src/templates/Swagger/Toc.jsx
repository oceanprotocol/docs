import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import { cleanPathKey } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

const Toc = ({ data }) => {
    let Ids = []

    const items = Object.keys(data.paths).map(key => {
        Ids.push(slugify(cleanPathKey(key)))

        return (
            <li key={key}>
                <a href={`#${slugify(cleanPathKey(key))}`}>
                    <code>{cleanPathKey(key)}</code>
                </a>
            </li>
        )
    })

    return (
        <Scrollspy
            items={Ids}
            currentClassName={stylesSidebar.scrollspyActive}
            offset={-100}
        >
            {items}
        </Scrollspy>
    )
}

Toc.propTypes = {
    data: PropTypes.array
}

export default Toc
