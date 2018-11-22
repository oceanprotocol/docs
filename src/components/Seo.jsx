import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const query = graphql`
    query {
        site {
            siteMetadata {
                siteTitle
                siteDescription
                siteUrl
                siteIcon
                siteCompany
                social {
                    twitter
                }
            }
        }
    }
`

const MetaTags = ({ title, description, url, image, schema, siteMeta }) => (
    <Helmet
        defaultTitle={siteMeta.siteTitle}
        titleTemplate={`%s - ${siteMeta.siteTitle}`}
    >
        <html lang="en" />

        {title && <title>{title}</title>}

        <meta name="robots" content="noindex, nofollow" />

        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* Schema.org tags */}
        <script type="application/ld+json">{schema}</script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {documentSEO && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="twitter:creator"
            content={siteMeta.social.twitter ? siteMeta.social.twitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </Helmet>
)

MetaTags.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    schema: PropTypes.string,
    title: PropTypes.string,
    siteMeta: PropTypes.object
}

const SEO = ({ title, description, slug }) => (
    <StaticQuery
        query={query}
        render={data => {
            const siteMeta = data.site.siteMetadata

            return (
                <MetaTags
                    description={description}
                    // image={image}
                    url={url}
                    title={title}
                    siteMeta={siteMeta}
                />
            )
        }}
    />
)

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string
}

export default SEO
