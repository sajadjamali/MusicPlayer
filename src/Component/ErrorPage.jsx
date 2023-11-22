import Error from "../assets/gifs/Error.gif";
import Particle from "./Particle";

const ErrorPage = () => {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center">
                <img src={Error} className="rounded-full w-6/12" alt="not found" />
                <p className="text-white font-bold text-4xl mt-4">Error....🤦‍♂️</p>
            </section>
            <Particle />
        </>
    );
}

export default ErrorPage;