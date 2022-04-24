export const amountInCart = (cart) => cart.reduce((acc, {amount}) => amount + acc, 0);

export const cartPrice = (cart) => cart.reduce((acc, {amount, price}) => (amount * price) + acc, 0);