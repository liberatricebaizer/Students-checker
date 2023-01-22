
var sbtbtn = document.getElementById("sbt-btn");
sbtbtn.addEventListener("click" , () =>{
var studentname , firstperiod , secondperiod , min ,max , outputbox;
studentname = document.getElementById("student-name");
firstperiod = document.getElementById("first-perid");
secondperiod = document.getElementById("second-perio");
min = document.getElementById("min");
max = document.getElementById("max");
outputbox = document.getElementById("data");
    var data = [
        studentname.value,
        firstperiod.value,
        secondperiod.value,
        min.value,
        max.value
    ];
    if (!data[0] || !data[1] || !data[2]|| !data[3]|| !data[3]){
        alert("some input are impty!");
    } else if (isNaN(data[1]) || isNaN(data[2] || isNaN(data[3]) || isNaN(data[4]))){
        alert("some input are not numbers!")
    } else {
        var outputdata = {
            username : document.createElement("div"),
            period1 : document.createElement("div"),
            period2 : document.createElement("div"),
            total : document.createElement("div"),
            percentage : document.createElement("div"),
            descision : document.createElement("div")
        }
        var calctottal , perc;
        calctottal = Number(data[1]) + Number(data[2]);
        perc = (calctottal * 100) / Number(data[4]);
        if(calctottal > data[4]){
            alert("the total is greeter than the maximum!")
        } else {
            outputdata.username.textContent = data[0];
            outputdata.period1.textContent = Number(data[1]).toFixed(2);
            outputdata.period2.textContent = Number(data[2]).toFixed(2);
            outputdata.total.textContent = `${calctottal.toFixed(2)}/${data[4]}`;
            outputdata.percentage.textContent = `${Math.round(perc.toFixed(2))}%`;
            if (perc < data[3]){
                outputdata.descision.textContent = "Fail";
                outputdata.descision.style.background = "rgb(112, 1, 53)";
            } else if (perc >= data[3]) {
                 outputdata.descision.textContent = "Pass";
                 outputdata.descision.style.background = "rgb(1, 112, 112)";
            }
            outputbox.appendChild(outputdata.username);
            outputbox.appendChild(outputdata.period1);
            outputbox.appendChild(outputdata.period2);
            outputbox.appendChild(outputdata.total);
            outputbox.appendChild(outputdata.percentage);
            outputbox.appendChild(outputdata.descision);
        }
    }
});