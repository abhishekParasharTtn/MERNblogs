/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response?.data?.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/blogs/${id}`);
      setBlog(response?.data?.data);
      toast.success(response?.data?.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();
  return (
    <div className="flex flex-col gap-8">
      {loading && <Loader />}
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{blog?.title}</h1>
        <div className="flex gap-5">
          <button className="btn-outlined" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="btn-outlined" onClick={onDelete}>
            Delete
          </button>
          <button
            className="btn-contained"
            onClick={() => navigate(`/edit-blog/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>

      <img src={blog?.image} alt="" className="object-cover rounded border " />
      <p>{blog?.description}</p>
    </div>
  );
}

export default Blog;
