import axios from "axios";
import { server } from "../src/server";

const port = 18080 + parseInt(process.env.JEST_WORKER_ID);
const url = `http://localhost:${port}`;

describe("integration test", () => {
  beforeAll(async () => {
    server.listen(port);
  });

  afterAll(async () => {
    server.close();
  });

  test("the server works", async () => {
    const response = await axios.get(url + "/");
    expect(response.data).toContain("Hey.");
    expect(response.status).toEqual(200);
  });
});
