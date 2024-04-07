import Loading from "./Loading";
import Artist from "./Artist";
import Music from "./Music";
import Particle from "./Particle";
import { useQuery } from "@apollo/client";
import a from "/assets/images/a.png"
import { GET_ARTISTS, GET_LIMIT_MUSIC, GET_ALL_MISICS } from "../graphql/queris";
import { useState, useRef } from "react";

const Home = () => {

  const { loading, data } = useQuery(GET_ARTISTS);
  const { loading: loading1, data: data1 } = useQuery(GET_LIMIT_MUSIC);
  const { loading: loading2, data: data2 } = useQuery(GET_ALL_MISICS);
  const [musicList, setMusicList] = useState([]);
  const ref = useRef(false);

  if (loading || loading || loading2) {
    return <Loading />;
  }

  const handleClick = () => {
    ref.current = !ref.current;
    if (ref.current)
      setMusicList(data2.musics);
    else
      setMusicList(data1.musics);
  }

  return (
    <section className="md:w-10/12 m-auto overflow-hidden">
      <img src={a} title="welcome to music player❤" alt="not found" className="text-center m-auto mt-6 w-6/12 md:w-3/12 lg:w-2/12" />
      <p className="font-bold text-3xl text-yellow-500 text-center mt-8">خوانندگان</p>
      <div className="grid px-5 mt-8 gap-7 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          data.artists.map(artist => <Artist key={artist.id} data={artist} />)
        }
      </div>
      <hr className="mt-10" />
      <p className="font-bold text-3xl text-yellow-500 text-center my-10">آهنگ ها</p>
      <button onClick={handleClick} className="bg-yellow-500 font-bold text-2xl py-2 rounded-xl block w-10/12 md:w-6/12 m-auto">{ref.current == true ? "کمتر" : "بیشتر"}</button>
      <div className="grid mt-10 pb-4 px-5 gap-4 x:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          musicList.map(music => <Music key={music.id} flag={true} data={music} />)
        }
      </div>
      <Particle />
    </section>
  );
}

export default Home;