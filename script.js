var fname=createlabel("label","for","firstname","Firstname");
var b1=linebreak("br");
var inputfname=inputvalue("input","type","firstname","id","firstname");
var b2=linebreak("br");

var lname=createlabel("label","for","lastname","Lastname");
var b3=linebreak("br");
var inputlname=inputvalue("input","type","lastname","id","lastname");
var b4=linebreak("br");

var email=createlabel("label","for","email","Email");
var b5=linebreak("br");
var inputemail=inputvalue("input","type","email","id","email");
var b6=linebreak("br");

var phonenumber=createlabel("label","for","phonenumber","Phonenumber");
var b7=linebreak("br");
var inputphonenumber=inputvalue("input","type","phonenumber","id","phonenumber");
var b8=linebreak("br");
var button=createlabel("button","type","button","Click me");
document.body.append(fname,b1,inputfname,b2,lname,b3,inputlname,b4,email,b5,inputemail,b6,phonenumber,b7,inputphonenumber,b8,button);



function createlabel(tagname,attributename,attributevalue,content){
    var a=document.createElement(tagname);
    a.setAttribute(attributename,attributevalue);
    a.innerHTML=content;
    return a;

}

function inputvalue(tagname,attributename,attributevalue,attributename1,attributevalue1){
    var b=document.createElement(tagname);
    b.setAttribute(attributename,attributevalue)
    b.setAttribute(attributename1,attributevalue1);
    return b;

}


function linebreak(breaker){
  var c=document.createElement(breaker);
  return c;
}