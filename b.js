
eventEmitter.on('renderTxt',(t)=>{
    document.querySelector('#txt').textContent = t;
    eventEmitter.emit('end');
})