import { FaHome, FaUsers } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-4 py-2">
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <Link to="/admin/home" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Home
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <Link to="/admin/seminars" className="px-3">
            <BsCardList className="inline-block w-6 h-6 mr-2 -mt-2" />
            Seminars
          </Link>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-400 py-2">
          <Link to="/admin/users" className="px-3">
            <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2" />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
