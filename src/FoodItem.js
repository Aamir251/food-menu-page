export default function FoodItem({ item }) {
  const { title, price, img, desc } = item;
  return (
    <div className="food-item br-rd">
      <section className="info">
        <img className="br-rd" src={img} alt="bacon" />
        <h3>{title}</h3>
        <h5>{price}</h5>
      </section>
      <section className="description">
        <p>{desc}</p>
      </section>
    </div>
  );
}
