import { useState } from 'react';

export default function OpportunityCard({ opportunity }) {
  const [showDetails, setShowDetails] = useState(false);

  // Safely extract location
  const displayLocation = opportunity.audience?.regions?.[0] 
    || (opportunity.audience?.latitude ? "📍 Local Community" : "🌍 National / Remote");

  // Safely get the organization website
  const orgUrl = opportunity.organization?.url;
  const validOrgLink = orgUrl?.startsWith('http') ? orgUrl : `https://${orgUrl}`;

  return (
    <div 
      className="card h-100 border-0" 
      style={{ 
        borderRadius: '12px', 
        transition: 'transform 0.2s',
        boxShadow: '0 0 15px rgba(0, 243, 255, 0.4)' // ✨ THE NEON BLUE GLOW ✨
      }}
    >
      <div className="card-body d-flex flex-column">
        
        {/* Title */}
        <h5 className="card-title fw-bold mb-1 text-dark">{opportunity.title}</h5>
        
        {/* Organization Title with External Link on Hover */}
        <h6 className="card-subtitle mb-3">
          🏢 {orgUrl ? (
            <a 
              href={validOrgLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted link-info text-decoration-none"
              title="Click to visit organization profile"
            >
              {opportunity.organization?.name} 🔗
            </a>
          ) : (
            <span className="text-muted">{opportunity.organization?.name}</span>
          )}
        </h6>
        
        {/* Description */}
        <p className="card-text flex-grow-1 text-secondary" style={{ fontSize: '0.95rem' }}>
          {showDetails 
            ? opportunity.description 
            : `${opportunity.description?.substring(0, 100)}...`}
        </p>
        
        {/* Meta Logistics Information */}
        <div className="mb-3 p-2 bg-light rounded" style={{ fontSize: '0.85rem' }}>
          <div className="mb-1">✨ <strong>Category:</strong> {opportunity.activities?.[0]?.category || 'General'}</div>
          <div className="mb-1">📍 <strong>Location:</strong> {displayLocation}</div>
          <div className="mb-1">📅 <strong>Date:</strong> {opportunity.dates || 'Ongoing'}</div>
          <div>💻 <strong>Remote Mode:</strong> {opportunity.remote_or_online ? 'Yes 🏠' : 'No 🏢'}</div>
        </div>
        
        {/* Action Buttons */}
        <div className="d-flex gap-2 mt-auto">
          <button 
            className={`btn flex-grow-1 fw-bold btn-sm ${showDetails ? 'btn-outline-info' : 'btn-info text-white'}`}
            style={!showDetails ? { boxShadow: '0 0 8px rgba(0, 243, 255, 0.4)' } : {}}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
          
          {opportunity.url && (
            <a 
              href={opportunity.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-success btn-sm fw-bold"
              style={{ boxShadow: '0 0 8px rgba(57, 255, 20, 0.4)' }} // Neon green apply button!
            >
              Apply 📩
            </a>
          )}
        </div>

      </div>
    </div>
  );
}