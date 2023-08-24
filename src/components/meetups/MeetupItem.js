import { useState } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem({ meetup, onAddToFavorites }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    onAddToFavorites(meetup);
    setIsFavorited(true);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div>
          <div className={classes.image}>
            <img src={meetup.image} alt={meetup.title} />
          </div>
          <div className={classes.content}>
            <h3 data-test="favorited-meetup-title">{meetup.title}</h3>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
          </div>
          <div className={classes.actions}>
            <button
              data-test="add-to-favorites-button"
              onClick={handleFavoriteClick}
              className={isFavorited ? classes.favorited : ""}
            >
              {isFavorited ? "Added to Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
}
