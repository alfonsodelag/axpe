import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ onSubmit }) {
  return (
    <Card>
      <form
        className={classes.form}
        onSubmit={onSubmit}
        data-test="new-meetup-form"
      >
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            data-test="meetup-title-input"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            data-test="meetup-image-input"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            data-test="meetup-address-input"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            data-test="meetup-description-textarea"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button data-test="add-meetup-button">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
