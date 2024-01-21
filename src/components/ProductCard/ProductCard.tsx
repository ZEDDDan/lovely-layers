import { FC } from "react";
import { Product } from "../../types/strapiRes";

import "./ProductCard.css";
import Price from "../Price/Price";

interface IProductCard {
  product: Product;
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  return (
    <div className="product-card">
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
          price={
            product.attributes.has_discount
              ? (product.attributes.discount_price as string)
              : product.attributes.price
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
