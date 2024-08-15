import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Groups from "@/components/sections/Groups";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Members from "@/components/sections/Members";
import Partners from "@/components/sections/Partners";
import Projects from "@/components/sections/Projects";

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Groups />
            <Projects />
            <About />
            <Members />
            <Partners />
            <Footer />
        </>
    )
}