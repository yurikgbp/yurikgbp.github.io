import { QUIZ } from './constants';

export const reducer = (state, action) => {
    switch (action.type) {

        case QUIZ.SET_DATA:
            let topics = [],
                questions = [];

            action.data.forEach((t, tidx) => {
                topics.push({
                    id: tidx,
                    name: t.name
                });

                t.questions.forEach((q, qidx) => {
                    q.possibilities.forEach(p => {
                        p.isChecked = false;
                    });

                    questions.push({
                        ...q,
                        topic: tidx,
                        id: `${tidx}-${qidx}`,
                        isSolved: null
                    });
                });
            });

            return {
                ...state,
                topics,
                questions
            };

        case QUIZ.SET_TOPIC:
            return {
                ...state,
                currentTopic: action.id,
                randomQuestions: action.randQ
            };

        case QUIZ.SET_QUESTION:
            return {
                ...state,
                currentQuestion: action.id
            };

        case QUIZ.SET_OPTION:
            const newArr = JSON.parse(JSON.stringify(state.questions));

            newArr.forEach(q => {
                if (q.id === action.id) {
                    q.possibilities.forEach(i =>
                        i.isChecked = false
                    );
                    q.possibilities[action.option].isChecked = action.isChecked;
                    q.isSolved = action.isSolved;
                }
            });

            return {
                ...state,
                questions: newArr
            };

        case QUIZ.TOGGLE_MAIN:
            return {
                ...state,
                isMainShown: action.isMainShown
            };

        default:
            return state;
    }
};
