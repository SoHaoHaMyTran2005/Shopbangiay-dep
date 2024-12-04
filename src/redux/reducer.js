const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ, tăng số lượng
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm mới vào giỏ
        return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
