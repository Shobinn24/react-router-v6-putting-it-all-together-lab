
import { useOutletContext, Link } from 'react-router-dom';

function DirectorList() {
  const { directors } = useOutletContext();

  if (!directors || directors.length === 0) {
    return <p>Loading directors...</p>;
  }

  return (
    <div>
      <Link to="/directors/new">Add New Director</Link>
      <ul>
        {directors.map(director => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>
              {director.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DirectorList;