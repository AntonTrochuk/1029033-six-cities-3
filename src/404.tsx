import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <Link className="not-found__link" to="/">
        На главную
      </Link>
    </div>
  );
}
export default NotFound;
