var selectedRow = null;


function onFormSubmit(){
    if (Validate()){
    var formData = readFormData();
    if (selectedRow == null)
    insertnewrecord(formData);
    else
    updateRecord(formData);
    
    resetForm();
    }
}

// ############# Reading form data ###########

function readFormData(){
    var formdata = {};
    formdata["Name"] = document.getElementById("Name").value;
    formdata["studentid"] = document.getElementById("studentid").value;
    formdata["marks"] = document.getElementById("marks").value;
    return formdata;
}

// ############## inserting new record ############

function insertnewrecord(data){
    var table = document.getElementById("student-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.marks;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = '<a  onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)" >Delete</a>';
}
// ########## Reset Form #############

function resetForm(){
    document.getElementById("Name").value = "";
    document.getElementById("studentid").value = "";
    document.getElementById("marks").value = "";
    selectedRow = null;

}
// ########### Edit Function #############

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[2].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.studentid;
    selectedRow.cells[2].innerHTML = formData.marks;
}
// ############ Delete Function ################# 

function onDelete(td){
    if(confirm('Are you sure to delete this record ? ')){
    row = td.parentElement.parentElement;
    document.getElementById("student-list").deleteRow(row.rowIndex);
    resetForm();
    }
}

function Validate(){
    isValid = true;
    if (document.getElementById("Name").value == ""){
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("NameValidationError").classList.contains("hide"))
        document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}

