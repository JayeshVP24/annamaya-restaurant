const Map: React.FC = () => {
    return (
        <section
            id="map"
            className="py-12 mt-12 lg:mt-24 border-t border-b border-primary"
        >
            <iframe
            title="Annamay Restaurant Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7850.630637991672!2d72.83307354475072!3d18.982201511278518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf3e8b5a8789%3A0x518069b484cb46f8!2sAnnamaya%20-%20Multi%20Cuisine%20Veg%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1638088361848!5m2!1sen!2sin"
                width="800"
                height="600"
                className="border-0 w-full h-[50vh]"
                style={{
                    filter: "invert(92%) contrast(83%)",
                    border: 0,
                }}
                allowFullScreen
                loading="lazy"
            />
        </section>
    );
};

export default Map