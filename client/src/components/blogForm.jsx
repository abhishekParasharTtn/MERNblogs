/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

function BlogForm({ blogData }) {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSave = async () => {
    try {
      let response;
      if (blogData) {
        response = await axios.put(`/api/blogs/${blogData?._id}`, blog);
        setLoading(true);
      } else {
        response = await axios.post("/api/blogs", blog);
        setLoading(true);
      }
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);
  return (
    <div className="flex flex-col gap-8">
      {loading && <Loader />}
      <div>
        <label htmlFor="title" className="text-gray-600 text-sm">
          Title
        </label>
        <input
          id="title"
          type="input"
          placeholder="Enter the title"
          value={blog.title}
          onChange={(e) => {
            setBlog({ ...blog, title: e.target.value });
          }}
        />
      </div>

      <div>
        <label htmlFor="description" className="text-gray-600 text-sm">
          Description
        </label>
        <textarea
          id="description"
          type="input"
          placeholder="Enter the description"
          value={blog.description}
          onChange={(e) => {
            setBlog({ ...blog, description: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="image-url" className="text-gray-600 text-sm">
          Image URL
        </label>
        <input
          id="image-url"
          type="input"
          placeholder="Enter the image url"
          value={blog.image}
          onChange={(e) => {
            setBlog({ ...blog, image: e.target.value });
          }}
        />
      </div>
      <div className="flex justify-end gap-8">
        <button className="btn-outlined" onClick={() => navigate("/")}>
          Cancel
        </button>
        <button className="btn-contained" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
