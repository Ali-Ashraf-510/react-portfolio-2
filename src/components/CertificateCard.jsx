import { memo } from 'react';

/**
 * CertificateCard Component - Individual certificate/achievement card
 * Wrapped with React.memo to prevent unnecessary re-renders when parent component updates
 * 
 * @param {Object} props - Component props
 * @param {Object} props.certificate - Certificate data object
 * @returns {JSX.Element} Rendered certificate card
 */
const CertificateCard = ({ certificate }) => {
  return (
    <article className="card group">
      {/* Certificate Image */}
      <div className="relative overflow-hidden h-40 bg-gradient-to-br from-primary-50 to-accent-50">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Certificate Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors flex-1">
            {certificate.title}
          </h3>
        </div>

        {/* Issuer and Date */}
        <div className="space-y-1 mb-3">
          <p className="text-sm text-gray-700 font-medium flex items-center gap-1">
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {certificate.issuer}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {certificate.date}
          </p>
        </div>

        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-accent-100 text-accent-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {certificate.category}
          </span>
        </div>

        {/* Description */}
        {certificate.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {certificate.description}
          </p>
        )}

        {/* Verify Link */}
        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium pt-3 border-t border-gray-100"
            aria-label={`Verify ${certificate.title}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Certificate
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default memo(CertificateCard);
