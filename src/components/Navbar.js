import React from 'react';
import Style from './Navbar.module.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: 'Experience',
        to: 'experience',
        active: 'experience'
    },
    {
        name: 'Contact Me',
        to: 'contact',
        active: 'contact'
    }
];

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // slightly bigger for new navbar
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export default function Navbar({ active, setActive }) {
    return (
        <Box
            component={'nav'}
            width={'100%'}
            position={singlePage ? 'fixed' : 'relative'}
            className={Style.navbar}
            zIndex={100}
        >
            <Box
                component={'ul'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={{ xs: '2rem', md: '6rem' }}
                className={Style.navlist}
            >
                {links.map((link, index) => (
                    <Box
                        key={index}
                        component={'li'}
                        className={`${Style.navitem} ${(link.active === active && !link.type) ? Style.active : ''}`}
                    >
                        <Link
                            to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)}
                            className={Style.link}
                        >
                            <span>{link.name}</span>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
