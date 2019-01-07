import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Repository from './Repository'
import styles from './QuickRun.module.scss'

const QuickRun = ({ name }) => (
    <aside className={styles.quickrun}>
        <header className={styles.header}>
            <h1 className={styles.tldr}>TL;DR</h1>
            <strong>
                Wanna quickly get an Ocean network with all{' '}
                <Link to="/concepts/components/">core components</Link> running
                on your machine?
            </strong>
        </header>

        <div className={styles.docker}>
            <pre className="language-bash">
                <code className="language-bash">
                    <span className="token function">git</span> clone
                    https://github.com/oceanprotocol/barge.git
                    <br />
                    <span className="token function">cd</span> barge/
                    <br />
                    <br />
                    ./start_ocean.sh --latest
                </code>
            </pre>

            <Repository name={name} />
        </div>
    </aside>
)

QuickRun.propTypes = {
    name: PropTypes.string.isRequired
}

export default QuickRun
