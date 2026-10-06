function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
