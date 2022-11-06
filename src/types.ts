interface Robot {
  name: string;
  image: string;
  creation: number;
  features: {
    speed: number;
    resistance: number;
  };
}

export interface ApiRobot {
  robots: Robot[];
}
export default Robot;
