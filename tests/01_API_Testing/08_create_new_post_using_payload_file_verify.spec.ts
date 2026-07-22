/// <reference types="node" />
import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 
test('Create a New Post and Validate Response', async ({ request }) => {
 
    const url = 'http://jsonplaceholder.typicode.com/posts';
 
 
    // Read JSON data from file
    const filePath = 'files/newPostData.json';
    const newPostPayload = JSON.parse(fs.readFileSync(filePath, 'utf8'));
 
    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };
 
    // Send POST request
    const response = await request.post(url, {
        data: newPostPayload,
        headers: headers
    });
 
    // Validate status code
    expect(response.status()).toBe(201); // 201 Created
 
    // Parse JSON response
    const jsonData = await response.json();
    console.log('Created Post Response:', jsonData);
 
    // Validate response fields
    expect(jsonData.title).toBe(newPostPayload.title);
    expect(jsonData.body).toBe(newPostPayload.body);
    expect(jsonData.userId).toBe(newPostPayload.userId);
    expect(jsonData.id).toBeTruthy(); // New ID should be generated
});
