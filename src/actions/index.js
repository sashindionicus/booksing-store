
const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS-LOADED',
        payload: newBooks
    }
}

export {
    booksLoaded,
}