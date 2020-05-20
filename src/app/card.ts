import { Match } from './match';
import { User } from './user';
import { CardType } from './card-type.enum';

export class Card {
    constructor(public id?: number,
        public type?: CardType, 
        public revealed?: boolean,
        public owner?: User,
        public match?: Match) { }
}
