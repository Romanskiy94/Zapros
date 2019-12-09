'use strict';

/*
const promise = new Promise(function (resolve, reject) {

    resolve(4);

})

promise
.then(onResolve)
.catch(onReject);

function onResolve(data) {
    console.log("function");
    console.log(data);
}
function onReject(error) {
    console.log(error);

}


*/
/*
const   promise = new Promise(function (resolve, reject) {

        setTimeout(function () {

      if (Math.random() > 0.5){
          reject(new Error('error'))
      }
      resolve("Success!");

        }, 1000);

});

console.log(promise);

asyncFunction();

async function asyncFunction() {
try {

    console.log(await promise)

} catch (e) {

    console.log(e)
}
}

promise
    .then(console.log)
    .then(console.error);
*/
/*

const promise1 = Promise.resolve(766);
const promise2 = Promise.resolve(true);

const promise3 = Promise.reject("123");

const promise4 = Promise.resolve(Symbol());
const promise5 = Promise.resolve(null);
const promise6 = Promise.resolve(undefined);
const promise7 = Promise.resolve({});



async function logData(){

    try {

        const value1Promise = await promise1;
        console.log(value1Promise);

        const value2Promise = await promise2;
        console.log(value2Promise);


        const value3Promise = await promise3;
        console.log(value3Promise);

        const value4Promise = await promise4;
        console.log(value4Promise);

        const value5Promise = await promise5;
        console.log(value5Promise);

        const value6Promise = await promise6;
        console.log(value6Promise);

        const value7Promise = await promise7;
        console.log(value7Promise);
    }catch (e) {
        console.log(e);
    }
}


promise1
    .then(console.log)
    .catch(console.error);


*/
/*

function randomResolve(resolve,reject) {
    setTimeout(function () {
        if (Math.random() > 0.1){
            resolve("SUCCESS!!")
        }
        reject(new Error("error"))
    }, 1000)
}

const promise = [
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
];

test();
async function test() {
    try{
        const result = await Promise.all(promise);

        console.log(result);

    }catch (e) {
        console.error(e)
    }
}*/
/*
fetch('./items.json')
    .then(response => {
        return response.json()
    })
    .then(console.log)
    .catch(console.error);

async function loadSom(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)


    }catch (e) {
        console.error(e)
    }

    
}*/


/*===============Zapros na server======================*/



/*
const [loadTasksButton, postTaskButton] = document.getElementsByName('button');
const taskInput = document.querySelector('input[type = "text"]');

const  state = {
        isFetching: false,
        tasks: [],
        error: null
};


/!*loadTasksButton.onclick = async function () {

        try{
            const response = await fetch('http://192.168.0.106:3000/tasks');
            const data = await  response.json();

            console.log(data);

        }catch (e) {
            console.error(e)
        }

    };*!/



    postTaskButton.onclick = async function () {
        try{

            const {value} = taskInput;
            taskInput.value = '';
            const response = await fetch('http://192.168.0.106:3000/tasks',{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
                redirect: 'follow', // manual, *follow, error
                    referrer: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
            });



        if(response.status >=200 && response.status < 300)
            {
                const data = await response.json();
                state.tasks.unshift(data);
                refreshTaskList(state.tasks)
            }
        }catch (e){
            console.error(e)
        }
    };

    async function loadAllTasks() {
        try{
            const response = await fetch('http://192.168.0.106:3000/tasks')
            state.tasks = await response.json();
            refreshTaskList(state.tasks)
        }catch (e) {
            state.error = e;
        }
    }

    function refreshTaskList(tasks) {
        const tasksList = document.getElementById("taskList");
        tasksList.innerHTML = "";
        tasks.forEach(task => {
            const task
        })

    }*/
