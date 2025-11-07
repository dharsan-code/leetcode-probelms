function createHelloWorld(){
    return function hello(){
        return "Hello World";
    }
}
const t=createHelloWorld();
t();