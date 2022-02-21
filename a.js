


var quote = [`
   ""The best revenge is massive success."--Frank Sinatra"` ,
    `"It's not what happens to you, but how you react to it that matters." --Epictetus` ,
    `"Resentment is like drinking poison and waiting for your enemies to die."--Nelson Mandela`
            ]
             i=0

function display() {
    document.getElementById(`par`).innerHTML=quote[i]  ;
    i++
    if (i>=quote.length) {
        i=0
        
    }
}