import { Link } from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { RandomReveal } from "react-random-reveal";
import { useState, useEffect } from "react"
import { Height } from "@mui/icons-material";

const Header = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const timerID = setInterval(
            () => tick(),
            1000
        );
      return () => {
          clearInterval(timerID);
      }
    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
            <div className="flex flex-col sticky top-0 py-4 space-y-6 sm:flex-row sm:space-y-0 justify-evenly items-center header h-36">
               <p className="text-3xl font-bold text-yellow-500 shadow-md shadow-gray-100 sm:order-2 p-2">
                    <RandomReveal isPlaying duration={3} characters="Music Player" />
                </p>
               <div className="lg:text-xl text-white sm:order-3">
                {date.toLocaleTimeString()}
                {"  "}
                {date.getFullYear()}
                {" /  "}
                {date.getDate()}
                {" /  "}
                {date.getMonth()}
               </div>
               <div className="font-bold text-3xl space-x-3 sm:order-1">
                <a href="https://www.instagram.com/"><InstagramIcon style={{fontSize: "1.3em"}} className="text-pink-400 hover:shadow-md hover:shadow-gray-200"/></a>
                <a href="https://telegram.org/"><TelegramIcon style={{fontSize: "1.3em"}} className="text-blue-400 hover:shadow-md hover:shadow-gray-200"/></a>
                <a href="https://telegram.org/"><TwitterIcon style={{fontSize: "1.3em"}} className="text-blue-400 hover:shadow-md hover:shadow-gray-200"/></a>
               </div>
             </div>
    );
}

export default Header;