import "./products.css";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  addProductToCart: (count: number, price: number) => void;
  currency: string;
  exchangeRates: {
    [key: string]: number;
  };
};
const ProductListItem = ({
  id,
  title,
  description,
  price,
  addProductToCart,
  currency,
  exchangeRates,
}: Props) => {
  const count = 1;

  const productPrice = (price * exchangeRates[currency]).toFixed(2);

  return (
    <div>
      <h2 className="product-title">{title}</h2>
      <h4 className="product-description">{description}</h4>
      <p className="product-price">
        {currency} {productPrice}
      </p>
      <button onClick={() => addProductToCart(id, count)}>Buy</button>
    </div>
  );
};
export default ProductListItem;
