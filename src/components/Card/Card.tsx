import { useAppSelector } from "../../redux/hooks";

const Card = (): JSX.Element => {
  const robotsMethods = useAppSelector(
    ({ robotsActions }) => robotsActions.robots
  );
  return (
    <article>
      {robotsMethods.map((robot) => (
        <div>
          <img src={robot.name} alt={robot.image} />
          <h2>Name: {robot.name}</h2>
          <span>Creation: {robot.creation}</span>
          <span>Speed: {robot.features.speed}</span>
          <span>Resistance: {robot.features.resistance}</span>
        </div>
      ))}
    </article>
  );
};

export default Card;
