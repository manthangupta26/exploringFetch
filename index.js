function populateDiv(){
    const a = document.getElementById("num1").value;
    console.log(a);
    const b = document.getElementById("num2").value;
    console.log(b);

    //Making a fetch API call to Backend 
    fetch("http://localhost:3000/sum/?a=" + a + "&b=" + b )
        .then(function(response){
             response.json()
                .then(function(ans){
                    console.log(ans);
                    document.getElementById("finalSum").innerHTML = "Result: " + ans.msg;
                })
         })
}
