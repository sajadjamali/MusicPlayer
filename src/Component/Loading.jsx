import loading from "../assets/gifs/loading.gif";
import Particle from "./Particle";

const Loading = () => {
    return (
        <section className="h-screen w-6/12 m-auto flex flex-col items-center justify-center">
            <div>
                <img className="rounded-full" src={loading} alt="not found" />
                <p className="font bold text-3xl mt-3 text-center text-white">Loading...🎶🎶</p>
            </div>
            <Particle />
        </section>
    );
}

export default Loading;