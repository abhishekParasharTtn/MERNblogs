import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
/* eslint-disable react/prop-types */
function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-gray-800 text-white p-5 flex">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          MERN BLOGS
        </h1>
      </div>
      <div className="p-5">{props.children}</div>
    </div>
  );
}

export default Layout;
