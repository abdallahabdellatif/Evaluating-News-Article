export async function handleSubmit(event){
    event.preventDefault()
    let analyzeText = document.getElementById('name').value
    let valid=Client.checkInput(analyzeText)
    if (!valid){
        document.getElementById('polarity').innerHTML = 'No Text Entered , Please Enter a Text to be Analyzed'
        document.getElementById("subjectivity").innerHTML=''
        document.getElementById("confidence").innerHTML=''
    }else{
    console.log("::: Form Submitted :::")
    const response = await fetch('http://localhost:8082/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({myText:analyzeText})
      });
        let newData={}
        try {
            newData = await response.json();
            console.log(newData)
        }catch(error) {
            console.log("HERE COMES THE ERROR , WOOOOO",error);
        }
        //update the UI
        // console.log(newData)
        if (Object.keys(newData).length === 0 && newData.constructor === Object){
            //empty object
            document.getElementById("polarity").innerHTML="Something wrong happened !, please try again later!"
        }else{
            let polarityGrade=newData.score_tag
            let polarity='without sentiment'
            switch(polarityGrade){
                case 'P+':polarity='strong positive';break;
                case 'P':polarity='positive';break;
                case 'NEU':polarity='neutral';break;
                case 'N':polarity='negative';break;
                case 'N+':polarity='strong negative';break;
            }
            document.getElementById("polarity").innerHTML='Polarity: '+polarity
            document.getElementById("subjectivity").innerHTML='Subjectivity: '+newData.subjectivity.toLowerCase()
            document.getElementById("confidence").innerHTML='Confidence: '+newData.confidence

        }
        // document.getElementById("results").innerHTML='<h3>Polarity is hhh</h3>' //aa.confid

    }
}
