export function log(str:string) {
    console.log(str);
}

log('Hello World!!');

class A {
    greeting = 'Hello Worldsss';
}

log(new A().greeting);