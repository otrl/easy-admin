import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Timeline} from 'antd';

import {ResourceAction} from '../../constants';

import LoggedAction from '../../records/LoggedAction';
import User from '../../records/User';
import Dictionary from '../../records/Dictionary';

export default function TimelineItem({loggedAction, user, dictionary}) {
    let colour;
    switch (loggedAction.action) {
        case ResourceAction.DELETE:
        case ResourceAction.BATCH_DELETE:
        case ResourceAction.FORCE_LOGOUT:
            colour = "red";
            break;
        case ResourceAction.CREATE:
            colour = "green";
            break;
        default:
            colour = "blue";
    }

    let msg = `ACCOUNT_LOGGED_ACTION_${loggedAction.action}`;
    if (loggedAction.resource_type) {
        msg = `${msg}_${loggedAction.resource_type}`;
    }

    let dotIcon;
    switch (loggedAction.action) {
        case ResourceAction.DELETE:
        case ResourceAction.BATCH_DELETE:
            dotIcon = <Icon type="delete" style={{ fontSize: '16px' }} />;
            break;
        case ResourceAction.LOGIN:
            dotIcon = <Icon type="unlock" style={{ fontSize: '16px' }} />;
            break;
        default:
            dotIcon = undefined;
    }


    return (
        <Timeline.Item color={colour} dot={dotIcon}>
            {dictionary.getByKey(msg, {
                name: `${user.first_name} ${user.last_name}`,
                date: loggedAction.created_at.format("h:mm DD/MM/YY"),
                id: loggedAction.resource_identifier,
            })}
        </Timeline.Item>
    );
}

TimelineItem.propTypes = {
    loggedAction: PropTypes.instanceOf(LoggedAction).isRequired,
    user: PropTypes.instanceOf(User).isRequired,
    dictionary: PropTypes.instanceOf(Dictionary)
};

TimelineItem.defaultProps = {
    dictionary: new Dictionary()
};
