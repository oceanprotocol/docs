import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './Components.module.scss'

const Component = ({ name, description, links }) => (
    <div className={styles.component}>
        <h1 className={styles.componentName}>{name}</h1>
        <p>{description}</p>

        <ul className={styles.componentLinks}>
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

const ComponentsList = ({ components }) => (
    <div className={styles.componentsLists}>
        {components.map(({ node }) => (
            <div key={node.id} className={styles.componentsList}>
                <h3 className={styles.componentsTitle}>{node.group}</h3>

                <div className={styles.componentsWrapper}>
                    {node.items.map(item => (
                        <Component
                            key={item.name}
                            name={item.name}
                            description={item.description}
                            links={item.links}
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
)

ComponentsList.propTypes = {
    components: PropTypes.array.isRequired
}

const QuickRun = () => (
    <div className={styles.quickrun}>
        <strong>
            Wanna quickly get an Ocean network running on your machine? Check
            out{' '}
            <a href="https://github.com/oceanprotocol/docker-images">
                🐳 docker-images
            </a>
            .
        </strong>
    </div>
)

const Components = () => (
    <StaticQuery
        query={graphql`
            query {
                allComponentsYaml {
                    edges {
                        node {
                            id
                            group
                            items {
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
            }
        `}
        render={data => {
            const components = data.allComponentsYaml.edges

            return (
                <div className={styles.components}>
                    <QuickRun />
                    <ComponentsList components={components} />
                </div>
            )
        }}
    />
)

export default Components
