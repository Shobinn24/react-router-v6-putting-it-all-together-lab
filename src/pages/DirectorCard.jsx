import { useParams, useOutletContext, Outlet, Link } from 'react-router-dom';

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();
  
  const director = directors.find(d => d.id === id);

  if (!director) {
    return <div>Director not found</div>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      
      <h3>Movies</h3>
      <ul>
        {director.movies && director.movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/directors/${id}/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <Link to={`/directors/${id}/movies/new`}>Add New Movie</Link>
      
      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;
