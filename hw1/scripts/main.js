// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc == "hw1/images/firefox-icon.png") {
//         myImage.setAttribute("src", "hw1/images/ghost.jpg");
//     }
//     else { 
//         myImage.setAttribute("src", "hw1/images/firefox-icon.png");    
//     }
// };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter name here:");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my website, ${myName}!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName(); 
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Welcome to my website, ${storedName}!`;
    
}

myButton.onclick = () => {
    setUserName();
  };
  

function scrollToTop() {
    window.scrollTo( {
        top: 0,
        behavior: 'smooth'
    });
}

