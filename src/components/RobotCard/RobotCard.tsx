import { Robot } from "../../types.js";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  const {
    name,
    image,
    creation,
    features: { speed, resistance },
  } = robot;
  return (
    <div className="card">
      <img src={image} alt={name} width="200" height="200" />
      <h2 className="card__name">{name}</h2>
      <div className="card__especifications">
        <span>Creation: {creation}</span>
        <span>Speed: {speed}</span>
        <span>Resistance: {resistance}</span>
      </div>
    </div>
  );
};

export default RobotCard;
