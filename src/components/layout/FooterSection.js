import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Dictionary from '../../records/Dictionary';

export default function FooterSection ({dictionary}) {
    return (
        <Layout.Footer className="footer-section">
            <footer dangerouslySetInnerHTML={{ __html: dictionary.getByKey("FOOTER_TEXT") }}/>
        </Layout.Footer>
    );
}

FooterSection.propTypes = {
    dictionary: PropTypes.instanceOf(Dictionary).isRequired
};
