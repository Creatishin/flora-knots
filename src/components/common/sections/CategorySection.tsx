import React from 'react';
import { CategoryInterface } from '../../../types/categoryType';
import CategoryCard from '../../layout/Cards/CategoryCard';
import SectionHeader from '../elements/SectionHeader';

import Carousel from 'react-multi-carousel';
import { responsive } from '../../../config/carouselResponsiveOption';

function CategorySection({
  title,
  categories
}: Readonly<{ title?: string; categories: CategoryInterface[] }>) {
  return (
    <div className={`pb-7 mt-3 overflow-hidden bg-transparent`}>
      {title && <SectionHeader title={title} />}
      <Carousel autoPlay draggable infinite pauseOnHover swipeable responsive={responsive}>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default CategorySection;
