import React from 'react'
import PropTypes from 'prop-types'
import Repository from '../Repository'
import styles from './RepositoryList.module.scss'

const RepositoryList = ({ repositories }) => (
    <div className={styles.repositoryCategory}>
        {repositories.map(({ node }) => (
            <div key={node.id}>
                <h3 className={styles.repositoryCategoryTitle}>{node.group}</h3>

                <div className={styles.repositoryList}>
                    {node.items.map((item) => (
                        <Repository
                            key={item.name}
                            name={item.name}
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
