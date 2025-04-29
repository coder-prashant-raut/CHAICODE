import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-gray-400 mb-4">Page not found</p>
      <Link to="/" className="text-orange-400 underline">
        Go to Home
      </Link>
    </div>
  );
}
