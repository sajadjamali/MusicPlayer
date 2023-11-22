import { Link } from "react-router-dom";

const Artist = ({ data }) => {
    return (
        <>
            <Link to={`/artists/${data.slug}`} style={{ transition: "transform .3s" }} className="flex flex-col items-center hover:scale-110">
                <img src={data.image.url} alt="not found" className="rounded-lg ring-4 ring-yellow-500 h-60" />
                <p className="text-lg mt-1 font-bold text-yellow-500">{data.name}</p>
            </Link>
        </>
    );
}

export default Artist;