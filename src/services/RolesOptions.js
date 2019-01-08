import Api from '../helpers/Api';
import {resolveAll} from '../helpers/mappers';
import Role from '../records/Role';

class RolesOptionsService {
    static async getList() {
        const apiClient = new Api();
        const result = await apiClient.get(`roles-options`);
        return resolveAll(result.data.data).as(Role);
    }
}

export default RolesOptionsService;
