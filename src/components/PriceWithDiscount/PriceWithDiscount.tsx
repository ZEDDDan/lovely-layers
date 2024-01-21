import { FC } from "react";
import "./PriceWithDiscount.css";
import Price, { IPrice, Size } from "../Price/Price";

interface IPriceWithDiscount extends IPrice {
  discountPrice: number | string;
}

export const PriceWithDiscount: FC<IPriceWithDiscount> = ({
  discountPrice,
  price,
  currency,
  color = "#fff",
  size = Size.large,
}) => {
  return (
    <div className="price-with-discount">
      <Price
        price={price}
        size={Size.medium}
        className="price-with-discount__discount-price"
        color={color}
      />
      <Price
        className="price-with-discount__price"
        currency={currency}
        price={discountPrice}
        size={size}
        color={color}
      />
    </div>
  );
};
