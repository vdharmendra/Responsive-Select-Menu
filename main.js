var dropDownField = document.getElementById("dropDownField");
var dropDownText = document.getElementById("dropDownText");
var links = document.getElementsByClassName("socialLink");

var socialLinks = document.getElementById("socialLinks");
dropDownField.onclick = function(){
    socialLinks.classList.toggle("hide");
}
for(link of links){
    link.onclick = function(){
        dropDownText.innerHTML = this.textContent;
        socialLinks.classList.toggle("hide");
    }
}