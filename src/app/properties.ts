import { environment } from '../environments/environment';

export class Properties {
    static get baseUrl() {
        return environment.production ? 'https://realUrl.com/user-api' : 'http://localhost:8080/user-api';
    }
}
