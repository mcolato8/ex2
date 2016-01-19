window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var userName = document.f.userName.value;
    //alert(userName);

    var userAdje = document.f.userAdje.value;
      
    var userAge = document.f.userAge.value;
    
    var userAdj = document.f.userAdj.value;
      
    var userVerb = document.f.userVerb.value;
      
    var userPname = document.f.userPname.value;

    console.log("userName: " + userName);
    if (userName == "" || userAdj == "" || userAge == "" || userVerb == "" || userPname == "") {
      alert("whoops you forgot something!");
    } else{

    var myMsg = document.getElementById("table");
        myMsg.className = "show"; 
        
    myMsg.innerHTML = " To whom it may concern, <br> <br> My child, <em>" + userName + "</em>, is <em>" + userAdje + "</em> sick! They are only <em>" + userAge + "</em> years old and need some <em>" + userAdj + "</em> rest to continue <em>" + userVerb + "</em> again! <br> <br> Thank you for understanding, <br><em>" + userPname + "</em>";
  }
  
        

    //capture the msg element to change it's text and html 
    
    //store color in a variable called color

    //use the console.log to concatenate a message


    //prevent page from reloading
    return false;
  }
//if user chooses the reset button 
  function resetPage() {
    //remove any text from mMsg
    myMsg.innerHTML ="";
    //myMsg.className = "hide";
    userName.value ="";
    adj.value ="";
    age.value ="";
    verb.value ="";
    pname.value ="";
  }
}