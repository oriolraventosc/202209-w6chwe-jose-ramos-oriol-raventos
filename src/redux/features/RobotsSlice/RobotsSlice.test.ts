import {
  robotReducer,
  getAllRobotsActionCreator,
  initialRobotState,
  RobotState,
} from "./RobotsSlice";
import robotsMock from "../../../mocks/robotsMock";

describe("Given a robotReducer", () => {
  describe("When it is invoked with getAllRobots", () => {
    test("Then it should receive a list with three robots", () => {
      const action = getAllRobotsActionCreator(robotsMock);
      const expectedState: RobotState = {
        robots: robotsMock,
      };

      const newState = robotReducer(initialRobotState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
