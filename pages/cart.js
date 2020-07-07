import {Segment} from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummery from '../components/Cart/CartSummary';

function Cart() {
  return (
    <Segment>
      <CartItemList/>
      <CartSummery/>
    </Segment>
  )
}

export default Cart;
