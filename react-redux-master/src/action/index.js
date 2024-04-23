const increment = (amount) => {
    return {
        type : 'INCREMENT',
        payload : amount
    }
}
export default increment;