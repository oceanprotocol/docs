export const cleanTypedocData = (data, useClasses) => {
    const nodes = data.children

    const cleanData = nodes
        .map(node => {
            const child =
                node.children &&
                node.children.filter(
                    ({ kindString }) => kindString === 'Class'
                )[0]

            return {
                ...node,
                name: node.name.replace(/"/g, '').replace('src/', ''),
                child
            }
        })
        .filter(({ name }) => (useClasses || []).includes(name))
        .sort((a, b) => useClasses.indexOf(a.name) - useClasses.indexOf(b.name))
        .map(({ child }) => child)
        .map(node => ({
            ...node,
            children:
                node &&
                node.children &&
                node.children.sort((a, b) => a.id - b.id)
        }))

    return cleanData
}

// more kinds: 'Property', 'Enumeration'
const showKindOfProperty = {
    Method: { onlyPublic: true },
    Property: { onlyPublic: true }
}

export const filterByKindOfProperty = ({ kindString, flags }) => {
    const config = showKindOfProperty[kindString]
    if (!config) return

    // filter out static methods by default
    if (flags.isStatic) return

    if (config.onlyPublic && !flags.isPublic) return

    return true
}
