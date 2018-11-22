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

const createSchemaOrg = (title, description, image, url, siteMeta, article) => {
    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: siteMeta.siteUrl,
            name: title
        }
    ]

    if (article) {
        schemaOrgJSONLD.push(
            {
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        item: { '@id': url, name: title, image }
                    }
                ]
            },
            {
                // https://schema.org/TechArticle
                '@context': 'http://schema.org',
                '@type': 'TechArticle',
                name: title,
                headline: title,
                description,
                url,
                image: { '@type': 'URL', url: image }
            }
        )
    }

    return schemaOrgJSONLD
}

const MetaTags = ({
    title,
    description,
    url,
    image,
    schema,
    siteMeta,
    article
}) => (
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
        {article && <meta property="og:type" content="article" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteMeta.social.twitter || ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </Helmet>
)

MetaTags.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    schema: PropTypes.string,
    siteMeta: PropTypes.object,
    article: PropTypes.bool
}

const SEO = ({ title, description, slug, article }) => (
    <StaticQuery
        query={query}
        render={data => {
            const siteMeta = data.site.siteMetadata
            const logo = '/icons/icon-512x512.png'

            title = title || siteMeta.siteTitle
            description = description || siteMeta.siteDescription
            let url = siteMeta.siteUrl || siteMeta.siteUrl + slug
            let image = siteMeta.siteUrl + logo

            let schema = createSchemaOrg(
                title,
                description,
                image,
                url,
                siteMeta,
                article
            )
            schema = JSON.stringify(schema)

            return (
                <MetaTags
                    title={title}
                    description={description}
                    url={url}
                    image={image}
                    schema={schema}
                    siteMeta={siteMeta}
                    article={article}
                />
            )
        }}
    />
)

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    article: PropTypes.bool
}

export default SEO
