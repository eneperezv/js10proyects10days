function calculateLove(){
    let name1 = document.getElementById("txtName1").value;
    let name2 = document.getElementById("txtName2").value;
    if(name1 === "" || name2 === "" /*|| name1 === undefined || name2 === undefined*/){
        alert("Please enter both names");
        return;
    }else{
        var lovePercentage = Math.floor(Math.random() * 101);
        var result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovePercentage}%`;
        if(lovePercentage < 30){
            result.innerHTML += "<br> Not a great match. Keep Looking!";
        }else if(lovePercentage >= 30 && lovePercentage < 70){
            result.innerHTML += "<br> There is potential. Give it a try!";
        }else{
            result.innerHTML += "<br> Great Match! Go for it!";
        }
    }
}