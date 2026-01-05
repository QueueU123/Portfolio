import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("marc.tabangay.cics@ust.edu.ph");
        setHasCopied(true);
        setTimeout(() =>{
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className = "c-space my-20 " id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-5 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src = "assets/gridmarc.png" alt="grid-1" className="w-full sm:h-[476px] h-fit object-contain"></img>
                        <div>
                            <p className="grid-headtext">Hi, I'm Marc</p>
                            <p className="grid-subtext">As a Computer Science specializing in full-stack development,
                                I bridge the gap between robust backend architecture and immersive, animated 3D frontend experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                    <img src="assets/whoaa.png" alt="grid-2" className="w-full sm:w-[576px] h-fit object-contain]"/>
                       <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">Currently specializing in Three.js for immersive web development, alongside a strong
                            foundation in Python and Java for scalable backend solutions and algorithmic designs.</p>
                       </div>
                    </div>
                </div>
                        <div className="col-span-1 xl:row-span-3">
                            <div className="grid-container flex flex-col justify-center items-center text-center">
                                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                    <Globe
                                        height = {426}
                                        width = {426}
                                        backgroundColor="rgba(0,0,0,0)"
                                        backgroundImageOpacity={0.5}
                                        showAtmosphere
                                        showGraticules
                                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                        labelsData={[{
                                            lat: 40, lng: -100,
                                            text: "I'm here!",
                                            color: 'white',
                                            size: 20,
                                        }]}
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <p className="grid-headtext">
                                        I work remotely across most timezones
                                    </p>
                                    <p className="grid-subtext">
                                        I'm based in Philippines, with remote work available.
                                    </p>
                                    <a href="#contact" className="w-fit">
                                    <Button name ="Contact Me" isBeam containerClass="w-full mt-10"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-2 xl:row-span-2">
                            <div className="grid-container">
                                <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                                <div>
                                    <p className="grid-headtext">My Passion for Coding</p>
                                    <p className="grid-subtext">I love solving problems and building things through code. Coding
                                    itself is my passion.</p>
                                </div>
                            </div>
                        </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[206px] sm:h-[276px] h-full object-cover sm:object-top object-contain"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">moko_tana@yahoo.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </section>
    )
}
export default About
