import Api from '../helpers/Api';
import User from '../records/User';

class AccountService {
    static async get() {
        const apiClient = new Api();
        const result = await apiClient.get(`account`);
        return User.fromJSON(result.data);
    }

    static async update(user) {
        const apiClient = new Api();

        const values = {
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
        };

        if (user.password) {
            values.password = user.password;
        }
        await apiClient.put(`account`, values);
    }
}

export default AccountService;
