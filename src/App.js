import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import { useFetch } from "./util-hooks/useFetch";
import { useEffect } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [meetups, setMeetups] = useState([]);
  const { data } = useFetch({ url: "/data.json" });

  useEffect(() => {
    if (data) {
      setMeetups(data);
    }
  }, [data]);

  function addToFavorites(meetup) {
    if (!favorites.some((fav) => fav.id === meetup.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, meetup]);
    }
  }

  function addNewMeetup(meetup) {
    console.log("meetup", meetup);
    setMeetups((prevMeetups) => [meetup, ...prevMeetups]);
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
            <Route
              path="/add-new-meetup"
              element={<NewMeetupsPage onAddNewMeetup={addNewMeetup} />}
            />
            <Route
              path="/"
              element={
                <AllMeetupsPage
                  meetups={meetups}
                  onAddToFavorites={addToFavorites}
                />
              }
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
