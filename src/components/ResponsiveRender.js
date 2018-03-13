import PropTypes from 'prop-types';
import React from 'react';

const dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
};

if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

export default class ResponsiveRender extends React.Component {
    static propTypes = {
        displayFrom: PropTypes.string,
        displayTo: PropTypes.string,
        orOperator: PropTypes.bool
    };

    static defaultProps = {
        displayFrom: undefined,
        displayTo: undefined,
        orOperator: false
    };

    state = {
        visible: true
    };

    mql = undefined;

    constructor (props) {
        super(props);
        let matchMedia = undefined;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }

        if (matchMedia) {
            let query = '';

            if (props.displayFrom && props.displayFrom in dimensionMap) {
                query += '(min-width: ' + dimensionMap[props.displayFrom] + ')';
            }

            if (props.displayTo && props.displayTo in dimensionMap) {
                if (query !== '' && props.orOperator) {
                    query += ', ';
                } else if (query !== '' && !props.orOperator) {
                    query += ' and ';
                }

                query += '(max-width: ' + dimensionMap[props.displayTo] + ')';
            }

            if (query !== '') {
                this.mql =  matchMedia(query);
            }
        }
    }

    componentDidMount () {
        if (this.mql) {
            this.mql.addListener(this.resize);
            this.resize();
        }
    }

    componentWillUnmount () {
        if (this.mql) {
            this.mql.removeListener(this.resize);
        }
    }

    resize = () => {
        this.setState({
            visible: this.mql.matches
        });
    };

    render () {
        if (!this.state.visible) {
            return null;
        }
        return this.props.children;
    }
}
