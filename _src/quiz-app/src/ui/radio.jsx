import * as React from 'react';
import * as PropTypes from 'prop-types';

import './radio.css';
import './tick.css';
import './icon.css';
import { Icon } from './icon';

export class Radio extends React.PureComponent {

    handleChange = () => {
        const isSolved = !this.props.isChecked
            ? this.props.index === this.props.answer
            : null;

        this.props.onChange(
            !this.props.isChecked,
            isSolved,
            this.props.index,
            this.props.id
        );
    }

    render() {
        const className = this.props.isChecked
            ? this.props.index === this.props.answer
                ? ' tick--icon-true'
                : ' tick--icon-false'
            : '';

        const icon = this.props.isChecked
            ? this.props.index === this.props.answer
                ? 'check-true'
                : 'check-false'
            : '';

        return (
            <label className='radio'>
                <div className='radio--option'>
                    <div className='tick'>
                        <input
                            type={'radio'}
                            name={`radio-${this.props.id}`}
                            value={this.props.index}
                            checked={this.props.isChecked}
                            onChange={this.handleChange} />
                        <span
                            className={`tick--icon${className}`}>
                            <Icon name={icon} />
                        </span>
                    </div>
                    <div className='radio--original'>
                        {this.props.textOriginalLang}
                    </div>
                </div>
                <div className='radio--translation'>
                    {this.props.textTranslatedLang}
                </div>
            </label>
        );
    }

    static propTypes = {
        index: PropTypes.number.isRequired,
    }
}
