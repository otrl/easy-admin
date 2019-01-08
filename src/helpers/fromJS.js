import { Iterable, fromJS as originalFromJS } from 'immutable';
import knownRecordTypes from '../records';
import { resolve } from './mappers';

export default function fromJS(any) {
    return originalFromJS(any, (key, value) => {
        try {
            if (Iterable.isIndexed(value)) {return value.toList();} // we're reviving an array -> it's a List
            const map = value.toOrderedMap();
            const MatchingType = knownRecordTypes[map.get('REC_TYPE')]; // check if we know a Record with this type
            // if (MatchingType) console.log(value.toJS(), resolve(value.toJS()).as(MatchingType));
            if (MatchingType) {
                return resolve(value.toJS()).as(MatchingType);
            } // we found a matching Record type -> instantiate it
            // if (MatchingType) return new MatchingType(value); // we found a matching Record type -> instantiate it
            return value.toMap(); // no matching Record type found -> it's a plain old Map
        } catch (err) {
            console.log(err);
        }
    });
}
