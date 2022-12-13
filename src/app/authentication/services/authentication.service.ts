import {Injectable} from '@angular/core';
import {BehaviorSubject, from, map, Observable, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {LocalstorageService} from "../../common/services/localstorage.service";
import {UserBean} from "../beans/user.bean";
import {JwtService} from "../../common/services/jwt.service";
import {ProfileApiResponse} from "../beans/profileApiResponse";
import {AuthenticationResultsEnum} from "../enum/AuthenticationResultsEnum";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly JWT_KEY = "jwt";

  private userBehaviorSubject: BehaviorSubject<UserBean> = new BehaviorSubject<UserBean>(new UserBean());
  public userBean: Observable<UserBean> = this.userBehaviorSubject.asObservable();

  private _isLoggedInBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedInObservable: Observable<boolean> = this._isLoggedInBehaviorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private localstorage: LocalstorageService,
    private jwtService: JwtService
  ) { }

  public login(email: string, password: string): Observable<AuthenticationResultsEnum> {
    return this.http.post(`${environment.PROFILE_API_URL}/user/login`, {
      email: email,
      password: password
    }).pipe(
      switchMap( (response: any) => from(this.handleProfileApiResponse(response)))
    )
  }

  private async handleProfileApiResponse(response: ProfileApiResponse): Promise<AuthenticationResultsEnum> {

    if(response.emailAlreadyExisted){
      return AuthenticationResultsEnum.EMAIL_ALREADY_TAKEN;
    } else {
      if(response.jwt.length) {
        await this.saveUserData(response.jwt);
        return AuthenticationResultsEnum.NONE;
      } else {
        return AuthenticationResultsEnum.CREDENTIALS_DO_NOT_MATCH;
      }
    }


  }

  private async saveUserData(jwtString: string) {
    const jwt = await this.jwtService.decryptJwt(jwtString);
    this.localstorage.setItem(this.JWT_KEY, jwt);
    this.userBehaviorSubject.next(jwt);
  }

  public logout(): void {
    this.localstorage.clearLocastorage();
    this._isLoggedInBehaviorSubject.next(false);
  }
}
