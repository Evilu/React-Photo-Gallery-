
import * as path from "path";
import * as express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';


const app = express();


app.use(corsPrefetch);
app.use('/static', express.static('./static'));


app.get("/multiple", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/multipleFiles/"));
});


app.post('/multiple', imagesUpload(
    './static/multipleFiles',
    'http://localhost:9090/static/multipleFiles',
    true
));



app.listen(9090, () => {
    console.log('Listen: 9090');
});