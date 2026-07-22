/// <reference types="node" />
import { test, expect } from '@playwright/test';
import {JsonUtils} from '../../utils/jsonutils';
import {ApiUtils} from '../../utils/ApiUtils';
import * as allure from 'allure-js-commons';
import * as fs from 'fs';
import {Logger} from '../../utils/logger';
 
test.describe('Correlation and Negative scenarios - API Testing', () => {

    const url = 'https://jsonplaceholder.typicode.com/users';
 
    // Read JSON data from file
    const filePath = 'files/usersData.json';
    const usersData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
 
    // Define headers separately
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };

    test.beforeAll(async () => {
        Logger.info('Starting Correlation API Testing');
    });
    
    test.beforeEach(async () => {
        Logger.info('Starting a new test case...');
    });

    test.afterEach(async () => {
        Logger.info('Test case completed.');
    });

    test.afterAll(async () => {
        Logger.info('All Correlation API tests completed.');
    });
 
    test('TC_01 - Correlation ID, capture User ID, fetch posts using Userid=1', async ({ request }) => {
 
        // Step 1: Fetching post of id =1 
        const id = 1;
        // const firstResponse = await ApiUtils.getRequest(request, "/users/1")
        const firstResponse = await ApiUtils.getRequest(request, `/users/${id}`)
        
        expect(firstResponse.status()).toBe(200);
    
        const jsonData = await firstResponse.json();
        console.log('Response JSON:', jsonData);
    
        // Capture the UserId from the response and it will contain 10 json objects
        const capturedId = jsonData.id;
        console.log('Captured ID:', capturedId);
  
        const secondResponse = await ApiUtils.getRequest(request, `/posts?userId=${capturedId}`);

        expect(secondResponse.status()).toBe(200);
    
        const secondJsonData = await secondResponse.json();
        console.log('Posts for Captured ID:', secondJsonData);
    
        expect(secondJsonData.length).toBe(10); 
        
    });

       test('TC_02 - Negative scenario to get users with invalid=99999', async ({ request }) => {
 
        // Step 1: Fetching post of id =1 
        const id = 99999;
        // const firstResponse = await ApiUtils.getRequest(request, "/users/1")
        const firstResponse = await ApiUtils.getRequest(request, `/users/${id}`)
        
        expect(firstResponse.status()).toBe(404);
    
        const jsonData = await firstResponse.json();
        console.log('Response JSON:', jsonData);
    });

    
       test('TC_03 - Negative scenario to get posts with invalid id=99999', async ({ request }) => {
 
        const id = 99999;
        // const firstResponse = await ApiUtils.getRequest(request, "/users/1")
        const firstResponse = await ApiUtils.getRequest(request, `/posts/${id}`)
        
        expect(firstResponse.status()).toBe(404);
    
        const jsonData = await firstResponse.json();
        console.log('Response JSON:', jsonData);

    });
});