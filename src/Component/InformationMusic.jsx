import Particle from "./Particle";
import MusicPlayer from "./MusicPlayer";
import sanitizeHtml from "sanitize-html";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import ErrorPage from './ErrorPage.jsx';
import { GET_MUSIC_DATA } from "../graphql/queris";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const InforMationMusic = () => {

    const { musicName } = useParams();
    const { loading, error, data } = useQuery(GET_MUSIC_DATA, {
        variables: { slug: musicName }
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <Loading />
    if (error) return <ErrorPage />

    const { name, id, coverPhoto: { url }, lyrics: { html }, artist } = data.music;
    const playing = artist.musics.filter(music => music.id === id);

    return (
        <section>
            <Link to="/" className="block text-center py-1 rounded-md mx-auto md:ms-auto md:me-10 mt-8 bg-yellow-500 w-40 hover:scale-105">خانه</Link>
            <p className="text-center gont-bold text-3xl mt-7 text-yellow-500">{name}</p>
            <p className="text-center gont-bold text-3xl text-white mt-3">{artist.name}</p>
            <div className="flex justify-center">
                <img data-aos="zoom-in-up" src={url} className="ring-4 w-10/12 h-96 sm:w-8/12 md:w-6/12 ring-yellow-500 rounded-md mt-7" alt="not found" />
            </div>
            <div
                style={{ direction: "rtl" }} className="text-white text-center pb-60 mt-7 space-y-4 px-20"
                dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(html),
                }}>
            </div>
            <MusicPlayer data={playing} />
            <Particle />
        </section>
    );
}

export default InforMationMusic;