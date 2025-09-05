import type { AuthPageWrapperProps } from '../types';

export const AuthPageWrapper = ({
  children,
  title,
  subtitle,
  subtitleLink,
  onSubtitleClick,
}: AuthPageWrapperProps) => (
  <div className="w-full max-w-md mx-auto bg-items-bg p-8 rounded-xl shadow-lg">
    <h1 className="text-2xl font-semibold text-center text-text-primary mb-2">
      {title}
    </h1>
    {subtitle && (
      <p className="text-center text-text-secondary mb-8">
        {subtitle}{" "}
        {subtitleLink && onSubtitleClick && (
          <a
            onClick={onSubtitleClick}
            className="font-semibold text-primary cursor-pointer hover:underline"
          >
            {subtitleLink}
          </a>
        )}
      </p>
    )}
    <div className="space-y-6">{children}</div>
  </div>
);
