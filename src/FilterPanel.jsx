import { useState } from 'react';

export default function FilterPanel({ setSearchTerm, setSelectedCategory, setSelectedLocation }) {
  // Local state to track the text box and the loading spinner
  const [searchInput, setSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // The function that runs when you click the Search button
  const handleSearchClick = () => {
    setIsSearching(true); // Turn on the loading state
    
    // Simulate a quick network delay (600 milliseconds) for a professional UX feel
    setTimeout(() => {
      setSearchTerm(searchInput); // Actually perform the search
      setIsSearching(false); // Turn off the loading state
    }, 600); 
  };

  // Allow users to just press "Enter" on their keyboard to search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div 
      className="card mb-4 p-3 border-0" 
      style={{ 
        borderRadius: '12px', 
        boxShadow: '0 0 15px rgba(57, 255, 20, 0.4)' // ✨ Neon Green Glow
      }}
    >
      <div className="row g-3">
        
        {/* 1. NEW: Search Bar with Button and Loading State */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-1">🔍 Search Opportunities</label>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control border-secondary" 
              placeholder="e.g., Cat rescue, Event..." 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)} 
              onKeyDown={handleKeyDown}
            />
            <button 
              className="btn btn-info text-white fw-bold" 
              type="button"
              onClick={handleSearchClick}
              disabled={isSearching} // Prevents clicking twice while loading
              style={{ boxShadow: '0 0 8px rgba(0, 243, 255, 0.4)' }}
            >
              {isSearching ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Searching...
                </>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </div>
        
        {/* 2. Category Dropdown */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-1">✨ I would like to do...</label>
          <select 
            className="form-select border-secondary" 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">🌍 All Categories</option>
            <option value="Environmental">🐾 Environmental & Animals</option>
            <option value="Program Support">🤝 Program Support</option>
            <option value="Social Care">❤️ Social Care</option>
            <option value="Education, Language, and Art">🎨 Education & Art</option>
            <option value="PR, Fundraising, Events">🎉 Events & Fundraising</option>
          </select>
        </div>

        {/* 3. Location Dropdown */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-1">📍 Location (City, State)</label>
          <select 
            className="form-select border-secondary" 
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="All">📍 All Locations</option>
            <option value="Remote">💻 Remote / Online Only</option>
            <option value="Columbus">Columbus, OH</option>
            <option value="Cleveland">Cleveland, OH</option>
            <option value="Cincinnati">Cincinnati, OH</option>
            <option value="Toledo">Toledo, OH</option>
          </select>
        </div>
        
      </div>
    </div>
  );
}
