
const [exampleText,updateText]=useState("")
//const [exampleList, updateList]=useState([])

const Backspace = (word,i=word.length) =>{


        if (i!==0){
            updateText(word.slice(0,i-1))
            setTimeout(()=>Backspace(word,i-1), 100);
            }
}


const TypeText =(word,i=0,z=0) =>{                              //only use 'z' variable if animating more than 1 word from a list
        if (i<word.length){
            updateText(word.slice(0, i + 1))
            setTimeout(()=>TypeText(word,i+1,z), 200);
        }

/*
        else{
            if (z>2){               resetting z varaible to continously loop through list; update the '2' to size of your list or remove if statement if you only want to loop through list once
                z=0
            }
            Backspace(word)
            word=exampleList[z];
            setTimeout(() =>TypeText(word,0,z+1),1000)

        }
*/
    }
