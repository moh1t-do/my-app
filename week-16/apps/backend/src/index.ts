import Express, { Request, Response } from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = Express();

console.log(BACKEND_URL);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    health: true,
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
