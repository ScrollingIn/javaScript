var plaatjes = [1,2,3];

var teller = 1;
console.log(teller);

var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url('ogen1.jpg')";

slideholder1.addEventListener("click", function(){
    slideholder1.style.backgroundImage = "url('ogen" + getAap() + ".jpg')";
});

function getAap(){
    if(teller == plaatjes.length){
        teller = 1;
    } else {
        teller++
    }

    console.log(teller);
    return teller;
}


var plaatjes = [1,2,3];

var teller = 1;
console.log(teller);

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('neus1.jpg')";

slideholder2.addEventListener("click", function(){
    slideholder2.style.backgroundImage = "url('neus" + getAap() + ".jpg')";
});

function getAap(){
    if(teller == plaatjes.length){
        teller = 1;
    } else {
        teller++
    }

    console.log(teller);
    return teller;
}

var plaatjes = [1,2,3];

var teller = 1;
console.log(teller);

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('mond1.jpg')";

slideholder3.addEventListener("click", function(){
    slideholder3.style.backgroundImage = "url('mond" + getAap() + ".jpg')";
});

function getAap(){
    if(teller == plaatjes.length){
        teller = 1;
    } else {
        teller++
    }

    console.log(teller);
    return teller;
}