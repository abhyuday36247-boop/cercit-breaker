const dropdown = document.getElementById("semesterDropdown");

const sem1 = document.getElementById("sem1Result");

const coming = document.getElementById("comingSoon");

dropdown.addEventListener("change", function(){

if(this.value === "1"){

sem1.style.display = "block";
coming.style.display = "none";

}else{

sem1.style.display = "none";
coming.innerHTML = "<h3>Result Coming Soon...</h3>";
coming.style.display = "block";

}

});