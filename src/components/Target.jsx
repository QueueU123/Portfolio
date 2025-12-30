import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Canvas, useFrame} from "@react-three/fiber";

const Target = (props) => {
    const { nodes, materials } = useGLTF('/models/target.glb')
    const targetRef = useRef()

    //Animation Loop
    useFrame(({ state, clock}) => {
        const t = clock.getElapsedTime()
        // ANIMATION 1: Floating Up and Down (Y-axis)
        // Adjust '2' to make it faster/slower
        // Adjust '0.5' to make it go higher/lower
        targetRef.current.position.y = Math.sin(t*2) * 0.5

        // ANIMATION 2: Spinning (Y-axis)
        // Remove this line if you don't want it to spin
        targetRef.current.rotation.y += 0.01
    })

    return (
        <group {...props} dispose={null} ref = {targetRef}>
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100} position = {[-300, -900, 20]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_white_0.geometry}
                        material={materials.white}
                        Target P
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_blue_0.geometry}
                        material={materials.blue}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_red_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_yellow_0.geometry}
                        material={materials.yellow}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/target.glb')

export default Target