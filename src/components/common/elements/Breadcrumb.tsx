import React from 'react';
import Typography from '../Typography';

function Breadcrumb({
  current,
  list
}: Readonly<{ current: string; list: { url: string; title: string }[] }>) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mx-auto flex items-center">
        {list.map((li) => (
          <li key={li.title}>
            <div className="flex items-center">
              <a href={li.url} className="mr-2 text-sm font-medium text-gray-900">
                {li.title}
              </a>
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <Typography className="font-medium" variant="caption">
            {current}
          </Typography>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
