import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Btn } from '../ui/btn';
import { Radio } from '../ui/radio';
import { Icon } from '../ui/icon';
import './question.css';

export class Question extends React.PureComponent {

    handlePreviousBtnClick = () => {
        this.props.onNavBtnClick(this.props.currentQuestionId - 1);
    }

    handleNextBtnClick = () => {
        this.props.onNavBtnClick(this.props.currentQuestionId + 1);
    }

    render() {
        return (
            <div className='question'>
                <div className='question--head'>
                    <Btn
                        type='icon'
                        onClick={this.props.onBackBtnClick} >
                        <div>
                            <Icon name='arrow-left' />
                        </div>
                    </Btn>
                    <div className='question--num'>
                        {`${this.props.currentQuestionId + 1} / ${this.props.questions.length}`}
                    </div>
                </div>
                {this.props.currentQuestion &&
                    <React.Fragment>
                        <div className='question--txt question--txt-original'>
                            {this.props.currentQuestion.question[this.props.originalLang]}
                        </div>
                        <div className='question--txt question--txt-translated'>
                            {this.props.currentQuestion.question[this.props.translatedLang]}
                        </div>
                        {this.props.currentQuestion.img &&
                            <div className='question--img'>
                                <img src={this.props.currentQuestion.img} alt='' />
                            </div>
                        }
                        <div className='question--possibilities'>
                            {this.props.currentQuestion.possibilities &&
                                this.props.currentQuestion.possibilities.map((possibility, index) => {
                                    return (
                                        <Radio
                                            key={index}
                                            index={index}
                                            id={this.props.currentQuestion.id}
                                            isChecked={possibility.isChecked}
                                            textOriginalLang={possibility[this.props.originalLang]}
                                            textTranslatedLang={possibility[this.props.translatedLang]}
                                            answer={this.props.currentQuestion.answer}
                                            onChange={this.props.onOptionClick} />
                                    );
                                })}

                        </div>
                    </React.Fragment>
                }

                <div className='question--actionBar'>
                    <span />
                    {this.props.currentQuestionId !== 0 &&
                        <Btn
                            type='secondary'
                            onClick={this.handlePreviousBtnClick} >
                            Předchozí
                        </Btn>
                    }
                    {this.props.currentQuestionId < this.props.questions.length - 1 &&
                        <Btn
                            type='secondary'
                            onClick={this.handleNextBtnClick} >
                            Další
                        </Btn>
                    }

                </div>
            </div>
        );
    }

    static propTypes = {
        currentQuestion: PropTypes.object,
        currentQuestionId: PropTypes.number,
        originalLang: PropTypes.string,
        translatedLang: PropTypes.string,
        onNavBtnClick: PropTypes.func,
        onBackBtnClick: PropTypes.func,
        onOptionClick: PropTypes.func
    }
}
