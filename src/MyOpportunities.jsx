import { useState } from 'react';

export default function MyOpportunities({ myOpportunities, onDelete }) {
  // ✨ BUSINESS LOGIC: Only show 6 opportunities per page
  const [visibleCount, setVisibleCount] = useState(6);

  if (myOpportunities.length === 0) {
    return null;
  }

  // Slice the array so React only maps over the currently visible batch
  const displayedOpportunities = myOpportunities.slice(0, visibleCount);

  return (
    <div className="mt-5 mb-5">
      <h4 className="mb-4 fw-bold" style={{ color: '#00b4cc', textShadow: '0 0 8px rgba(0, 243, 255, 0.4)' }}>
        💚 Local & Saved Opportunities ({myOpportunities.length} Total)
      </h4>
      
      <div className="row g-4">
        {displayedOpportunities.map((opp) => (
          <div key={opp.id} className="col-md-6 col-lg-4">
            <div 
              className="card h-100 border-0 p-3" 
              style={{ 
                borderRadius: '12px', 
                backgroundColor: '#f8f9fa',
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.4)' 
              }}
            >
              <div className="card-body d-flex flex-column p-0">
                <h5 className="card-title fw-bold mb-1">{opp.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">🏢 {opp.organization?.name}</h6>
                
                <p className="card-text small text-secondary flex-grow-1 mt-2">
                  {opp.description || 'No description provided.'}
                </p>

                {/* Logistics */}
                <div className="mb-3 text-muted small">
                  <div>📍 {opp.location || 'Location not specified'}</div>
                  <div>📅 {opp.dates || 'Date not specified'}</div>
                  <div>✨ {opp.activities?.[0]?.category || 'General'}</div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    {opp.url && (
                      <a 
                        href={opp.url.startsWith('http') ? opp.url : `https://${opp.url}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-info fw-bold"
                        style={{ boxShadow: '0 0 8px rgba(0, 243, 255, 0.4)' }}
                      >
                        Visit 🔗
                      </a>
                    )}
                    
                    <span 
                      className="badge bg-success rounded-pill px-3 py-2"
                      style={{ boxShadow: '0 0 8px rgba(57, 255, 20, 0.5)' }} 
                    >
                      Saved 💚
                    </span>
                  </div>

                  <button 
                    className="btn btn-sm btn-outline-danger border-0" 
                    onClick={() => onDelete(opp.id)}
                    style={{ fontSize: '1.2rem', textShadow: '0 0 8px rgba(255, 0, 0, 0.5)' }} 
                    title="Delete Opportunity"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ PAGINATION BUTTON */}
      {visibleCount < myOpportunities.length && (
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-info fw-bold px-5 py-2"
            style={{ boxShadow: '0 0 10px rgba(0, 243, 255, 0.4)', borderRadius: '30px' }}
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            🔽 Show More Saved Opportunities
          </button>
        </div>
      )}
    </div>
  );
}
