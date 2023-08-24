import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function MainNavigation({ favoritesCount }) {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    function handleScroll() {
      let currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      // Start hiding the header after scrolling down more than 150 pixels
      if (
        currentScrollTop > 150 &&
        currentScrollTop > lastScrollTop.current &&
        !isHidden
      ) {
        setIsHidden(true);
      } else if (
        currentScrollTop < lastScrollTop.current ||
        currentScrollTop <= 150
      ) {
        setIsHidden(false);
      }

      lastScrollTop.current = currentScrollTop;
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return (
    <header
      className={`${classes.header} ${isHidden ? classes.headerhidden : ""}`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/add-new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites" data-test="favorites-link">
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
