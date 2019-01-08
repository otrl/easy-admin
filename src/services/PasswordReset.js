import Api from '../helpers/Api';

class PasswordResetService {
    static async requestPasswordReset(email) {
        const apiClient = new Api();
        await apiClient.post('request-reset-password', {email});
    }

    static async resetPassword(password, token) {
        const apiClient = new Api();
        await apiClient.post('reset-password', {password, token});
    }
}

export default PasswordResetService;
