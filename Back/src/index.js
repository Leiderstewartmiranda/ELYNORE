import express from "express";
import cors from "cors";
import productsRouter from "./routes/ProductsRouter.js";
import getConection from "./config/Conection.js";

const app = express();
const PORT = 3000;

getConection();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/", productsRouter);

app.listen(PORT, () => console.log("Escuchando el puerto", PORT));
