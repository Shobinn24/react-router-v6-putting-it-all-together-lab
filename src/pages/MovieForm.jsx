import { useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

function MovieForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // director id
  const { director } = useOutletContext();
  
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    genres: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      id: String(Date.now()), // Generate a simple ID
      title: formData.title,
      time: parseInt(formData.time),
      genres: formData.genres.split(',').map(g => g.trim())
    };

    // Add movie to director's movies array
    director.movies.push(newMovie);
    
    // Navigate to the new movie's detail page
    navigate(`/directors/${id}/movies/${newMovie.id}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genres (comma-separated):</label>
          <input
            type="text"
            name="genres"
            value={formData.genres}
            onChange={handleChange}
            placeholder="e.g. Action, Drama, Thriller"
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;