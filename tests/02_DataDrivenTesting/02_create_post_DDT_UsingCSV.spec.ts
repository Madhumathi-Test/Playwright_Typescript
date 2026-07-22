/// <reference types="node" />
import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import {parse} from 'csv-parse/sync';

test.describe('Data-Driven Test - create new posts', () => {
 
    const url = 'https://jsonplaceholder.typicode.com/posts';
 
    // Read CSV data from file
    const filePath = 'files/postsData.json';
    const postsData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
 
    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };
 
    for(const postData of postsData)
    {
        test(`Create Post for userId ${postData.userId}`, async ({ request }) => {
 
            const response = await request.post(url, {
                data: postData,
                headers: headers
            });
 
            expect(response.status()).toBe(201);
 
            const jsonData = await response.json();
            console.log('Created Post Response:', jsonData);
 
            // Validate response fields
            expect(jsonData.title).toBe(postData.title);
            expect(jsonData.body).toBe(postData.body);
            expect(jsonData.userId).toBe(postData.userId);
            expect(jsonData.id).toBeTruthy(); // New ID should be generated
        });
    }

});