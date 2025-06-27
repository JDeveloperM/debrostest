import React from 'react';
import { useHashRouter } from '../../utils/hashRouter';

const HashLink = ({ 
  href, 
  children, 
  className = '', 
  target = '_self',
  rel,
  onClick,
  ...props 
}) => {
  const router = useHashRouter();

  const handleClick = (e) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Handle external links
    if (target === '_blank' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return; // Let the browser handle external links normally
    }

    // Handle hash links (anchor links within page)
    if (href.startsWith('#') && !href.includes('/')) {
      return; // Let the browser handle anchor links normally
    }

    // Handle internal navigation
    e.preventDefault();
    
    // Remove leading hash if present for internal routing
    const path = href.startsWith('#') ? href.substring(1) : href;
    router.push(path);
  };

  // For external links, use regular anchor tag
  if (target === '_blank' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // For internal links, use hash-based navigation
  const hashHref = href.startsWith('#') ? href : `#${href}`;

  return (
    <a
      href={hashHref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default HashLink;
