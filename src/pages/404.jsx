//
// Thanks @kremalicious
// https://github.com/kremalicious/portfolio/blob/master/src/pages/404.jsx
//
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import giphyAPI from 'giphy-js-sdk-core'
import Layout from '../components/Layout'
import Content from '../components/Content'
import styles from './404.module.scss'

// Famous last words:
// "It's just the 404 page so why not expose the dev API key"
const giphyClient = giphyAPI('LfXRwufRyt6PK414G2kKJBv3L8NdnxyR')
const tag = 'ocean'

export default class NotFoundPage extends Component {
    state = { gif: '' }

    static propTypes = {
        location: PropTypes.object
    }

    componentDidMount() {
        this.getRandomGif()
    }

    async getRandomGif() {
        try {
            let response = await giphyClient.random('gifs', { tag })
            const gif = response.data.images.original.mp4
            this.setState({ gif })
        } catch (error) {
            return error
        }
    }

    handleClick = e => {
        e.preventDefault()
        this.getRandomGif()
    }

    render() {
        return (
            <Layout location={this.props.location}>
                <Content>
                    <article className={styles.content}>
                        <h1>Page not found.</h1>
                        <p>
                            You just hit a route that doesn&#39;t exist... the
                            sadness. Check your url,{' '}
                            <Link to={'/'}>go back to the homepage</Link>, or
                            check out some <em>{tag}</em> gifs, entirely your
                            choice.
                        </p>

                        <video
                            className="gif"
                            src={this.state.gif}
                            autoPlay
                            loop
                        />

                        <div>
                            <button
                                onClick={this.handleClick}
                            >{`Get another ${tag} gif`}</button>
                        </div>
                    </article>
                </Content>
            </Layout>
        )
    }
}
