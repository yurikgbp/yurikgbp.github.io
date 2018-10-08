import { QUIZ } from './constants';

// DATA

export const load = (url) => async (dispatch, getState) => {
    const data = await getJson(url);

    dispatch(setData(data));
};

const getJson = async (url) => {
    const response = await fetch(url, {
        mode: 'cors'
    });
    if (response.status >= 400) {
        console.error('Bad response from server', response.statusText);
        return null;
    }
    return await response.json();
};

const setData = (data) => (dispatch, getState) => {
    dispatch({
        type: QUIZ.SET_DATA,
        data
    });
};


// QUIZ

export const setTopic = (id) => (dispatch, getState) => {
    const randQ = id === -1
        ? randomize(getState().questions, 3)
        : null;

    dispatch({
        type: QUIZ.SET_TOPIC,
        id,
        randQ
    });

    dispatch(setQuestion(0));

};

export const setQuestion = (id) => (dispatch, getState) => {
    dispatch({
        type: QUIZ.SET_QUESTION,
        id
    });
};

export const setOption = (isChecked, isSolved, option, id) => (dispatch, getState) => {
    dispatch({
        type: QUIZ.SET_OPTION,
        isChecked, isSolved, option, id
    });
};

export const toggleMain = (isMainShown) => (dispatch, getState) => {
    dispatch({
        type: QUIZ.TOGGLE_MAIN,
        isMainShown
    });
};

const randomize = (q, limit) => {
    const randQ = [],
          arrIdx = [],
          count = q.length;

    while (arrIdx.length < limit) {
        const idx = Math.floor(Math.random() * count);
        if (arrIdx.indexOf(idx) === -1) {
            randQ.push(q[idx]);
            arrIdx.push(idx);
        }
    }

    return randQ;
};