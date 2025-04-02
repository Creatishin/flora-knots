import React from 'react';
import Typography from '../Typography';
import { testimonyData } from '../../../services/Testimony';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../../config/carouselResponsiveOption';

export default function Testimony() {
  const testimonyTemplate = (testimony: string) => {
    return (
      <div
        key={testimony}
        className={`m-2 aspect-9/16 bg-gray-100`}
        style={{
          background: `url(${testimony})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    );
  };

  return (
    <div className="relative isolate overflow-hidden bg-(--primary) rounded-lg py-16 sm:py-24 mb-8">
      <Typography className="mb-16 p-2 w-full text-center text-white" variant="s-title">
        Customer's Feedback
      </Typography>
      <Carousel autoPlay draggable infinite pauseOnHover swipeable responsive={responsive}>
        {testimonyData.map((testimony) => testimonyTemplate(testimony))}
      </Carousel>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
