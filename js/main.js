function calc(){
  var no1=document.getElementById('no1').value;  

   
      var res= eval(no1);
    document.getElementById('res').innerHTML=res;
  }
  var emp=['ahmed',45];
  var student={name:"ahmed",
               Age:25,
            email:"ahmed@gmail.com",
            edit:function(newEmail){
               this.email =newEmail;
            }
        };
    student.edit("ahmed@yahoo.com");
  window.document.getElementById('res').innerHTML=student.name+"<br /> "+student.Age+"<br /> "+student.email;
  class user {
    name;
    age;
    email;
    address;
    constructor  (sname,sage,semail,saddress) {
        this.name= sname;
        this.age= sage;
        this.email= semail;
        this.address= saddress;
    }
    show(){
      document.getElementById('res').innerHTML+=this.name+"<br />"+this.age+"<br />"+this.email+"<br />"+this.address+"<br />";
    }

  }

  class students extends user{
     degree;
     edit(){

     }
  }
  document.getElementById('res').innerHTML='';
   var user1=new user;
   user1.degree=30;
   document.getElementById('res').innerHTML+="Degree:"+user1.degree;

  var student1=new students("ahmed",20,"ahmed@gmail.com","cairo");
  var student2=new students("Hesham",20,"Hesham@gmail.com","Aswan");
  var student3=new students("Ali",20,"ali@gmail.com","Aswan");
  student1.phone=20222;

  student2.show();
  student1.show();
  document.getElementById('res').innerHTML+="Degree:"+student1.phone+"<br />";
  student3.show();

  class teature extends user{
    sallary;
     set_sallery(tsallery) {
      this.sallary;
      
    }
  }
  var t1=new teature('hosam',40,'h@gmail.com','cairo');
  t1.set_sallery(100);


