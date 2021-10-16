//发布订阅模式
var eventEmitter = (function () {
  "use strict";
  var eventEmitter = {
    list: {},
    //订阅主题
    on: function (event, fn) {
      if (typeof fn !== "function") {
        return false;
      }
      //创建订阅者列表,如果存在就直接插入
      (this.list[event] || (this.list[event] = [])).push(fn);
      return this;
    },
    //发布主题
    emit: function () {
      var event = [].shift.call(arguments);
      if (this.list[event] && this.list[event].length) {
        var fns = this.list[event].slice();
        //浅拷贝后直接对列表所有订阅者函数依次执行
        for (var i in fns) {
          this.list[event][i].apply(this, arguments);
        }
        return this;
      }
      return false;
    },
    //创建执行后立即销毁的订阅者
    once(event, fn) {
      function once() {
        this.remove(event, once);
        fn.apply(this, arguments);
      }
      //存储当前fn副本用于删除时的查找
      once.fn = fn;
      this.on(event, once);
      return this;
    },
    //移除对应订阅者
    remove: function (event, fn) {
      var fns = this.list[event];
      if (!fns) return false;
      //如没传递对应的订阅者函数引用，就默认删除整个事件列表
      if (!fn) {
        delete this.list[event];
        return this;
      }
      //找到对应的订阅者进行删除,包括once的订阅者
      for (var i = 0; i <= fns.length; i++) {
        if (fns[i] === fn || fns.fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
      return this;
    },
  };
  return eventEmitter;
})();
