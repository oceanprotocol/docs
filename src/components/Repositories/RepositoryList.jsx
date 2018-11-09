import React from 'react'
import PropTypes from 'prop-types'
import Repository from './Repository'
import styles from './RepositoryList.module.scss'

const RepositoryList = ({ repositories }) => (
    <div className={styles.repositoryLists}>
        {repositories.map(({ node }) => (
            <div key={node.id} className={styles.repositoryList}>
                <h3 className={styles.repositoryListTitle}>{node.group}</h3>

                <div className={styles.repositoryWrapper}>
                    {node.items.map(item => (
                        <Repository
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

RepositoryList.propTypes = {
    repositories: PropTypes.array.isRequired
}

export default RepositoryList
