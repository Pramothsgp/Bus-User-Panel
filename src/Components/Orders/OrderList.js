import React, { useEffect, useState } from 'react'; import './OrderList.css'; // You can define your styles in this CSS file

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from local storage on component mount
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
      <div className='order-list-container'>
          <div className='order-list-container-layer-2'>
            <h2>My Order</h2>
            {orders.length === 0 ? (
                <p className='no-order'>No orders found.</p>
            ) : (
                <ul>
                {orders.map((order, index) => (
                    <li key={index} className='order-item'>
                    <p><strong>Order ID:</strong> {order.orderid}</p>
                    <p><strong>Bus ID:</strong> {order.bus}</p>

                    <p><strong>Pickup Location:</strong> {order.pickupLocation.stop_name}</p>
                    <p><strong>Destination:</strong> {order.destination.stop_name}</p>
                    <p><strong>Price:</strong> {order.price}</p>
                    </li>
                ))}
                </ul>
            )}
          </div>
          </div>
  );
};

export default OrderList;
