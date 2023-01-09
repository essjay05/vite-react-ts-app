import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Return Home</Link>
    </>
  );
}

export default NotFound;
