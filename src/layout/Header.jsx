import { RandomReveal } from "react-random-reveal";
import logo from "/assets/images/logo.png"

const Header = () => {
  return (
    <div className="flex justify-center items-center min-[280px]:space-x-1 z-20 sticky top-0 py-4 header">
      <p className="text-2xl min-[230px]:text-3xl font-bold text-yellow-500 shadow-md shadow-gray-100 p-2">
        <RandomReveal isPlaying duration={2} characters="Music Player" />
      </p>
      <img src={logo} title="welcome to music player❤" alt="not found" className="w-16 hidden  min-[280px]:block" />
    </div>
  );
}

export default Header;