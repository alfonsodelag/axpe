import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage({ meetups, onAddToFavorites }) {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups.map((meetup, index) => (
          <MeetupItem
            key={index}
            meetup={meetup}
            onAddToFavorites={onAddToFavorites}
          />
        ))}
      </ul>
    </section>
  );
}
