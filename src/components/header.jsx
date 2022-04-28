import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/channels");
    });
  };
  return (
    <header className="flex items-center bg-discord_blue justify-between py-4 px-6">
      <a className="text-white object-contain" href="/">
        <Logo className="w-32 h-12 object-contain" />
      </a>
      <div className="hidden lg:flex space-x-6 ">
        <a href="/" className="link">
          Download
        </a>
        <a href="/" className="link">
          Why Discord?
        </a>
        <a href="/" className="link">
          Nitro
        </a>
        <a href="/" className="link">
          Safety
        </a>
        <a href="/" className="link">
          Support
        </a>
      </div>
      <div className="space-x-4 flex">
        <button
          onClick={!user ? signIn : navigate("/channels")}
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white lg:hidden " />
      </div>
    </header>
  );
};

export default Header;
