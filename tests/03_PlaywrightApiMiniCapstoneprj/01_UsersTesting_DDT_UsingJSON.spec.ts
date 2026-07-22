// /// <reference types="node" />
// import { test, expect } from '@playwright/test';
// import * as fs from 'fs';
// import * as allure from 'allure-js-commons';
// import {Logger} from '../../utils/logger';
 
// test.describe('Users API Testing - Using DDT', () => {

//     const url = 'https://jsonplaceholder.typicode.com/users';
 
//     // Read JSON data from file
//     const filePath = 'files/usersData.json';
//     const usersData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
 
//     // Define headers separately
//     const headers = {
//         'Content-type': 'application/json; charset=UTF-8'
//     };

//     test.beforeAll(async () => {
//         Logger.info('Starting Users API Testing - Using DDT');
//     });
    
//     test.beforeEach(async () => {
//         Logger.info('Starting a new test case...');
//     });

//     test.afterEach(async () => {
//         Logger.info('Test case completed.');
//     });

//     test.afterAll(async () => {
//         Logger.info('All Users API tests completed.');
//     });
 
 
//     for(const userData of usersData)
//     {
//         test(`TC_01 - Create User with ID ${userData.id}`, async ({ request }) => {
 
//             const response = await request.post(url, {
//                 data: userData,
//                 headers: headers
//             });
 
//             expect(response.status()).toBe(201);
 
//             const jsonData = await response.json();
//             Logger.info('Created User Response: ' + JSON.stringify(jsonData));
 
//             // Validate response fields
//             expect(jsonData.name).toBe(userData.name);
//             expect(jsonData.username).toBe(userData.username);
//             expect(jsonData.email).toBe(userData.email);
//             expect(jsonData.id).toBeTruthy(); // New ID should be generated
//         });
//     }

//     test(`TC_02 - Get all users and validate the response`, async ({ request }) => {

//         const response = await request.get(url)

//         expect(response.status()).toBe(200);

//         const jsonData = await response.json();
//         // Logger.info('Get All Users Response: ' + JSON.stringify(jsonData));
        

//         // Validate that the response contains the expected number of users
//         expect(jsonData.length).toBeGreaterThan(0);
//     });

//     test(`TC_03 - Get user by ID and validate the response`, async ({ request }) => {

//         const userId = 1;   

//         const response = await request.get(`${url}/${userId}`);

//         expect(response.status()).toBe(200);

//         const jsonData = await response.json();
//         // console.log(`Get User by ID ${userId} Response:`, jsonData);
//         Logger.info(`Get User by ID ${userId} Response: ${JSON.stringify(jsonData)}`);

//         // Validate that the response contains the expected user data
//         expect(jsonData.id).toBe(userId);
//         // expect(jsonData.name).toBeDefined();
//         // expect(jsonData.username).toBeDefined();
//         // expect(jsonData.email).toBeDefined();
//     });

//     test(`TC_04 - Update user by ID and validate the response`, async ({ request }) => {

//         const userId = 1;

//         const updatedUserData = {
//             name: "Updated Name",
//             username: "UpdatedUsername",
//             email: "updated@example.com"
//         };

//         const response = await request.put(`${url}/${userId}`, {
//             data: updatedUserData,
//             headers: headers
//         });

//         expect(response.status()).toBe(200);

//         const jsonData = await response.json();
//         // console.log(`Update User by ID ${userId} Response:`, jsonData);
//         Logger.info(`Update User by ID ${userId} Response: ${JSON.stringify(jsonData)}`);

//         // Validate that the response contains the updated user data
//         expect(jsonData.name).toBe(updatedUserData.name);
//         expect(jsonData.username).toBe(updatedUserData.username);
//         expect(jsonData.email).toBe(updatedUserData.email);
//     });

//     test(`TC_05 - Delete user by ID and validate the response`, async ({ request }) => {

//         const id = 3;

//         const response = await request.delete(`${url}/${id}`);

//         expect(response.status()).toBe(200);

//         // console.log(`Delete User by ID ${id} Response Status:`, response.status());
//         Logger.info(`Delete User by ID ${id} Response Status: ${response.status()}`);

//         // // Optionally, you can validate that the user is no longer retrievable
//         // const getResponse = await request.get(`${url}/${id}`);
//         // expect(getResponse.status()).toBe(404);
//     });

//     test('TC_06 - Correlation ID, capture User ID, fetch posts using id=1', async ({ request }) => {
 
//         // Step 1: Fetch a single post by ID
//         const firstUrl = 'http://jsonplaceholder.typicode.com/users/1';
//         const firstResponse = await request.get(firstUrl);
    
//         expect(firstResponse.status()).toBe(200);
    
//         const jsonData = await firstResponse.json();
//         console.log('Response JSON:', jsonData);
    
//         // Capture the User ID from the response
//         const capturedId = jsonData.id;
//         console.log('Captured ID:', capturedId);
    
//         // Step 2: Fetch all posts for this userId
//         const secondUrl = `http://jsonplaceholder.typicode.com/posts?id=${capturedId}`;
//         console.log('Second URL:', secondUrl);
        
//         const secondResponse = await request.get(secondUrl);
    
//         expect(secondResponse.status()).toBe(200);
    
//         const secondJsonData = await secondResponse.json();
//         console.log('Posts for Captured ID:', secondJsonData);
    
//         expect(secondJsonData.length).toBe(1); 
        
//     });
// });