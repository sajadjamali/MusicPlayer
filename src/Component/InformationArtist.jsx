import Particle from "./Particle";
import Loading from "./Loading";
import Music from "./Music";
import { useParams } from "react-router-dom";
import { GET_ARTIST } from "../graphql/queris";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";

const InformationArtist = () => {

    const { artistName } = useParams();
    const { loading, data } = useQuery(GET_ARTIST, {
        variables: { slug: artistName }
    })

    if (loading) return <Loading />

    const { name, image: { url }, musics, description: { html } } = data.artist;

    return (
        <div className="px-7">
            <Link to="/" className="block text-center py-1 rounded-md mx-auto md:ms-auto md:me-10 mt-8 bg-yellow-500 w-40 hover:scale-105">خانه</Link>
            <p className="text-3xl font-bold text-yellow-500 my-10 text-center">{name}</p>
            <img src={url} className="rounded-xl ring-4 ring-yellow-500 mx-auto" alt="not found" />
            <div style={{ direction: "rtl" }} className="text-white mt-10 space-y-4 md:px-10" dangerouslySetInnerHTML={{
                __html: sanitizeHtml(html),
            }}>
            </div>
            <p className="font bold text-3xl text-center text-yellow-500 mt-10">آهنگ های {name}</p>
            <div className="grid mt-6 px-5 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {
                    musics.map(music => <Music key={music.id} flag={false} data={music} />)
                }
            </div>
            <Particle />
        </div>
    );
}

export default InformationArtist;