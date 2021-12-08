const evenList = document.getElementById('evenList');
const oddList = document.getElementById('oddList');

let even = [];
let odd = [];

const draw = () => {


    for (let m = 0; m < even.length; m++) {
        const removeEvenLi = document.querySelector('li.evenLi')
        removeEvenLi.remove();

    }

    for (let n = 0; n < odd.length; n++) {
        const removeOddLi = document.querySelector('li.oddLi')
        removeOddLi.remove();

    }

    even = [];
    odd = [];



    for (let i = 0; i < 20; i++) {

        let x = Math.ceil(Math.random() * 100);

        if (x % 2 == 0) {

            even.push(x);

        } else {

            odd.push(x);

        }

    }

    even.sort(function (a, b) {

        return a - b

    });

    odd.sort(function (a, b) {

        return a - b

    });

    console.log(even);
    console.log(odd);

    // for (let l = 0; l < even.length; l++) {
    //     const removeLi = document.querySelector('evenList.li');
    //     removeLi.remove();
    // }

    for (let j = 0; j < even.length; j++) {

        const evenLi = document.createElement('li'); +
        evenLi.setAttribute('class', 'evenLi')
        evenList.appendChild(evenLi);
        evenLi.innerHTML = even[j];

    }

    for (let k = 0; k < odd.length; k++) {

        const oddLi = document.createElement('li');
        oddLi.setAttribute('class', 'oddLi')
        oddList.appendChild(oddLi);
        oddLi.innerText = odd[k];

    }

}