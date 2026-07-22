import {test, expect} from '@playwright/test';

test.skip('fetch post 12 and validate', async ({request}) => { //request is a fixture provided by playwright to make API calls

    const url = 'https://jsonplaceholder.typicode.com/posts/12';

    // send GET request
    const response = await request.get(url);

    // validate status response
    expect(response.status()).toBe(200);

    // Parsing or deserializing the response body to JSON format
    const jsonData = await response.json();

    console.log('Response JSON:', jsonData);

});


test.skip('fetch a single post 101', async ({ request }) => {
   
    const url = 'http://jsonplaceholder.typicode.com/posts/101';
 
    const response = await request.get(url);
 
    expect(response.status()).toBe(404);
    console.log('Status:', response.status());
    console.log('Status Text:', response.statusText());
    console.log('Response Body:', await response.text());
});