import axios from 'axios';

export class ApiService {

    private static api_url = process.env.NEXT_PUBLIC_API_URL;

    // GET API Call
    static async get(path: string, params?: any) {
        try {
            const response = await axios.get(this.api_url + path, {
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
            const response = await axios.post(this.api_url + path, body, {
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
        try {
            const response = await axios.post(this.api_url + path, body, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
                params: params,
            });
            console.log(response)
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // PUT API Call
    static async put(path: string, body: any, params?: any) {
        try {
            const response = await axios.put(this.api_url + path, body, { params: params });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }
    // DELETE API Call
    static async delete(path: string, params?: any) {
        try {
            const response = await axios.delete(this.api_url + path, { params: params });
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
