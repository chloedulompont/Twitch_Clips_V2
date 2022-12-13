import { Injectable } from '@angular/core';

import * as jsonwebtoken from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public async decryptJwt(jwt: string): Promise<any> {
    return jsonwebtoken.decode(jwt)
  }

}
