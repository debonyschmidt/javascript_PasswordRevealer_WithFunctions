function myFunction() {
    var password = document.getElementById('password').value;
    var eye = document.getElementById('eye');
    var face = document.getElementById('face');;
    var length = password.length;

    if (length <=3){
        face.className = "far fa-frown";
        face.style.color = "red";

    } else if (length >= 4 && length <= 6) {
        face.className = "far fa-meh";
        face.style.color = "rgb(207, 95, 21)";

    } else if (length > 6) {
        face.className = "far fa-smile";
        face.style.color = "green";
    }
  };

  var isHidden = true;

  function switchText(){
    if (isHidden == true){
        document.getElementById("eye").className = "fas fa-eye";
        document.getElementById("password").type = "text";
        isHidden = false;
        console.log("IsHidden");
    } else {
        isHidden = true;
        document.getElementById("eye").className = "fas fa-eye-slash";
        document.getElementById("password").type = "password";
        console.log("IsHiddenelse");

    }
  }