import Card from "../components/ui/Card";
import classes from "./Favorites.module.css";

export default function FavoritesPage({ favorites }) {
  return (
    <>
      <h1>Favorites Page</h1>
      <section>
        {favorites.length > 0 &&
          favorites.map((item, index) => {
            return (
              <ul key={index} className={classes.list}>
                <li className={classes.item} data-test="meet-up-item">
                  <Card>
                    <div>
                      <div className={classes.image}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={classes.content}>
                        <h3>{item.title}</h3>
                        <address>{item.address}</address>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </li>
              </ul>
            );
          })}
      </section>
    </>
  );
}
