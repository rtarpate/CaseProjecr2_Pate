//selects the audio 
const audio = document.getElementById('backgroundAudio');

//checks to see if the audio stops playing and restarts thge song if it does
audio.addEventListener('ended', function()
{
    if(audio.ended)
    {
        audio.currentTime = 0;
        audio.play();
    }
})

//adds alert code and listner for contact page
const contactForm = document.getElementById("contactForm");

//add error handling to the user form
if(contactForm)
{
    contactForm.addEventListener("submit", function(event)
{   //prevents blank subtions
    event.preventDefault();

        //gets form data and sets it qeual to testing variables
        const formData = new FormData(contactForm);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("myEmail");

        //epxerssoin to check for email
        const Regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //regex to check names 
        const Regexname = /^[a-zA-Z]+$/;

        //checks to see if email is valid
        if(!Regexemail.test(email))
        {
            alert("invalid email enter a valid one");
            return;
        }

        //checks to see if userinput has gamil.com 
        const blockedDomain = "gmail.com";
        if(email.toLowerCase().includes(blockedDomain.toLowerCase()))
        {
            alert("email gmail.com is not accepted")
            return;
        }

        //checks if frist name is valid
        if(!Regexname.test(firstName))
        {
            alert("invalid first name");
            return;
        }

        //checks if last name is valid
        if(!Regexname.test(firstName))
        {
            alert("invalid last name");
            return;
        }

        //redunet code commented out
        /*
        //checks if input for firstname is valid
        if(!/^[a-zA-Z]+$/.test(firstName))
        {
            alert("invalid first name entry");
            return;
        }
        //checks if input for lastname is valid
        if(!/^[a-zA-Z]+$/.test(lastName))
        {
           alert("invalid lasr name entry")
           return;
        }
        */

        //alret if succeces
       // console.log("form data ", formData);
        alert("Successful submit");
  
        //alret if error
        //console.error("error", error)
        alert("error submited");

})
}

//updates the price of updating rooms
function updatePrice()
{
    //decalrs variables anf gets ids for rooms and night and total pirces
    let roomType = document.getElementById('roomType').value;
    let nights = document.getElementById('nights').value;
    let totalPrice01 = document.getElementById('totalPrice');

    //converts roomtype and nights 
    let pricepernight = parseFloat(roomType);
    let numberofnights = parseFloat(nights);

    ////caluates total price
    let totalPrice02 = pricepernight * numberofnights;
    
    //sets the total price eqaul to total price
    totalPrice01.value = totalPrice02.toFixed(2);
}

//crates array of vlaid zip codes
const validZipCobes = ["12345", "14789", "12369", "21478", "23698", "25864", "79106"];

//adds function to check zip code
function verifyZipCode(zipCode)
{
    return validZipCobes.includes(zipCode);//returns valid zip code
}

//event listenr for user input for the ezip code
document.getElementById("ZipCode").addEventListener("input", function()
{
    let zipCode = this.value;//decvalers varibale for zip code from user input 
    let errormessage = document.getElementById("zipcodeerrormessage")//decalres vairble for errormessage

    //if statment to check if zip code is vlaid or invalid
    if(zipCode.length == 5)
    {
        if(verifyZipCode(zipCode))
        {
            errormessage.textContent = "valid zip code";//outputs message if valid
        }
        else
        {
            errormessage.textContent = "invlaid zip code";//outputs message if invalid
        }
    }
    else
    {
        errormessage.textContent = "";//empty string text 
    }
});

//comments out redunednt code
/*
contactForm.addEventListener("submit", function(event) 
{
    alert("message sent")
})
*/