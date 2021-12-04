import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import dynamic from "next/dynamic";
import { IKImage } from "imagekitio-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import menu, { items } from "../utils/menuItems";

const Footer = dynamic(() => import("../components/Footer"));
const Header = dynamic(() => import("../components/Header"));
const Type = dynamic(() => import("../components/Menu/Type"));

const Menu: NextPage = () => {
    const SEO: NextSeoProps = {
        title: "Menu | Annamaya Restaurants",
        description: "We provide many items which one you can check here, in our Menu page",
        openGraph: {
            title: "Menu | Annamaya Restaurants",
            description: "We provide many items which one you can check here, in our Menu page",
        },
    };

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 50,
                }}
            >
                <NextSeo {...SEO} />
                <Header />
                <main>
                    <Hero />

                    <section
                        id="menu"
                        className="relative z-[5] mt-8 lg:mt-16 px-10 lg:px-20"
                    >
                        <h1 className="font-semibold text-2xl lg:text-3xl">
                            Categories
                        </h1>
                        <Categories />
                    </section>
                </main>
                <Footer />
            </m.div>
        </LazyMotion>
    );
};

const Categories: React.FC = () => {
    const [cates] = useState<{ title: string; link: string }[]>([
        {
            link: "#starters",
            title: "Starters",
        },
        {
            link: "#main-course",
            title: "Main Course",
        },
        {
            link: "#desserts",
            title: "Desserts",
        },
    ]);

    const router = useRouter();

    const [searchTxt, setSearchTxt] = useState<string>("");

    const allItems: items[] = [
        ...menu.starters,
        ...menu.mainCourse,
        ...menu.desserts,
    ];
    const filteredItems: items[] = allItems.filter((m) =>
        m.item.toLowerCase().includes(searchTxt)
    );

    const ref = useRef<HTMLInputElement>(null)

    return (
        <div className="mt-6 lg:mt-12">
            <div className="flex flex-col-reverse items-center lg:flex-row gap-y-4 gap-x-12 ">
                <span className="flex space-x-8 font-pacifico tracking-wider mr-auto ">
                    {cates.map((c) => (
                        <Link key={c.title} href={c.link}>
                            <a
                            onClick={() => {
                                setSearchTxt("")
                                if(ref.current) ref.current.value = ""
                            }}
                                className={`
                            ${
                                router.asPath.includes(c.link) ||
                                (c.link === "#starters" &&
                                    (router.asPath.includes("starters") ||
                                        router.asPath === "/menu/"))
                                    ? "text-primary border-b border-primary"
                                    : "hover:border-b border-white"
                            } lg:w-max lg:text-lg pb-2
                            `}
                            >
                                <h2>{c.title}</h2>
                            </a>
                        </Link>
                    ))}
                </span>
                <span className="flex w-full  max-w-2xl xl:mr-12  rounded-2xl items-center justify-around md:justify-start bg-primary bg-opacity-20  py-3">
                    <svg
                        width="55"
                        height="55"
                        viewBox="0 0 55 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1/6 h-9"
                    >
                        <path
                            d="M25.2083 47.5521C12.8791 47.5521 2.8645 37.5375 2.8645 25.2083C2.8645 12.8791 12.8791 2.86456 25.2083 2.86456C37.5374 2.86456 47.552 12.8791 47.552 25.2083C47.552 37.5375 37.5374 47.5521 25.2083 47.5521ZM25.2083 6.30206C14.7812 6.30206 6.302 14.7812 6.302 25.2083C6.302 35.6354 14.7812 44.1146 25.2083 44.1146C35.6353 44.1146 44.1145 35.6354 44.1145 25.2083C44.1145 14.7812 35.6353 6.30206 25.2083 6.30206Z"
                            fill="white"
                        />
                        <path
                            d="M46.2001 52.2271C46.0167 52.2271 45.8334 52.2042 45.673 52.1813C44.5959 52.0438 42.648 51.3104 41.548 48.0333C40.9751 46.3146 41.1813 44.5958 42.1209 43.2896C43.0605 41.9833 44.6417 41.25 46.4522 41.25C48.7897 41.25 50.623 42.1438 51.448 43.725C52.273 45.3063 52.0438 47.3229 50.7376 49.2708C49.1105 51.7229 47.3459 52.2271 46.2001 52.2271ZM44.8251 46.9563C45.2147 48.1479 45.7647 48.7438 46.1313 48.7896C46.498 48.8354 47.1855 48.4 47.8959 47.3688C48.5605 46.3833 48.6063 45.6729 48.4459 45.3521C48.2855 45.0313 47.6438 44.6875 46.4522 44.6875C45.7417 44.6875 45.2147 44.9167 44.9167 45.3063C44.6417 45.6958 44.5959 46.2917 44.8251 46.9563Z"
                            fill="white"
                        />
                    </svg>

                    <input
                    ref={ref}
                        className="w-4/6 bg-transparent outline-none"
                        placeholder="Search Menu"
                        type="text"
                        name="Search Text"
                        onChange={(e) =>
                            setSearchTxt(e.target.value.toLowerCase())
                        }
                    />
                </span>
            </div>
            {searchTxt ? (
                <div className="mt-6 lg:mt-12">
                    <Type type={filteredItems} />
                </div>
            ) : (
                <div className="mt-6 lg:mt-12">
                    {(router.asPath.includes("starters") ||
                        router.asPath === "/menu/") && (
                        <Type type={menu.starters} />
                    )}
                    {router.asPath.includes("main-course") && (
                        <Type type={menu.mainCourse} />
                    )}
                    {router.asPath.includes("desserts") && (
                        <Type type={menu.desserts} />
                    )}
                </div>
            )}
        </div>
    );
};

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative top-0 z-0 ">
            <div>
                <picture>
                    <source
                        media="(min-width:1536px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-7-2,w-1536/menu-hero.webp"
                    />
                    <source
                        media="(min-width:1280px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-7-2,w-1280/menu-hero.webp"
                    />
                    <source
                        media="(min-width:1024px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-6-2,w-1024/menu-hero.webp"
                    />
                    <source
                        media="(min-width:640px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-2,w-768/menu-hero.webp"
                    />
                    <source srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-3,w-360/menu-hero.webp" />
                    <IKImage
                        className="w-screen filter brightness-[0.3]"
                        src="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-4,w-360/menu-hero.webp 360w"
                        width="600"
                        height="200"
                        lqip={{ active: true }}
                    />
                </picture>
            </div>
            <div className="text-center w-full h-full absolute top-[48%]">
                <h1 className="font-pacifico text-3xl lg:text-4xl xl:text-6xl ">
                    Our Best-in-Class Menu
                </h1>
            </div>
        </section>
    );
};

export default Menu;
