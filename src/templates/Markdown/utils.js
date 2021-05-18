export const generatedNestedObject = (object, keyPath, node) => {
  const lastKeyIndex = keyPath.length - 1
  for (var i = 0; i < lastKeyIndex; ++i) {
    var key = keyPath[i]
    if (!(key in object)) {
      object[key] = {}
    }
    object = object[key]
  }
  if (!object[keyPath[lastKeyIndex]]) {
    object[keyPath[lastKeyIndex]] = {
      id: node.id,
      label: node.frontmatter.title
    }
  }
}
