import { User } from './user';
import { Card } from './card';
import { MatchState } from './match-state.enum';
import { Role } from './role.enum';

export class Match {
    constructor(public id?: number, 
         public name?: string,
         public size?: number,
         public state?: MatchState,
         public winner?: Role,
         public owner?: User,
         public current?: User,
         public players?: Array<User>,
         public deck?: Array<Card>) { }
}
