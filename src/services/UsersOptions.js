import Api from '../helpers/Api';
import {resolveAll} from '../helpers/mappers';
import User from '../records/User';

class UsersOptionsService {
    static async getList(search) {
        const apiClient = new Api();
        const result = await apiClient.get(`users-options/${search}`);
        return resolveAll(result.data.data).as(User);
    }
}

export default UsersOptionsService;
