import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'

const WordShuffle = () => {
    const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$!2#$'
    const randomWord = `
        ASDF;LKASDVM 209A0ALFAS MK23092
        ASDF;LKASDVM 209A0ALFAS MK23092
        ASDF;LKASDVM 209A0ALFAS MK23092
        ASDF;LKASDVM 209A0ALFAS MK23092
        ASDFasKASDVM 209A0ALFAS MK23092
        ASDF;LKASDVM 209A0ALFAS MK23092
        
    `

  
    
    
    
    function changeLetter() {
        var counter =0, all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        while (counter < randomWord.length) {
            
            setInterval(function() {
                var text = document.getElementById("text");
                text.innerHTML = text.innerHTML.substring(0, counter) + all.charAt(Math.floor(Math.random()*all.length)) + text.innerHTML.substring(counter+1);
                counter = (counter+1);
            }, 10);
        }
        counter = 0 
    }
useEffect(()=> {
    changeLetter()
})

    
        

        

    return (
        <div style={{ left:'70px', width:'400px', height:'40px', wordWrap:'break-word'}} id="text"> {randomWord} </div>
    )
}

export default WordShuffle
