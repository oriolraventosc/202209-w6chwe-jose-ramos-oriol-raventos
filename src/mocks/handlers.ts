import { rest } from "msw";
import robotsMock from "./robotsMock";

const apiUrl = process.env.MONGODB_URL_MOCK;

const handlers = [
  rest.get(`${apiUrl}robots`, async (request, response, context) => {
    return response(context.status(200), context.json(robotsMock));
  }),
  rest.get(`${apiUrl}robots/:idRobot`, async (request, response, context) => {
    return response(context.status(200), context.json(robotsMock));
  }),
];

export default handlers;
