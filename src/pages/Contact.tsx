import coverImage from "../assets/cover-image.png";
import { ContactSection } from "../components/ContactSection";
import { Cover } from "../components/Cover";

export function Contact() {
  return (
    <>
      <Cover imageSrc={coverImage} />
      <ContactSection />
    </>
  );
}
