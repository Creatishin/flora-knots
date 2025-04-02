import React from 'react';
import { ProductInterface } from '../../../types/productType';
import ProductCard from '../../layout/Cards/ProductCard';
import SectionHeader from '../elements/SectionHeader';
import { useNavigate } from 'react-router-dom';

function ProductSection({
  title,
  products,
  to
}: Readonly<{ title: string; products: ProductInterface[]; to: string }>) {
  const navigate = useNavigate();
  return (
    <div className={`py-7 my-3`}>
      <SectionHeader title={title} cta={() => navigate(to)} />
      <div className="grid grid-cols-2  md:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
