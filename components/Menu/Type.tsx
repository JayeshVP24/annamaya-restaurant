import { items } from "../../utils/menuItems";

const Type: React.FC<{ type: items[] }> = ({ type }) => {
    return (
        <div
            className="flex flex-col gap-y-3 lg:gap-y-5
        lg:flex-row flex-wrap justify-around"
        >
            {type.map((m) => (
                <span
                    className="flex w-full md:w-3/4 lg:w-2/5  last:justify-self-start justify-between"
                    key={m.item}
                >
                    <p className="mr-4">{m.item}</p>
                    <p className="w-max">{m.price}/-</p>
                </span>
            ))}
        </div>
    );
};

export default Type