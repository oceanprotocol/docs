import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import Scroll from '../../components/Scroll'
import { filterByKindOfProperty } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

export default class Toc extends PureComponent {
    static propTypes = {
        data: PropTypes.array
    }

    subItems = (children, parentName) =>
        children.filter(filterByKindOfProperty).map(({ name, decorators }) => {
            const deprecation = (decorators || []).filter(
                ({ name }) => name === 'deprecated'
            )[0] // Assuming deprecated annotation

            return (
                <li key={name}>
                    <Scroll
                        type="id"
                        element={`${parentName}-${slugify(name)}`}
                        data-deprecated={!!deprecation}
                        offset={-20}
                    >
                        <code>{name}</code>
                    </Scroll>
                </li>
            )
        })

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
                <Scroll type="id" element={`${slugify(name)}`} offset={-20}>
                    <code>{name}</code>
                </Scroll>
                <Scrollspy
                    items={subIds[0]}
                    currentClassName={stylesSidebar.scrollspyActive}
                    offset={-30}
                >
                    {this.subItems(children, name)}
                </Scrollspy>
            </li>
        )
    })

    render() {
        return <ul>{this.items}</ul>
    }
}
