import * as React from 'react';
import * as PropTypes from 'prop-types';

import './quiz.css';

import { QuestionContainer } from '../question/container';
import { TopicsContainer } from '../topics/container';
import { Sidebar } from '../sidebar/component';
import { Btn } from '../ui/btn';


export class Quiz extends React.PureComponent {
    render() {
        return (
            <div className='quiz'>
                <div className='quiz--sidebar'>
                    <Sidebar />
                </div>
                <div className='quiz--panel'>
                    <div className='quiz--intro'>
                        <h1 className='h1'>Victoria</h1>
                        <h2 className='h2'>Autoškola: otázky</h2>
                    </div>
                    <div className='quiz--actionBar'>
                        <Btn
                            type='cta'
                            onClick={this.props.onRandBtnClick}>
                            15 otázek
                        </Btn>
                        <Btn
                            type='secondary'
                            onClick={this.props.onAllBtnClick }>
                            Vše
                        </Btn>
                    </div>
                    <TopicsContainer />
                </div>
                <div className={`quiz--main${this.props.isMainShown ? ' quiz--main-shown' : ''}`}>
                    <QuestionContainer />
                </div>
            </div>
        );
    }

    static propTypes = {
        currentTopic: PropTypes.number,
        isMainShown: PropTypes.bool,
        onRandBtnClick: PropTypes.func,
        onAllBtnClick: PropTypes.func
    }
}
