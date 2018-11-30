import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import slugify from 'slugify'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import DocHeader from '../components/DocHeader'
import DocFooter from '../components/DocFooter'
import SEO from '../components/Seo'
import stylesDoc from './Doc.module.scss'
import styles from './ApiSwagger.module.scss'

const cleanKey = key => {
    let keyCleaned = key

    if (key.includes('aquarius')) {
        keyCleaned = key.replace(/\/api\/v1\/aquarius/gi, '')
    }

    if (key.includes('brizo')) {
        keyCleaned = key.replace(/\/api\/v1\/brizo/gi, '')
    }

    return keyCleaned
}

const toc = api => {
    const items = Object.keys(api.paths).map(
        key => `<li key=${key}>
            <a href="#${slugify(cleanKey(key))}"><code>${cleanKey(
            key
        )}</code></a>
        </li>`
    )

    return `<ul>${items}</ul>`
}

const SwaggerMeta = ({ contact, license }) => (
    <ul className={styles.swaggerMeta}>
        {contact && (
            <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
        )}
        {license && (
            <li>
                <a href={license.url}>{license.name}</a>
            </li>
        )}
    </ul>
)

SwaggerMeta.propTypes = {
    contact: PropTypes.object,
    license: PropTypes.object
}

const ParameterExample = ({ properties }) => (
    //
    // HEADS UP!
    //
    // Constructing the example request body here based on the defined properties
    // where `key` is the name of the property, and `properties[key].example` is
    // the value for it.
    //
    // Making prism.js pick up on the strings only output didn't work out so well
    // so the spans and classes this plugin would add are added manually here. Since we
    // include the prism css file globally this is picked up by that.
    //
    // But this can only work if all keys and values are manually constructed here, which
    // is almost impossible to do for deep nested objects or arrays as example value. Running
    // that code through `JSON.stringify` won't syntax highlight that part of the code.
    //
    <pre className="language-json">
        <code className="language-json">
            {'{'}
            {properties &&
                Object.keys(properties).map(key => (
                    <div key={key}>
                        <span className="token property">{`  "${key}"`}</span>
                        <span className="token operator">{`: `}</span>
                        {properties[key].type === 'string' && (
                            <span className="token string">{`"${
                                properties[key].example
                            }"`}</span>
                        )}
                        {(properties[key].type === 'integer' ||
                            properties[key].type === 'number') && (
                            <span className="token number">
                                {`${properties[key].example}`}
                            </span>
                        )}
                        {(properties[key].type === 'array' ||
                            properties[key].type === 'object') &&
                            JSON.stringify(properties[key].example, null, 2)}
                        ,
                    </div>
                ))}
            {'}'}
        </code>
    </pre>
)

ParameterExample.propTypes = {
    properties: PropTypes.object
}

const Parameters = ({ parameters }) => (
    <>
        <h4 className={styles.subHeading}>Parameters</h4>

        {parameters.map(parameter => {
            const { name, type, required, description, schema } = parameter

            return (
                <div className={styles.parameters} key={parameter.name}>
                    <h5>
                        <code>{name}</code>
                        {required && (
                            <span
                                className={styles.parameterRequired}
                                title="required parameter"
                            >
                                *
                            </span>
                        )}
                        <span className={styles.parameterType}>{type}</span>
                    </h5>

                    <p>{description}</p>

                    {schema && (
                        <ParameterExample properties={schema.properties} />
                    )}
                </div>
            )
        })}
    </>
)

const Responses = ({ responses }) => (
    <>
        <h4 className={styles.subHeading}>Responses</h4>
        {Object.keys(responses).map(key => (
            <div key={key} className={styles.response}>
                <code>{key}</code> {responses[key].description}
            </div>
        ))}
    </>
)

const Method = ({ keyName, value }) => {
    const { summary, description, parameters, responses } = value

    return (
        <div className={styles.method}>
            <h3 className={styles.pathMethod} data-type={keyName}>
                {keyName}
            </h3>

            <p>{summary}</p>

            {description && <p>{description}</p>}

            {/*
            {consumes &&
                consumes.map((item, i) => (
                    <div key={i}>
                        <code>{item}</code>
                    </div>
                ))}
            */}

            {parameters && parameters.length && (
                <Parameters parameters={parameters} />
            )}
            {responses && Object.keys(responses).length !== 0 && (
                <Responses responses={responses} />
            )}
        </div>
    )
}

Method.propTypes = {
    keyName: PropTypes.string,
    value: PropTypes.object
}

const Paths = ({ paths }) =>
    Object.entries(paths).map(([key, value]) => (
        <div key={key}>
            <h2 id={slugify(cleanKey(key))} className={styles.pathName}>
                <code>{cleanKey(key)}</code>
            </h2>

            {Object.entries(value).map(([key, value]) => (
                <Method key={key} keyName={key} value={value} />
            ))}
        </div>
    ))

const BasePath = ({ host, basePath }) => (
    <div className={styles.basePath}>
        <h2>Base Path</h2>
        <code>
            <span>{host}</span>
            {basePath}
        </code>
    </div>
)

BasePath.propTypes = {
    host: PropTypes.string,
    basePath: PropTypes.string
}

export default class ApiSwaggerTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    render() {
        const { location, data, pageContext } = this.props
        const sections = data.allSectionsYaml.edges
        const { api } = pageContext
        const { host, basePath, info, paths } = api
        const { title, description, version, license, contact } = info

        // output section title as defined in sections.yml
        const sectionTitle = sections.map(({ node }) => {
            // compare section against section title from sections.yml
            if (node.title.toLowerCase().includes('references')) {
                return node.title
            }
        })

        return (
            <>
                <Helmet>
                    <body className={'references'} />
                </Helmet>

                <SEO
                    title={title}
                    description={description}
                    slug={pageContext.slug}
                    article
                />

                <Layout location={location}>
                    <HeaderSection title={sectionTitle} />

                    <Content>
                        <main className={stylesDoc.wrapper}>
                            <aside className={stylesDoc.sidebar}>
                                <Sidebar
                                    location={location}
                                    sidebar={'references'}
                                    collapsed
                                    toc
                                    tableOfContents={toc(api)
                                        .split(',')
                                        .join('')}
                                />
                            </aside>
                            <article className={stylesDoc.main}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                    prepend={
                                        <span className={styles.version}>
                                            {version}
                                        </span>
                                    }
                                />

                                {(contact || license) && (
                                    <SwaggerMeta
                                        contact={contact}
                                        license={license}
                                    />
                                )}

                                {(host || basePath) && (
                                    <BasePath host={host} basePath={basePath} />
                                )}

                                <Paths paths={paths} />

                                <DocFooter
                                    url={`https://github.com/oceanprotocol/${title.toLowerCase()}`}
                                    externalName={`${title} Swagger spec`}
                                />
                            </article>
                        </main>
                    </Content>
                </Layout>
            </>
        )
    }
}

export const apiSwaggerQuery = graphql`
    query {
        allSectionsYaml {
            edges {
                node {
                    title
                    description
                    link
                }
            }
        }
    }
`
