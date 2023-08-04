import Particle from "./Particle";
import MusicPlayer from "./MusicPlayer";
import sanitizeHtml from "sanitize-html";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import { GET_MUSIC_DATA } from "../graphql/queris";
import Header from "./Header";

const InforMationMusic = () => {

    const { musicName } = useParams();
    const { loading, data } = useQuery(GET_MUSIC_DATA, {
        variables: { slug: musicName }
    })

    if(loading) return <Loading />
    const { name, id, coverPhoto: { url }, lyrics: { html }, artist } = data.music;
    const playing = artist.musics.filter(music => music.id === id);

    return (
        <section className="mb-20">
            <Header/>
        <p className="text-center gont-bold text-3xl mt-10 text-yellow-500">{name}</p>
        <p className="text-center gont-bold text-3xl text-white mt-5">{artist.name}</p>
        <div className="flex justify-center">
        <img src={url} className="ring-4 ring-yellow-500 rounded-md mt-10" alt="not found" />
        </div>
        <div
        style={{direction: "rtl"}} className="text-white text-center pb-80 mt-10 space-y-4 px-20" 
         dangerouslySetInnerHTML={{
         __html: sanitizeHtml(html),
         }}>
        </div>
        <MusicPlayer data={playing}/>
        <Particle/>
        </section>
    );
}

export default InforMationMusic;