import { FC } from "react";
import { Product } from "../../types/strapiRes";

import "./ProductCard.css";
import Price from "../Price/Price";
import { Link } from "react-router-dom";

interface IProductCard {
  product: Product;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <Link
      className="product-card"
      to={`/categories/${product.attributes.category.data.attributes.slug}/${product.id}`}
    >
      <img
        className="product-card__img"
        src={
          process.env.REACT_APP_API_URL +
          product.attributes.images.data[0].attributes.url
        }
        alt={product.attributes.images.data[0].attributes.alternativeText}
      />
      <div className="product-card__hero">
        <p>{product.attributes.name}</p>
        <Price
          currency={product.attributes.currency.data.attributes.name}
          price={product.attributes.price}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
