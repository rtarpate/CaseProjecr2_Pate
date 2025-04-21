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


//comments out redunednt code
/*
contactForm.addEventListener("submit", function(event) 
{
    alert("message sent")
})
*/