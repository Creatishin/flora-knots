import React from 'react';
import Typography from '../../common/Typography';
import { CategoryInterface } from '../../../types/categoryType';

export default function CategoryCard({ category }: Readonly<{ category: CategoryInterface }>) {
  return (
    <div className={`p-2 group relative`}>
      <a
        className="flex items-center justify-center min-w-[50px] flex-col gap-4"
        href={`/category/${category.slug}`}
      >
        <img
          src={category.image}
          alt={category.name}
          className="h-[150px] w-[150px] rounded-full shadow-md object-cover group-hover:opacity-75 border-3 border-transparent group-hover:border-3 group-hover:border-(--gray-dark)"
        />
        <Typography className={`w-full font-medium text-center text-(--primary)`} variant="caption">
          {category.name}
        </Typography>
      </a>
    </div>
  );
}
