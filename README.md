# EventEmitter
js发布订阅者模式

#### 订阅事件: 

`eventEmitter.on(event,fn)` 
参数：`event` 订阅者事件名,`fn` 事件函数

#### 发布事件: 

`eventEmitter.emit(event)` 
参数：`event` 订阅者事件名


#### 订阅执行后立即销毁的事件: 

`eventEmitter.once(event,fn)` 
参数：`event` 订阅者事件名,`fn` 事件函数

#### 移除事件: 

`eventEmitter.remove(event,fn)` 
参数：`event` 订阅者事件名,`fn` 事件函数


### 例子：

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     txtdiv----
    <div id="txt"></div>
</body>
<script src="./eventEmitter.js"></script>
<script src="./b.js"></script>
<script src="./a.js"></script>
<script>
    //注册订阅者
    eventEmitter.on('test',(t)=>{
        document.querySelector('#txt').textContent = t;
    })
     eventEmitter.on('test',(t)=>{
        document.querySelector('#txt').append(t);
    })
    //发布
    eventEmitter.emit('test','start...');
</script>
</html>
```
