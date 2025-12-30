import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import {useControls} from "leva";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // })
    const isSmall = useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm: text-2xl text-white text-center font-generalsans"> Hi, I am Marc<span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>


            <div className="w-full h-full absolute inset-0">
               {/* This is manual controls of tho model <leva />*/}
                <Canvas className="w-full h-full"> {/*We are not in a jsx here, we are fully in a 3D environment*/}
                    <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile = {isMobile} >
                    <HackerRoom
                       /* scale={0.06}
                        position={[0,0,0]}
                        rotation={[0, 280, 0]}*/
                        position={sizes.deskPosition}
                        rotation={[0, -Math.PI, 0]}
                        scale={sizes.deskScale}
                    />
                        </HeroCamera>
                        <group>
                            <Target position = {sizes.targetPosition} />
                            <ReactLogo position = {sizes.reactLogoPosition} />
                            <Cube position = {sizes.cubePosition} />
                            <Rings position = {sizes.ringPosition} />
                        </group>

                        {/*Model Clarity*/}
                        <ambientLight intensity={2} />
                        <directionalLight position={[10,10,10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
                <div className="absolute bottom-5 left-0 right-0 w-full z-10 flex justify-center">
                    <a href="#about" className="w-fit">
                        <Button name = "Let's work together!" isBeam containerClass = "sm: w-fit w-full sm: min-w-96"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
