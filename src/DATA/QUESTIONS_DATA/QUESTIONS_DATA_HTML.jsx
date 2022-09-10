export const HtmlQuestionsData = [
  {
    id: 1,
    question: '1. What is the default type of ‘type’ attribute of <input> element?',
    questionOptions: [
      { answer: '1. Text', isCorrect: true },
      { answer: '2. Password', isCorrect: false },      
      { answer: '3. Numerals', isCorrect: false },
      { answer: '4. Special Characters', isCorrect: false }
    ],
    correct_answer: '1. Text',
    more_info: 'Explanation: Text input type defines single line text field. Type is the attribute that displays type of <input> elements. Its default type is text. It is supported by most of the browsers like Chrome, Internet Explorer, Firefox, Opera. Syntax is: <form action=”jump.php”> Name:<input type=”text” name=”name”> </form> A password field is defined by password input.',
    format: 'html'
  },
  {
    id: 2,
    question: '2. Which of the following is a new input attribute introduce by HTML5?',
    questionOptions: [
      { answer: '1. Text', isCorrect: false },
      { answer: '2. Checkbox Controls', isCorrect: false },      
      { answer: '3. Submit Buttons', isCorrect: false },
      { answer: '4. Date', isCorrect: true }
    ],
    correct_answer: '4. Date',
    more_info: `Explanation: HTML4 has attributes with <input> elements like radio buttons, Checkbox controls, submit buttons, text input etc.
    HTML5 has introduced new attributes like date, color, month, time, week, datetime-local, email, number, range, tel, url, search etc.`,
    format: 'html'
  },
  {
    id: 3,
    question: '3. How does the color attribute work?',
    questionOptions: [
      { answer: '1. Changes color of the text', isCorrect: false },
      { answer: '2. Changes background color', isCorrect: false },      
      { answer: '3. The color picker is defined by it', isCorrect: true },
      { answer: '4. Changes color of the text as well as background', isCorrect: false }
    ],
    correct_answer: '3. The color picker is defined by it',
    more_info: 'Explanation: color is the attribute of <input> element introduce by HTML5. It defines the color picker i.e we can select a color of our choice from the color picker. Syntax is Select the color that you want: <input type=”color” name=”favorite color”>',
    format: 'html'
  },
  {
    id: 4,
    question: '4. Which attribute is used for activation of JavaScript?',
    questionOptions: [
      { answer: '1. Button', isCorrect: true },
      { answer: '2. Checkbox', isCorrect: false },      
      { answer: '3. Url', isCorrect: false },
      { answer: '4. Submit', isCorrect: false },
    ],
    correct_answer: '1. Button',
    more_info: 'Explanation: Input type button is used for the activation of JavaScript on the clicking of the button. Its syntax is <input type=”button” value=”click” onclick=”source()”>. This will display a button named click and when we click that button JavaScript function source() will be invoked.',
    format: 'html'
  },
  {
    id: 5,
    question: '5. Which attribute defines the file-select field?',
    questionOptions: [
      { answer: '1. File', isCorrect: true },
      { answer: '2. Checkbox', isCorrect: false },      
      { answer: '3. Button', isCorrect: false },
      { answer: '4. Text', isCorrect: false },
    ],
    correct_answer: '1. File',
    more_info: 'Explanation: file input type defines a file-select field, also gives a “Browse” button for file uploads. Syntax is <input type=”file” name=”image”>. Checkbox gives the facility to select one or more than one options from the given choices. The button activates JavaScript code. The text defines a single-line text field.',
    format: 'html'
  },
  {
    id: 6,
    question: '6. How image attribute works?',
    questionOptions: [
      { answer: '1. Sets an image background', isCorrect: false },
      { answer: '2. Set an image as submit button', isCorrect: true },
      { answer: '3. Set an image anywhere on the page', isCorrect: false },
      { answer: '4. Bring default image to the page', isCorrect: false }
    ],
    correct_answer: '2. Set an image as submit button',
    more_info: 'Explanation: the image input type set an image as submit button. The syntax is <input type=”image” src=”imghj.gif” alt=”Submit”> this sets the image provided by url as the submit button. Input type image sends the X and Y coordinates of click and hence the image is activated by clicking the submit button.',
    format: 'html'
  },
  {
    id: 7,
    question: '7. Month attribute defines ___________',
    questionOptions: [
      { answer: '1. The only month', isCorrect: false },
      { answer: '2. Month and year', isCorrect: true },      
      { answer: '3. Date', isCorrect: false },
      { answer: '4. Date and time', isCorrect: false }
    ],
    correct_answer: '2. Month and year',
    more_info: 'Explanation: month and year are defined by month attribute. It does not define the time zone. The syntax is Anniversary (month and year) <input=”month” name=”anniversary month” >., date attribute defines the date, datetime-local defines date and time but no time zone.',
    format: 'html'
  },
  {
    id: 8,
    question: '8. Week attribute defines ____________',
    questionOptions: [
      { answer: '1. Week', isCorrect: false },
      { answer: '2. Year', isCorrect: false },
      { answer: '3. Week and year', isCorrect: true },
      { answer: '4. Week, month and year', isCorrect: false },
    ],
    correct_answer: '3. Week and year',
    more_info: 'Explanation: week input type defines a week and year. It does not define the time zone. Syntax is <form action=”ghu.php”> week: <input type=”week” name=”week and year”> <input type=”submit”> </form>, this gives a selection box and display a calendar like chart from where we can select a week and the year as well.',
    format: 'html'
  },
  {
    id: 9,
    question: '9. Tel attribute is supported by the _________ browser.',
    questionOptions: [
      { answer: '1. Chrome', isCorrect: false },
      { answer: '2. Safari', isCorrect: true },      
      { answer: '3. Opera', isCorrect: false },
      { answer: '4. Internet Explorer', isCorrect: false }
    ],
    correct_answer: '2. Safari',
    more_info: 'Explanation: tel is the attribute which specifies field for telephone number. Syntax is <form action=”hkjk.php”> Telephone number: <input type=”tel” name=”usertelephone”> <br> <input type=”submit”> </form>, tel attribute is usually supported by newer versions like Safari 8.',
    format: 'html'
  },
  {
    id: 10,
    question: '10. Which attribute is not used on new forms?',
    questionOptions: [
      { answer: '1. Size', isCorrect: true },
      { answer: '2. Text', isCorrect: false },      
      { answer: '3. Name', isCorrect: false },
      { answer: '4. Maxlength', isCorrect: false }
    ],
    correct_answer: '1. Size',
    more_info: 'Explanation: size attribute denotes the width of text input i.e measured by the number of characters inputted. E.g. If we input value 3 then it will create a box of width enough to display three characters. The user can enter more characters if they want. Syntax is <input type=”text” name=”firstname” size=”12” maxlength=”30”>',
    format: 'html'
  },
]