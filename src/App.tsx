import { useState } from "react";
import Currency from "./Currency";
import ProductList from "./ProductList";
import productsArray from "./productsArray";

type ProductsInCartType = {
  [id: number]: number;
};

type ExchangeRates = {
  [key: string]: number;
};

type Props = {};
const App = (props: Props) => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({});

  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id - 1]: (prevState[id - 1] || 0) + count,
    }));
  };

  const [currency, setCurrency] = useState<string>("EUR");

  function changeCurrency(newCurrency: string) {
    setCurrency(newCurrency);
  }

  const exchangeRates: ExchangeRates = {
    USD: 1,
    EUR: 0.84,
    UAH: 39.95,
  };

  return (
    <>
      <h1>Our shop page</h1>
      <Currency changeCurrency={changeCurrency} />
      <ProductList
        addProductToCart={addProductToCart}
        currency={currency}
        exchangeRates={exchangeRates}
      />
      <p>
        total: {""}
        {Object.keys(productsInCart).reduce(
          (total, productId) =>
            total +
            productsArray[parseInt(productId)].price *
              exchangeRates[currency] *
              productsInCart[parseInt(productId)],
          0
        )}
        {currency}
      </p>
    </>
  );
};
export default App;
