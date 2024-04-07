import { Link } from "react-router-dom";

const Artist = ({ data }) => {
    return (
        <>
            <Link id="artist" data-aos="fade-right" to={`/artists/${data.slug}`} className="flex flex-col items-center">
                <img src={data.image.url} alt="not found" className="rounded-lg ring-4 w-full ring-yellow-500 h-60" />
                <p className="text-lg mt-1 font-bold text-yellow-500">{data.name}</p>
            </Link>
        </>
    );
}

export default Artist;