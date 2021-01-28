import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import shortid from 'shortid'
import Scroll from '../../components/Scroll'
import styles from './Entities.module.scss'

const Type = ({ type }) => {
  let isArray = false
  if (type.type === 'array') {
    isArray = true
    type = type.elementType
  }
  const { name, type: typeOfType, typeArguments, id } = type
  const isInternal = typeOfType === 'reference' && id

  return (
    <div className={styles.type}>
      <span>
        {isInternal && (
          <Scroll type="id" element={`${name && slugify(name)}`} offset={-20}>
            {type.name}
          </Scroll>
        )}
        {!isInternal && <span>{type.name}</span>}
      </span>

      {typeArguments && (
        <span>
          <span className={styles.typeSymbol}>&lt;</span>
          <span>
            {typeArguments.map((typeArgument, i) => (
              <span key={shortid.generate()}>
                {i !== 0 && <span className={styles.typeSymbol}>, </span>}
                <Type type={typeArgument} />
              </span>
            ))}
          </span>
          <span className={styles.typeSymbol}>&gt;</span>
        </span>
      )}

      {isArray && <span className={styles.typeSymbol}>[]</span>}
    </div>
  )
}

Type.propTypes = {
  type: PropTypes.object.isRequired
}

const PropertyDetails = ({ property }) => {
  const { type } = property
  return (
    <div>
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

          {parameters.map((parameter) => {
            const { name, type, flags, comment } = parameter
            const { isOptional } = flags
            const description = comment && (comment.text || comment.shortText)

            return (
              <div className={styles.parameters} key={shortid.generate()}>
                <h5>
                  <code>{name}</code>
                  {isOptional && (
                    <span
                      className={styles.parameterOptional}
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
  const { name, kindString, flags, signatures, sources, decorators } = property
  const { isPublic, isStatic } = flags
  const signature = signatures && signatures[0]
  const comment = (signature && signature.comment) || property.comment
  const { fileName, line } = sources[0]
  const deprecation = (decorators || []).filter(
    ({ name }) => name === 'deprecated'
  )[0] // Assuming deprecated annotation
  let deprecatedUse, deprecatedSlug
  if (deprecation) {
    deprecatedUse = deprecation.arguments.alternative.replace(/('|")/g, '')
    deprecatedSlug = deprecatedUse && slugify(deprecatedUse.replace('.', '-'))
  }

  const sourceLink = `${sourceUrl}${fileName}#L${line}`

  return (
    <div
      className={styles.property}
      data-private={!isPublic}
      data-deprecated={!!deprecation}
      id={`${parentAnchor}-${name && slugify(name)}`}
    >
      <h3 className={styles.propertyName}>{name}</h3>

      <div className={styles.propertyType} data-type={kindString.toLowerCase()}>
        {kindString}
      </div>

      {isStatic && <div className={styles.propertyModifier}>static</div>}
      {!isPublic && (
        <div className={styles.propertyModifier} data-secondary>
          private
        </div>
      )}

      {comment && !deprecation && (
        <div className={styles.propertyDescription}>
          {comment.text || comment.shortText}
        </div>
      )}

      {deprecation && (
        <div className={styles.deprecation}>
          <strong>Deprecated</strong>: use{' '}
          <code>
            <Scroll type="id" element={`${deprecatedSlug}`} offset={-20}>
              {deprecatedUse}
            </Scroll>
          </code>{' '}
          instead
        </div>
      )}

      {!deprecation &&
        (() => {
          switch (kindString) {
            case 'Method':
              return <MethodDetails property={property} />
            case 'Property':
              return <PropertyDetails property={property} />
          }
        })()}

      {fileName && (
        <a
          className={styles.sourceLink}
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${fileName}#L${line}`}
        </a>
      )}
    </div>
  )
}

PropertyWrapper.propTypes = {
  property: PropTypes.object,
  sourceUrl: PropTypes.string,
  parentAnchor: PropTypes.string
}

const Entities = ({ entities, sourceUrl }) =>
  entities.map(({ name, comment, children }) => (
    <div key={name} id={name && slugify(name)}>
      <h2 className={styles.entityName}>
        <code>{name}</code>
      </h2>

      {comment && (
        <div className={styles.entityDescription}>
          {comment.text || comment.shortText}
        </div>
      )}

      {children &&
        children.map((property) => (
          <PropertyWrapper
            key={shortid.generate()}
            property={property}
            sourceUrl={sourceUrl}
            parentAnchor={name && slugify(name)}
          />
        ))}
    </div>
  ))

Entities.propTypes = {
  entities: PropTypes.array.isRequired,
  sourceUrl: PropTypes.string
}

export default Entities
