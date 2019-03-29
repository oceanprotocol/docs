import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import { cleanPathKey } from './utils'
import styles from './Paths.module.scss'
import stylesDoc from '../Doc.module.scss'

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

Parameters.propTypes = {
    parameters: PropTypes.array.isRequired
}

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

Responses.propTypes = {
    responses: PropTypes.object.isRequired
}

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
        <div key={key} id={slugify(cleanPathKey(key))}>
            <h2 className={stylesDoc.pathName}>
                <code>{cleanPathKey(key)}</code>
            </h2>

            {Object.entries(value).map(([key, value]) => (
                <Method key={key} keyName={key} value={value} />
            ))}
        </div>
    ))

export default Paths
