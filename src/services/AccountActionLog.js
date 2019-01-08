import qs from 'qs';

import Api from '../helpers/Api';
import {resolveAll} from '../helpers/mappers';
import LoggedAction from '../records/LoggedAction';

class AccountActionLog {
    static async getList(search) {
        const apiClient = new Api();
        const result = await apiClient.get(`account-action-log?${search.toQueryString(true)}`);
        return {
            actions: resolveAll(result.data.data).as(LoggedAction),
            count: result.data.count
        };
    }
}

export default AccountActionLog;
