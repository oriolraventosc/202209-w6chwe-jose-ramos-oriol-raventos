import { useAppDispatch } from "../redux/hooks";
import { getAllRobotsActionCreator } from "../redux/features/RobotsSlice/RobotsSlice";
import { ApiRobot } from "../types";
import { useCallback } from "react";

const useAPI = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URL;

  const loadAllRobots = useCallback(async () => {
    const url = `${apiUrl}robots`;
    const response = await fetch(url);
    const apiResponse: ApiRobot = await response.json();
    dispatch(getAllRobotsActionCreator(apiResponse.robots));
  }, [dispatch, apiUrl]);
  return { getAllRobots: loadAllRobots };
};

export default useAPI;
