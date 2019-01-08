import _ from 'lodash';

export function formatPrice (price) {
    if (!price) { return '0.00'; }
    const priceInPence = price * 100;
    const priceString = priceInPence.toString();
    const decimalPos = priceString.length - 2;
    let pounds = priceString.slice(0, decimalPos);
    if (!pounds) { pounds = '0'; }
    const pence = _.padEnd(priceString.slice(decimalPos), 2);
    return `${pounds}.${pence}`;
}
