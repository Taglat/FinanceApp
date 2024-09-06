export const WithKzBalance = (Component) => {
  return (props) => {
    const { data } = props;
    const kzPrice = Math.round(data.price * 450 * 100) / 100; // Округляем до сотых
    const newData = { ...data, price: kzPrice };
    return <Component {...props} data={newData} />;
  };
};