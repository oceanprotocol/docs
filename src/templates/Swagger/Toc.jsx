import slugify from 'slugify'
import { cleanPathKey } from './utils'

const Toc = api => {
    const items = Object.keys(api.paths)
        .map(
            key =>
                `<li key=${key}>
                    <a href="#${slugify(cleanPathKey(key))}">
                        <code>${cleanPathKey(key)}</code>
                    </a>
                </li>`
        )
        .join('')

    return `<ul>${items}</ul>`
}

export default Toc
