import app from './src/app';
import { config } from './src/config/config';
import connectdb from './src/config/db';
require('dotenv').config();

const startserver = async () => {

    await connectdb();

    const port = config.port || 3000;

    app.listen(port, () => {
        console.log(`listening on ${port}`);
    })
};

startserver();