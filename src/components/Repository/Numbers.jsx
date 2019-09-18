import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Forks } from '../../images/forks.svg'
import styles from './Numbers.module.scss'

export default class Numbers extends PureComponent {
    static propTypes = {
        stargazers: PropTypes.object.isRequired,
        forkCount: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }

    state = {
        forks: this.props.forkCount,
        stars: this.props.stargazers.totalCount
    }

    url = 'https://oceanprotocol-github.now.sh'

    signal = axios.CancelToken.source()

    componentDidMount() {
        this.fetchNumbers()
    }

    componentWillUnmount() {
        this.signal.cancel()
    }

    fetchNumbers = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: this.url,
                timeout: 10000, // 10 sec.
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const repo = response.data
                .map(item => {
                    if (item.name === this.props.name) {
                        return item
                    }
                })
                .filter(n => n)

            const { forks, stars } = repo

            // update state only when numbers have changed
            if (forks && forks !== this.props.forkCount) {
                this.setState({ forks })
            }

            if (stars && stars !== this.props.stargazers.totalCount) {
                this.setState({ stars })
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                return null
            } else {
                console.log(error.message) // eslint-disable-line no-console
            }
        }
    }

    render() {
        const { url } = this.props
        const { forks, stars } = this.state

        return (
            <aside className={styles.repositorynumbers}>
                <a href={`${url}/stargazers`} title="Show Stargazers">
                    <Star /> <span>{stars}</span>
                </a>
                {forks > 0 && (
                    <a href={`${url}/network`} title="Show Forks">
                        <Forks /> <span>{forks}</span>
                    </a>
                )}
            </aside>
        )
    }
}
