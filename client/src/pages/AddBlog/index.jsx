import BlogForm from "../../components/blogForm";

function AddBlogs() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-gray-800">Add Blogs</h1>
      <hr />
      <BlogForm />
    </div>
  );
}

export default AddBlogs;
