import { BlogCard } from "../components/BlogCard";
import blueyImage from "../assets/3.jpg";

export function Blog() {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container w-75">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <BlogCard
              title="StoryToys Partners with LEGO & BBC Studios"
              description="This new game brings Bluey into an engaging digital world, designed for children aged 2 to 7..."
              imageSrc={blueyImage}
              link="#"
            />
            <BlogCard
              title="StoryToys Partners with LEGO & BBC Studios"
              description="This new game brings Bluey into an engaging digital world, designed for children aged 2 to 7..."
              imageSrc={blueyImage}
              link="#"
            />
            <BlogCard
              title="StoryToys Partners with LEGO & BBC Studios"
              description="This new game brings Bluey into an engaging digital world, designed for children aged 2 to 7..."
              imageSrc={blueyImage}
              link="#"
            />
          </div>
        </div>
      </section>
    </>
  );
}
