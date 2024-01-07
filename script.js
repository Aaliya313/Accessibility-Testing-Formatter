//get element by id (input from the user) and store in a vairble
//loop through the code 
//if h2 does not contain accessibly correct coding standards - highlight it and push in the correct syntax and store in a varible and get users original piece of code
//repeat for other html elements
//At the end of the code print it all out as a list in separate boxes per error and copy and paste button available



let usersCode = document.getElementById('usersInput');
//let firstIssue = document.createElement('output', { is: "firstOutput"});
let issue;
const accessibleElements = {
    altText: "<alt text>"
};

function accessibilityGenerator() {
    for (let i = usersCode;) {
        if (usersCode.includes('<img>') && !usersCode.includes('<alt text>')) {
            issue = firstIssue = "There is an issue here" +
            "your code shows" + $(usersCode) + "It is meant to have" +
            $(accessibleElements.altText) + 
            "this is for a user who uses a screen reader"
            alert(issue);
        } else {
            "Issue"
        }
    };
};

//document.createElement




//show all the outputs here using interpolartion as a list

