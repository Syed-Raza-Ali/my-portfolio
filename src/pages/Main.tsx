import Intro from "@/components/intro"
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/footer";


const Main: React.FC = () => {
    return (
        <div className="lg:mx-32 md:mx-4 ">
            < Intro />
            <About />
            <Projects />
            
        </div>
    )
}


export default Main