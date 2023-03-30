import ProductListItem from "./ProductListItem";
import productsArray from "./productsArray";
import "./products.css";

type Props = {
  addProductToCart: (count: number, price: number) => void;
  currency: string;
  exchangeRates: {
    [key: string]: number;
  };
};
const ProductList = ({ addProductToCart, currency, exchangeRates }: Props) => {
  return (
    <div className="products">
      {productsArray.map(({ id, title, description, price }) => (
        <div key={id}>
          <ProductListItem
            id={id}
            title={title}
            description={description}
            price={price}
            addProductToCart={addProductToCart}
            currency={currency}
            exchangeRates={exchangeRates}
          />
        </div>
      ))}
    </div>
  );
};
export default ProductList;
