import {createMiddleware} from 'redux-beacon';
import {LOCATION_CHANGE} from 'connected-react-router';
import GoogleTagManager from '@redux-beacon/google-tag-manager';

import {BasketActionTypes, TrackingActionTypes} from '../constants';

const eventsMap = {
    [LOCATION_CHANGE]: (action) => {
        return {
            event: 'pageview',
            page: action.payload.pathname
        };
    },

    // [BasketActionTypes.ADD_TO_BASKET_SUCCESS]: (action, prevState) => {
    //     return {
    //         event: 'addToCart',
    //         ecommerce: {
    //             currencyCode: 'GBP',
    //             add: {
    //                 products: prevState.tickets.tickets.map(ticket => ticket.toAnalyticsObj())
    //             }
    //         }
    //     };
    // },
    //
    // [BasketActionTypes.DELETE_FROM_BASKET]: (action) => {
    //     return {
    //         event: 'removeFromCart',
    //         ecommerce: {
    //             currencyCode: 'GBP',
    //             remove: {
    //                 products: action.deletedJourney.journeyTickets.map(ticket => ticket.toAnalyticsObj())
    //             }
    //         }
    //     };
    // },
    //
    // [TrackingActionTypes.CHECKOUT_LOADED]: (action, prevState) => {
    //     const products = [];
    //     prevState.basket.journeys.map(journey => journey.journeyTickets.map(ticket => {
    //         products.push(ticket.toAnalyticsObj());
    //     }));
    //     const option = prevState.auth.user ? (prevState.auth.user.isTravelShop() ? 'Shop' : 'Customer') : 'Guest';
    //     if (products.length) {
    //         return {
    //             event: 'checkout',
    //             ecommerce: {
    //                 currencyCode: 'GBP',
    //                 checkout: {
    //                     actionField: {step: 'Payment', option},
    //                     products
    //                 },
    //             }
    //         };
    //     }
    // },
    //
    // [TrackingActionTypes.PURCHASE]: (action, prevState) => {
    //     const products = [];
    //     prevState.lastTransaction.transactionJourneys.map(journey => journey.journeyTickets.map(ticket => {
    //         products.push(ticket.toAnalyticsObj());
    //     }));
    //     if (products.length) {
    //         return {
    //             event: 'checkout',
    //             ecommerce: {
    //                 currencyCode: 'GBP',
    //                 purchase: {
    //                     actionField: {
    //                         id: prevState.lastTransaction.transactionJourneys.reduce((reduced, transaction) => `${reduced ? `${reduced}-` : reduced}${transaction.journeyTransactionId}`, ''),
    //                         revenue: prevState.lastTransaction.getPrice(),
    //                     },
    //                     products
    //                 },
    //             }
    //         };
    //     }
    // },
    //
    // [TrackingActionTypes.PAYMENT_CONFIRMATION]: () => {
    //     return {
    //         event: 'checkout',
    //         currencyCode: 'GBP',
    //         ecommerce: {
    //             checkout: {
    //                 actionField: {step: 'Confirmation'},
    //             }
    //         }
    //     };
    // },
};

const gtm = GoogleTagManager();
export default createMiddleware(eventsMap, gtm);
