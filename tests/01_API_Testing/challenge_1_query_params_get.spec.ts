// challenges:
// 1. Query Parameter in url: fetch post 12, 15 (in url directly)

import {test, expect} from '@playwright/test';

test("Query Parameter: fetch post 12", async ({request}) => {

    const url = 'http://jsonplaceholder.typicode.com/posts?id=12&id=15';

    const response = await request.get(url);

    expect(response.status()).toBe(200);

    const jsonData = await response.json();

    console.log('Response JSON:', jsonData);
});