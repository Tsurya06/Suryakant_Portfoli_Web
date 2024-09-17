var audio = new Audio("assets/sentmessage.mp3");
var contactString =
  "<div class='social'> <a href='mailto:tsuryansh5@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Tsurya06'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/suryakant-tripathi-9649a8191/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
  var resumeString =
  "<div class='resumeContainer'><iframe class='blurred-pdf' src='https://drive.google.com/file/d/1vylOfca3_CUnu2E1EERSPzeMA_CxcLx-/preview' width='640' height='480' allow='autoplay'></iframe><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Suryakant_Tripathi_resume.pdf</label></div><a href='https://drive.google.com/uc?export=download&id=1vylOfca3_CUnu2E1EERSPzeMA_CxcLx-' download='Suryakant_Tripathi_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div></div>";
    var addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8760.13797214269!2d83.54867467930363!3d27.1482149164779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996a9a0e4574cb5%3A0xeac3ec2ac456ac5f!2sShastri%20Nagar%2C%20Maharajganj%2C%20Uttar%20Pradesh%20273303!5e0!3m2!1sen!2sin!4v1724918516780!5m2!1sen!2sin' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>Shastri Nagar<br>Ward No. 22<br>Maharajganj, Uttar Pradesh, INDIA 273303</address>";

function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value.trim() == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1000);
  input.value = "";
  playSound();
}

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Suryakant Tripathi</a>.</span><br><br>I am an SDE 1 at <span class='bold'>UnOrg Vendor Solutions Pvt. Ltd</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the Software Development sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "help":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I am currently working as a Software Development Engineer (SDE 1) at UnOrg Vendor Solutions Pvt. Ltd.<br><br>I am proficient in the following programming languages:<br><span class='bold'>C++, Core Java, TypeScript, JavaScript, HTML5, CSS</span><br><br>I have experience with the following frameworks and tools:<br><span class='bold'>React, Redux, Spring Boot, JPA, Axios, Postman, Git/GitHub</span><br><br>I am comfortable working with REST APIs and managing application state with Redux.<br></span>"
      );
      break;
    case "education":
      sendTextMessage(
        "I hold a B.Tech degree in Computer Science & Engineering from I.T.S Engineering College, Greater Noida, UP, with a graduation date of June 2023."
      );
      break;

    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This portfolio website is built using HTML, CSS, and JavaScript from scratch!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://github.com/Tsurya06'><span class='bold'>Suryakant Tripathi</a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Feel free to visit my GitHub profile.<br><br><div class='social'><a target='_blank' href='https://github.com/Tsurya06'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "Hey, I couldn't catch that...😢<br>Send 'help' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
