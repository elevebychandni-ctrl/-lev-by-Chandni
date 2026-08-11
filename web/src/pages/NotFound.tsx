import { useEffect } from "react";
import { Link } from "react-router-dom";

/** 404 — a quiet editorial dead end, set in the site's own language. */
const NotFound = () => {
  useEffect(() => {
    document.title = "Page not found · Élevé by Chandni";
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center font-sans text-espresso">
      <p className="font-sans text-[10px] uppercase tracking-micro text-cocoa">Élevé by Chandni</p>
      <h1 className="mt-6 font-display text-[clamp(3rem,10vw,5rem)] font-medium leading-none text-espresso">404</h1>
      <p className="mt-5 font-display text-[17px] italic text-bronze">This page does not exist.</p>
      <Link
        to="/"
        className="link-line mt-10 font-sans text-[11px] uppercase tracking-micro text-espresso transition-colors duration-500 hover:text-bronze"
      >
        Return to the site
      </Link>
    </div>
  );
};

export default NotFound;
