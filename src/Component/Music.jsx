import { Link } from "react-router-dom"

const Music = ({ data, flag }) => {

    const { name, slug, coverPhoto: { url }, artist } = data;

    return (
        <>
            <Link to={`/musics/${slug}`} style={{ transition: "transform .3s" }} className="flex flex-col items-center hover:scale-105">
                <div className="px-3 py-5 h-full ring-4 ring-yellow-500 rounded-md bg-indigo-900">
                    <img style={{ borderRadius: "0 100% 100% 100%" }} src={url} alt="not found" />
                    <p className="mt-2 font-bold text-center text-yellow-500">{name}</p>
                    {
                        flag &&
                        <p className="text-md mt-2 font-bold text-center text-white">{artist.name}</p>
                    }
                </div>
            </Link>
        </>
    );
}

export default Music;