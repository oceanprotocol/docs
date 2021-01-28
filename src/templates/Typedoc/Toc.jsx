import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import shortid from 'shortid'
import Scrollspy from 'react-scrollspy'
import Scroll from '../../components/Scroll'
import stylesSidebar from '../../components/Sidebar.module.scss'

export default class Toc extends PureComponent {
  static propTypes = {
    data: PropTypes.array
  }

  subItems = (children, parentName) =>
    children &&
    children.map(({ name, decorators }) => {
      const deprecation = (decorators || []).filter(
        ({ name }) => name === 'deprecated'
      )[0] // Assuming deprecated annotation

      return (
        <li key={name}>
          <Scroll
            type="id"
            element={`${parentName}-${name && slugify(name)}`}
            data-deprecated={!!deprecation}
            offset={-20}
          >
            <code>{name}</code>
          </Scroll>
        </li>
      )
    })

  items = this.props.data.map(({ name, children }) => {
    const subIds = []
    const parentName = name

    subIds.push(
      children &&
        children.map(({ name }) => {
          return `${parentName}-${name && slugify(name)}`
        })
    )

    return (
      <li key={shortid.generate()}>
        <Scroll type="id" element={`${name && slugify(name)}`} offset={-20}>
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
