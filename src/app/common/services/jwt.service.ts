import { Injectable } from '@angular/core';

import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public async decryptJwt(jwt: string): Promise<any> {
    return jose.decodeJwt(jwt)
  }

}
