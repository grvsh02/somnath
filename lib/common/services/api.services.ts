import axios from 'axios';

export class ApiService {
    // GET API Call
    static async get(path: string, params?: any) {
        try {
            const response = await axios.get(path, {
                withCredentials: true,
                params: params,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // POST API Call
    static async post(path: string, body: any, params?: any) {
        try {
            const response = await axios.post(path, body, {
                withCredentials: true,
                params: params,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // POST FORM API Call
    static async postForm(path: string, body: any, params?: any) {
        console.log(params)
        try {
            const response = await axios.post(path, body, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
                params: params,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // PUT API Call
    static async put(path: string, body: any, params?: any) {
        try {
            const response = await axios.put(path, body, { params: params });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // DELETE API Call
    static async delete(path: string, params?: any) {
        try {
            const response = await axios.delete(path, { params: params });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // Error Handler

    static handleError(error: any) {
        //Toast Service Integration
        console.error(error);
    }
}
