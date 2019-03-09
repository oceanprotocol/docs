import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import Scroll from '../../components/Scroll'
import { cleanPathKey } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

const Toc = ({ data }) => {
    let Ids = []

    const items = Object.keys(data.paths).map(key => {
        Ids.push(slugify(cleanPathKey(key)))

        return (
            <li key={key}>
                <Scroll
                    type="id"
                    element={`${slugify(cleanPathKey(key))}`}
                    offset={-20}
                >
                    <code>{cleanPathKey(key)}</code>
                </Scroll>
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
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Toc
