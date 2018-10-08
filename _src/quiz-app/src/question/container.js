import { connect } from 'react-redux';

import { setQuestion, setOption, setTopic, toggleMain } from '../actions';
import { Question } from './component';


const mapStateToProps = (state) => {
    const questions = state.currentTopic === null
        ? state.questions
        : state.currentTopic === -1
            ? state.randomQuestions
            : state.questions.filter(q => q.topic === state.currentTopic);

    return {
        questions,
        currentQuestion: questions[state.currentQuestion],
        currentQuestionId: state.currentQuestion,
        currentTopic: state.currentTopic,
        translatedLang: state.lang.translated,
        originalLang: state.lang.original
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOptionClick: (isChecked, isSolved, option, id) => {
            dispatch(setOption(isChecked, isSolved, option, id));
        },
        onNavBtnClick: (id) => {
            dispatch(setQuestion(id));
        },
        onBackBtnClick: () => {
            dispatch(setTopic(null));
            dispatch(toggleMain(false));
        }
    };
};

export const QuestionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
