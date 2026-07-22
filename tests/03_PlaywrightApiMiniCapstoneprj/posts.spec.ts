/// <reference types="node" />
import { test, expect } from '@playwright/test';
import {JsonUtils} from '../../utils/jsonutils';
import {ApiUtils} from '../../utils/ApiUtils';
import * as allure from 'allure-js-commons';
import {Logger} from '../../utils/logger';
import { appendFile } from 'node:fs';
 
test.describe('Path and Query Parameter API Testing using Posts URL', () => {

    // const url = 'https://jsonplaceholder.typicode.com/posts';
 
    // Read JSON data from file
    const filePath = 'files/usersData.json';
    const postsData = JsonUtils.readJsonFile(filePath);
 
    // // Define headers separately
    // const headers = {
    //     'Content-type': 'application/json; charset=UTF-8'
    // };

    test.beforeAll(async () => {
        Logger.info('Starting Posts API Testing');
    });
    
    test.beforeEach(async () => {
        Logger.info('Starting a new test case...');
    });

    test.afterEach(async () => {
        Logger.info('Test case completed.');
    });

    test.afterAll(async () => {
        Logger.info('All Posts API tests completed.');
    });
 
    test(`TC01 - Get all posts and validate the response`, async ({ request }) => {

        const response = await ApiUtils.getRequest(request, "/posts");

        // expect(response.status()).toBe(200);
        expect(response.status()).toBe(400);

        const jsonData = await response.json();
        Logger.info('Get All Posts Response: ' + JSON.stringify(jsonData));
        
        // Validate that the response contains the expected number of posts
        expect(jsonData.length).toBeGreaterThan(0);
    });

    test(`TC02 - Get post by ID using Path Parameter and validate the response`, async ({ request }) => {

        const id = 5;   

        const response = await ApiUtils.getRequest(request, `/posts/${id}`);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Get Post by ID ${postId} Response:`, jsonData);
        Logger.info(`Get Post by ID ${id} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the expected post data
        expect(jsonData.id).toBe(id);
    });

    test(`TC03 - Delete post by ID and validate the response`, async ({ request }) => {

        const id = 3;

        const response = await ApiUtils.deleteRequest(request, `/posts/${id}`);

        expect(response.status()).toBe(200);

        // console.log(`Delete Post by ID ${id} Response Status:`, response.status());
        Logger.info(`Delete Post by ID ${id} Response Status: ${response.status()}`);

        // // Optionally, you can validate that the post is no longer retrievable
        // const getResponse = await request.get(`${url}/${id}`);
        // expect(getResponse.status()).toBe(404);
    });
});