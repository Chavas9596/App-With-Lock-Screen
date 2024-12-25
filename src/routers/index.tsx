import React from "react";
import HeroSection from "../components/HeroSection";
import AuthSection from "../components/AuthSection"
import PuzzleSection from "../components/Carousel";

const routerList = [
    {
        path: '/',
        element: <HeroSection />
    },
    {
        path: '/auth',
        element: <AuthSection />
    },
    {
        path: '/carousel',
        element: <PuzzleSection />
    },
]

export default routerList