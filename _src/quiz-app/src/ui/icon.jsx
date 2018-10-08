import * as React from 'react';
import * as PropTypes from 'prop-types';

import './icon.css';

export class Icon extends React.PureComponent {

    render() {
        return (
            <span className='icon'>
                <svg xmlns='http://www.w3.org/2000/svg'>
                    <use href={`#icon-${this.props.name}`} />
                </svg>
            </span>
        );
    }

    static propTypes = {
        name: PropTypes.string.isRequired
    }
}
