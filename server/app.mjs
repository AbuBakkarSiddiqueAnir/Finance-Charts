import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'


/* CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.get('/',(req,res)=>res.send('hello dashboard'))
app.use('/kpi',kpiRoutes)
app.use('/product',productRoutes)
app.use('/transaction',transactionRoutes)

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslValidate: false
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
  });
