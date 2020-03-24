import React from 'react'
import PropTypes from 'prop-types'
import styles from './Links.module.scss'

export default function Links({ links, url }) {
    return (
        <ul className={styles.links}>
            <li>
                <a href={url}>GitHub</a>
            </li>
            {links &&
                links.map((link) => (
                    <li key={link.url}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
        </ul>
    )
}

Links.propTypes = {
    links: PropTypes.array,
    url: PropTypes.string.isRequired
}
