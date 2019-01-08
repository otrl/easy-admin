import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router'

import config from './Config';
import ui from './Ui';
import auth from './Auth';
import session from './Session';
import dictionary from './Dictionary';
import rolesState from './RolesState';
import rolesOptionsState from './RolesOptionsState';
import roleState from './RoleState';
import usersState from './UsersState';
import userState from './UserState';
import cardholdersState from './CardholdersState';
import cardholderState from './CardholderState';
import accountState from './AccountState';
import accountActionLogState from './AccountActionLogState';
import actionLogState from './ActionLogState';
import usersOptionsState from './UsersOptionsState';
import customersState from './CustomersState';
import smartcardState from './SmartcardState';
import ticketHistoryState from './TicketHistoryState';
import journeyHistoryState from './JourneyHistoryState';

export default (history) => combineReducers({
    router: connectRouter(history),
    config,
    ui,
    auth,
    form,
    session,
    dictionary,
    rolesState,
    rolesOptionsState,
    roleState,
    usersState,
    userState,
    cardholdersState,
    cardholderState,
    accountState,
    accountActionLogState,
    actionLogState,
    usersOptionsState,
    customersState,
    smartcardState,
    ticketHistoryState,
    journeyHistoryState
})
