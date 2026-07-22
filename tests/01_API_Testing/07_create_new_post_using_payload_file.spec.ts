/// <reference types="node" />
import {test,expect} from '@playwright/test';
import * as fs from 'fs';

test("create new post", async ({request}) => {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    
    //Read JSON data from file
    const filePath = "files/newPostData.json";
    const newPostPayLoad = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    //Define headers for the request
    const headers = {
        'Content-Type': 'application/json; charset=UTF-8'
    };

    // Send POST request with payload and headers
    const response = await request.post(url, { data: newPostPayLoad, headers: headers });

    // Validate response status code
    expect(response.status()).toBe(201);

    // Validate response body
    const jsonData = await response.json();
    console.log('Response JSON:', jsonData);
});