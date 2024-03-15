const obj = {
    name:"Javascript",
    show:function A(){
        console.log(`${this.name} it is printed because in normal function this keyword denotes the local scope variable`);
    },
    arrow:()=>{
        console.log(`${this.name} prints undefined because in arrow function this keyword denotes the window scope variable, in window there is no name so undefined`);

    }
}

obj.show();  //prints "JAVASCRIPT"
obj.arrow(); //prints undefined because if arrow function is written directly within an obj , it takes the access from outer scope which for object(obj) is the window 


//In a regular function (show), the value of this is determined by how the function is called.
// When called as a method of an object (like obj.show()), this refers to the object itself (obj). Hence, this.name correctly accesses the name property of the obj object.

//In an arrow function (arrow), the value of this is determined by the surrounding lexical scope.
// In this case, since the arrow function is defined within the scope of the obj object but not inside a method, this refers to the outer scope, 
//which is the global scope (window in a browser environment). Therefore, this.name refers to window.name, which is undefined unless explicitly defined elsewhere in your code.

//Other way is to  METHOD 1
const obj1 = {
    name:"Javascript",
    show:function A(){
        console.log(`${this.name} it is printed because in normal function this keyword denotes the local scope variable`);
    },
    arrow:()=>{
        console.log(`${obj1.name} prints Javacript because in arrow function we wrote obj.name`);

    }
}


obj1.show();

obj1.arrow();





//METHOD 2  The arrow function is defined inside a method, this refers to the outer scope so for arrow function innerArrow obj2 is the outer scope, 


const obj2 = {
    name: "JavaScript",
    outerFunc: function() {
        const innerArrow = () => {
            console.log(`Inside innerArrow: ${this.name}`);
        };
        innerArrow();
    }
};

obj2.outerFunc();


//When obj.outerFunc() is called, it executes the outerFunc method. Inside outerFunc, we define innerArrow, which is an arrow function.

//Since innerArrow is defined within the lexical scope of outerFunc, it captures the this value from its surrounding lexical scope, 
//which is outerFunc. Therefore, this.name inside innerArrow refers to the name property of the obj object, and it will correctly log "JavaScript".
