import main from '../lib/main.mjs';
import {test} from '@jest/globals';

test('test runs', async () => {
    main.main();
});