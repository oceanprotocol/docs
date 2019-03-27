import React from 'react'
import slugify from 'slugify'
import { cleanPaths } from './utils'
import stylesDoc from '../Doc.module.scss'
import styles from './Entities.module.scss'

const filterPropertyItems = (item, name) => {
    let title
    switch (name) {
        case '@param':
            title = 'Parameters'
            break
        case '@return':
            title = 'Returns'
            break
        case '@throws':
            title = 'Throws'
            break
    }

    return (
        <>
            {item.filter(item => item.name === name).length > 0 && (
                <h4 className={styles.subHeading}>{title}</h4>
            )}
            {item
                .filter(item => item.name === name)
                .map((item, index) => {
                    if (item.name === '@param') {
                        const splitText = item.text.split(' ')
                        return (
                            <div key={index} className={styles.parameter}>
                                <code className={styles.param}>
                                    {splitText[0]}
                                </code>
                                <p>{item.text.replace(splitText[0], '')}</p>
                            </div>
                        )
                    }

                    return <div key={index}>{item.text}</div>
                })}
        </>
    )
}

const Entities = ({ javadoc }) => {
    return Object.entries(javadoc).map(([key, value]) => (
        <div
            key={key}
            id={slugify(cleanPaths(key), {
                remove: /[*+~.()'"/!:@]/g
            })}
        >
            <h2 className={stylesDoc.pathName}>
                <code>{cleanPaths(key)}</code>
            </h2>

            <p>{value[0][0].text}</p>

            {value.map((item, index) => {
                if (index === 0) return

                return (
                    <div key={index} className={styles.property}>
                        <h3 className={styles.propertyName}>Function Name</h3>

                        <p>{item[0].text}</p>

                        {filterPropertyItems(item, '@param')}
                        {filterPropertyItems(item, '@return')}
                        {filterPropertyItems(item, '@throws')}
                    </div>
                )
            })}
        </div>
    ))
}

export default Entities
