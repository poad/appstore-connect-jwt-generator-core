import main from '../esm/main.mjs';
import {test} from 'vitest';
import 'source-map-support/register';

test('test runs', async () => {
    main.main();
});