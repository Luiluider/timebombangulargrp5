import { Match } from './match';
import { Card } from './card';
import { Role } from './role.enum';

export class User {
    constructor(public id?: number,
         public username?: string, 
         public name?: string,
         public password?: string,
         public currentRole?: Role,
         public currentMatch?: Match,
         public hand?: Array<Card>) { }
}
