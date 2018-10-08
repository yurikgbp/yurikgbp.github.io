import * as React from 'react';
import * as PropTypes from 'prop-types';

import './topics.css';
import { ListItem } from '../ui/listitem';

export class Topics extends React.PureComponent {
    render() {
        return (
            <div className='topics'>
                {this.props.topics.length > 0 &&
                    <ul>
                        {this.props.topics.map((topic) => {
                            return (
                                <ListItem
                                    key={topic.id}
                                    id={topic.id}
                                    isActive={topic.id === this.props.currentTopic}
                                    onClick={this.props.onTopicClick}>
                                    <div className='topics--original'>{topic.name.cz}</div>
                                    <div className='topics--translated'>{topic.name.ru}</div>
                                </ListItem>
                            );
                        })}
                    </ul>
                }
            </div>
        );
    }

    static propTypes = {
        topics: PropTypes.array.isRequired,
        currentTopic: PropTypes.number,
        onTopicClick: PropTypes.func.isRequired
    }
}
