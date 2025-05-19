import Navbar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/footer";
import ScrollToTop from "@/components/scroll-to-top";
import HomeSection from "@/containers/HomeSection";
import SkillsSection from "@/containers/Skills";
import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import ProjectsSection from "@/containers/projects";

export default function Home() {
  return (
    <main className="pt-12">
      <Navbar />
      <div className="container space-y-16 py-28">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
