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

        //checks to see if userinput has gamil.com 
        const blockedDomain = "gmail.com";
        if(email.toLowerCase().includes(blockedDomain.toLowerCase()))
        {
            alert("email gmail.com is not accepted")
            return;
        }

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