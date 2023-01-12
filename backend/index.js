import express  from "express";
import mongoose from "mongoose";
import cors from "cors"
import Route from './routes/route.js'

const app = express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Tokped', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(Route);

app.listen(3000, () =>  console.log("server berjalan"));
