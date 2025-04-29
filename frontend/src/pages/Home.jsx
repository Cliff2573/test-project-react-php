import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">首頁</h1>
      <Link to="/users" className="bg-blue-500 text-white px-4 py-2 rounded">
        前往使用者查詢
      </Link>
    </div>
  );
}