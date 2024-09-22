// synchronus = excutes line by line consecutively in a sequential manner
//              code that waits for an operation to complete.

// asynchronus = allows multiple operations to be performed concurrently  without waiting
//                doesnt block the execution flow and allows the program to continue
//               (I/O operations,network requests , fetching data)
//                handled with : callbacks , promises , async/await


//                callbacks : function passed as an argument to another function to be executed later

function func1(callback){
    setTimeout(() => {console.log(`task - 1`)   
                       callback()}, 3000 );
}

function func2(){
    console.log(`task - 2`);
    console.log(`task - 3`);

}

func1(func2);