import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Favourites.css";
import { useFavouritesData } from "../../hooks/api/useFavouritesData";
import { useFavourites } from "../../hooks/logic/useFavourites";
import { useFavProducts } from "../../hooks/api/useFavProducts";

const Favourites = () => {
  const { handleFav, favProductsIds } = useFavourites();

  const { data: pageData } = useFavouritesData();

  const { data } = useFavProducts(favProductsIds);

  if (!pageData) {
    return null;
  }

  return (
    <Layout>
      <div className="container">
        <h2 className="title favourites__title">{pageData.attributes.title}</h2>
        {data.length ? (
          data.map((product) => (
            <div className="favourites">
              <ProductCard
                key={product.id}
                product={product}
                showTrash
                onTrashClick={() => handleFav(product.id)}
              />
            </div>
          ))
        ) : (
          <p className="favourites__empty-text">
            {pageData.attributes.emptyFavText}
          </p>
        )}
      </div>
    </Layout>
  );
};

export default Favourites;
