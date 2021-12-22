'use strict' ;

const title = '============================\n現在持っているタスクの一覧\n============================'

let tasks = [ '買い物' , '掃除' , '散歩' ] ;

console.log( title );
tasks.forEach( function( task ) {
  console.log( tasks.indexOf( task ) , ':' , task );
});

let input = prompt( 'タスクを入力してください。' );
while( input !== null ) {
  if( input === '' ) {
  alert( '何も入力されていません！' );
  input = prompt( 'もう一度タスクを入力してください' );
} else if ( input !== '' ) {
  tasks.push( input );
  console.log( title );
  tasks.forEach( function( task ) {
  console.log( tasks.indexOf( task ) , ':' , task );
  });
  alert( '新しいタスクを追加しました。' );
  input = prompt( 'タスクを入力してください。' );
}} ;