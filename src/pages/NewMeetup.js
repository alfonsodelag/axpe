import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function NewMeetupsPage({ onAddNewMeetup }) {
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const meetupData = {
      id: uuidv4(),
      title: event.target.title.value,
      image: event.target.image.value,
      address: event.target.address.value,
      description: event.target.description.value,
    };

    onAddNewMeetup(meetupData);
    navigate("/");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onSubmit={submitHandler} />
    </section>
  );
}
