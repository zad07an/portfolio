export const QuestionsData = [
  {
    id: 1,
    question: '1. CSS stands for __________',
    questionOptions: [
      { answer: '1. Color Style Sheets', isCorrect: false },
      { answer: '2. Cascade Sheets Style', isCorrect: false },      
      { answer: '3. Cascade Style Sheet', isCorrect: false },
      { answer: '4. Cascading Style Sheets', isCorrect: true }
    ],
    correct_answer: '4. Cascading Style Sheets',
    more_info: 'Explanation: CSS is a style sheet language which stands for Cascading Style Sheet.',
    format: 'css'
  },
  {
    id: 2,
    question: '2. _________ selectors are used to specify a group of elements.',
    questionOptions: [
      { answer: '1. id', isCorrect: false },
      { answer: '2. class', isCorrect: true },      
      { answer: '3. tag', isCorrect: false },
      { answer: '4. both class and tag', isCorrect: false }
    ],
    correct_answer: '2. class',
    more_info: 'Explanation: Class selectors are used to specify a group of elements. Id selector specifies a particular unique element.',
    format: 'css'
  },
  {
    id: 3,
    question: '3. In CSS, “font-size” can be called as ________',
    questionOptions: [
      { answer: '1. Selector', isCorrect: false },
      { answer: '2. Rule', isCorrect: false },      
      { answer: '3. Property', isCorrect: false },
      { answer: '4. Property-Name', isCorrect: true }
    ],
    correct_answer: '4. Property-Name',
    more_info: 'Explanation: In CSS, font-size is a property-name which increases/decreases the font of text.',
    format: 'css'
  },
  {
    id: 4,
    question: '4. Which selector is used to specify a rule to bind a particular unique element?',
    questionOptions: [
      { answer: '1. id', isCorrect: true },
      { answer: '2. class', isCorrect: false },      
      { answer: '3. tag', isCorrect: false },
      { answer: '4. both class and tag', isCorrect: false },
    ],
    correct_answer: '1. id',
    more_info: 'Explanation: For binding a particular unique element, id selectors are used. While for group of elements, class selector can be used.',
    format: 'css'
  },
  {
    id: 5,
    question: '5. In CSS, h1 can be called as _______',
    questionOptions: [
      { answer: '1. Selector', isCorrect: true },
      { answer: '2. Attribute', isCorrect: false },      
      { answer: '3. Value', isCorrect: false },
      { answer: '4. Tag', isCorrect: false },
    ],
    correct_answer: '1. Selector',
    more_info: 'Explanation: HTML element h1 is used in CSS for styling then it is also called a selector. Attributes are the special words which control the element’s behaviour. To show the start and end of HTML element, tag is used.',
    format: 'css'
  },
  {
    id: 6,
    question: '6. Which of the following attributes is used to specify elements to bind style rules to?',
    questionOptions: [
      { answer: '1. id', isCorrect: false },
      { answer: '2. class', isCorrect: false },
      { answer: '3. tag', isCorrect: false },
      { answer: '4. All of the mentioned', isCorrect: true }
    ],
    correct_answer: '4. All of the mentioned',
    more_info: 'Explanation: In CSS, styling elements can be done by id, class and tag attribute.',
    format: 'css'
  },
  {
    id: 7,
    question: '7. Which of the following tag is used to embed css in html page?',
    questionOptions: [
      { answer: '1. <script>', isCorrect: false },
      { answer: '2. <style>', isCorrect: true },      
      { answer: '3. <css>', isCorrect: false },
      { answer: '4. <link>', isCorrect: false }
    ],
    correct_answer: '2. <style>',
    more_info: 'Explanation: <style> </style> tag is used to embed CSS in HTML page, while <script> </script> is used to embed JS in HTML. <!DOCTYPE html> is HTML5 declaration.',
    format: 'css'
  },
  {
    id: 8,
    question: '8. Is it the best way to include H1 heading only one time on the web page.',
    questionOptions: [
      { answer: '1. True', isCorrect: true },
      { answer: '2. False', isCorrect: false },
    ],
    correct_answer: '1. True',
    more_info: 'Explanation: It is good practice to include H1 heading only once and to use H2-H6 heading in other areas.',
    format: 'css'
  },
  {
    id: 9,
    question: '9. In css, “color:red” can be called as _____________',
    questionOptions: [
      { answer: '1. Selector', isCorrect: false },
      { answer: '2. Rule', isCorrect: false },      
      { answer: '3. Decleration', isCorrect: true },
      { answer: '4. Value', isCorrect: false }
    ],
    correct_answer: '3. Decleration',
    more_info: 'Explanation: In CSS, color:red is the declaration for an element saying that the given element has to apply a red color. Color is one of CSS property.',
    format: 'css'
  },
  {
    id: 10,
    question: '10. __________ has introduced text, list, box, margin, border, color, and background properties.',
    questionOptions: [
      { answer: '1. css', isCorrect: true },
      { answer: '2. html', isCorrect: false },      
      { answer: '3. ajax', isCorrect: false },
      { answer: '4. php', isCorrect: false }
    ],
    correct_answer: '1. css',
    more_info: 'Explanation: CSS is a style sheet language which stands for Cascading Style Sheet. CSS has introduced text, list, box, margin, border, color, and background properties.',
    format: 'css'
  },
]