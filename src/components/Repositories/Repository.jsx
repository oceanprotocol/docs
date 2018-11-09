import React from 'react'
import PropTypes from 'prop-types'
import styles from './Repository.module.scss'

const Repository = ({ name, description, links }) => (
    <div className={styles.repository}>
        <h1 className={styles.repositoryName}>{name}</h1>
        <p>{description}</p>

        <ul className={styles.repositoryLinks}>
            {links.map(link => (
                <li key={link.url}>
                    <a href={link.url}>{link.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
}

export default Repository
