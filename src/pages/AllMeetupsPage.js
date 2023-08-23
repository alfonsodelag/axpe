import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage({ onAddToFavorites }) {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem onAddToFavorites={onAddToFavorites} />
      </ul>
    </section>
  );
}
