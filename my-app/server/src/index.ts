import * as express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

const app = express();

app.use(corsPrefetch);
app.use('/static', express.static('./static'));


app.get ("/", (req,res) => {
    res.send ('Your server is connected!');
} );

app.post('/multiple', imagesUpload(
    './static/multipleFiles',
    'http://localhost:9090/static/multipleFiles',
    true
));



app.listen(9090, () => {
    console.log('Listen: 9090');
});