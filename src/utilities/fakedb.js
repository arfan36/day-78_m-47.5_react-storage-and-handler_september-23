// use local Storage to manage cart data
const addToDb = id => {
    // let shoppingCart = {};
    let shoppingCart;

    // get the shoppingCart    
    const storedCart = localStorage.getItem('shopping-cart');
    console.log(storedCart);        //!
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        console.log(storedCart, shoppingCart);      //!
    }
    else {
        shoppingCart = {};
        console.log(storedCart, shoppingCart);      //!
    }

    // add quantity
    const quantity = shoppingCart[id]; // shoppingCart(object) = {id(property): quantity(value)}
    console.log(quantity, shoppingCart);      //!
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity; // shoppingCart(object) = {id(property): newQuantity(value)}

        // const newQuantity = +quantity + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1; // shoppingCart(object) = {id(property): quantity(value)}

        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    console.log(quantity, storedCart, shoppingCart);      //!
};

export { addToDb };