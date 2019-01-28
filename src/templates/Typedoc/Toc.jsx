import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import stylesSidebar from '../../components/Sidebar.module.scss'

const Toc = ({ data }) => {
    const subItems = (children, parentName) =>
        children.map(({ name }) => (
            <li key={name}>
                <a href={`#${parentName}-${slugify(name)}`}>
                    <code>{name}</code>
                </a>
            </li>
        ))

    const items = data.map(({ name, children }) => {
        let subIds = []
        const parentName = name

        subIds.push(
            children.map(({ name }) => {
                return `${parentName}-${slugify(name)}`
            })
        )

        return (
            <li key={name}>
                <a href={`#${slugify(name)}`}>
                    <code>{name}</code>
                </a>
                <Scrollspy
                    items={subIds[0]}
                    currentClassName={stylesSidebar.scrollspyActive}
                    offset={-200}
                >
                    {subItems(children, name)}
                </Scrollspy>
            </li>
        )
    })

    // let Ids = []
    // Ids.push(data.map(({ name }) => slugify(name)))

    return <ul>{items}</ul>
}

Toc.propTypes = {
    data: PropTypes.array
}

export default Toc
