var contactsArray = [];


function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.contactsRecord) {
        contactsArray = JSON.parse(localStorage.contactsRecord);
        for (var i = 0; i < contactsArray.length; i++) {
            prepareTableCell(i, contactsArray[i].firstname, contactsArray[i].lastname, contactsArray[i].age, contactsArray[i].pager);
        }
    }
}
function onSavePressed() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var pager = document.getElementById("pager").value;
    var stuObj = {firstname: firstName, lastname: lastName, age: age, pager: pager};
    if (firstName == '' || lastName == '') {
        alert('please enter First and Last name');
        return;
    }
    if (selectedIndex === -1){
        contactsArray.push(stuObj);
    }else{
        contactsArray.splice(selectedIndex, 1, stuObj);
    }

    
    localStorage.contactsRecord = JSON.stringify(contactsArray);
    init();
    onClearPressed();
}

function prepareTableCell (index, firstName, lastName, age, pager) {
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var ageCell = row.insertCell(2);
    var pagerCell = row.insertCell(3);
    var actionCell = row.insertCell(4);

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    ageCell.innerHTML = age;
    pagerCell.innerHTML = pager;
    actionCell.innerHTML = '<button onclick="onEditPressed('+index+')">Edit</button></br><button onclick="deleteTableRow('+index+')">Delete</button>'
}

function deleteTableRow (index) {
    contactsArray.splice(index, 1);
    localStorage.contactsRecord = JSON.stringify(contactsArray);
    init();
}
function onClearPressed() {
    selectedIndex = -1;
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("pager").value = "";
    document.getElementById("submit").innerHTML = "Save";
}
var selectedIndex = -1;
function onEditPressed(index) {
    selectedIndex = index;
    var stuObj = contactsArray[index];
    document.getElementById("firstname").value = stuObj.firstname;
    document.getElementById("lastname").value = stuObj.lastname;
    document.getElementById("age").value = stuObj.age;
    document.getElementById("pager").value = stuObj.pager;
    document.getElementById("submit").innerHTML = "Update";
}
