import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot } from "../../../types.js";

export interface RobotState {
  robots: Robot[];
}

export const initialRobotState: RobotState = {
  robots: [],
};

const RobotsSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    getAllRobots: (
      initialState,
      action: PayloadAction<Robot[]>
    ): RobotState => ({
      ...initialState,
      robots: [...action.payload],
    }),
  },
});

export const robotReducer = RobotsSlice.reducer;

export const { getAllRobots: getAllRobotsActionCreator } = RobotsSlice.actions;
