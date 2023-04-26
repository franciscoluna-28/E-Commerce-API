import express from "express";
import productRoutes from "./application/routes/Product";

const app = express();

// Product routing
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
