'use strict';

const title = '============================\n現在持っているタスクの一覧\n============================';

const tasks = ['買い物' , '掃除' , '散歩'];

tasks.forEach((task, index) => {
  console.log(`${index} : ${task}`);
});

let input = prompt('タスクを入力してください。');
if(input === '') {
  alert('何も入力されていません！');
} else if((input !== '') && (input !== null)) {
  tasks.push(input);
  console.log(title);
  tasks.forEach((task, index) => {
    console.log(`${index} : ${task}`);
});
  alert('新しいタスクを追加しました。');
  input = prompt('タスクを入力してください。');
};