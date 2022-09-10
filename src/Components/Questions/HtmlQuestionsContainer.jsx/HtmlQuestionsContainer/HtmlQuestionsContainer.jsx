import React from 'react'
import { HtmlQuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA_HTML'
import {motion} from 'framer-motion'
import HtmlQuestions from '../HtmlQuestions/HtmlQuestions'
import './HtmlQuestionsContainer.css'
import './HtmlQuestionsContainerResponsive.css'

export default function HtmlQuestionsContainer({onAnswerHtml, htmlScore, showHtmlScore, currentHtmlQuestion, switcher}) {

  const HtmlQuestionContainerStyle = switcher ? {background: 'linear-gradient(-45deg, #361157, #015675)'} : null

  const HtmlQuestionsResultContainerStyle = switcher ? {background: '#505050'} : null
  const HtmlQuestionsFontColor = switcher ? {color: '#fff'} : {color: '#000'}

  return (
    <motion.div className='html-questions-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
    style={HtmlQuestionContainerStyle}
    >
      <div className="html-questions-container-title-box">
        <h3 className="html-questions-container-title">Questions</h3>
        <p className='html-questions-container-info'>HTML Questions - Input Types for Form</p>
      </div>
      <div className="html-questions-boxes">
        {
          showHtmlScore ?
          <motion.div className="html-score-box"
          initial = {{opacity: 0, y: 200}}
          animate = {{opacity: 1, y: 0, transition: {delay: 0.2}}}
          style={HtmlQuestionsResultContainerStyle}
          >
            <div className="html-score-text-box">
              <span className='html-score-text'>{htmlScore}/{HtmlQuestionsData.length}</span>
            </div>
            <div className="html-text-box">
              <span className="html-text" style={HtmlQuestionsFontColor}>
                Your result is
                {
                  htmlScore <= 2
                  ?
                  <span style={{color: 'red'}}> POOR</span>
                  :
                  htmlScore > 2 && htmlScore <= 4
                  ?
                  <span style={{color: 'goldenrod'}}> FAIR</span>
                  :
                  htmlScore > 4 && htmlScore <= 6
                  ?
                  <span styele={{color: 'gold'}}> GOOD</span>
                  :
                  htmlScore > 6 && htmlScore <= 8 
                  ?
                  <span style={{color: 'greenyellow'}}> EXCELLENT</span>
                  :
                  htmlScore > 8 && htmlScore <= 10
                  ?
                  <span style={{color: 'green'}}> WOW! </span>
                  :
                  null
                }
              </span>
            </div>
            <div>
              <div className="html-answers-container">
                <div className="html-answer-box">
              <div className="html-answers-title-box">
                <h3 className="html-answers-title" style={HtmlQuestionsFontColor}>Q&A</h3>
              </div>
                  {
                    HtmlQuestionsData.map((item) => {
                      return <div className='html-answer-row' key={item.id}>
                        <p className="html-question" style={HtmlQuestionsFontColor}>{item.question}</p>
                        <div className='html-answers'>
                          <span className='html-answer-id'>{item.id}</span>
                          <p className='html-answer' style={HtmlQuestionsFontColor}>{item.correct_answer}</p>
                        </div>
                        <p className='html-more-info-text' style={HtmlQuestionsFontColor}>{item.more_info}</p>
                        </div>
                    })
                  }
                </div>
              </div>
            </div>
          </motion.div>
          :
          <HtmlQuestions onAnswerHtml={onAnswerHtml} currentHtmlQuestion={currentHtmlQuestion} htmlScore={htmlScore} switcher={switcher}/>
        }
      </div>
    </motion.div>
  )
}
