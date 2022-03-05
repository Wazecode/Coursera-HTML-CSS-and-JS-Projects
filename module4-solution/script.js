var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i in names) {

    if(names[i].substr(0,1) == 'J'){
        sayBye(names[i])
    }
    else{
        sayHello(names[i]);
    }

}
