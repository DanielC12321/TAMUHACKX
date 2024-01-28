alert("Script is running");
const urls = ["https://www.merriam-webster.com/dictionary/test","https://www.dictionary.com/browse/test"];
const description = ["Medical Definition · 1 of 3 noun. ˈtest. 1. : a critical examination, observation, evaluation, or trial · 2 of 3 transitive verb. : to subject to a test.", "a particular process or method for trying or assessing. a set of questions, problems, or the like, used as a means of evaluating the abilities, aptitudes, ..."]
const title = ["Test Definition & Meaning", "TEST Definition & Usage Examples"]
window.onload = function(){
    /*
    document.getElementById("display1").innerHTML = title[0];
    document.getElementById("display2").innerHTML = title[1];*/
    for(let i = 0; i < 2; i++){
        //var store = title[i] + "<br/>" + "<p>" + description[i] + "</p>";
        var store = (i+1).toString() + ". " + '<a href="' + urls[i] + '">' + title[i] + "</a>" +"<br/>"; 
        store  += "<span style='font-size:0.875em'>" + description[i] + "</span>" + "<br/>";
        document.getElementById("display").innerHTML += store;
    };

};