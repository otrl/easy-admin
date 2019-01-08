import qs from 'qs';

import Api from '../helpers/Api';
import {BulkActions} from '../constants';
import {resolveAll} from '../helpers/mappers';
import Role from '../records/Role';

class RolesService {
    static async getList(page, limit) {
        const apiClient = new Api();
        const query = qs.stringify({page, limit});
        const result = await apiClient.get(`roles?${query}`);
        return {
            roles: resolveAll(result.data.data).as(Role),
            count: result.data.count
        };
    }

    static async get(id) {
        const apiClient = new Api();
        const result = await apiClient.get(`roles/${id}`);
        return Role.fromJSON(result.data.data);
    }

    static async create(role) {
        const apiClient = new Api();
        await apiClient.post(`roles`, {
            name: role.name,
            description: role.description,
            permissions: role.permissions
        });
    }

    static async update(id, roleData) {
        const apiClient = new Api();
        await apiClient.put(`roles/${id}`, {
            name: roleData.name,
            description: roleData.description,
            permissions: roleData.permissions
        });
    }

    static async delete(id) {
        const apiClient = new Api();
        await apiClient.delete(`roles/${id}`);
    }

    static async deleteList(ids) {
        const apiClient = new Api();
        await apiClient.patch(`roles`, {ids, action: BulkActions.DELETE});
    }
}

export default RolesService;
