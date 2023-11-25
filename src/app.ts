import express, { Application, Request, Response } from "express";
import cors from "cors";
import { routerPath } from "./app/modules/users/user.router";
// import userRoutes  from "./app/modules/users/user.router";
const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

// app.use("/api", userRoutes.userRouter)
app.use('/', routerPath);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

export default app;