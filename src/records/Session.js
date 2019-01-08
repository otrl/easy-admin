import {Record as record} from 'immutable';
import moment from 'moment-timezone';

import {construct, fields} from '../helpers/mappers';
import Uuid from '../helpers/uuid';
import {SessionDuration} from '../constants';


const defaults = {
    REC_TYPE: 'Session',
    sessionId: Uuid(),
    sessionExpiry: moment().add(SessionDuration, 's')
};

class Session extends record(defaults) {
    static fromJSON (json = {}) {
        return construct(Session, json, {
            sessionId: fields.string,
            sessionExpiry: fields.datetime
        });
    }
}

export default Session;
