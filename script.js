const decreasebtn = document.getElementById(`decreaseBtn`);
const resetbtn = document.getElementById(`resetBtn`);
const increasebtn = document.getElementById(`increaseBtn`);
const countlabel = document.getElementById(`countLabel`);
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
     countlabel.textContent = count;
}