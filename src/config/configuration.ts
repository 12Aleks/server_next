import * as process from 'node:process';

export default () => ({
    mongo: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
        db: process.env.API_DB,
        CLIENT_URL: process.env.CLIENT_URL
    },
});
