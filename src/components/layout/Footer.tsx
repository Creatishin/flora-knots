import React from 'react';
import Typography from '../common/Typography';
import { categoryList } from '../../services/Category';

function Footer() {
  const footerContent: { [key: string]: { title: string; link: string }[] } = {
    Pages: [
      { title: 'Home', link: '/' },
      { title: 'Contact', link: '/contact' },
      { title: 'Sign in', link: '/sign-in' }
    ],
    Category: categoryList.map((category) => ({
      title: category.name,
      link: `/category/${category.slug}`
    })),
    Information: [
      { title: 'Shipping Policy', link: 'shipping-policy' },
      { title: 'Refund & Replace', link: 'refund-replace' },
      { title: 'Privacy Policy', link: 'privacy-policy' }
    ]
  };
  return (
    <div className="mt-4  px-2 md:px-6 py-6 bg-gray-100 rounded-lg flex flex-col gap-4 w-full">
      <div className="flex gap-4 items-center justify-between flex-col sm:flex-row">
        <Typography variant="s-subTitle" className="text-(--primary)">
          FloraKnots
        </Typography>
        <button className="flex items-center gap-2 hover:gap-6 justify-start transition-all  text-(--primary) border-2 border-(--primary) hover:border-(--primary-dark) cursor-pointer rounded-lg px-6 py-2 bg-transparent">
          <Typography className="w-full" variant="button">
            Follow us: @FloraKnots
          </Typography>
        </button>
      </div>
      <Typography variant="caption">
        Manifested by thought, expressed by heart. Handcrafted home decor and fashion accessories.
      </Typography>
      <div className="mt-4 grid gap-8 grid-cols-2 md:grid-cols-3 w-full">
        {Object.keys(footerContent).map((footer) => (
          <div key={footer} className="flex flex-col gap-2">
            <Typography variant="caption" className="font-medium">
              {footer}
            </Typography>
            {footerContent[footer].slice(0, 3).map((footerTitle) => (
              <a href={footerTitle.link} key={footerTitle.title}>
                <Typography variant="caption">{footerTitle.title}</Typography>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-(--primary) my-4" />
      <Typography className="text-gray-500" variant="caption">
        © 2024 Flora Knots, Inc. All rights reserved.
      </Typography>
    </div>
  );
}

export default Footer;
