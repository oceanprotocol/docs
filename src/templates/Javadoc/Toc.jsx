import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import Scroll from '../../components/Scroll'
import { cleanPaths } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

export default class Toc extends PureComponent {
    static propTypes = {
        data: PropTypes.object.isRequired
    }

    state = {
        subIds: []
    }

    componentWillMount() {
        this.getSubIds()
    }

    getSubIds = () =>
        Object.keys(this.props.data).map(path => {
            const cleanedPath = cleanPaths(path)
            const slug = slugify(cleanedPath, {
                remove: /[*+~.()'"/!:@]/g
            })

            this.setState(prevState => ({
                subIds: [...prevState.subIds, slug]
            }))
        })

    items = Object.keys(this.props.data).map(path => {
        const cleanedPath = cleanPaths(path)
        const slug = slugify(cleanedPath, {
            remove: /[*+~.()'"/!:@]/g
        })
        let entity = cleanedPath.split('/')
        entity = entity.pop()

        return (
            <li key={path}>
                <Scroll type="id" element={`${slug}`} offset={-20}>
                    <code>{entity}</code>
                </Scroll>
            </li>
        )
    })

    render() {
        return (
            <Scrollspy
                items={this.state.subIds}
                currentClassName={stylesSidebar.scrollspyActive}
                offset={-30}
            >
                {this.items}
            </Scrollspy>
        )
    }
}
