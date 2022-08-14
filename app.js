import express from 'express';
import router from './router.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
