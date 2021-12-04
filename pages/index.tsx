/* eslint-disable @next/next/no-img-element */
import { domAnimation, LazyMotion, m } from "framer-motion";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { IKImage } from "imagekitio-react";

// import "swiper/css/navigation";

const Footer = dynamic(() => import("../components/Footer"));
const Header = dynamic(() => import("../components/Header"));
const Dishes = dynamic(() => import("../components/Home/Dishes"));
const Drinks = dynamic(() => import("../components/Home/Drinks"));
const Map = dynamic(() => import("../components/Map"));

const Home: NextPage = () => {
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
                <Header />
                <main>
                    <Hero />

                    <About />

                    <Dishes />

                    <Drinks />

                    <Map />
                </main>
                <Footer />
            </m.div>
        </LazyMotion>
    );
};

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative top-0 z-0 ">
            <div>
                <picture>
                    <source
                        media="(min-width:1536px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-2,w-1536/paneer-tikka-masala.webp"
                    />
                    <source
                        media="(min-width:1280px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-2,w-1280/paneer-tikka-masala.webp"
                    />
                    <source
                        media="(min-width:1024px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-2,w-1024/paneer-tikka-masala.webp"
                    />
                    <source
                        media="(min-width:640px)"
                        srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-3,w-768/paneer-tikka-masala.webp"
                    />
                    <source srcSet="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-4,w-360/paneer-tikka-masala.webp" />
                    <IKImage
                        className="w-screen filter brightness-50"
                        src="https://ik.imagekit.io/elightlabs/Annamaya/dishes/tr:ar-5-4,w-360/paneer-tikka-masala.webp 360w"
                        width="600"
                        height="200"
                        lqip={{ active: true }}
                    />
                </picture>
            </div>
            <div className="text-center w-full h-full absolute top-[35%]">
                <h1 className="font-pacifico text-3xl lg:text-4xl xl:text-6xl ">
                    Fast, tasty {`&`} served well
                </h1>
                <p className="text-sm xl:text-base text-primary mt-5 xl:mt-12">
                    100% healthy and natural foods
                </p>

                <Link href="/menu" passHref>
                    <a className="group relative mx-auto block mt-10 w-max text-sm font-semibold">
                        <span
                            className="absolute bottom-2 -left-2 w-36 h-8  border-white border
                        group-active:bottom-0 group-active:left-0 transition-all
                        group-hover:border-0 group-hover:bg-[#5C5555]
                         "
                        ></span>
                        <span
                            className="absolute top-2 left-2 w-36 h-8  bg-[#5C5555]
                        group-active:top-0 group-active:left-0 transition-all
                        group-hover:bg-transparent group-hover:border border-white"
                        ></span>
                        <span
                            className="relative w-36 h-8 flex items-center justify-center 
                        bg-primary text-black group-hover:bg-tertiary
                         group-active:scale-105 transition-all"
                        >
                            See Full Menu
                        </span>
                    </a>
                </Link>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="mt-8 lg:mt-16 px-10 lg:px-20 overflow-hidden flex flex-col md:flex-row gap-10 pb-3 "
        >
            <div className="w-full flex flex-col items-start md:w-4/6 lg:w-3/5 xl:w-3/6">
                <div className="flex">
                    <span className="flex flex-col mr-6 justify-center ">
                        <span className="text-sm xl:text-base ">
                            Welcome to
                        </span>
                        <h2 className="text-xl xl:text-3xl font-paprika text-primary ">
                            Annamaya
                        </h2>
                    </span>
                    <IKImage
                        path="/logo-squared.png"
                        alt="Annamaya Logo"
                        transformation={[
                            {
                                height: 80,
                                width: 80,
                            },
                        ]}
                        width="80"
                        height="80"
                    />
                </div>
                <p className="text-[0.875rem] xl:text-[1rem] font-normal tracking-wider leading-relaxed lg:leading-loose mt-3">
                    <span className="text-primary">Annamaya</span>, which
                    represents the food sheath of our body encompassing the
                    soul, is our ambitious leap into the concept of Vegetarian
                    Restaurant and Bar. Only when you enjoy your food, you live
                    your life to the fullest and thus we at {" "}
                    <span className="text-primary">Annamaya</span>, extend our
                    sincere gratitude and a prayer to the food consumed here and
                    elsewhere, to provide optimum nutrition and satiate the food
                    palates.
                </p>
                <Link href="/contact" passHref>
                    <a className="group relative z-[2] block mt-10  w-max text-sm font-semibold">
                        <span
                            className="absolute bottom-2 -left-2 w-36 h-8  border-white border
                        group-active:bottom-0 group-active:left-0 transition-all
                        group-hover:border-0 group-hover:bg-[#5C5555]
                         "
                        ></span>
                        <span
                            className="absolute top-2 left-2 w-36 h-8  bg-[#5C5555]
                        group-active:top-0 group-active:left-0 transition-all
                        group-hover:bg-transparent group-hover:border border-white"
                        ></span>
                        <span
                            className="relative w-36 h-8 flex items-center justify-center 
                        bg-primary text-black group-hover:bg-tertiary
                         group-active:scale-105 transition-all"
                        >
                            Contact us
                        </span>
                    </a>
                </Link>
            </div>
            <div
                className=" group transition-all flex overflow-hidden overscroll-x-contain
            gap-x-6 "
            >
                <IKImage
                    path="/ambience/ambience2.webp"
                    alt="Annamaya Logo"
                    transformation={[
                        {
                            width: 442,
                            height: 621,
                            radius: 30,
                        },
                    ]}
                    width="443"
                    height="621"
                    className="w-44 lg:w-60 xl:w-80 object-contain relative group-active:translate-x-[-6.2rem] group-hover:translate-x-[-6.2rem] transition-all "
                />
                <IKImage
                    path="/ambience/ambience1.webp"
                    alt="Annamaya Logo"
                    transformation={[
                        {
                            width: 442,
                            height: 621,
                            radius: 30,
                        },
                    ]}
                    width="443"
                    height="621"
                    className="w-44 lg:w-60 xl:w-80 object-contain relative group-active:translate-x-[-6.2rem] group-hover:translate-x-[-6.2rem] transition-all "
                />
            </div>
        </section>
    );
};

export default Home;
