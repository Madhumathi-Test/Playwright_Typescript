import { test, expect } from '@playwright/test';

test('Modify a post using PUT method', async ({ request }) => {
    const url = 'http://jsonplaceholder.typicode.com/posts/12';
 
    // prepare updated payload
    const updatedPayload = {
        id: 12,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 2
    };
 
    // define headers for the request
    const headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    };
 
    // send PUT request to update the post
    const response = await request.put(url, {
        data: updatedPayload,
        headers: headers
    });
 
    expect(response.status()).toBe(200);
 
    const jsonData = await response.json();
    console.log('Response JSON after PUT:', jsonData);
 
    // validate that the response contains the updated data
    expect(jsonData).toHaveProperty('id', 12);
    expect(jsonData).toHaveProperty('title', 'Updated Title');
    expect(jsonData).toHaveProperty('body', updatedPayload.body);
    expect(jsonData).toHaveProperty('userId', updatedPayload.userId);
});