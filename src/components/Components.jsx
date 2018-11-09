import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './Components.module.scss'

const Component = ({ name, description, links }) => (
    <div className={styles.component}>
        <h1 className={styles.componentName}>{name}</h1>
        <p>{description}</p>

        <ul>
            {links.map(link => (
                <li key={link.url}>
                    <a href={link.url}>{link.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Component.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
}

const Components = () => (
    <StaticQuery
        query={graphql`
            query {
                allComponentsYaml {
                    edges {
                        node {
                            name
                            description
                            links {
                                name
                                url
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const components = data.allComponentsYaml.edges

            return (
                <div className={styles.components}>
                    <div className={styles.componentsList}>
                        <h3 className={styles.componentsTitle}>
                            Core Components
                        </h3>

                        <div className={styles.componentsWrapper}>
                            {components.map(({ node }) => (
                                <Component
                                    key={node.name}
                                    name={node.name}
                                    description={node.description}
                                    links={node.links}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.componentsList}>
                        <h3 className={styles.componentsTitle}>Libraries</h3>

                        <div className={styles.componentsWrapper}>
                            {components.map(({ node }) => (
                                <Component
                                    key={node.name}
                                    name={node.name}
                                    description={node.description}
                                    links={node.links}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }}
    />
)

export default Components
