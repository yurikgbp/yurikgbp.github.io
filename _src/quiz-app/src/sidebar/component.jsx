import * as React from 'react';
// import * as PropTypes from 'prop-types';

// import './sidebar.css';

import { Btn } from '../ui/btn';

export class Sidebar extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Btn
                    type='icon'
                    data='en'
                    onClick={() => {}}>
                    en
                </Btn>
                <Btn
                    type='icon'
                    data='ru'
                    isActive
                    onClick={() => {}}>
                    ru
                </Btn>
                <Btn
                    type='icon'
                    data='fr'
                    onClick={() => {}}>
                    fr
                </Btn>
            </React.Fragment>
        );
    }

    // static propTypes = {
    // }
}
