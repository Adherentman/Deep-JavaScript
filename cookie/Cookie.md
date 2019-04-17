# Cookie

## 作用域

Domain 和 Path 标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。

设置了domain的话，基本上包括了子域名。

设置了path 指定了哪些路径可以接受设置了该path的cookie。

设置了Path=/docs, 以下都会被匹配：

* /docs
* /docs/Web
* /docs/Web/Http

## Secure

设置了Secure那么只能通过https传输

## HttpOnly

为了避免跨域脚本攻击（XSS），所以cookie只能通过服务端给cookie，前端不能通过javascript调用。