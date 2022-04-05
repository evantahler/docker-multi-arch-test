import http from "http";

function handle(req: http.IncomingMessage, res: http.ServerResponse) {
  const html = `
<body>
  <h1>Hey.</h1>
</body>
      `;

  res.writeHead(200, { "content-type": "text/html" });
  res.end(html);
  return log(req, "ok");
}

function log(req: http.IncomingMessage, note: string) {
  if (process.env.NODE_ENV === "test") return;
  const timestamp = new Date().toISOString();
  const message = `${timestamp} - [${req.method}] ${parseIp(req)} | ${note} `;
  console.log(message);
}

function parseIp(req: http.IncomingMessage) {
  return (
    ((req.headers["x-forwarded-for"] as string) || "")?.split(",").shift() ||
    req.socket?.remoteAddress
  );
}

export const server = http.createServer(handle);
