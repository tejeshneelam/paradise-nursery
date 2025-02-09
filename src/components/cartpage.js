import React from 'react';

function CartPage() {
  // Use state or context for actual cart items
  const cartItems = [];
  const totalCost = 0;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
          <p>Total: ${totalCost}</p>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
