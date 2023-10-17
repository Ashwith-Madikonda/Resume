import {Injectable} from '@angular/core'
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()

export class LoginService {
     apiUrl = environment.apiUrl;

    constructor(private _http: HttpClient) {}

    getData(): Observable<any> {
        debugger;
        return this._http.get(this.apiUrl+'/WeatherForecast');
    }
}