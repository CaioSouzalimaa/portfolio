import {HeroSection} from "@/app/components/hero_section";
import {NavBar} from "@/app/components/nav_bar";
import {AboutSection} from "@/app/components/about_section";
import {ProjectsSection} from "@/app/components/projects_section";
import {EmailSection} from "@/app/components/email_section";
import {Footer} from "@/app/components/footer";
import {AchievementSection} from "@/app/components/achivement_section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className={"container mt-24 mx-auto px-12 py-4"}>
        <HeroSection />
        {/* <AchievementSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  )
}
