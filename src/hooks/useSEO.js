import { useEffect } from 'react';

/**
 * Custom hook for managing page meta tags and SEO
 * Sets title, description, keywords, and Open Graph tags
 * 
 * @param {Object} options - SEO configuration object
 * @param {string} options.title - Page title (will have " | Your Name" appended)
 * @param {string} options.description - Meta description (max 160 chars)
 * @param {string} options.keywords - Comma-separated keywords
 * @param {string} options.ogImage - Open Graph image URL
 * @param {string} options.ogUrl - Open Graph URL (canonical)
 * @param {string} options.type - Open Graph type (default: 'website')
 * 
 * @example
 * useSEO({
 *   title: 'Projects',
 *   description: 'View my portfolio projects and technical skills',
 *   keywords: 'projects, portfolio, react, web development',
 *   ogImage: 'https://example.com/og-image.jpg',
 *   ogUrl: 'https://example.com/projects'
 * });
 */
export function useSEO(options = {}) {
  const {
    title = 'Portfolio',
    description = 'My professional portfolio',
    keywords = 'portfolio, web development, react',
    ogImage = '',
    ogUrl = window.location.href,
    type = 'website'
  } = options;

  useEffect(() => {
    // Set page title
    const fullTitle = `${title} | Ali Ashraf`;
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Set Open Graph tags for social sharing
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:url', ogUrl, 'property');

    if (ogImage) {
      setMetaTag('og:image', ogImage, 'property');
      setMetaTag('og:image:width', '1200', 'property');
      setMetaTag('og:image:height', '630', 'property');
    }

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Cleanup function to reset on unmount (optional)
    return () => {
      // Optionally reset title
      // document.title = 'Portfolio';
    };
  }, [title, description, keywords, ogImage, ogUrl, type]);
}
