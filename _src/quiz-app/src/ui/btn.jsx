import * as React from 'react';
import * as PropTypes from 'prop-types';

import './btn.css';

export class Btn extends React.PureComponent {

    handleClick = () => {
        this.props.onClick(this.props.data);
    }

    render() {
        return (
            <button className={`btn btn-${this.props.type}${this.props.isActive ? ' btn-active' : ''}`}
                onClick={this.handleClick} >
                {this.props.children}
            </button>
        );
    }

    static propTypes = {
        type: PropTypes.oneOf([
            'cta',
            'secondary',
            'tertiary',
            'icon'
        ]).isRequired,
        data: PropTypes.any,
        isActive: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
        children: PropTypes.any.isRequired
    }
}
