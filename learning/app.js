var person = {
    name: "hoa",
    age: 20
};

console.log(`i am ${person.name} va toi ${person.age}`);

var obj = {
    name: "Cuong",
    sayHello: function(params1 , params2){
        console.log(`Hello ${this.name}` , params1 , params2);
    }
}

obj.sayHello("Xin chao", "2016");
obj.sayHello.call({name: "Huy cuong"} , "Hello", "2017");
obj.sayHello.apply({name: "Huy Cuong"} , ["xin chao" , "2018"]);