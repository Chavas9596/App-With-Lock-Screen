import React from "react";
import HeroSection from "../components/HeroSection";
import AuthSection from "../components/AuthSection"
import PuzzleSection from "../components/CarouselSection";
import SomethingSection from "../components/Something";
import Error404Section from "../components/Error404";

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
    {
        path: '/something',
        element: <SomethingSection />
    },
    {
        path: '*',
        element: <Error404Section />
    }
]

export default routerList