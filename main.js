//selects the audio 
const audio = document.getElementbyId('backgroundAudio');

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
contactForm.addEventListener("submit", function(event) 
{
    alert("message sent")
})