
const totalPrice = (array) => {
    let total = array.map(element => element.price).reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
    return total
}

export { totalPrice }