import { useAppDispatch } from "../redux/hooks";
import { getAllRobotsActionCreator } from "../redux/features/RobotsSlice/RobotsSlice";
import { ApiRobot } from "../types";

const useAPI = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.MONGODB_URL;

  const getAllRobots = async () => {
    const url = `${apiUrl}robots`;
    const response = await fetch(url);
    const apiResponse: ApiRobot = await response.json();
    dispatch(getAllRobotsActionCreator(apiResponse.robots));
  };
  return { getAllRobots };
};

export default useAPI;
