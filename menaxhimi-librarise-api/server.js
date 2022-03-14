import express from 'express';
import usersRouter from './api/routes/usersRoute';
import getAuthToken from './api/middlewares/getAuthToken';
import cors from 'cors';
import helmet from 'helmet';
import menaxhimiLibrariseRoute from './api/routes/menaxhimiLibrariseRoute';
import mongoose from 'mongoose';
import fileupload from"express-fileupload";
import newsRoute from './api/routes/newsRoute';
import assetsRoute from './api/routes/assetsRoute';

mongoose.connect("mongodb://localhost:27017/menaxhimi-librarise-db").then( () => {
  console.log('Connected to mongodb, port 27017!');

  
const port = process.env.PORT || 4000;


const app = express();

app.use(
  cors({
  origin:"*"
}));

// static/:filename
app.use('/static', express.static(`${__dirname}/public/files`));

app.use(helmet());

app.use(fileupload());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(getAuthToken);

app.use('/users', usersRouter );

app.use('/menaxhimi-librarise', menaxhimiLibrariseRoute);
app.use('/news', newsRoute);
app.use('/assets', assetsRoute);

app.listen(port, () => {
    console.log(`Menaxhimi i librarise API running on port ${port}`);
})
} )

