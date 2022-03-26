import { tokenSync } from 'appstore-connect-jwt-generator-core';

export const main = {
    main: () => {
        console.log(typeof tokenSync);
    }
};

export default main;