import React from "react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { IKImage } from "imagekitio-react";

const Drinks: React.FC = () => {
    const drinks: {
        path: string;
        name: string;
        price: string;
    }[] = [
        {
            path: "/drinks/cranberry-sunset.webp",
            name: "Cranberry Sunset",
            price: "250",
        },
        {
            path: "/drinks/kiwi-margherita.webp",
            name: "Kiwi Margherita",
            price: "250",
        },
        {
            path: "/drinks/orange-sunrise.webp",
            name: "Orange Sunrise",
            price: "250",
        },
        {
            path: "/drinks/blue-sky.webp",
            name: "Blue Sky",
            price: "250",
        },
        {
            path: "/drinks/club-libro.webp",
            name: "Club Libro",
            price: "250",
        },
        {
            path: "/drinks/sunset-on-the-beach.webp",
            name: "Sunset on the Beach",
            price: "250",
        },
        {
            path: "/drinks/long-island-beach-tea.webp",
            name: "Long Island Beach Tea",
            price: "250",
        },
    ];

    const slides: any[] = [];

    drinks.forEach((d) => {
        slides.push(
            <SwiperSlide tag="li" key={`drink-${d.name}`}>
                <div>
                    <IKImage
                        loading="lazy"
                        path={d.path}
                        width="348"
                        height="523"
                        transformation={[
                            {
                                width: 348,
                                height: 523,
                                radius: 25,
                                quality: 75,
                            },
                        ]}
                        className="mx-auto w-full list-none rounded-[25px]"
                        alt={`drink ${d.name}`}
                    />
                    <span
                        className="w-full h-full rounded-[25px] absolute top-0 "
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 70.83%, rgba(0, 0, 0, 0.6) 85.42%)",
                        }}
                    />
                    <span className="w-full font-medium px-4 rounded-[25px] flex justify-around absolute bottom-8 ">
                        <h3 className="mr-4">{d.name}</h3>
                        <h3 className="text-primary ">₹250</h3>
                    </span>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <section id="drinks" className="mt-12 lg:mt-24 px-10 lg:px-20">
            <h2 className="font-pacifico text-center text-2xl lg:text-3xl xl:text-4xl ">
                Our Drinks
            </h2>
            <picture className="mt-8 lg:mt-16 block">
                <source
                    media="(min-width:1536px)"
                    srcSet="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-5-2,r-30,w-1536,,fo-bottom/all-drinks.webp"
                />
                <source
                    media="(min-width:1280px)"
                    srcSet="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-5-2,r-30,w-1280,fo-bottom/all-drinks.webp"
                />
                <source
                    media="(min-width:1024px)"
                    srcSet="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-6-3,r-30,w-1024,fo-bottom/all-drinks.webp"
                />
                <source
                    media="(min-width:640px)"
                    srcSet="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-6-3,r-20,w-768,fo-bottom/all-drinks.webp"
                />
                <source srcSet="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-5-3,r-20,w-360,fo-bottom/all-drinks.webp" />
                <IKImage
                    className="w-full"
                    src="https://ik.imagekit.io/elightlabs/Annamaya/drinks/tr:ar-5-4,w-360/all-drinks.webp 360w"
                    width="600"
                    height="200"
                    transformation={[
                        {
                            radius: 30,
                        },
                    ]}
                    lqip={{ active: true }}
                />
            </picture>
            <div className="w-full relative z-0 mt-8 lg:mt-16">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    modules={[Pagination, Navigation, Mousewheel]}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        el: ".drinksPagination",
                    }}
                    mousewheel={{
                        releaseOnEdges: true,
                    }}
                    navigation={{
                        nextEl: ".drinkNext",
                        prevEl: ".drinkPrev",
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {slides}
                </Swiper>

                <div className="w-full flex justify-center items-center gap-x-4 md:gap-x-12 mt-6 lg:mt-8">
                    <button
                    aria-label="previous drink"
                        className="drinkPrev rotate-180 border-primary border p-6 
                    hover:bg-primary hover:bg-opacity-20"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.172 6.97146L6.808 1.45436L8.222 0L16 8L8.222 16L6.808 14.5456L12.172 9.02854H0V6.97146H12.172Z"
                                fill="#F3D950"
                            />
                        </svg>
                    </button>
                    <div className="drinksPagination md:mx-8 flex w-max md:w-auto flex-wrap items-center gap-x-3 gap-y-2 justify-center md:gap-x-4"></div>
                    <button
                        aria-label="next drink"
                        className=" drinkNext border-primary border p-6 
                    hover:bg-primary hover:bg-opacity-20"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.172 6.97146L6.808 1.45436L8.222 0L16 8L8.222 16L6.808 14.5456L12.172 9.02854H0V6.97146H12.172Z"
                                fill="#F3D950"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Drinks