import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import stylesSidebar from '../../components/Sidebar.module.scss'

const Toc = ({ data }) => {
    const subItems = (children, parentName) =>
        children.map(({ name }) => {
            return (
                <li key={name}>
                    <a href={`#${parentName}-${slugify(name)}`}>
                        <code>{name}</code>
                    </a>
                </li>
            )
        })

    const items = data.map(({ name, children }) => {
        // let subIds = []

        // subIds.push(
        //     data.map(({ name, children }) => {
        //         const parentName = name
        //         let childId

        //         children.map(({ name }) => {
        //             childId = `${parentName}-${slugify(name)}`
        //         })

        //         return childId
        //     })
        // )

        // console.log(subIds)

        return (
            <li key={name}>
                <a href={`#${slugify(name)}`}>
                    <code>{name}</code>
                </a>
                <ul>{subItems(children, name)}</ul>
            </li>
        )
    })

    let Ids = []
    Ids.push(data.map(({ name }) => slugify(name)))

    return (
        <Scrollspy
            items={Ids[0]}
            currentClassName={stylesSidebar.scrollspyActive}
        >
            {items}
        </Scrollspy>
    )
}

Toc.propTypes = {
    data: PropTypes.array
}

export default Toc
