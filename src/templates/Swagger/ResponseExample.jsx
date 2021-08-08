import React from "react"
import PropTypes from "prop-types"
import ReactJson from 'react-json-view'


const ResponseExample = ({ examples }) => {

    if (!examples) return null
    const jsonExample = examples['application/json']
    const plainText = examples['text/plain']

    if (typeof document !== `undefined`) {
        if (jsonExample) {
            return (
                <div>
                    <b>Example</b>
                    <br />
                    <code>
                        {typeof jsonExample === 'boolean' ? (
                            <code>{JSON.stringify(jsonExample)}</code>
                        ) : (
                            <ReactJson
                                name={null}
                                src={jsonExample}
                                collapsed
                                enableClipboard={false}
                            />
                        )}
                    </code>
                </div>
            )
        } else if (plainText) {
            return (
                <div>
                    <b>Example</b>
                    <code>{plainText}</code>
                </div>
            )
        }
    }
    return null
}

ResponseExample.propTypes = {
    examples: PropTypes.object
}

export default ResponseExample