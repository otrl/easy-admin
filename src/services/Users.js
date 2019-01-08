import qs from 'qs';

import Api from '../helpers/Api';
import {BulkActions} from '../constants';
import {resolveAll} from '../helpers/mappers';
import User from '../records/User';

class UsersService {
    static async getList(page, limit) {
        const apiClient = new Api();
        const query = qs.stringify({page, limit});
        const result = await apiClient.get(`users?${query}`);
        return {
            users: resolveAll(result.data.data).as(User),
            count: result.data.count
        };
    }

    static async get(id) {
        const apiClient = new Api();
        const result = await apiClient.get(`users/${id}`);
        return User.fromJSON(result.data.data);
    }

    static async create(user) {
        const apiClient = new Api();
        await apiClient.post(`users`, {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            roleId: user.role_id,
        });
    }

    static async update(id, user) {
        const apiClient = new Api();
        await apiClient.put(`users/${id}`, {
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            roleId: user.role_id,
        });
    }

    static async delete(id) {
        const apiClient = new Api();
        await apiClient.delete(`users/${id}`);
    }

    static async deleteList(ids) {
        const apiClient = new Api();
        await apiClient.patch(`users`, {ids, action: BulkActions.DELETE});
    }
}

export default UsersService;
