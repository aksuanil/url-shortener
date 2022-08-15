import express from 'express';
import router from './routers/router.js';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
