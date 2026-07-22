// // 2. Query Parameter in url: fetch post 12, 15 (in get method, using param)
// import {test, expect} from '@playwright/test';

// test("Query Parameter: fetch post 12 and 15", async ({request}) => {
//     const url = 'http://jsonplaceholder.typicode.com/posts/12';
//     const url2 = 'http://jsonplaceholder.typicode.com/posts/15';

//     const response = await request.get(url);
//     const response2 = await request.get(url2);

//     expect(response.status()).toBe(200);
//     expect(response2.status()).toBe(200);

//     const jsonData = await response.json();
//     const jsonData2 = await response2.json();

//     console.log('Response JSON for post 12:', jsonData);
//     console.log('Response JSON for post 15:', jsonData2);
// });

