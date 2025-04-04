import React from 'react';
import StatsSection from '../../components/common/sections/StatsSection';
import ProductSection from '../../components/common/sections/ProductSection';
import { productList } from '../../services/Products';
import CategorySection from '../../components/common/sections/CategorySection';
import Testimony from '../../components/common/sections/Testimony';
import FollowPage from '../../components/common/sections/FollowPage';
import AnimateSection from '../../components/common/elements/AnimateSection';
import categoryList from '../../services/Category';

function Home() {
  console.log(categoryList);
  return (
    <>
      <AnimateSection>
        <CategorySection categories={categoryList} />
      </AnimateSection>

      <AnimateSection>
        <ProductSection
          title="Featured Products"
          to="/subcategory/featured"
          products={productList.filter((product) => product.featured).slice(0, 4)}
        />
      </AnimateSection>

      <AnimateSection>
        <ProductSection
          title="Best Selling"
          to="/subcategory/bestseller"
          products={productList.filter((product) => product.bestseller).slice(0, 4)}
        />
      </AnimateSection>

      <AnimateSection>
        <StatsSection />
      </AnimateSection>

      <AnimateSection>
        <ProductSection
          title="New Arrivals"
          to="/subcategory/new_arrival"
          products={productList.filter((product) => product.new_arrival).slice(0, 4)}
        />
      </AnimateSection>

      <AnimateSection>
        <FollowPage />
      </AnimateSection>

      <AnimateSection>
        <Testimony />
      </AnimateSection>
    </>
  );
}

export default Home;
