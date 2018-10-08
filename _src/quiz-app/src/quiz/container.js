import { connect } from 'react-redux';

import { Quiz } from './component';
import { setTopic, toggleMain } from '../actions';

const mapStateToProps = (state) => {
    return {
        currentTopic: state.currentTopic,
        isMainShown: state.isMainShown
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRandBtnClick: () => {
            dispatch(setTopic(-1));
            dispatch(toggleMain(true));
        },
        onAllBtnClick: () => {
            dispatch(setTopic(null));
            dispatch(toggleMain(true));
        }
    };
};

export const QuizContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz);
