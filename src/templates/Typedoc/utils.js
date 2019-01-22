export const cleanTypedocData = (data, useClasses) => {
    const nodes = data.children

    const cleanData = nodes
        .map(node => ({
            ...node,
            name: node.name.replace(/"/g, ''),
            child: node.children && node.children[0]
        }))
        .filter(({ name }) => (useClasses || []).includes(name))
        .sort((a, b) => useClasses.indexOf(a.name) - useClasses.indexOf(b.name))
        .map(({ child }) => child)
        .map(node => ({
            ...node,
            children: node.children.sort((a, b) => a.id - b.id)
        }))

    return cleanData
}
