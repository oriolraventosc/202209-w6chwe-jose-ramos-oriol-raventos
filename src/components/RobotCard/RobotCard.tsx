import { Robot } from "../../types.js";

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
    <div>
      <img src={image} alt={name} />
      <h2>Name:{name} </h2>
      <span>Creation:{creation}</span>
      <span>Speed:{speed} </span>
      <span>Resistance:{resistance} </span>
    </div>
  );
};

export default RobotCard;
