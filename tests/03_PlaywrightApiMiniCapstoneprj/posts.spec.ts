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
 
    test.skip(`TC01 - Get all posts and validate the response`, async ({ request }) => {

        const response = await ApiUtils.getRequest(request, "/posts");

        // Validate Status code
        expect(response.status()).toBe(200);
        // expect(response.status()).toBe(400);

        const jsonData = await response.json();
        Logger.info('Get All Posts Response: ' + JSON.stringify(jsonData));
        
        // Validate that the response contains the expected number of posts
        expect(jsonData.length).toBeGreaterThan(0);
    });

    test.skip(`TC02 - Get post by ID using Path Parameter and validate the response`, async ({ request }) => {

        const id = 5;   

        const response = await ApiUtils.getRequest(request, `/posts/${id}`);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Get Post by ID ${postId} Response:`, jsonData);
        Logger.info(`Get Post by ID ${id} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the expected post data
        expect(jsonData.id).toBe(id);
    });

    test.skip(`TC03 - Get post by ID using Query Parameter and validate the response`, async ({ request }) => {

        const id = 5;   

        const response = await ApiUtils.getRequest(request, `/posts?id=${id}`);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Get Post by ID ${postId} Response:`, jsonData);
        Logger.info(`Get Post by ID ${id} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the expected post data
        // As query parameter returns an array we need to use like below
        expect(jsonData[0].id).toBe(id);
    });

    test.skip(`TC03 - Get post using Query Parameter for more than 1 id and validate the response`, async ({ request }) => {

        const id_1 = 5;
        const id_2 = 6;  

        const response = await ApiUtils.getRequest(request, `/posts?id=${id_1}&id=${id_2}`);

        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Get Post by ID ${postId} Response:`, jsonData);
        Logger.info(`Get Post by ID ${id_1} Response: ${JSON.stringify(jsonData)}`);
        Logger.info(`Get Post by ID ${id_2} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the expected post data
        // As query parameter returns an array we need to use like below
        expect(jsonData[0].id).toBe(id_1);
        expect(jsonData[0].id).toBe(id_2);
    });

    test(`TC04 - Update post by ID and validate the response using Query Parameter`, async ({ request }) => {

        const postId = 1;

        const updatedPostData = {
            title: "Updated Title",
            body: "Updated Body",
            userId: 1
        };

        const response = await ApiUtils.patchRequest(request, `/posts/id=${postId}`, updatedPostData);

        // Validate status code
        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        // console.log(`Update Post by ID ${postId} Response:`, jsonData);
        Logger.info(`Update Post by ID ${postId} Response: ${JSON.stringify(jsonData)}`);

        // Validate that the response contains the updated post data
        expect(jsonData.title).toBe(updatedPostData.title);
        expect(jsonData.body).toBe(updatedPostData.body);
        expect(jsonData.userId).toBe(updatedPostData.userId);
    });
});