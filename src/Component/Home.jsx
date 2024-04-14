import Loading from "./Loading";
import ErrorPage from './ErrorPage.jsx';
import Artist from "./Artist";
import Music from "./Music";
import Particle from "./Particle";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS, GET_LIMIT_MUSIC, GET_ALL_MISICS } from "../graphql/queris";
import { useState, useRef } from "react";
import { search } from '../utils';
import '../styles/searchBox.css';

const Home = () => {

  const { loading: artistsLoading, error: artistsError, data } = useQuery(GET_ARTISTS);
  const { loading: limitedMusicsloading, error: limitedMusicsError, data: limitedMusics } = useQuery(GET_LIMIT_MUSIC);
  const { loading: allMusicsLoading, error: allMusicsError, data: allMusics } = useQuery(GET_ALL_MISICS);
  const [musicList, setMusicList] = useState([]);
  const [searchedMusics, setSearchedMusics] = useState([]);
  const ref = useRef(false);

  const handleClick = () => {
    ref.current = !ref.current;
    if (ref.current) {
      setMusicList(allMusics.musics);
      setSearchedMusics(allMusics.musics);
    }
    else {
      setMusicList(limitedMusics.musics);
      setSearchedMusics(limitedMusics.musics);
    }
  }

  const handleSearch = (e) => {
    setSearchedMusics(musicList.filter(music => search(music.name, e.target.value) || search(music.artist.name, e.target.value)))
  }

  if (artistsLoading || limitedMusicsloading || allMusicsLoading) return <Loading />;
  if (artistsError || limitedMusicsError || allMusicsError) return <ErrorPage />

  return (
    <section className="md:w-10/12 m-auto overflow-hidden sm:mt-10">
      <p className="font-bold text-3xl text-yellow-500 text-center mt-8">خوانندگان</p>
      <div className="grid px-5 mt-8 gap-7 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          data.artists.map(artist => <Artist key={artist.id} data={artist} />)
        }
      </div>
      <hr className="mt-10" />
      <p className="font-bold text-3xl text-yellow-500 text-center my-10">آهنگ ها</p>
      <button onClick={handleClick} className="bg-yellow-500 text-xl py-2 rounded-xl block w-8/12 sm:w-4/12 xl:w-2/12 m-auto hover:scale-105">{ref.current == true ? "کمتر" : "بیشتر"}</button>
      <div className={`search justify-center ${!ref.current ? 'hidden' : 'flex'}`}>
        <div className="search mt-10">
          <div>
            <input id="searchBox" onChange={handleSearch}
              title="جستجو کن" style={{ direction: "rtl" }} type="text" placeholder="نام آهنگ موردنظر را وارد کنید" />
          </div>
        </div>
      </div>
      {
        searchedMusics.length ?
          <div style={{ justifyContent: 'center' }} className="grid pb-4 mt-10 px-5 gap-4 x:gap-7 grid-cols-1 min-[300px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
              searchedMusics.map(music => <Music key={music.id} flag={true} data={music} />)
            }
          </div>
          : <p className={`text-center text-lg mt-6 text-white ${!ref.current ? 'hidden' : 'block'}`}>آیتمی با این نام وجود ندارد</p>
      }


      <Particle />
    </section>
  );
}

export default Home;