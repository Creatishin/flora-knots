import React from 'react';
import Typography from '../Typography';
import { productList } from '../../../services/Products';

function FollowPage() {
  return (
    <div className={`rounded-lg bg-gray-100 px-8 sm:px-16 py-16 sm:py-24 mb-8`}>
      <div className="flex gap-2 flex-col items-center justify-center">
        <Typography className="text-(--primary)" variant="caption">
          Follow us on Instagram
        </Typography>
        <a href="#">
          <Typography className="text-(--primary)" variant="s-title">
            @FloraKnots
          </Typography>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {productList.slice(22, 28).map((product) => (
          <img
            key={product.id}
            alt={product.name}
            src={product.images[0]}
            className="aspect-square shadow-sm hover:shadow-lg cursor-pointer w-full rounded-md bg-gray-200 object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default FollowPage;
