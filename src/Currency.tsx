type Props = {
  changeCurrency: (currency: string) => void;
};
const Currency = ({ changeCurrency }: Props) => {
  return (
    <>
      <button onClick={() => changeCurrency("USD")}>USD</button>
      <button onClick={() => changeCurrency("EUR")}>EUR</button>
      <button onClick={() => changeCurrency("UAH")}>UAH</button>
    </>
  );
};
export default Currency;
