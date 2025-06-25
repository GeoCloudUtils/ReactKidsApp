// src/pages/BlogDetailPage.tsx
import { useParams } from "react-router-dom";
import { blogList } from "../blogList";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const blog = blogList.find((post) => post.id === id);

  if (!blog) return <h2 className="text-center mt-5">Blog post not found.</h2>;

  return (
    <div className="container py-5">
      <h1>{blog.title}</h1>
      <img src={blog.imageSrc} alt={blog.title} className="img-fluid my-4" />
      <p>{blog.content}</p>
    </div>
  );
}
