import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import './CheckoutPage.css';

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      const response2 = await axios.get('/api/payment-summary');

      setDeliveryOptions(response.data);
      setPaymentSummary(response2.data)
    }

    fetchCheckoutData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
