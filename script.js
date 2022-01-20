// getting all neccessary elements 

// all containers 
let userInfor = document.querySelector('.user_infor');
let question = document.querySelector('.question');
let challenges = document.querySelector('.challenges');
let solution = document.querySelector('.solution');
let preview = document.querySelector('.preview');

// all buttons 
let startButton = document.querySelector('.start_btn');

let userInforBtn = document.querySelector('#userInforBtn');
let userInforBackBtn = document.querySelector('#userInforBackBtn');

let questionBtn = document.querySelector('#questionBtn');
let questionBackBtn = document.querySelector('#questionBackBtn');

let challBtn = document.querySelector('#challBtn');
let challBackBtn = document.querySelector('#challBackBtn');

let solutionBtn = document.querySelector('#solutionBtn');
let soluBackBtn = document.querySelector('#soluBackBtn');

let prevSubmitButton = document.querySelector('#submitButton');
let previewBackBtn = document.querySelector('#previewBackBtn');

let finalSubmissionButton = document.querySelector('#finalSubmission');

// input fields 
let nameField = document.querySelector('#nameField');
let emailField = document.querySelector('#emailField');
let challField = document.querySelector('#challField');
let soluField = document.querySelector('#soluField');

let nameSubmit = document.querySelector('#nameSum');
let emailSubmit = document.querySelector('#emailSum');
let ocupaSubmit = document.querySelector('#ocupaSum');
let challSubmit = document.querySelector('#challSum');
let soluSubmit = document.querySelector('#soluSum');

// innerHTML 
let username = document.querySelectorAll('.username');
let ocupation = document.querySelector('.ocupation');

let previewEmail = document.querySelector('.previewEmail');
let previewOcup = document.querySelector('.previewOcup');
let previewChall = document.querySelector('.previewChall');
let soluToChall = document.querySelector('.soluToChall');

// question options 
let student = document.querySelector('#student');
let business = document.querySelector('#business');

// start button function 
let startButtonf = () => {
  startButton.classList.add('hide');
  userInfor.classList.add('active');
  startButton.style.padding = '30px 50px';
};

startButton.addEventListener('click', () => {
  startButtonf();
});

// userInfor button function 
let userInforBtnf = () => {
  let nameFieldData = nameField.value;
  let emailFieldData = emailField.value;
  if (nameFieldData && emailFieldData.includes('@' && '.com') && emailFieldData.length > 5) {
    userInfor.classList.remove('active');
    question.classList.add('active');
    username[0].innerHTML = nameFieldData;
    username[1].innerHTML = nameFieldData;
    username[2].innerHTML = nameFieldData;
    previewEmail.innerHTML = emailFieldData;
  } else{
    alert('enter valid credentials');
  }
};

userInforBtn.addEventListener('click', () => {
  userInforBtnf();
});

userInforBackBtn.addEventListener('click', () => {
  userInfor.classList.remove('active');
  startButton.classList.remove('hide');
  startButton.style.padding = '20px 40px';
});

// question button validate function 
let questValidation = () => {
  if ( (student.checked) && (business.checked) ) {
    challenges.classList.add('active');
    question.classList.remove('active');
    ocupation.innerHTML = 'student and a business person';
    previewOcup.innerHTML = 'A student and Business person';
  } else if(student.checked) {
    challenges.classList.add('active');
    question.classList.remove('active');
    ocupation.innerHTML = 'student';
    previewOcup.innerHTML = 'A student';
  } else if(business.checked) {
    challenges.classList.add('active');
    question.classList.remove('active');
    ocupation.innerHTML = 'business person';
    previewOcup.innerHTML = 'A business person';
  } else{
    alert('choose your ocupation');
  }
};

questionBtn.addEventListener('click', () => {
  questValidation();
});

questionBackBtn.addEventListener('click', () => {
  question.classList.remove('active');
  userInfor.classList.add('active');
});

// challenge button function 
let challBtnf = () => {
  let nameFieldData = nameField.value;
  let challFieldData = challField.value;
  if (challFieldData.length > 20) {
    solution.classList.add('active');
    challenges.classList.remove('active');
    previewChall.innerHTML = challFieldData;
  } else{
    alert('Enter minimum of 20 characters!!');
  }
};

challBtn.addEventListener('click', () => {
  challBtnf();
});

challBackBtn.addEventListener('click', () => {
  challenges.classList.remove('active');
  question.classList.add('active');
});

let solutionBtnf = () => {
  let soluFieldData = soluField.value;
  if (soluFieldData.length > 20) {
    preview.classList.add('active');
    solution.classList.remove('active');

    soluToChall.innerHTML = soluFieldData;

  } else{
    alert('Enter minimum of 20 characters!!')
  }
};

solutionBtn.addEventListener('click', () => {
  solutionBtnf();
});

soluBackBtn.addEventListener('click', () => {
  solution.classList.remove('active');
  challenges.classList.add('active');
});

// preview button function 
previewBackBtn.addEventListener('click', () => {
  preview.classList.remove('active');
  solution.classList.add('active');
});

// submit button function 
let getAllData = () => {
  nameSubmit.value = username[0].innerText;
  emailSubmit.value = previewEmail.innerText;
  ocupaSubmit.value = previewOcup.innerText;
  challSubmit.value = previewChall.innerText;
  soluSubmit.value = soluToChall.innerText;
};

prevSubmitButton.addEventListener('click', () => {
  setTimeout(() => {
      getAllData();
  }, 2000);

  setTimeout(() => {
    finalSubmissionButton.click();
  }, 4000);
});