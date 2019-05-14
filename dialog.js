function displayPost(id, message){
  document.getElementById(id).innerHTML = message;
}

function CustomConfirm(){
  this.render = function(dialog,id){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";

    document.getElementById('dialogboxhead').innerHTML = "Confirm that action";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\''+id+'\')">Yes</button> <button onclick="Confirm.no(\''+id+'\')">No</button>';
  }
  this.no = function(id){
    displayPost(id, "You just clicked 'No'");
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
  this.yes = function(id){
    displayPost(id, "You just clicked 'Yes'");
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}
var Confirm = new CustomConfirm();