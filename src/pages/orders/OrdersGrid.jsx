import { OrdersHeader } from './OrdersHeader.jsx';
import { OrdersDetailsGrid } from './OrdersDetailsGrid.jsx';


export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrdersHeader order={order} />

            <OrdersDetailsGrid order={order} />

          </div>
        );
      })}
    </div>
  );
}