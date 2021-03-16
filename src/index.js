const thomObject = {
    sexy: true,
    size: 185,
    weight: false
}

const newObj = {
    ...thomObject,
    color: 'idc'
}
console.log(newObj)
console.log(thomObject)