// // challenges:
// // 4. modify a post using patch method, use partial data in the payload, observe the response 
// // e.g.
// //     const updatedPayload = {
// //         id: 12,
// //         title: 'Updated Post Title'
// //     };


// import {test, expect} from '@playwright/test';

// test("Query Parameter: modify post 12", async ({request}) => {

//     const url = 'http://jsonplaceholder.typicode.com/posts?id=12';

//     const updatedPayLoad = {
//         id: 12,
//         title: 'Updated Post Title'
//     }

//     const response = await request.patch(url, { data: updatedPayLoad });

//     expect(response.status()).toBe(200);

//     const jsonData = await response.json();

//     console.log('Response JSON:', jsonData);
// });