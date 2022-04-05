import { server } from "./server";

const port = process.env.PORT || "8080";

function exit() {
  console.log("*** Bye! ***");
  server.close();
  process.exit(0);
}

process.on("SIGINT", () => exit());
process.on("SIGTERM", () => exit());
process.on("SIGHUP", () => exit());
process.on("SIGUSR2", () => exit());

server.listen(port);

console.log(`*** Server up and running ***`);
console.log("");
