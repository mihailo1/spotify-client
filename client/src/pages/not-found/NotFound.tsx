import { Link } from 'react-router-dom';

import Path from 'pages/paths';

function NotFound() {
  return (
    <div>
      <h1>404 - Oh no! We could not find that page :(</h1>
      <Link to={Path.Root}>Go to {Path.Root}</Link>
    </div>
  );
}

export default NotFound;
