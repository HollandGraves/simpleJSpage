//Creates, styles, and appends a div to the body
var myDiv = document.createElement("div");
    myDiv.id = "bannerDiv";
    myDiv.className = 'bg-light heightWidth';
    myDiv.style.backgroundColor = "aqua";
    myDiv.style.position = "relative";
    myDiv.style.minWidth = "300px";
    myDiv.style.minHeight = "200px";
    myDiv.style.maxWidth = "600px";
    myDiv.style.maxHeight = "400px";
    myDiv.style.margin = "auto";
document.body.appendChild(myDiv);



//Creating an array so when you click on button background shifts color
//counter to move through array for background colors
var colorArray = [
    "aqua",
    "red",
    "blue",
    "black"
]
var colorCounter = 0;

//creates, styles, and appends a button that will change background color of myDiv
var bgButton = document.createElement("BUTTON");
    bgButton.type = "button";
    bgButton.onclick = 
        function changeBg() {
            if(colorCounter < colorArray.length - 1) {
                colorCounter++;
            } else {
                colorCounter = 0;
            }
            myDiv.style.backgroundColor = colorArray[colorCounter];
        };
    bgButton.id = "bgButton";
    bgButton.innerText = "Click Me!";
    bgButton.style.position = "relative";
    bgButton.style.top = "75px";
    bgButton.style.left = "38%";
    bgButton.style.padding = "15px 30px";
    bgButton.style.fontSize = "1.2rem";
document.getElementById("bannerDiv").appendChild(bgButton);



//creates, styles, appends a second div to the body of the document
var secondDiv = document.createElement("div");
    secondDiv.id = "secondDiv";
    secondDiv.style.backgroundColor = "green";
    secondDiv.style.minWidth = "300px";
    secondDiv.style.minHeight = "200px";
    secondDiv.style.maxWidth = "600px";
    secondDiv.style.maxHeight = "400px";
    secondDiv.style.margin = "50px auto";
    secondDiv.style.padding = "auto";
    secondDiv.style.textAlign = "center";
document.body.appendChild(secondDiv);

//create, style, and append an h1 tag to #secondDiv using textContent method
var myH1 = document.createElement("h1");
    myH1.id = "myH1";
    myH1.textContent = "This webpage is a test to create a webpage strictly out of JavaScript";
    myH1.style.color = "white";
    myH1.style.padding = "50px 20px";
document.getElementById("secondDiv").appendChild(myH1);



//creates, styles, appends a third div to the body of the document
var thirdDiv = document.createElement("div");
    thirdDiv.id = "thirdDiv";
    thirdDiv.style.backgroundColor = "tan";
    thirdDiv.style.minWidth = "300px";
    thirdDiv.style.minHeight = "200px";
    thirdDiv.style.maxWidth = "600px";
    thirdDiv.style.maxHeight = "400px";
    thirdDiv.style.margin = "50px auto";
    thirdDiv.style.padding = "auto";
    thirdDiv.style.textAlign = "center";
document.body.appendChild(thirdDiv);

//create, style, and append an h1 tag to #secondDiv using the createTextNode method
var secondH1 = document.createElement("h1");
    secondH1.id = "secondH1";
    secondH1.style.padding = "50px 20px";
var h1Node = document.createTextNode("This string was created with the createTextNode method");
document.getElementById("thirdDiv").appendChild(secondH1);
document.getElementById("secondH1").appendChild(h1Node);



//creates, styles, appends a fourth div to the body of the document
var fourthDiv = document.createElement("div");
    fourthDiv.id = "fourthDiv";
    fourthDiv.style.margin = "50px auto";
    fourthDiv.style.textAlign = "center";
document.body.appendChild(fourthDiv);

//creates an img with src and alt
var imgOfKnight = document.createElement("img");
    imgOfKnight.id = "imgOfKnight";
    imgOfKnight.src = "img/knight1.jpg";
    imgOfKnight.alt = "image of knight, dragon, and shield";
    imgOfKnight.style.maxHeight = "600px";
    imgOfKnight.style.maxWidth = "600px";
    imgOfKnight.style.minHeight = "600px";
    imgOfKnight.style.minWidth = "600px";
    imgOfKnight.style.objectFit = "cover";
document.getElementById("fourthDiv").appendChild(imgOfKnight);

//creates br inbetween img and btn
var imgBtnBr = document.createElement("br");
document.getElementById("fourthDiv").appendChild(imgBtnBr);

//create an array of objects each with a src and alt to click through with a button
//create a counter to shift through the array with
var imgObjectArray = [
    {
        src: "img/knight1.jpg",
        alt: "image of knight, drgaon, and shield"
    },
    {
        src: "img/knight2.jpg",
        alt: "knight kneeling before a king"
    },
    {
        src: "img/knight3.jpg",
        alt: "knight shielding against a stream of fire"
    }
]
var imgCounter = 0;

//creates, styles, and appends button to fourthDiv to shift between images
var imgBtn = document.createElement("button");
    imgBtn.type = "button";
    imgBtn.onclick = 
        function imgChange() {
            if(imgCounter < imgObjectArray.length - 1) {
                imgCounter++;
            } else {
                imgCounter = 0;
            }
            imgOfKnight.src = imgObjectArray[imgCounter].src;
            imgOfKnight.alt = imgObjectArray[imgCounter].alt;
        }
    imgBtn.id = "imgBtn";
    imgBtn.innerText = "Click Me!";
    imgBtn.style.margin = "25px";
    imgBtn.style.padding = "15px 30px";
    imgBtn.style.fontSize = "1.2rem";
document.getElementById("fourthDiv").appendChild(imgBtn);
