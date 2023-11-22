// import error from "../assets/gifs/error.gif";
import Particle from "./Particle";

const ErrorPage = () => {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center">
                {/* <img src={error} className="rounded-full w-6/12" alt="not found" /> */}
                <p className="text-white font-bold text-4xl mt-4">Error....🤦‍♂️</p>
            </section>
            <Particle />
        </>
    );
}

export default ErrorPage;