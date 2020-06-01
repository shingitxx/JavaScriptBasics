'use strict'
//厳密モード

{
    // function nameChange() {
    //     // document.querySelector('h1').textContent = 'shinです';
    //     // document.getElementById('target').textContent ='shinです';
    //     document.querySelectorAll('p').forEach((p, index) => {
    //         p.textContent = `${index}番目のpです`;
    //     });
    // }
    // setTimeout(nameChange, 1000);

    // function change() {
    //     document.querySelectorAll('p').forEach((p,index) => {
    //         p.textContent = `${index}番目のpです`;
    //     })
    // }
    // setTimeout(change, 1000);



    // document.querySelector('button').addEventListener('click', () => {
    //     document.getElementById('target').textContent = 'shinです';

    // });

    // document.querySelector('button').addEventListener('click', () => {
    //     //querySelector 要素指定 addEventListener イベント追加 
    //     const targetNode = document.getElementById('target');
    //     //targetNode 定数に代入
    //     targetNode.textContent = 'shinです';
    //     //textContent id指定要素のh1のテキスト変更
    //     targetNode.title = 'This is title';
    //     //title属性のテキスト変更
    // })

    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');

    //     targetNode.className = 'my-color'; 
    // })

    // document.querySelector('button').addEventListener('click', () => {
    //     const targetNode = document.getElementById('target');
    //     // // targetNode.className = 'my-bgcolor my-color';
    //     // // targetNode.classList.add('my-bgcolor');
    //     // if (targetNode.classList.contains('my-bgcolor') === true) {
    //     //     targetNode.classList.remove('my-bgcolor');
    //     // } else {
    //     //     targetNode.classList.add('my-bgcolor');
    //     // }
    //     targetNode.classList.toggle('my-bgcolor');
    // })
    
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        targetNode.className = 'my-color my-bgcolor';
    })










}
