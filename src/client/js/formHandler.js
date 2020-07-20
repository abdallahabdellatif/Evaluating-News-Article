export async function handleSubmit(event){
    event.preventDefault()
    let analyzeText = document.getElementById('name').value
    let valid=Client.checkInput(analyzeText)
    if (!valid){
        document.getElementById('results').innerHTML = 'nooooooooooooooooooo'
    }else{
    console.log("::: Form Submitted :::")
    console.log(`Your API key is ${process.env.API_ID}`);
    // fetch('http://localhost:3000/test')
    // .then(res => {
    //    return res.json()
    // })
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    const response = await fetch('/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({myText:analyzeText}),        
      });
    
        try {
            const newData = await response.json();
            console.log(newData)
        }catch(error) {
            console.log("HERE COMES THE ERROR , WOOOOO",error);
        }
        //update the UI 
        document.getElementById("results").innerHTML='<h3>Polarity is hhh</h3>' //aa.confid

    }
}
