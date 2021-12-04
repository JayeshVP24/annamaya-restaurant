import Link from "next/link";
import React, { useState } from "react";
import { IKImage } from "imagekitio-react";

const Footer: React.FC = () => {
    const [navs] = useState<{ title: string; link: string; active: boolean }[]>(
        [
            {
                title: "Home",
                link: "/",
                active: false,
            },
            {
                title: "Menu",
                link: "/menu",
                active: false,
            },
            {
                title: "About",
                link: "/#about",
                active: false,
            },
            {
                title: "Contact",
                link: "/contact",
                active: false,
            },
        ]
    );

    return (
        <footer
            className="flex flex-col items-center my-8 lg:my-12 gap-y-6
        md:flex-row md:justify-around"
        >
            <nav
                className="flex flex-col text-center gap-y-4 uppercase 
            items-center justify-center text-[#B4ABAB] font-semibold text-sm
            md:flex-row md:w-2/5  "
            >
                {navs.map((n) => (
                    <Link href={n.link} key={n.link}>
                        <a className="w-full md:w-max mx-2 lg:mx-4 xl:mx-6 hover:text-primary transition-all ">
                            {n.title}
                        </a>
                    </Link>
                ))}
            </nav>
            <IKImage
                path="/logo-named.png"
                tranformation={[
                    {
                        width: 107,
                        height: 109,
                        quality: 100,
                        "f-webp": "",
                    },
                ]}
                width="107"
                height="109"
                className="w-2/4 md:w-auto "
            />
            <span className="text-center md:w-2/5">
                <span className="text-primary">
                    © Annamaya Bar and Restraunt
                </span>{" "}
                <br />
                <a
                    href="https://elightlabs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B4ABAB] hover:text-white"
                >
                    ElightlabsTechnologies LLP.
                </a>
            </span>
        </footer>
    );
};

export default Footer