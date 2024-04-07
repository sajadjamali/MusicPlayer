import Particle from "./Particle";
import Loading from "./Loading";
import ErrorPage from './ErrorPage.jsx';
import Music from "./Music";
import { useParams } from "react-router-dom";
import { GET_ARTIST } from "../graphql/queris";
import { useQuery } from "@apollo/client";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const InformationArtist = () => {

    const { artistName } = useParams();
    const { loading, error, data } = useQuery(GET_ARTIST, {
        variables: { slug: artistName }
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <Loading />
    if (error) return <ErrorPage />

    const { name, image: { url }, musics, description: { html } } = data.artist;

    return (
        <div className="px-7">
            <Link to="/" className="block text-center py-1 rounded-md mx-auto md:ms-auto md:me-10 mt-8 bg-yellow-500 w-40 hover:scale-105">خانه</Link>
            <p className="text-3xl font-bold text-yellow-500 my-10 text-center">{name}</p>
            <img data-aos="zoom-in-up" src={url} className="rounded-xl ring-4 ring-yellow-500 lg:w-7/12 lg:h-[500px] mx-auto" alt="not found" />
            <div style={{ direction: "rtl" }} className="text-white lg:w-8/12 lg:mx-auto mt-10 space-y-4 md:px-10" dangerouslySetInnerHTML={{
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