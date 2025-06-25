import { BlogCard } from "../components/BlogCard";
import { blogList } from "../blogList";

export function Blog() {
  return (
    <section className="py-5 bg-light">
      <div className="container w-75">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogList.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
