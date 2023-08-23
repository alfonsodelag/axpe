import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage, favoritesCount }) {
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="/all-meetups" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="/add-new-meetup" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="/favorites" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
