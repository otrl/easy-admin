import {UrlsParentage} from './../constants';

export default function getActiveUrlPaths (urlPattern) {
    const array = [urlPattern];
    if (UrlsParentage[urlPattern]) {
        return array.concat(UrlsParentage[urlPattern]);
    }
    return array;
}