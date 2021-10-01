
//  Custom method for getElementById 

//start
let customGetElById = function(passedId){
    var nodeFound = null;
    recursive = function(nodes)
    {
        for(var i =0 ; i< nodes.length; i++)
        {
            if(nodes[i].nodeType == 1) 
            {
               
                if(nodes[i].id == passedId)
                {
                    
                    nodeFound = nodes[i];
                    return;
                }
                if(nodes[i].childNodes)
                {
                    
                    recursive(nodes[i].childNodes);
                }
            }
        }
    }
    recursive(document.body.childNodes);
    return nodeFound;
};


function callMe() {
    let p_tag =customGetElById('test_id');
    p_tag.innerHTML = 'hello   there..'
}

// End



//Showing Primes numbers
let btn_prime = document.getElementById('btn_prime');
var openPopup = document.querySelector('#open_popup');

var popup = document.querySelector('.popup');
let lower_input = document.getElementById('lower_num');
let higher_input = document.getElementById('higher_num');
let prime_numbers = myGetElementById('prime_numbers');
let showP = document.querySelector('#showp');
var closePopup = document.querySelector('#close_popup');

var someDiv = document.createElement('div');
var allNumbers = [];
var flag_popup = 0;
var flag_popup_1 = 0;
btn_prime.addEventListener('click', () => {
    if (flag_popup == 1) {
        let table_1 = document.getElementById('table_id1');
        let table_2 = document.getElementById('table_id2');
        popup.removeChild(table_1);
        popup.removeChild(table_2);
        prime_numbers.removeChild(someDiv);
        flag_popup = 0;
    }
    primesInRange();
    displayPrimesInTable();
    // allNumbers = [];
    // arrPrimes = [];
    flag_popup = 1;
});

// Shoing prime number in table
// var table_id = 0;




openPopup.addEventListener('click', () => {

    popup.classList.add('popup-active');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('popup-active');
});

function displayPrimesInTable() {
    if (allNumbers.length == 0) {
        let n_tag = document.createElement('P');
        n_tag.innerHTML = 'There is nothing to show.'
        popup.appendChild(n_tag);
        console.log('nasa');
    }
    else {
        let [table_1, thead_1, tbody_1] = createTable(1);

        let [table_2, thead_2, tbody_2] = createTable(2);

        table_1.appendChild(thead_1);
        table_1.appendChild(tbody_1);
        table_2.appendChild(thead_2);
        table_2.appendChild(tbody_2);

        addHeading(thead_1);
        addHeading(thead_2);

        allNumbers.map((obj) => {
            addRow(tbody_1, obj);
        });
        allNumbers.map((obj) => {
            if (obj.result == 'prime') {
                addRow(tbody_2, obj);
            }
        });
        popup.appendChild(table_1);
        popup.appendChild(table_2);
    }

}

function createTable(id) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.id = 'table_id' + id;
    return [table, thead, tbody];
}

function addHeading(thead) {
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Number";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Result";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Time in milliseconds";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
}



function addRow(tbody, obj) {
    let row = document.createElement('tr');
    let row_data_1 = document.createElement('td');
    row_data_1.innerHTML = obj.number;
    let row_data_2 = document.createElement('td');
    row_data_2.innerHTML = obj.result;
    let row_data_3 = document.createElement('td');
    row_data_3.innerHTML = obj.timeInSec;

    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    tbody.appendChild(row)
}


function primesInRange() {
    let arrPrimes = [];
    // let allNumbers = [];

    let lowerNum = lower_input.value;
    let higherNum = higher_input.value;
    console.log(lowerNum, higherNum);
    lowerNum = parseInt(lowerNum);
    higherNum = parseInt(higherNum);

     let startD = new Date();
    let start = startD.getMilliseconds();

    if (a <= 2) {
       
        a = 2;

        if (b >= 2) {
           let d = new Date();
            let end = d.getMilliseconds();
            let timeInSec = end - start;

            arrPrimes.push(a);
            allNumbers.push({ number: a, result: 'prime', timeInSec: timeInSec });
            a++;

        }

    }


    if (a % 2 == 0)

        a++;

    
    for (i = a; i <= b; i = i + 2) {
        let flag = 1;
        for (j = 2; j * j <= i; ++j) {

            if (i % j == 0) {

                flag = 0;

                break;

            }

        }
        d = new Date();
        let end = d.getMilliseconds();
        let timeInSec = end - start;

        if (flag == 1){
            allNumbers.push({ number: i, result: 'prime', timeInSec: timeInSec });
            arrPrimes.push(i);
        }else{
            allNumbers.push({ number: i, result: 'normal', timeInSec: timeInSec });
        }

    }
    showP.innerHTML = 'Following are the primes between\t' + lowerNum + '\tand\t' + higherNum;
    prime_numbers.classList.add('prime_numbers')
   
    arrPrimes.map((val) => {
        let span = document.createElement('span');
        span.innerHTML = val;
        someDiv.appendChild(span);
    });
    prime_numbers.appendChild(someDiv);
    lower_input.value = '';
    higher_input.value = '';
    // console.log(allNumbers);
}



//  console.log(primesInRange(1,20));
