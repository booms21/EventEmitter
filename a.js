//模拟请求
setTimeout(() => {
        eventEmitter.once("end", () => {
          document.querySelector("#txt").append("     end...");
        });
    eventEmitter.emit('renderTxt','test eventEmitter!!!')
}, 2000);