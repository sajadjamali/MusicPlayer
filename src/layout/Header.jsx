import { RandomReveal } from "react-random-reveal";

const Header = () => {
  return (
    <div className="flex z-20 sticky top-0 sm:flex-row justify-center py-5 header">
      <p className="text-3xl font-bold text-yellow-500 shadow-md shadow-gray-100 p-2">
        <RandomReveal isPlaying duration={2} characters="Music Player" />
      </p>
    </div>
  );
}

export default Header;