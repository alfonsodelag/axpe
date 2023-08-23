import { useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(meetup) {
    // Check if the meetup is already in the favorites array
    if (!favorites.some((fav) => fav.id === meetup.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, meetup]);
    }
  }

  function getCurrentPageComponent() {
    let currentPageComponent;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = (
          <AllMeetupsPage onAddToFavorites={addToFavorites} />
        );
    }

    return currentPageComponent;
  }

  return (
    <div data-test="app">
      <MainNavigation setPage={setPage} favoritesCount={favorites.length} />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
