import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ReactComponent as External } from '../images/external.svg'
import styles from './Sidebar.module.scss'

const SidebarLink = ({ link, title, linkClasses }) => {
  if (link) {
    if (link.match(/^\s?http(s?)/gi)) {
      return (
        <a
          href={link}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title} <External className={styles.external} />
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

SidebarLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkClasses: PropTypes.string
}

const SidebarList = ({ items, location, toc, tocComponent }) => (
  <div className={styles.list}>
    {toc ? (
      <div className={styles.toc}>{tocComponent}</div>
    ) : (
      <ul>
        {items.map((item, j) => (
          <li key={j}>
            <SidebarLink
              link={item.link}
              title={item.title}
              linkClasses={
                item.link === location.pathname ? styles.active : styles.link
              }
            />
          </li>
        ))}
      </ul>
    )}
  </div>
)

SidebarList.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  toc: PropTypes.bool,
  tocComponent: PropTypes.object
}

const SidebarGroupTitle = ({ group }) => (
  <h4 className={styles.groupTitle}>
    {group.items[0].link ? (
      <SidebarLink
        link={group.items[0].link}
        title={group.group}
        linkClasses={styles.groupTitleLink}
      />
    ) : (
      group.group
    )}
  </h4>
)

SidebarGroupTitle.propTypes = {
  group: PropTypes.object.isRequired
}

const SidebarGroup = ({ i, group, location, ...props }) => (
  <>
    <SidebarGroupTitle group={group} />
    <SidebarList key={i} items={group.items} location={location} {...props} />
  </>
)

SidebarGroup.propTypes = {
  i: PropTypes.number,
  group: PropTypes.object,
  location: PropTypes.object
}

export default class Sidebar extends Component {
  static propTypes = {
    sidebar: PropTypes.string,
    location: PropTypes.object.isRequired,
    collapsed: PropTypes.bool,
    toc: PropTypes.bool,
    tocComponent: PropTypes.element
  }

  static defaultProps = { location: { pathname: '/' } }

  render() {
    const { sidebar, location, collapsed, toc, tocComponent } = this.props

    if (sidebar) {
      var sidebarfile = require(`../../data/sidebars/${sidebar}.yml`) // eslint-disable-line
    }

    if (!sidebarfile) {
      return null
    }

    return (
      <nav className={styles.sidebar}>
        {sidebarfile.map((group, i) => (
          <div key={i}>
            {collapsed ? (
              group.items.some((item) => item.link === location.pathname) ? (
                <SidebarGroup
                  i={i}
                  group={group}
                  location={location}
                  toc={toc}
                  tocComponent={tocComponent}
                />
              ) : (
                <SidebarGroupTitle group={group} />
              )
            ) : (
              <SidebarGroup i={i} group={group} location={location} />
            )}
          </div>
        ))}
      </nav>
    )
  }
}
