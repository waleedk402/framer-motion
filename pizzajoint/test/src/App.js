import logo from "./logo.svg";
import "./App.css";
import {motion} from "framer-motion";

function App() {
  return (
    <div className="">
      <header className="">
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300 ">
          <motion.path
            d="M50 50 m-45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
            fill="none"
            stroke="w"
            strokeWidth="2"
            initial={{pathLength: 0, pathOffset: 1}}
            animate={{pathLength: 1, pathOffset: 0}}
            transition={{duration: 1, ease: "easeInOut", repeat: Infinity}}
          />
          {/* <motion.path
            d="M50 50 L50 15"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{pathLength: 0, pathOffset: 1}}
            animate={{pathLength: 1, pathOffset: 0}}
            transition={{duration: 1, ease: "easeInOut", repeat: Infinity}}
          />
          <motion.path
            d="M50 50 L85 50"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{pathLength: 0, pathOffset: 1}}
            animate={{pathLength: 1, pathOffset: 0}}
            transition={{duration: 1, ease: "easeInOut", repeat: Infinity}}
          /> */}
          {/* <circle cx="50" cy="50" r="2" fill="black"/> */}
        </motion.svg>
      </header>
    </div>
  );
}

export default App;