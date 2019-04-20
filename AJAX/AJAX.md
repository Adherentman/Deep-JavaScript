# AJAX

## readyState

0: 未初始化   没调用open()
1: 启动      调用open()，但调用send()
2: 发送      调用了send(),但没接收到响应
3: 接受      已经接收到部分响应数据
4: 完成      已经接收到全部响应数据

## 事件

* loadstart 在请求开始时触发
* progress 在请求发送或接受数据期间, 服务器指定的世界间隔触发
* abort 在请求被取消时
* error 在请求失败时
* load 在请求成功时
* timeout 在指定的时间段已经结束
* loadend 在请求完成时，无论失败和成功
* readystatechange 在XHR对象的readyState值发送改变触发

## 方法

* abort() 请求已经被发送,则立刻中止请求.
* getAllResponseHeaders() 以字符串的形式返回所有用CRLF分隔的响应头，如果没有收到响应，则返回null。
* getResponseHeader() 返回包含指定响应头的字符串，如果响应尚未收到或响应中不存在该报头，则返回null。
* open() 初始化一个请求。该方法只能JavaScript代码中使用
* overrideMimeType() 重写由服务器返回的MIME type。
* send() 发送请求。
* setRequestHeader() 设置HTTP请求头的值。您必须在open()之后、send()之前调用setRequestHeader()这个方法。