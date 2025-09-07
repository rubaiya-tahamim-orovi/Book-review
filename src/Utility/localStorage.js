const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];

}
const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist');
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks);
    }
    return [];

}

const saveRead = id => {
    const storedRead = getStoredReadBooks();
    const exists = storedRead.find(bookId => bookId === id);
    if(!exists){
        storedRead.push(id);
        localStorage.setItem('read', JSON.stringify(storedRead))
    }
}
const saveWishlist = id => {
    const storedWishlist = getStoredWishlistBooks();
    const exists = storedWishlist.find(bookId => bookId === id);
    if(!exists){
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
    }
}

export {saveRead, saveWishlist}