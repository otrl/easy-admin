import Api from '../helpers/Api';
import User from '../records/User';
import {BulkActions} from "../constants";

class ForceLogout {
    static async logout(ids) {
        const apiClient = new Api();
        await apiClient.post(`force-logout`, {ids});
    }
}

export default ForceLogout;
