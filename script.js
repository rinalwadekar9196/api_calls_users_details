// alert(1);
const loaderDiv = document.getElementById('loader')

function showLoader(){
  loaderDiv.classList.add('show');
}

function hideLoader(){
  loaderDiv.classList.remove('show');
}

showLoader();
fetch("https://reqres.in/api/users").then((data) => {
//  fetch("https://fakestoreapi.com/products").then((data) => {

// console.log(data); //json format
return data.json(); //converted to object, Set Timeout

}).then((objectData) =>{
  hideLoader();
  // console.log(objectData);
    // console.log(objectData.data[2].email);
    
    console.log(objectData.data);
  let tableData="";

  objectData.data.map((values)=>{
    tableData+= `<tr>
    <td>${values.email}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td><img src="${values.avatar}"/></td>
  </tr>` ;

  });
   document.getElementById("table_body").innerHTML =tableData;

})