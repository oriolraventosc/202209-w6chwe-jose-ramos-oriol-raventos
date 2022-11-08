import { rest } from "msw";
import robotsMock from "./robotsMock";

const apiUrl = process.env.REACT_APP_URL;

const handlers = [
  rest.get(`${apiUrl}robots`, async (request, response, context) => {
    return response(context.status(200), context.json(robotsMock));
  }),
  rest.delete(
    `${apiUrl}robots/:idRobot?tokken=${process.env.REACT_APP_TOKEN}`,
    async (request, response, context) => {
      return response(context.status(200), context.json(robotsMock));
    }
  ),
];

export default handlers;
