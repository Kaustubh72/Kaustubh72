function sendemail()
{
    var n=document.getElementById("name").value;
    var e=document.getElementById("mail").value;
    //var p=document.getElementById("phone").value;
    var s=document.getElementById("sub").value;
    var b=document.getElementById("body").value;
    Email.send({
        SecureToken : "738eacab-53b5-410b-b4fe-a49919807f4a",
        To : "singhkaustubh98@gmail.com",
        From : "bruteforce7272@gmail.com",
        Subject : s,
        Body : "--->Body: \n"+b+"\n"+"--->Name: "+n+"\n"+"--->E-Mail: "+e
    }).then(
      message => alert("Your messege has been sent Successfully")
    ); 
}