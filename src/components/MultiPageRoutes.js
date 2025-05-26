import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact"; 
import Experience from "./experience/Experience";
import MyntraHackerrampLearnMore from "./experience/MyntraHackerrampLearnMore";
import KnowledgeSharingPlatformLearnMore from "./experience/KnowledgeSharingPlatformLearnMore"; 

import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/contact'} element={<Contact />} />
            <Route exact path={'/experience'} element={<Experience />} /> 
            <Route exact path={'/experience/myntra-hackerramp'} element={<MyntraHackerrampLearnMore />} />
            <Route exact path={'/experience/knowledge-sharing-platform'} element={<KnowledgeSharingPlatformLearnMore />} /> {/* <-- Add this line */}
        </Routes>
    )
}
