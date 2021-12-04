import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";
import { IKImage } from "imagekitio-react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
    const router = useRouter();

    const [navs] = useState<
        { title: string; link: string; active: boolean }[]
    >([
        {
            title: "Home",
            link: "/",
            active: false,
        },
        {
            title: "Menu",
            link: "/menu/",
            active: false,
        },
        {
            title: "About",
            link: "/#about",
            active: false,
        },
        {
            title: "Contact",
            link: "/contact/",
            active: false,
        },
    ]);

    // const updateNav = async () => {
    //     console.log(router.asPath);
    //     const navC = navs
    //     navC.forEach((n) => {
    //         if(n.link === router.asPath) {
    //             n.active = true
    //         } else {
    //             n.active = false
    //         }
    //     })
    //     await setNavs(navC)
    //     console.log(navs);
    // };

    // useEffect( () => {
    //     console.log(router.asPath);

    //     const navC = navs;
    //     navC.forEach((n) => {
    //         if (n.link === router.asPath) {
    //             n.active = true;
    //         } else {
    //             n.active = false;
    //         }
    //     });
    //     setNavs(navC);
    //     console.log(navs);
    //     // updateNav()
    // }, [router, navs]);

    const [showNav, setShowNav] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setShowNav(false));

    const [scrollNav, setScollNav] = useState(false);

    useScrollPosition(
        ({ currPos }) => {
            let isShow = currPos.y < -100;
            if (isShow !== scrollNav) setScollNav(isShow);
            // console.log(currPos);
        },
        [scrollNav],
        undefined,
        undefined,
        300
    );

    return (
        <header
            className={`flex z-10 fixed top-0 w-full justify-around 
        items-center py-2 pb-3 md:mt-5 lg:justify-evenly transition-all
        ${scrollNav ? "bg-[#181818]" : "bg-transparent"}`}
        >
            <Link href="/" >
            <a className="flex">
                <IKImage
                    path="/logo-squared.png"
                    alt="Annamaya Logo"
                    transformation={[
                        {
                            height: 60,
                            width: 60,
                        },
                    ]}
                    width="60"
                    height="60"
                />
                <span className="font-paprika relative block ml-3">
                    <h1 className="text-xl relative top-3 ml-8">Annamaya</h1>
                    <h2 className="text-[0.5rem] text-primary absolute w-max bottom-1">
                        Multi Cuisine Restaurant {`&`} bar
                    </h2>
                </span>
            </a>
            </Link>

            <nav className="hidden md:flex gap-x-8 font-medium xl:gap-x-12 ">
                {navs.map((n) => (
                    <Link href={n.link} passHref key={n.title}>
                        <a
                            // onClick={updateNav}
                            className={`${
                                ((n.link === router.asPath) || (router.asPath.includes("menu") && n.link.includes("menu")))
                                    ? "text-primary border-b border-primary"
                                    : "hover:border-b border-white"
                            } pb-1 border-0 transition-all `}
                        >
                            {n.title}
                        </a>
                    </Link>
                ))}
            </nav>

            <div ref={ref} className="relative md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 cursor-pointer "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setShowNav((s) => !s)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
                <AnimatePresence>
                    {showNav && (
                        <nav
                            className="flex flex-col absolute top-10 right-5 bg-secondary 
                px-4 py-2 text-black rounded-lg gap-y-1 w-40"
                        >
                            {navs.map((n) => (
                                <Link href={n.link} passHref key={n.link}>
                                    <a
                                        onClick={() => setShowNav(false)}
                                        className="px-4 py-2 font-medium 
                        active:bg-tertiary rounded-lg transition-all active:scale-95"
                                    >
                                        {n.title}
                                    </a>
                                </Link>
                            ))}
                        </nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header