import { test, expect } from '@playwright/test';
  
test('Correlation ID, capture User ID, fetch posts using User ID', async ({ request }) => {
 
        // Step 1: Fetch a single post by ID
    const firstUrl = 'http://jsonplaceholder.typicode.com/posts/25';
    const firstResponse = await request.get(firstUrl);
 
    expect(firstResponse.status()).toBe(200);
 
    const jsonData = await firstResponse.json();
    console.log('Response JSON:', jsonData);
 
    // Capture the User ID from the response
    const capturedUserId = jsonData.userId;
    console.log('Captured User ID:', capturedUserId);
 
    // Step 2: Fetch all posts for this userId
    const secondUrl = `http://jsonplaceholder.typicode.com/posts?userId=${capturedUserId}`;
    const secondResponse = await request.get(secondUrl);
 
    expect(secondResponse.status()).toBe(200);
 
    const secondJsonData = await secondResponse.json();
    console.log('Posts for Captured User ID:', secondJsonData);
 
    expect(secondJsonData.length).toBe(10); // Ensure there are 10 posts for this user
 
    // validate that all posts belong to the captured userId
    for (const post of secondJsonData) {
        expect(post.userId).toBe(capturedUserId);
    }
 
}); 