import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn,
    HeroCredit 
} from './HeroElements'

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Interestingly Comfy Socks</HeroH1>
                    <HeroP>Comfy Offers</HeroP>
                    <HeroBtn>Get Comfy!</HeroBtn>
                    <HeroCredit>PC: nickpage</HeroCredit>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
