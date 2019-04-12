/**
 * 简单的实现数据绑定
 */

// 简单的watch函数 - defineProperty版
function watch() {
  var root = this;
  function watch(obj, name, func){
      var value = obj[name];

      Object.defineProperty(obj, name, {
          get: function() {
              return value;
          },
          set: function(newValue) {
              value = newValue;
              func(value)
          }
      });

      if (value) obj[name] = value
  }

  this.watch = watch;
}


// 简单的watch函数 - Proxy版
function watchProxy() {
  var root = this;

  function watch(target, func) {

      var proxy = new Proxy(target, {
          get: function(target, prop) {
              return target[prop];
          },
          set: function(target, prop, value) {
              target[prop] = value;
              func(prop, value);
          }
      });

      return proxy;
  }

  this.watch = watch;
}
