import { useAppDispatch } from "../redux/hooks";
import { getAllRobotsActionCreator } from "../redux/features/RobotsSlice/RobotsSlice";
import { ApiRobot } from "../types";
import { useCallback } from "react";

const useAPI = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.MONGODB_URL;

  const getAllRobots = useCallback(async () => {
    const url = `${apiUrl}robots`;
    const response = await fetch(url, { method: "GET" });
    const apiResponse: ApiRobot = await response.json();
    dispatch(getAllRobotsActionCreator(apiResponse.robots));
  }, [apiUrl, dispatch]);
  return { getAllRobots };
};

export default useAPI;
