var labelfirst = label_create("label","for","firstname","First Name");
var firstinput = input_create("input","id","firstname","type","text");
var break1 = break_create();
var break2 = break_create();

var labelmiddle = label_create("label","for","middlename","Middle Name");
var middleinput = input_create("input","id","middlename","type","text");
var break3 = break_create();
var break4 = break_create();

var labellast = label_create("label","for","lastname","Last Name");
var lastinput = input_create("input","id","lastname","type","text");
var break5 = break_create();
var break6 = break_create();

var labelmail = label_create("label","for","e-mail","E-Mail");
var mailinput = input_create("input","id","e-mail","type","email");
var break7 = break_create();
var break8 = break_create();

var labelpassword = label_create("label","for","passcode","Password");
var passwordinput = input_create("input","id","passcode","type","password");
var break9 = break_create();
var break10 = break_create();

var button = label_create("button","onclick","foo()","click me");



document.body.append(labelfirst,break1,firstinput,break2,labelmiddle,break3,middleinput,break4,labellast,break5,lastinput,break6,labelmail,break7,mailinput,break8,labelpassword,break9,passwordinput,break10,button);

function foo(){
    var first = document.getElementById("firstname").value;
    console.log(`First Name:${first}`);
    
    var middle = document.getElementById("middlename").value;
    console.log(`Middle Name:${middle}`);

    var last = document.getElementById("lastname").value;
    console.log(`Last Name:${last}`);

    var mail = document.getElementById("e-mail").value;
    console.log(`E-Mail:${mail}`);

    var pass = document.getElementById("passcode").value;
    console.log(`Password:${pass}`)
}

function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attr2name,attr2value);
    return element;
}

function break_create(){
    var bre = document.createElement("br");
    return bre;
}