import React, { useEffect, useState } from 'react';
import HeroProduct from '../../components/common/sections/HeroProduct';
import { useParams } from 'react-router-dom';
import { ProductInterface } from '../../types/productType';
import { CategoryInterface } from '../../types/categoryType';
import { productList } from '../../services/Products';
import categoryList from '../../services/Category';
import NotFound from '../AdditionalPages/NotFound';
import ProductSection from '../../components/common/sections/ProductSection';

function Product() {
  const { productSlug } = useParams();

  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [category, setCategory] = useState<CategoryInterface | null>(null);

  useEffect(() => {
    if (productSlug) {
      setProduct(productList.filter((product) => product.slug == productSlug)[0]);
    }
  }, [productSlug]);

  useEffect(() => {
    if (product) {
      setCategory(categoryList.filter((category) => category.id === product.category_id)[0]);
    }
  }, [product]);

  return (
    <div className="bg-white">
      {product && category ? (
        <>
          <HeroProduct product={product} category={category} />
          <ProductSection
            to={`/category/${category.slug}`}
            products={productList
              .filter((product) => product.category_id === category.id)
              .slice(0, 6)}
            title="Related Products"
          />
        </>
      ) : (
        <NotFound
          ctaTitle="Go to products"
          href="/category"
          message="Product not found"
          description="Sorry, we couldn’t find the product you’re looking for."
        />
      )}
    </div>
  );
}

export default Product;
