import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function DirectorForm() {
  const navigate = useNavigate();
  const { addDirector } = useOutletContext();
  
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newDirector = {
      id: String(Date.now()), // Generate a simple ID
      name: formData.name,
      bio: formData.bio,
      movies: []
    };

    // Add to state
    addDirector(newDirector);
    
    // Navigate to the new director's page
    navigate(`/directors/${newDirector.id}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;