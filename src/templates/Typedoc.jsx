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
import SEO from '../components/Seo'
import stylesDoc from './Doc.module.scss'
import styles from './Typedoc.module.scss'

const showKindOfProperty = ['Method', 'Property']

const toc = typedoc => {
    const items = typedoc
        .map(
            ({ name }) => `
            <li>
                <a href="#${slugify(name)}"><code>
                    ${name}
                </code></a>
            </li>
        `
        )
        .join('')

    return `<ul>${items}</ul>`
}

const Type = ({ type }) => {
    let isArray = false
    if (type.type === 'array') {
        isArray = true
        type = type.elementType
    }
    const { name, type: typeOfType, typeArguments, id } = type
    const isInternal = typeOfType === 'reference' && id
    return (
        <span className={styles.type}>
            <span>
                {isInternal && <a href={`#${slugify(name)}`}>{type.name}</a>}
                {!isInternal && <span>{type.name}</span>}
            </span>

            {typeArguments && (
                <span>
                    <span className={styles.typeSymbol}>&lt;</span>
                    <span>
                        {typeArguments.map((typeArgument, i) => (
                            <span key={i}>
                                {i !== 0 && (
                                    <span className={styles.typeSymbol}>
                                        ,{' '}
                                    </span>
                                )}
                                <Type type={typeArgument} key={i} />
                            </span>
                        ))}
                    </span>
                    <span className={styles.typeSymbol}>&gt;</span>
                </span>
            )}

            {isArray && <span className={styles.typeSymbol}>[]</span>}
        </span>
    )
}

Type.propTypes = {
    type: PropTypes.object.isRequired
}

const PropertyDetails = ({ property }) => {
    const { type } = property
    return (
        <div className={styles.detailsLine}>
            Type:
            <Type type={type} />
        </div>
    )
}

PropertyDetails.propTypes = {
    property: PropTypes.object
}

const MethodDetails = ({ property }) => {
    const signature = property.signatures[0]
    const { parameters, type } = signature
    return (
        <>
            {parameters && parameters.length && (
                <div>
                    <h4 className={styles.subHeading}>Parameters</h4>

                    {parameters.map(parameter => {
                        const { name, type, flags, comment } = parameter
                        const { isOptional } = flags
                        const description =
                            comment && (comment.text || comment.shortText)
                        return (
                            <div
                                className={styles.parameters}
                                key={parameter.name}
                            >
                                <h5>
                                    <code>{name}</code>
                                    {isOptional && (
                                        <span
                                            className={styles.parameterOptinal}
                                            title="optional parameter"
                                        >
                                            ?
                                        </span>
                                    )}
                                </h5>
                                <Type type={type} />

                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            )}

            {type && (
                <div>
                    <h4 className={styles.subHeading}>Returns</h4>

                    <Type type={type} />
                </div>
            )}
        </>
    )
}

MethodDetails.propTypes = {
    property: PropTypes.object
}

const PropertyWrapper = ({ property, sourceUrl, parentAnchor }) => {
    const {
        name,
        kindString,
        flags,
        signatures,
        sources,
        decorators
    } = property
    const { isPublic, isStatic } = flags
    const signature = signatures && signatures[0]
    const comment = (signature && signature.comment) || property.comment
    const { fileName, line } = sources[0]
    const deprecation = (decorators || []).filter(
        ({ name }) => name === 'deprecated'
    )[0] // Assuming deprecated annotation
    let deprecatedUse
    if (deprecation) {
        deprecatedUse = deprecation.arguments.alternative.replace(/'/g, '')
    }
    const sourceLink = `${sourceUrl}${fileName}#L${line}`
    return (
        <div
            id={`${parentAnchor}/${slugify(name)}`}
            className={styles.property}
            data-private={!isPublic}
            data-deprecated={!!deprecation}
        >
            <div
                className={styles.propertyType}
                data-type={kindString.toLowerCase()}
            >
                {kindString}
            </div>

            <h3 className={styles.propertyName}>{name}</h3>

            {isStatic && <div className={styles.propertyModifier}>static</div>}
            {!isPublic && (
                <div className={styles.propertyModifier} data-secondary>
                    private
                </div>
            )}

            {fileName && (
                <a
                    className={styles.sourceLink}
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    source
                </a>
            )}

            {!!deprecation && (
                <div className={styles.deprecation}>
                    <strong>Deprecated:</strong> use{' '}
                    <a href={`#${parentAnchor}/${slugify(deprecatedUse)}`}>
                        {deprecatedUse}
                    </a>{' '}
                    instead
                </div>
            )}

            {comment && (
                <div className={styles.propertyDescription}>
                    {comment.text || comment.shortText}
                </div>
            )}

            {(() => {
                switch (kindString) {
                    case 'Method':
                        return <MethodDetails property={property} />
                    case 'Property':
                        return <PropertyDetails property={property} />
                }
            })()}
        </div>
    )
}

PropertyWrapper.propTypes = {
    property: PropTypes.object,
    sourceUrl: PropTypes.string,
    parentAnchor: PropTypes.string
}

const Entity = ({ entities, sourceUrl }) =>
    entities.map(({ name, comment, children }) => (
        <div key={name}>
            <h2 id={slugify(name)} className={styles.entityName}>
                <code>{name}</code>
            </h2>

            {comment && (
                <div className={styles.entityDescription}>
                    {comment.text || comment.shortText}
                </div>
            )}

            {children
                .filter(({ kindString }) =>
                    showKindOfProperty.includes(kindString)
                )
                .map(property => (
                    <PropertyWrapper
                        key={`${name}/${property.id}`}
                        property={property}
                        sourceUrl={sourceUrl}
                        parentAnchor={slugify(name)}
                    />
                ))}
        </div>
    ))

Entity.propTypes = {
    entities: PropTypes.array.isRequired,
    sourceUrl: PropTypes.string
}

export default class TypedocTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    componentWillMount() {
        const { typedoc, classes } = this.props.pageContext
        this.setState({
            typedocData: this.cleanTypedocData(typedoc, classes)
        })
    }

    cleanTypedocData(data, useClasses) {
        const nodes = data.children
        const cleanData = nodes
            .map(node => ({
                ...node,
                name: node.name.replace(/"/g, ''),
                child: node.children && node.children[0]
            }))
            .filter(({ name }) => (useClasses || []).includes(name))
            .sort(
                (a, b) =>
                    useClasses.indexOf(a.name) - useClasses.indexOf(b.name)
            )
            .map(({ child }) => child)
            .map(node => ({
                ...node,
                children: node.children.sort((a, b) => a.id - b.id)
            }))

        return cleanData
    }

    render() {
        const { location, data, pageContext } = this.props
        const { typedocData } = this.state
        const sections = data.allSectionsYaml.edges
        const { typedoc } = pageContext
        const { info } = typedoc
        const { title, description, version, sourceUrl } = info

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
                                    tableOfContents={toc(typedocData)}
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

                                <Entity
                                    entities={typedocData}
                                    sourceUrl={sourceUrl}
                                />
                            </article>
                        </main>
                    </Content>
                </Layout>
            </>
        )
    }
}

export const TypedocQuery = graphql`
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
