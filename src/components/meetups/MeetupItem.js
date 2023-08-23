import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ onAddToFavorites }) {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        {data.map((item, index) => (
          <div key={index}>
            <div className={classes.image}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={classes.content}>
              <h3>{item.title}</h3>
              <address>{item.address}</address>
              <p>{item.description}</p>
            </div>
            <div className={classes.actions}>
              <button onClick={() => onAddToFavorites(item)}>
                Add to favorites
              </button>
            </div>
          </div>
        ))}
      </Card>
    </li>
  );
}
