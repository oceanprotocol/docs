import slugify from 'slugify'

const Toc = typedoc => {
    const subItems = (children, parentName) =>
        children
            .map(
                ({ name }) =>
                    `<li>
                        <a href="#${parentName}-${slugify(name)}">
                            <code>${name}</code>
                        </a>
                    </li>`
            )
            .join('')

    const items = typedoc
        .map(
            ({ name, children }) =>
                `<li>
                    <a href="#${slugify(name)}">
                        <code>${name}</code>
                    </a>
                    <ul>
                        ${subItems(children, name)}
                    </ul>
                </li>`
        )
        .join('')

    return `<ul>${items}</ul>`
}

export default Toc
