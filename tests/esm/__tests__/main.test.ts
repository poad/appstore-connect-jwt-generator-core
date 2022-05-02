import main from '../esm/main.mjs';
import {test} from '@jest/globals';
import 'source-map-support/register';

test('test runs', async () => {
    main.main();
});