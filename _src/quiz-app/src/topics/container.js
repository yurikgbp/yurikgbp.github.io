import { connect } from 'react-redux';

import { setTopic, toggleMain } from '../actions';
import { Topics } from './component';

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
        currentTopic: state.currentTopic
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicClick: (id) => {
            dispatch(setTopic(id));
            dispatch(toggleMain(true));
        }
    };
};

export const TopicsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics);
