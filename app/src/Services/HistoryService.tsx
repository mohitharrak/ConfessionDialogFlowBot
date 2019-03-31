import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
export class HistoryService {
    private baseUrl: string = '';
    private _axiosRequestConfig: AxiosRequestConfig;

    constructor() {
        this._axiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        this.baseUrl = "https://281ac53c.ngrok.io";

    }
    listAll(): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(this.baseUrl + '/history', this._axiosRequestConfig).then((response) => {
                
                resolve(response.data);
            }, (err) => {
                reject(err);
            });
        });
    }
}