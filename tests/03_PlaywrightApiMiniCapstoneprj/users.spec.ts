/// <reference types="node" />
import { test, expect } from '@playwright/test';
import {JsonUtils} from '../../utils/jsonutils';
import {ApiUtils} from '../../utils/ApiUtils';
import * as allure from 'allure-js-commons';
import {Logger} from '../../utils/logger';
 
test.describe('Users API Testing', () => {

    // Read JSON data from file
    const filePath = 'files/usersData.json';
    const usersData = JsonUtils.readJsonFile(filePath);

    test.beforeAll(async () => {
        Logger.info('Starting Users API Testing');
    });
    
    test.beforeEach(async () => {
        Logger.info('Starting a new test case...');
    });

    test.afterEach(async () => {
        Logger.info('Test case completed.');
    });

    test.afterAll(async () => {
        Logger.info('All Users API tests completed.');
    });
 
    for(const userData of usersData)
    {
        test(`TC_01 - Create User with ID ${userData.id}`, async ({ request }) => {
            
            const response = await ApiUtils.postRequest(request, '/users', userData);

            expect(response.status()).toBe(201);
 
            const jsonData = await response.json();
            // Logger.info('Created User Response: ' + JSON.stringify(jsonData));
 
            // Validate response fields
            expect(jsonData.name).toBe(userData.name);
            expect(jsonData.username).toBe(userData.username);
            expect(jsonData.email).toBe(userData.email);
            expect(jsonData.id).toBeTruthy(); // New ID should be generated
        });
    }

    test(`TC_02 - Get all users and validate the response`, async ({ request }) => {

        // const response = await request.get(url)
        const response = await ApiUtils.getRequest(request, '/users');

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // Logger.info('Get All Users Response: ' + jsonData); // this will return objects

        // Records are returned
        Logger.info('Get All Users Response: ' + JSON.stringify(jsonData)); // this will return the strings
        
        // Validate that the response contains the expected number of users
        expect(jsonData.length).toBeGreaterThan(0);

    });

    test(`TC_03 - Get user by ID and validate the response`, async ({ request }) => {

        const id = 1;   

        // const response = await ApiUtils.getRequest(request, '/users/1');
        const response = await ApiUtils.getRequest(request, `/posts/${id}`);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Get User by ID ${userId} Response:`, jsonData);
        Logger.info(`Get User by ID ${id} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the expected user data
        expect(jsonData.id).toBe(id);
        // expect(jsonData.name).toBeDefined();
        // expect(jsonData.username).toBeDefined();
        // expect(jsonData.email).toBeDefined();
    });

    test(`TC_04 - Update user by ID and validate the response`, async ({ request }) => {

        const id = 2;

        const updatedUserData = {
            name: "Updated Name",
            username: "UpdatedUsername",
            email: "updated@example.com"
        };

        const response = await ApiUtils.patchRequest(request, `/users/${id}`, updatedUserData);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        Logger.info(`Update User by ID ${id} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the updated user data
        expect(jsonData.name).toBe(updatedUserData.name);
        expect(jsonData.username).toBe(updatedUserData.username);
        expect(jsonData.email).toBe(updatedUserData.email);
    });

    test(`TC_05 - Delete user by ID and validate the response`, async ({ request }) => {

        const id = 3;

        const response = await ApiUtils.deleteRequest(request, `/users/${id}`);

        expect(response.status()).toBe(200);

        // console.log(`Delete User by ID ${id} Response Status:`, response.status());
        Logger.info(`Delete User by ID ${id} Response Status: ${response.status()}`);
    });
});