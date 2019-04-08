Function.prototype.call2 = function(context) {
  context.fn = this;
  let args = [];
  for(let i = 1, len = arguments.length; i < len; i++){
    args.push(`arguments[${i}]`);
  }
  eval(`context.fn(${args})`)
  delete context.fn
} 