import React from 'react'
import { HtmlQuestionsData } from '../../../../DATA/QUESTIONS_DATA/QUESTIONS_DATA_HTML'
import {motion} from 'framer-motion'
import HtmlQuestions from '../HtmlQuestions/HtmlQuestions'
import './HtmlQuestionsContainer.css'
import './HtmlQuestionsContainerResponsive.css'

export default function HtmlQuestionsContainer({onAnswerHtml, htmlScore, showHtmlScore, currentHtmlQuestion}) {
  return (
    <motion.div className='html-questions-container'
    ititial = {{y: 0, opacity: 0}}
    animate = {{opacity: 1}}
    exit = {{y: window.innerHeight, transition: {duration: 0.3}, opacity: 0}}
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
          >
            <div className="html-score-text-box">
              <span className='html-score-text'>{htmlScore}/{HtmlQuestionsData.length}</span>
            </div>
            <div className="html-text-box">
              {
                htmlScore <= 2 ? <span className="html-text">Your result is <span style={{color: 'red'}}>POOR</span></span> : htmlScore > 2 && htmlScore <= 4 ? <span className="html-text">Your result is <span style={{color: 'goldenrod'}}>FAIR</span></span> : htmlScore > 4 && htmlScore <= 6 ? <span className="html-text">Your result is <span styele={{color: 'gold'}}>GOOD</span></span> : htmlScore > 6 && htmlScore <= 8 ? <span className="html-text">Your result is <span style={{color: 'greenyellow'}}>EXCELLENT</span></span> : htmlScore > 8 && htmlScore <= 10 ? <span className="html-text">Your result is <span style={{color: 'green'}}>WOW!</span></span> : null
              }
            </div>
            <div>
              <div className="html-answers-container">
                <div className="html-answer-box">
              <div className="html-answers-title-box">
                <h3 className="html-answers-title">Q&A</h3>
              </div>
                  {
                    HtmlQuestionsData.map((item) => {
                      return <div className='html-answer-row' key={item.id}>
                        <p className="html-question">{item.question}</p>
                        <div className='html-answers'>
                          <span className='html-answer-id'>{item.id}</span>
                          <p className='html-answer'>{item.correct_answer}</p>
                        </div>
                        <p className='html-more-info-text'>{item.more_info}</p>
                        </div>
                    })
                  }
                </div>
              </div>
            </div>
          </motion.div>
          :
          <HtmlQuestions onAnswerHtml={onAnswerHtml} currentHtmlQuestion={currentHtmlQuestion} htmlScore={htmlScore}/>
        }
      </div>
    </motion.div>
  )
}
