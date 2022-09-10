import {Route, Routes, useLocation} from 'react-router-dom'
import Layouts from "./Components/Layouts"
import Home from "./Components/pages/Home/Home"
import Portfolio from "./Components/pages/Portfolio/Portfolio"
import Experience from "./Components/pages/Experience/Experience"
import Testmonials from "./Components/pages/Testmonials/Testmonials"
import Error from './Components/pages/Error/Error'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './ScrollToTop'
import { useState } from 'react'
import { QuestionsData } from './DATA/QUESTIONS_DATA/QUESTIONS_DATA'
import ChooseQuestions from './Components/Questions/ChooseQuestions/ChooseQuestions'
import { HtmlQuestionsData } from './DATA/QUESTIONS_DATA/QUESTIONS_DATA_HTML'
import HtmlQuestionsContainer from './Components/Questions/HtmlQuestionsContainer.jsx/HtmlQuestionsContainer/HtmlQuestionsContainer'
import QuestionsContainer from './Components/Questions/CssQuestions/CssQuestionsContainer/QuestionsContainer'
import './App.css'

function App() {

  const location = useLocation();
  const [switcher, setSwitcher] = useState(false);
  const [questions, setQuestions] = useState([...QuestionsData]);
  const [htmlQuestions, setHtmlQuestions] = useState([...HtmlQuestionsData])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentHtmlQuestion, setCurrentHtmlQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [htmlScore, setHtmlScore] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [showHtmlScore, setShowHtmlScore] = useState(false)

  const onAnswer = (isCorrect) => {
    const nextQuestion = currentQuestion + 1
    if (isCorrect === true) {
      setQuestions(isCorrect)
      setCurrentQuestion(nextQuestion)
      setScore(score + 1)
    }
    if (nextQuestion < QuestionsData.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(!showScore)
    }
  }

  const onAnswerHtml = (isCorrect) => {
    const nextQuestion = currentHtmlQuestion + 1
    if (isCorrect === true) {
      setHtmlQuestions(isCorrect)
      setCurrentHtmlQuestion(nextQuestion)
      setHtmlScore(htmlScore + 1)
    }
    if (nextQuestion < HtmlQuestionsData.length) {
      setCurrentHtmlQuestion(nextQuestion)
    } else {
      setShowHtmlScore(!showHtmlScore)
    }
  }

  const themeSwitcher = () => {
    setSwitcher(!switcher)
  }

  return (
    <>
      <div className="container">
        <AnimatePresence>
          <ScrollToTop/>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layouts themeSwitcher={themeSwitcher} switcher={switcher}/>}>
              <Route path="/" element={<Home switcher={switcher}/>} />
              <Route path="/experience" element={<Experience switcher={switcher}/>} />
              <Route path="/portfolio" element={<Portfolio switcher={switcher}/>} />
              <Route path="/testmonials" element={<Testmonials switcher={switcher}/>} />
              <Route path='/questions' element={<ChooseQuestions switcher={switcher}/>}/>
              <Route path='/questions/css' element={<QuestionsContainer score={score} questions={questions} onAnswer={onAnswer} currentQuestion={currentQuestion} showScore={showScore} switcher={switcher}/>} />
              <Route path='/questions/html' element={<HtmlQuestionsContainer
              onAnswerHtml={onAnswerHtml} htmlScore={htmlScore} htmlQuestions={htmlQuestions} currentHtmlQuestion={currentHtmlQuestion} showHtmlScore={showHtmlScore} switcher={switcher} />} />
              <Route path='*' element={<Error switcher={switcher}/>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
