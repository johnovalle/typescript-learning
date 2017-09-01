let isDog: boolean = true;
let dogAge: number = 5;
let dogName: string = "Star";

let dogNames: string[] = [dogName, "Fluffy"];
let dogAges: number[] = [4, 6, 2.1];

let someUnknownThing: any = "string";
let someThingsArray: any[] = ["x", 5];

let doStuff = (): void => {
    console.log('doing stuff');
    return;
}

doStuff();

let throwError = (message: string): never  => {
    throw new Error(message);
}

enum Action {
    GET_USERS,
    ADD_USER = 100,
    EDIT_USER,
    DELETE_USER
}

let action: Action = Action.GET_USERS;

console.log(action);

let tuple: [string, number] = ['Some string', 5];
let firstItem = tuple[0];
let secondItem: number = tuple[1];

let getNameAndAge = (): [string, number] => {
    return ["Stannis", 55];
}
