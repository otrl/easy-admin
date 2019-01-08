import Cookies from 'js-cookie';
import {SessionCookiePath} from "../constants";

export function uuidv4() {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export default function getClientUuid () {
    let uuid = Cookies.get(SessionCookiePath);
    if (!uuid) {
        uuid = uuidv4();
        Cookies.set(SessionCookiePath, uuid, {expires: 365});
    }
    return uuid;
}
