import { token } from 'appstore-connect-jwt-generator-core';
import 'source-map-support/register';

const main = {
    main: () => {
        console.log(typeof token);
    }
};

export default main;