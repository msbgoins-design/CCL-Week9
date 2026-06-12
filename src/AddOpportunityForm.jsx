import { useState } from 'react';

export default function AddOpportunityForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('General');
  const [url, setUrl] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !organization) return; 
    
    const newOpp = {
      id: Date.now(), 
      title: title,
      organization: { name: organization },
      description: description,
      location: location,
      dates: date, 
      activities: [{ category: category }], 
      url: url, 
    };

    onAdd(newOpp); 
    
    // Clear fields
    setTitle(''); setOrganization(''); setDescription(''); setLocation(''); setDate(''); setCategory('General'); setUrl('');
  };

  return (
    <div 
      className="card mb-4 p-3 border-0"
      style={{ borderRadius: '12px', boxShadow: '0 0 15px rgba(0, 243, 255, 0.4)' }}
    >
      <h4 className="mb-3" style={{ color: '#00b4cc' }}>✨ Create an Opportunity</h4>
      <form onSubmit={handleSubmit} className="row g-3">
        
        {/* Row 1 */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Title*</label>
          <input type="text" className="form-control" placeholder="e.g., Event Setup" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Organization*</label>
          <input type="text" className="form-control" placeholder="Organization Name" value={organization} onChange={(e) => setOrganization(e.target.value)} required />
        </div>
        
        {/* ✨ RESTORED: Full Category Dropdown with Icons */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Category</label>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">✨ Select a Category...</option>
            <option value="Environmental">🐾 Environmental & Animals</option>
            <option value="Program Support">🤝 Program Support</option>
            <option value="Social Care">❤️ Social Care</option>
            <option value="Education, Language, and Art">🎨 Education & Art</option>
            <option value="PR, Fundraising, Events">🎉 Events & Fundraising</option>
          </select>
        </div>

        {/* Row 2 */}
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Location</label>
          <input type="text" className="form-control" placeholder="e.g., Columbus, OH" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold text-muted small mb-0">Description</label>
          <input type="text" className="form-control" placeholder="Short description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        {/* Row 3 - Website Link Input */}
        <div className="col-md-12 mt-3">
          <label className="form-label fw-bold text-muted small mb-0">Website / Signup Link</label>
          <input 
            type="url" 
            className="form-control border-info" 
            placeholder="https://example.com" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn w-100 fw-bold text-white" style={{ backgroundColor: '#00b4cc' }}>
            Add to My Opportunities
          </button>
        </div>
      </form>
    </div>
  );
}
