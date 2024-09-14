// Assignment 1 WEB PROGRAMMING
// Name: Gauravpal Singh Sandhu
// Seneca id: 161718234
// Email: gssandhu41@myseneca.ca


function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];

const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];

const serverResponses = [
    "Welcome to WEB PROGRAMMING",
    "This assignment is done by Gauravpal Singh Sandhu",
    "Student Name: gssandhu41@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

//Function - "httpRequest" 

function httpRequest(httpVerb, path)
{
    for (let i = 0; i < serverResponses.length; i++)
    {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path)
        {
            return '200: ' + serverResponses[i] ;
        }
    }

    return '404: Unable to process ' + httpVerb + 'request for ' + path;
}

// Mannual test
console.log(httpRequest("GET", "/"));        
console.log(httpRequest("GET", "/about"));    
console.log(httpRequest("PUT", "/"));          

//Automate testing

function automateTests()
{
    const testVerbs = ["GET", "POST"]

    const testPaths = [ "/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]

    function randomRequest()
    {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];     //random value for verb
        
        const randPath = testPaths[getRandomInt(testPaths.length)];     //random value for path

        console.log(httpRequest(randVerb,randPath))

    }

    setInterval(randomRequest, 1000);

}

automateTests();    