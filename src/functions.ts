function getError(message: string, user: string): string{
    return `Error ${message}, requesting user: ${user}`;
}

let errorToLog = getError('someError', 'someUser');

let getErrorFunc: (a: string, b:string) => string = getError;

interface GetErrorFunction {
    (message: string, user: string): string
}

let getErrorFucntion: GetErrorFunction = getError;

console.log(getErrorFucntion('message', 'user'));

let getErrorOptional = (msg: string, usr?: string):string => {
    if (usr) {
        return `Optional error ${msg} user: ${usr}`;
    } else { 
        return `Optional only error ${msg}`
    }
}
console.log(getErrorOptional('err1'));
console.log(getErrorOptional('err3', 'usr1'));


let getErrorDefault = (msg: string, usr:string = 'unknown'):string => {    
    return `Default error ${msg} user: ${usr}`;
}
console.log(getErrorDefault('err1'));
console.log(getErrorDefault('err3', 'usr1'));

let logErrors = (...errors: string[]): void => {
    console.log(errors.join(' | '));
}
logErrors();
logErrors('error1');
logErrors('error2', 'error3');
logErrors('err4', 'err5', 'err6');
//requires at least one error
const logAllErrors = (err: string, ...restErr: string[]) => {
    let allErrors = [err, ...restErr];
    console.log(allErrors.join(' || '));
}
//logAllErrors();
logAllErrors('error1');
logAllErrors('error2', 'error3');
logAllErrors('err4', 'err5', 'err6');


//function overloading
interface Point {
    x: number,
    y: number
}

function logPoint(x: number, y:number): void;
function logPoint(point: Point): void;
function logPoint(param1: any, param2?: any):void {
    if(typeof param1 === 'object'){
        _logPointXY(param1.x, param1.y);
    }
    else {
        _logPointXY(param1, param2)
    }
}

const _logPointXY = (x:number, y:number):void => {
    console.log(`[${x}, ${y}]`);
}

logPoint(1,2);
logPoint({x:3, y:4})


interface UserMessageConfiguration {
    font: string;
    fontSize: string;
    width: number;
    height: number;
}

const showMessageToUser = ({ width, height }: UserMessageConfiguration): void => {
    //const { width, height } = config;
    console.log(width * height);
}

showMessageToUser({
    font: 'Helvetica',
    fontSize: '20px',
    width: 5,
    height: 30
})