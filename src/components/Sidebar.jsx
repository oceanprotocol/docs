import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './Sidebar.module.scss'

function groupExpanded(items, pathname) {
    var breakException = {}

    try {
        items.forEach(item => {
            if (item.link === pathname) {
                throw breakException
            }
        })
    } catch (e) {
        if (e !== breakException) {
            throw e
        } else {
            return true
        }
    }
    return false
}

const SidebarLink = ({ link, title, linkClasses }) => {
    if (link) {
        if (link.match(/^\s?http(s?)/gi)) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            )
        } else {
            return (
                <Link to={link} className={linkClasses}>
                    {title}
                </Link>
            )
        }
    } else {
        return title
    }
}

const SidebarList = ({ items, location }) => (
    <ul>
        {items.map((item, j) => (
            <li key={j}>
                <SidebarLink
                    link={item.link}
                    title={item.title}
                    linkClasses={
                        item.link === location.pathname
                            ? styles.active
                            : styles.link
                    }
                />
            </li>
        ))}
    </ul>
)

export default class Sidebar extends Component {
    static propTypes = {
        sidebar: PropTypes.string,
        location: PropTypes.object.isRequired
    }

    static defaultProps = {
        location: { pathname: `/` }
    }

    render() {
        const { sidebar, location } = this.props

        const sidebarfile = sidebar
            ? require(`../data/sidebars/${sidebar}.yml`) // eslint-disable-line
            : []

        if (!sidebarfile) {
            return null
        }

        return (
            <nav>
                {sidebarfile.map((group, i) => (
                    <div key={i}>
                        {groupExpanded(group.items, location.pathname) ? (
                            <>
                                <h4>
                                    {group.items[0].link ? (
                                        <SidebarLink
                                            link={group.items[0].link}
                                            title={group.group}
                                            linkClasses="midgrey link"
                                        />
                                    ) : (
                                        group.group
                                    )}
                                </h4>
                                <SidebarList
                                    key={i}
                                    items={group.items}
                                    location={location}
                                />
                            </>
                        ) : (
                            <h4>
                                {group.items[0].link ? (
                                    <SidebarLink
                                        link={group.items[0].link}
                                        title={group.group}
                                    />
                                ) : (
                                    group.group
                                )}
                            </h4>
                        )}
                    </div>
                ))}
            </nav>
        )
    }
}

SidebarLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkClasses: PropTypes.string
}

SidebarList.propTypes = {
    items: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
}
