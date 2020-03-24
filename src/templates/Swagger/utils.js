export const cleanPathKey = (key) => {
    let keyCleaned = key

    if (key.includes('aquarius')) {
        keyCleaned = key.replace(/\/api\/v1\/aquarius/gi, '')
    }

    if (key.includes('brizo')) {
        keyCleaned = key.replace(/\/api\/v1\/brizo/gi, '')
    }

    return keyCleaned
}
