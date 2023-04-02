// Type
import { DummyType } from "./PlanetData";

// CSS
import classes from "./Planet.module.sass";

interface Props {
  onClick: (planet: DummyType) => void;
  DUMMY_PLANET: DummyType[];
}

const Planet = (props: Props) => {
  const handleClickPlanet = (planet: DummyType) => {
    console.log(planet);
    props.onClick(planet);
  };
  return (
    <div className={classes["planet-bg"]}>
      <div className={classes["planet-item"]}>
        {props.DUMMY_PLANET.map((planet) => {
          return (
            <ul key={planet.id} onClick={() => handleClickPlanet(planet)} className={classes["planet-item__list"]}>
              <li className={classes["planet-list"]}>
                <div className={classes["planet-img"]}>
                  <div>{planet.img}</div>
                </div>
                <div className={classes["planet-text"]}>
                  <div>{planet.desc}</div>
                  <div>{planet.title}</div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Planet;
