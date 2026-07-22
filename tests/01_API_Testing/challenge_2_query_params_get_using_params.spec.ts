// // challenges:
// // 2. Query Parameter in url: fetch post 12, 15 (in get method, using param)

// import {test, expect} from '@playwright/test';

// test("Query Parameter: fetch post 12", async ({request}) => {

//     const url = 'http://jsonplaceholder.typicode.com/posts';
//     const queryParams = { id: [12, 15] };

//     const response = await request.get(url, { params: queryParams });

//     const params = new URLSearchParams();
//     params.append('id', '12');
//     params.append('id', '15');
 
//     const response = await request.get('http://jsonplaceholder.typicode.com/posts?${params.toString()}');
//     expect(response.status()).toBe(200);

//     const jsonData = await response.json();

//     console.log('Response JSON:', jsonData);
// });

test("fetch post with id 12 and 15 with params", async ({ request }) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
 
    const queryparams = new URLSearchParams();
    queryparams.append("id", "12");
    queryparams.append("id", "15");
 
    const response = await request.get(url, { params: queryparams, ignoreHTTPSErrors: true });
 
    expect(response.status()).toBe(200);
    console.log(response.url());
    const jsondata = await response.json();
 
    console.log("Response JSON:", jsondata);
    expect(jsondata[0]).toHaveProperty("id", 12);
    expect(jsondata[0].id).toBe(12);
    expect(jsondata[0]).toHaveProperty("userId", 2);
    expect(jsondata[0].userId).toBe(2);
 
    expect(jsondata[1]).toHaveProperty("id", 15);
    expect(jsondata[1].id).toBe(15);
    expect(jsondata[1]).toHaveProperty("userId", 2);
    expect(jsondata[1].userId).toBe(2);
});
 
 