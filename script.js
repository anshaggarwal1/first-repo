function callAPI(a){
    fetch(`https://reqres.in/api/users/${a}`)
    .then((result) => {
        if(result.ok)
        return result.json();
        else{
            throw Error("NOT FOUND")
        }
    })
    .then((res) =>{
        console.log('res=> ', res);
        document.getElementById("name").innerHTML="<i>"+ res.data.first_name   +"</i>";
        document.getElementById("l_name").innerHTML="<i>"+ res.data.last_name +"</i>";
        document.getElementById("em").innerHTML="<i>"+ res.data.email +"</i>";
        let img=document.getElementById("image")
        img.setAttribute("src", res.data.avatar);
    })
    .catch(err=>{
        alert("NO such name ")
    });


}

function numchange()
{
    const a=document.getElementById("num").value;
     callAPI(a);

}

