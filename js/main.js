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
var counter = 0;

//creates, styles, and appends a button that will change background color of myDiv
var bgButton = document.createElement("BUTTON");
    bgButton.type = "button";
    bgButton.value = "Click Me";
    bgButton.onclick = 
        function changeBg() {
            if(counter < colorArray.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
            myDiv.style.backgroundColor = colorArray[counter];
        };
    bgButton.id = "bgButton";
    bgButton.className = "btn-style";
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

//create an array of objects each with a src and alt to click through with a button
//create a counter to shift through the array with
var imgObjectArray = [
    {
        src: "",
        alt: ""
    },
    {
        src: "",
        alt: ""
    },
    {
        src: "",
        alt: ""
    }
]
