import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(meetup) {
    if (!favorites.some((fav) => fav.id === meetup.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, meetup]);
    }
  }

  return (
    <Router>
      <div data-test="app">
        <MainNavigation favoritesCount={favorites.length} />
        <Layout>
          <Routes>
            <Route
              path="/favorites"
              element={<FavoritesPage favorites={favorites} />}
            />
            <Route path="/add-new-meetup" element={<NewMeetupsPage />} />
            <Route
              path="/"
              element={<AllMeetupsPage onAddToFavorites={addToFavorites} />}
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
