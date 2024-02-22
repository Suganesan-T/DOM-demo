function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele
}
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element
}
function br_create(){
    var br = document.createElement("br")
    return br
}
function foo(){
    var first = document.getElementById("firstname").value
    var span1 = document.createElement("span") 
    span1.innerHTML = `Firstname: ${first}`

    var b1 = document.createElement("br")

    var middle = document.getElementById("middlename").value
    var span2 = document.createElement("span") 
    span2.innerHTML = `Middlename: ${middle}`

    var b2 = document.createElement("br")
    
    var last = document.getElementById("lastname").value
    var span3 = document.createElement("span") 
    span3.innerHTML = `Lastename: ${last}`

    var b3 = document.createElement("br")

    var email = document.getElementById("email").value
    var span4 = document.createElement("span") 
    span4.innerHTML = `Email: ${email}`

    var b4 = document.createElement("br")

    var pass = document.getElementById("password").value
    var span5 = document.createElement("span") 
    span5.innerHTML = `Email: ${pass}`

    document.body.append(span1,b1,span2,b2,span3,b3,span4,b4,span5)
}



var firstname = label_create("label","for","firstname","Firstname");
var br1 = br_create();
var firstname_value = input_create("input","type","text","id","firstname");
var br2 = br_create();
var middlename = label_create("label","for","middlename","Middlename");
var br3 = br_create();
var middle_value = input_create("input","type","text","id","middlename");
var br4 = br_create();
var lastname = label_create("label","for","lastname","Lastname");
var br5 = br_create();
var lastname_value = input_create("input","type","text","id","lastname");
var br6 = br_create();
var email = label_create("label","for","email","Email");
var br7 = br_create();
var email_value = input_create("input","type","email","id","email");
var br8 = br_create();
var password = label_create("label","for","password","Password");
var br9 = br_create();
var password_value = input_create("input","type","password","id","password");
var br10 = br_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.setAttribute("onclick","foo()")
button.innerHTML = "Click Me"
var br11 = br_create();



document.body.append(firstname,br1,firstname_value,br2,middlename,br3,middle_value,br4,lastname,br5,lastname_value,br6,email,br7,email_value,br8,password,br9,password_value,br10,button,br11,)
