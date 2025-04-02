import React from 'react';
import Typography from '../../components/common/Typography';
import { productList } from '../../services/Products';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import CrochetImage from '../../assets/Crochet-pana.svg';
import AnimateSection from '../../components/common/elements/AnimateSection';

function About() {
  const navigate = useNavigate();

  return (
    <>
      <AnimateSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="flex flex-col gap-8">
            <Typography className="font-bold text-(--primary)" variant="s-title">
              Handcrafted Elegance, Woven with Love
            </Typography>
            <Typography variant="body-1">
              Crafted with passion, woven with love. At FloraKnots, we bring your thoughts to life
              through exquisite crochet creations—handmade flowers, plush teddies, stylish shirts,
              and more. Each piece is a blend of artistry and craftsmanship, designed to add warmth
              and charm to your home and wardrobe.
            </Typography>
            <div>
              <Button onClick={() => navigate('/category')} color="primary-gold" size="small">
                View Products
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img className="max-w-[450px] w-[80%]" alt="Crochet Pana" src={CrochetImage} />
          </div>
        </div>
      </AnimateSection>
      <AnimateSection>
        <div className="grid my-16 w-full grid-cols-3 lg:grid-cols-6 gap-8">
          {productList.slice(10, 16).map((product) => (
            <img
              key={product.id}
              alt={product.name}
              src={product.images[0]}
              className="aspect-square shadow-sm hover:shadow-lg cursor-pointer w-full rounded-md bg-gray-200 object-cover"
            />
          ))}
        </div>
      </AnimateSection>
      <div className="flex max-w-6xl mx-auto flex-col gap-8">
        <AnimateSection>
          <Typography className="font-bold text-center text-(--primary)" variant="s-title">
            FloraKnots – Where Creativity Meets Craftsmanship
          </Typography>
        </AnimateSection>
        <AnimateSection>
          <Typography className="text-(--primary)" variant="body-1">
            At FloraKnots, we believe that every stitch tells a story. Rooted in passion and woven
            with love, our handcrafted creations bring warmth, charm, and individuality to your home
            and wardrobe.
          </Typography>
        </AnimateSection>
        <AnimateSection>
          <Typography className="text-(--primary)" variant="body-1">
            Our journey began with a simple love for crochet, transforming threads into timeless
            treasures. From delicate floral arrangements and cuddly plush teddies to intricately
            designed shirts and accessories, each piece is a labor of devotion and artistry.
          </Typography>
        </AnimateSection>
        <AnimateSection>
          <Typography className="text-(--primary)" variant="body-1">
            Every creation is meticulously handcrafted, ensuring that no two pieces are alike—just
            like the people who cherish them. We take pride in using the finest materials, infusing
            tradition with modern aesthetics to create something truly special.
          </Typography>
        </AnimateSection>
        <AnimateSection>
          <Typography className="text-(--primary)" variant="body-1">
            FloraKnots is more than just a brand; it's an expression of creativity, a celebration of
            craftsmanship, and a commitment to bringing beauty into everyday life. Whether you’re
            looking for a heartfelt gift or a unique addition to your space, our handmade wonders
            are designed to inspire and delight.
          </Typography>
        </AnimateSection>
        <AnimateSection>
          <Typography className="font-bold text-(--primary)" variant="body-1">
            Join us in embracing the magic of handmade artistry—where every thread weaves a tale of
            love, creativity, and elegance.
          </Typography>
        </AnimateSection>
      </div>
      <AnimateSection>
        <button className="flex mx-auto my-8 items-center gap-2 hover:gap-6 justify-start transition-all  text-(--primary) border-2 border-(--primary) hover:border-(--primary-dark) cursor-pointer rounded-lg px-6 py-2 bg-transparent">
          <Typography className="w-full" variant="button">
            Follow us: @FloraKnots
          </Typography>
        </button>
      </AnimateSection>
    </>
  );
}

export default About;
