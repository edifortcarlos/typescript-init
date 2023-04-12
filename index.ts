// Import stylesheets
import { MyTimer } from './my-timer';
import './style.css';

let divResult = document.getElementById('parimpar-div');
let tableResult = document.getElementById('tabuada-table');

document.getElementById('parimpar-btn').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('parimpar-input')).value
  );
  if (num % 2 == 0) {
    divResult.innerHTML = 'O número é Par';
  } else {
    divResult.innerHTML = ' O número é Impar';
  }
});

document.getElementById('tabuada-btn').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('tabuada-input')).value
  );

  tableResult.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const row = tableResult.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    cell1.innerHTML = `${num} x ${i}`;
    cell2.innerHTML = `${num * i}`;
  }
});

let mytimer: MyTimer = new MyTimer(document.getElementById('timer-span'));

document.getElementById('timer-start-btn').addEventListener('click', () => {
  mytimer.start();
});

document.getElementById('timer-stop-btn').addEventListener('click', () => {
  mytimer.stop();
});
