import { IKImage } from "imagekitio-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

const Dishes: React.FC = () => {
    const dishes: {
        path: string;
        name: string;
        price: string;
    }[] = [
        {
            path: "/dishes/pizza.webp",
            name: "Farmhouse Pizza",
            price: "250",
        },
        {
            path: "/dishes/tacos.webp",
            name: "Tacos",
            price: "250",
        },
        {
            path: "/dishes/paneer-tikka-masala.webp",
            name: "Paneer Tikka Masala",
            price: "250",
        },
        {
            path: "/dishes/burritos.webp?fo-custom,cm-extract",
            name: "Burritos",
            price: "250",
        },
        {
            path: "/dishes/nachos.webp",
            name: "Nachos",
            price: "250",
        },
        {
            path: "/dishes/mac-n-cheese.webp",
            name: "Mac n Cheese",
            price: "250",
        },
    ];

    return (
        <section id="dishes" className="mt-12 lg:mt-24 px-10 lg:px-20">
            <h2 className="font-pacifico text-center text-2xl lg:text-3xl xl:text-4xl ">
                Our Dishes
            </h2>
            <div
                className="grid grid-cols-1 mt-8 lg:mt-16 gap-4
            md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8"
            >
                {dishes.map((d) => (
                    <div
                        key={d.name}
                        className="w-full h-full relative rounded-2xl overflow-hidden"
                    >
                        <picture>
                            <source
                                media="(min-width:1536px)"
                                srcSet={`https://ik.imagekit.io/elightlabs/Annamaya/tr:h-465,w-760${d.path}`}
                            />
                            <source
                                media="(min-width:1280px)"
                                srcSet={`https://ik.imagekit.io/elightlabs/Annamaya/tr:h-375,w-619${d.path}`}
                            />
                            <source
                                srcSet={`https://ik.imagekit.io/elightlabs/Annamaya/tr:h-277,w-457${d.path}`}
                            />
                            <IKImage
                                src={
                                    "https://ik.imagekit.io/elightlabs/Annamaya/tr:h-277,w-457" +
                                    d.path
                                }
                                alt={d.name}
                                loading="lazy"
                                transformation={[
                                    {
                                        width: 457,
                                        height: 277,
                                        radius: 25,
                                        quality: 20,
                                        "fo-custom": "",
                                    },
                                ]}
                                width="457"
                                height="277"
                                className="w-full"
                            />
                        </picture>

                        <span
                            className="w-full h-full absolute top-0 "
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 70.83%, rgba(0, 0, 0, 0.6) 85.42%)",
                            }}
                        />
                        <span className="w-full font-medium flex justify-around absolute bottom-4 ">
                            <h3 className="">{d.name}</h3>
                            <h3 className="text-primary">₹ 250</h3>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dishes