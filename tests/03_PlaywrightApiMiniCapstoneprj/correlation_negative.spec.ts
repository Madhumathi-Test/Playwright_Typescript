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
 
    test.skip('TC_01 - Correlation ID, capture User ID, fetch posts using Userid=1', async ({ request }) => {
 
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

    // Get all posts,extract first 3 user IDs and for every User id, validate user and email exists
    test('TC_02 - Advanced Correlation , first 3 user ids and for every used id validate that the user and email exists', async ({ request }) => {
 
        // Get all posts
        const firstResponse = await ApiUtils.getRequest(request, "/posts")
        // const firstResponse = await ApiUtils.getRequest(request, `/users/${id}`)
        
        expect(firstResponse.status()).toBe(200);
    
        const postsjsonData = await firstResponse.json();
        Logger.info('Get All Users Response: ' + JSON.stringify(postsjsonData)); // this will return the strings
    
        // Capture the first 3 users details
        const uniqueUserIds:number[] = [];

        //Loop to extract 3 unique userIds
        for (const post of postsjsonData){

            // if loop chks whether uniqueUserIds has any userIds,if not then it pushes
            if(!uniqueUserIds.includes(post.userId)){

                uniqueUserIds.push(post.userId);

            if(uniqueUserIds.length===3){
                break;
                }
            }
        }
        Logger.info(`Unique User Ids ${uniqueUserIds}`)
        // Validate each user
        for (const userId of uniqueUserIds){

            Logger.info(`Validating user details of ${userId}`)

            const userResponse = await ApiUtils.getRequest(request, `/users/${userId}`);
            
            expect(userResponse.status()).toBe(200);

            const user = await userResponse.json();

            Logger.info(`Values of User: ${JSON.stringify(user)}`)

            // User Exists
            expect(user).toBeTruthy();

            // Validate ID
            expect(user.id).toBe(userId);

            //Email exists
            expect(user.email).toBeDefined();

            expect(user.email).not.toBe(" ");

            Logger.info(`Validated User ${user.name} and ${user.email}`);

            Logger.success("Advanced Correlation Test Completed successsfully");
            
        }
        
    });

    test.skip('TC_02 - Negative scenario to get users with invalid=99999', async ({ request }) => {
 
        // Step 1: Fetching post of id =1 
        const id = 99999;
        // const firstResponse = await ApiUtils.getRequest(request, "/users/1")
        const firstResponse = await ApiUtils.getRequest(request, `/users/${id}`)
        
        expect(firstResponse.status()).toBe(404);
    
        const jsonData = await firstResponse.json();
        console.log('Response JSON:', jsonData);
    });

    
    test.skip('TC_03 - Negative scenario to get posts with invalid id=99999', async ({ request }) => {
 
        const id = 99999;
        // const firstResponse = await ApiUtils.getRequest(request, "/users/1")
        const firstResponse = await ApiUtils.getRequest(request, `/posts/${id}`)
        
        expect(firstResponse.status()).toBe(404);
    
        const jsonData = await firstResponse.json();
        console.log('Response JSON:', jsonData);

    });
});