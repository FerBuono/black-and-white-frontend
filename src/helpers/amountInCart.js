export const amountInCart = (cart) => cart.reduce((acc, {amount}) => amount + acc, 0);