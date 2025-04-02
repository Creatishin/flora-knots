import React from 'react';
import Typography from '../Typography';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function SectionHeader({ title, cta }: Readonly<{ title: string; cta?: () => void }>) {
  return (
    <div className="flex mb-2 items-center justify-between gap-4">
      <Typography className={`text-(--primary) mb-2`} variant="s-subTitle">
        {title}
      </Typography>
      {cta && (
        <button
          onClick={cta}
          className="flex items-center gap-2 hover:gap-6 justify-start transition-all  text-(--primary) font-medium cursor-pointer rounded-lg px-6 py-2 bg-transparent"
        >
          <Typography className="w-full" variant="button">
            View All
          </Typography>
          <ArrowRightIcon className="size-6 shrink-0" />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
