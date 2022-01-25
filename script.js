// getting all neccessary elements 

// all containers 
let start = document.querySelector('.start');
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

// loader bars 
let load = document.querySelectorAll('#load');
// loader container
let loader = document.querySelector('.loader_container');

// loader function 
let divLoop = () => {
  load[0].onclick = () => {
      load[0].classList.toggle('display');
  };
  load[1].onclick = () => {
      load[1].classList.toggle('display');
  };
  load[2].onclick = () => {
      load[2].classList.toggle('display');
  };
  load[3].onclick = () => {
      load[3].classList.toggle('display');
  };
  load[4].onclick = () => {
      load[4].classList.toggle('display');
  };

  load[5].onclick = () => {
      load[5].classList.toggle('display');
  };
};

let divClick = () => {
  setTimeout(()=>{
      load[0].click();
  },50);
  setTimeout(()=>{
      load[1].click();
  }, 100);
  setTimeout(()=>{
      load[2].click();
  },150);
  setTimeout(()=>{
      load[3].click();
  },200);
  setTimeout(()=>{
      load[4].click();
  },250);
  setTimeout(()=>{
      load[5].click();
  },300);
};

// start button function 
let startButtonf = () => {
  start.classList.add('hide');
  userInfor.classList.add('active');
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
  start.classList.remove('hide');
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
  let loaderStart = setInterval(() => {
    loader.classList.add('active');
    divLoop();
    divClick();
  }, 400);
  
  setTimeout(() => {
    clearInterval(loaderStart);
    loader.classList.remove('active');
  }, 4000);


  setTimeout(() => {
      getAllData();
  }, 2000);

  setTimeout(() => {
    finalSubmissionButton.click();
  }, 4000);
});

var typed = new Typed("#typingText", {
  strings: ["to ask you some questions", "to offer you some help", "you to tell us your challenges", "to help you solve your problems", "to end your worries"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});