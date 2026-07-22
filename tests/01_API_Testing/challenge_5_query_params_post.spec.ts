// // challenges:
// // 5. Create a new post and validate the response.

// import {test, expect} from '@playwright/test';

// test("Query Parameter: create new post", async ({request}) => {

//     const url = 'http://jsonplaceholder.typicode.com/posts';

//     const newPostData = {
//         title: 'New Post Title',
//         body: 'This is the content of the new post.',
//         userId: 1
//     };

//      // define headers for the request
//     const headers = {
//         'Content-Type': 'application/json; charset=UTF-8'
//     };
 
//     const response = await request.post(url, { data: newPostData, headers: headers });

//     expect(response.status()).toBe(201);

//     const jsonData = await response.json();

//     console.log('Response JSON:', jsonData);
// });