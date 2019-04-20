# This

1. 严格模式底下就都是undefined
1. 非严格模式，浏览器底下是window
1. 非严格模式，node.js 底下是global

```javascript
var value = 1;
  
var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

// 范例1
console.log(foo.bar());
// 范例2
console.log((foo.bar)());
// 范例3
console.log((foo.bar = foo.bar)());
// 范例4
console.log((false || foo.bar)());
// 范例5
console.log((foo.bar, foo.bar)());
```