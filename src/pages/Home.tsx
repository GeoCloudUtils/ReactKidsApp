// pages/Home.tsx
import { Heading } from "../components/Heading";
import { Cover } from "../components/Cover";
import { AppGallery } from "../components/AppGallery";
import { SectionInner } from "../components/SectionInner";
import { Section } from "../components/Section";
import { FunAndLearningSection } from "../components/FunAndLearningSection";
import { Reviews } from "../components/Reviews";

import coverImage from "../assets/cover-image.png";
import bluey from "../assets/1.jpg";
import peppa from "../assets/2.jpg";
import thomas from "../assets/3.jpg";
import sesame from "../assets/4.jpg";
import innerImage from "../assets/5.jpg";
import dadImage from "../assets/dad_and_daughter_playing-scaled-1100x600.jpg";

export function Home() {
  const apps = [
    { title: "LEGO® Bluey™", imageSrc: bluey },
    { title: "LEGO® DUPLO® PEPPA PIG", imageSrc: peppa },
    { title: "Thomas & Friends™: Let’s Roll", imageSrc: thomas },
    { title: "Sesame Street Mecha Builders", imageSrc: sesame },
  ];

  return (
    <>
      <Cover imageSrc={coverImage} />
      <Heading
        title="Apps to help your child learn, play, and grow"
        description="They’ll have fun with characters they love, and you’ll rest easy knowing all our apps nurture their curiosity and creativity. Start having fun now with our top picks."
      />
      <AppGallery apps={apps} />
      <SectionInner imageSrc={innerImage} />
      <Section>
        <section className="container-fluid py-5">
          <div className="row w-100">
            <div className="col-md text-center">
              <img
                src={dadImage}
                className="w-75 mx-auto"
                alt="Dad and daughter playing"
              />
            </div>
          </div>
        </section>
      </Section>
      <Heading
        title="Children are constantly learning from the world around them, including their digital environment"
        description="We responsibly design our apps so your child gets to enjoy the fun of screen time while also developing healthy digital habits at a young age."
      />
      <a
        href=""
        className="text-center mx-auto d-block mb-5 text-danger font-weight-bold tex fs-3"
      >
        Learn more about how we design our apps
      </a>
      <FunAndLearningSection image1={peppa} image2={bluey} />
      <Section>
        <div className="row">
          <div className="col-md-8 text-center mx-auto py-5">
            <h2
              className="fw-bold mb-4 text-center"
              style={{ color: "#003366" }}
            >
              We started making apps for kids over 10 years ago. Since then, our
              apps have been installed over 200 million times.
            </h2>
            <p>
              Our team includes passionate professionals who excel in child
              focused fields. Many of us are parents too. We are often guided by
              our own children in the way we design our apps. As parents, we
              know that the stakes are especially high these days when it comes
              to learning in our early years. We promise you that we will always
              be at the cutting edge of educational innovation. You’ll aways be
              sure our games and characters have integrity. They engage,
              educate, and entertain all at once.
            </p>
          </div>
        </div>
      </Section>
      <Reviews />
    </>
  );
}
