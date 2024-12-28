import { useState } from "react";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductsData } from "../../hooks/api/useProductsData";
import { TFavourites } from "../../types/favourites";

import "./Favourites.css";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

const Favourites = () => {
  let { slug } = useParams();

  const [ids, setIds] = useLocalStorage<TFavourites>("favourites", []);

  const [brandIds, setBrandIds] = useState<number[]>([]);
  const [prices, setPrices] = useState<number[]>([]);
  const [shoesSizeIds, setShoesSizeIds] = useState<number[]>([]);

  const { data } = useProductsData({
    brandIds,
    prices,
    shoesSizeIds,
    slug: slug as string,
  });

  return (
    <Layout>
      <div className="favourites container">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Favourites;
