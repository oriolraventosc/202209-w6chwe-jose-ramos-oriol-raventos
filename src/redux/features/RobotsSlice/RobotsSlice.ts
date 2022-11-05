import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RobotStructure from "../../../types";

export interface RobotState {
  robots: RobotStructure[];
}

export const initialRobotState: RobotState = {
  robots: [],
};

const RobotsSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    getAllRobots: (initialState, action: PayloadAction<RobotStructure[]>) => ({
      ...initialState,
      robots: [...action.payload],
    }),
  },
});

export const robotReducer = RobotsSlice.reducer;

export const { getAllRobots: getAllRobotsActionCreator } = RobotsSlice.actions;
