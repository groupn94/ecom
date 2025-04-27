var students=['ahmed','hussein','mohammed','ashraf'];
var age=[20,21,22,20];
var emails=['a@gmaiol','h@gmail.com.','m@gmail.com','ash@gmail.com'];


function show(){
   // Remove table current data 
    document.getElementById('data').innerHTML =""
 for(var i=0;i<students.length;i++){                       
   document.getElementById('data').innerHTML +="<tr><td>"+students[i]+"</td><td>"+age[i]+"</td><td>"+emails[i]+"</td><td><button class='btn btn-danger' onclick='distroy("+i+")'>Delete</td></tr>"
 }
}
show();
// add to table(Arrays)
 function create(){
   // get data from inputs
      var name=document.getElementById('name').value;
      var nage=document.getElementById('age').value;
      var email=document.getElementById('email').value;
      //push to arrayes
      students.push(name);
      age.push(nage);
      emails.push(email);
       // clear inputs value
       document.getElementById('name').value='';
       document.getElementById('age').value='';
       document.getElementById('email').value='';
      show(); 
 }
// distroy student

function distroy(indx){
   students.splice(indx,1);
   age.splice(indx,1);
   emails.splice(indx,1);
   show(); 
}

// students.push('hesham');
// console.log(students);

// students.pop();
// console.log(students);


// students.unshift('hosam');
// console.log(students);

// students.shift();
// console.log(students);

// students.splice(1,1);// delete
// console.log(students);


// students.splice(1,0,'hussein');// delete
// console.log(students);
