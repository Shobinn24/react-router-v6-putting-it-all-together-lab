import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(data => setDirectors(data));
  }, []);

  const addDirector = (newDirector) => {
    setDirectors([...directors, newDirector]);
  };

  return (
    <div>
      <NavBar />
      <h1>Directors</h1>
      <Outlet context={{ directors, setDirectors, addDirector }} />
    </div>
  );
}

export default DirectorContainer;