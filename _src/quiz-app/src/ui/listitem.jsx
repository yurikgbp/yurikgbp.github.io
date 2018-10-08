import * as React from 'react';
import * as PropTypes from 'prop-types';

import './listitem.css';

export class ListItem extends React.PureComponent {

    handleClick = () => {
        return this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className={`listitem${this.props.isActive ? ' listitem-active' : ''}`}
                onClick={this.handleClick}>
                {this.props.children}
            </div>
        );
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        isActive: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
        children: PropTypes.any.isRequired
    }
}
