import { APIRequestContext } from "@playwright/test";

export class ApiUtils {
    static baseURL: string = 'https://jsonplaceholder.typicode.com'; //static because we can call them directly,for utility classess static is the best approach
    
    static async getRequest(request: APIRequestContext, endpoint: string) {  //request object
        const response = await request.get(`${this.baseURL}${endpoint}`);
        return response;
    }

    static async postRequest(request: APIRequestContext, endpoint: string, data: any) {
        const response = await request.post(`${this.baseURL}/${endpoint}`, {
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    static async putRequest(request: APIRequestContext, endpoint: string, data: any) {
        const response = await request.put(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        });
        return response;
    }

    static async patchRequest(request: APIRequestContext, endpoint: string, data: any) {
        const response = await request.patch(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        });
        return response;
    }
    static async deleteRequest(request: APIRequestContext, endpoint: string) {
        const response = await request.delete(`${this.baseURL}${endpoint}`);
        return response;
    }
}