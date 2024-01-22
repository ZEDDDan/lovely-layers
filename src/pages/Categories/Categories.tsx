import Layout from "../../components/Layout/Layout";
import { useProductsData } from "../../hooks/api/useProductsData";

import "./Categories.css";

const Categories = () => {
  const {} = useProductsData({
    brandIds: [1],
    prices: [0, 1000],
    shoesSizeIds: [1],
    slug: "new",
  });

  return (
    <Layout
      className="cat-layout"
      sidebarComponent={<div style={{ border: "2px solid red" }}></div>}
    >
      <div className="cat">Categories</div>
    </Layout>
  );
};

export default Categories;
