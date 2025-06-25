import { Cover } from "../components/Cover";
import coverImage from "../assets/cover-image.png";
import { Section } from "../components/Section";

export function About() {
  return (
    <>
      <Cover imageSrc={coverImage} />
      <Section>
        <div className="row">
          <div className="col-md-8 text-center mx-auto py-5">
            <h2
              className="fw-bold mb-4 text-center"
              style={{ color: "#003366" }}
            >
              Apps to help your child learn, play, and grow
            </h2>
            <p>
              StoryToys, a wholly-owned subsidiary of everplay group PLC,
              creates apps to give parents the peace of mind that their kids are
              having fun with their favorite characters while also engaging in
              activities that help them learn and grow. The company has produced
              apps with many leading children’s brands, including The LEGO
              Group, The Walt Disney Company, Pixar, Marvel Entertainment,
              Penguin Random House, Warner Bros, Sesame Workshop, Dick Bruna,
              Hasbro, and Nickelodeon. Key titles include LEGO® DUPLO® WORLD,
              Disney Coloring World, and Hungry Caterpillar Play School. With
              over 200M app downloads, StoryToys has enjoyed global success on
              all major app distribution platforms. StoryToys has been the
              recipient of numerous awards for the quality of its products,
              including Kidscreen Award Winner 2021, Licensing International
              Excellence Awards Winner 2020, KAPi Awards Winner 2020, numerous
              Children’s Technology Review Editor’s Choice Awards, and multiple
              Bologna Ragazzi Digital Awards.
            </p>
          </div>
        </div>
      </Section>
      <Section title="">
        <div className="row text-center g-4">
          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-leaf fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Growth</h5>
              <p className="text-muted small">
                Striving for our apps to continuously improve and expand over
                time.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-award fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Quality</h5>
              <p className="text-muted small">
                Quality belongs to all, but it starts with the right idea,
                executed to the best standards.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-face-smile fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Entertaining & Fun</h5>
              <p className="text-muted small">
                Fun boosts our creativity, energy, productivity, and overall
                well-being.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-star fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Engagement</h5>
              <p className="text-muted small">
                A defining principle. Our designs engage the emotions.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-child-reaching fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Child-Centric Design</h5>
              <p className="text-muted small">
                We always have children’s rights, needs and limitations in mind.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex flex-column align-items-center px-3">
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center mb-3"
                style={{ width: "90px", height: "90px" }}
              >
                <i className="fas fa-shield-heart fa-2x text-white"></i>
              </div>
              <h5 className="fw-bold mb-2">Safe Environment</h5>
              <p className="text-muted small">
                We take great care when it comes to physical and psychological
                health and welfare.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
