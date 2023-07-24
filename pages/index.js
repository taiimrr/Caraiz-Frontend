import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import ComingSoon from "./home/coming_soon";
import Home from "./home/home";

export default function Home1() {
  const { scrollRef } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
      <Home />
    </>
  );
}
