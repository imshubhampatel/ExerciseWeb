import "./styles.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { Link, Route, Switch, useHistory } from "react-router-dom";
function Forbidden() {
  return <h1>Nothing like that existss</h1>;
}

export default function App() {
  let navigate = useHistory();
  return (
    <div className="App">
      <nav>
        <Link to="/">Products</Link> | <Link to="/cart">Cart</Link> |{" "}
        <Link to="/wishlist">Wishlist</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/*">
          <Forbidden />
        </Route>
      </Switch>
    </div>
  );
}
