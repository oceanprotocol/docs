import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import { filterByKindOfProperty } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

export default class Toc extends PureComponent {
    static propTypes = {
        data: PropTypes.array
    }

    subItems = (children, parentName) =>
        children.filter(filterByKindOfProperty).map(({ name }) => (
            <li key={name}>
                <a href={`#${parentName}-${slugify(name)}`}>
                    <code>{name}</code>
                </a>
            </li>
        ))

    items = this.props.data.map(({ name, children }) => {
        let subIds = []
        const parentName = name

        subIds.push(
            children.filter(filterByKindOfProperty).map(({ name }) => {
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
                    offset={-300}
                >
                    {this.subItems(children, name)}
                </Scrollspy>
            </li>
        )
    })

    render() {
        let Ids = []
        Ids.push(this.props.data.map(({ name }) => name))

        return (
            <Scrollspy
                items={Ids[0]}
                currentClassName={stylesSidebar.scrollspyActive}
                offset={-300}
            >
                {this.items}
            </Scrollspy>
        )
    }
}
