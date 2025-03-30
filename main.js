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