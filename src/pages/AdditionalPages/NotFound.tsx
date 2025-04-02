import React from 'react';
import Typography from '../../components/common/Typography';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
export default function NotFound({
  message,
  description,
  ctaTitle,
  href,
  children,
  showIndication = true,
  icon
}: Readonly<{
  message: string;
  description: string;
  ctaTitle?: string;
  href?: string;
  children?: React.JSX.Element;
  showIndication?: boolean;
  icon?: React.JSX.Element;
}>) {
  const navigate = useNavigate();
  return (
    <main className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center flex flex-col gap-4 items-center justify-center">
        {icon}
        {showIndication && (
          <Typography variant="caption" className="font-semibold">
            404
          </Typography>
        )}
        <Typography variant="title" className="font-semibold">
          {message}
        </Typography>
        <Typography variant="body-2" className="font-medium text-pretty">
          {description}
        </Typography>
        <div className="mt-2 flex items-center justify-center gap-x-6">
          {ctaTitle && href && (
            <Button onClick={() => navigate(href)} color="primary-white" size="small">
              {ctaTitle}
            </Button>
          )}
          {children}
        </div>
      </div>
    </main>
  );
}
