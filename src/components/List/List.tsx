import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import { r } from "msw/lib/glossary-dc3fd077";
import Card from "../Card/Card";

const RobotList = (): JSX.Element => {
  const robotsList = useAppSelector(
    ({ robotsActions }) => robotsActions.robots
  );
  const { getAllRobots } = useAPI();
  useEffect(() => {
    getAllRobots();
  }, [getAllRobots]);

  return (
    <ul>
      {robotsList.map((robotList, index) => (
        <Card key={index}></Card>
      ))}
    </ul>
  );
};

export default RobotList;
