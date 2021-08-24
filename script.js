
// class User
// {
// constructor(name , age , gender)
// {
// this.name = name;
// this.age = age; 
// this.gender = gender;

// }
// welcome()
// {

//   console.log("this is method")
// }


// }

// let User1 = new User("ali" , 34 , "male");


// let User2 = new User("mo3taz" , 22 , "male");


// User1.welcome();


// class Developer extends User
// {
// constructor(name, age , gender , dep , salary)
// {
// super(name , age , gender)
// this.dep = dep;
// this.salary = salary



// }

// }
  

let user = 
{
name : "abdallah",
age : 23 , 
salary : 50000 , 
getSalary :function()
{



  let getsalary = () => (this.salary*14)/100 ;
return this.salary  - getTaxes();
}

}
console.log(user.getsalary());

