const questions = [{
    question: "What is the correct way to define a function in JavaScript?",
    correctAnswer: "function foo() {}",
    incorrectAnswers: ["var foo = function() {};", "function = foo() {}"]
  },
  {
    question: "What is the correct way to create a new object in JavaScript?",
    correctAnswer: "const obj = {};",
    incorrectAnswers: ["const obj = new Object();", "const obj = Object();"]
  },
  {
    question: "What is the correct way to create a new array in JavaScript?",
    correctAnswer: "const arr = [];",
    incorrectAnswers: ["const arr = new Array();", "const arr = Array();"]
  },
  {
    question: "What is the correct way to access the second element in an array?",
    correctAnswer: "arr[1]",
    incorrectAnswers: ["arr(1)", "arr{1}"]
  },
  {
    question: "What is the correct way to access a property of an object?",
    correctAnswer: "obj.property",
    incorrectAnswers: ["obj[property]", "obj{property}"]
  },
  {
    question: "What is the correct way to loop through the elements of an array?",
    correctAnswer: "for (const element of arr) {}",
    incorrectAnswers: ["for (const element in arr) {}", "arr.forEach(element => {})"]
  },
  {
    question: "What is the correct way to check if a variable is an array?",
    correctAnswer: "Array.isArray(variable)",
    incorrectAnswers: ["variable instanceof Array", "typeof variable === 'array'"]
  },
  {
    question: "What is the correct way to check if a variable is an object?",
    correctAnswer: "typeof variable === 'object'",
    incorrectAnswers: ["variable instanceof Object", "Object.isObject(variable)"]
  },
  {
    question: "What is the correct way to check if a variable is a string?",
    correctAnswer: "typeof variable === 'string'",
    incorrectAnswers: ["variable instanceof String", "String.isString(variable)"]
  },
  {
    question: "What is the correct way to check if a variable is a number?",
    correctAnswer: "typeof variable === 'number'",
    incorrectAnswers: ["variable instanceof Number", "Number.isNumber(variable)"]
  },
  {
    question: "What is the correct way to check if a variable is a boolean?",
    correctAnswer: "typeof variable === 'boolean'",
    incorrectAnswers: ["variable instanceof Boolean", "Boolean.isBoolean(variable)"]
  },
  {
    question: "What is the correct way to check if a variable is null?",
    correctAnswer: "variable === null",
    incorrectAnswers: ["variable === undefined", "typeof variable === 'null'"]
  },
  {
    question: "What is the correct way to check if a variable is undefined?",
    correctAnswer: "variable === undefined",
    incorrectAnswers: ["variable === null", "typeof variable === 'undefined'"]
  },
  {
    question: "What is the correct way to check if a variable is a function?",
    correctAnswer: "typeof variable === 'function'",
    incorrectAnswers: ["variable instanceof Function", "Function.isFunction(variable)"]
  },
  {
    question: "What is the correct way to concatenate two strings in JavaScript?",
    correctAnswer: "str1 + str2",
    incorrectAnswers: ["str1.concat(str2)", "str1 & str2"]
  },
  {
    question: "What is the correct way to get the length of a string in JavaScript?",
    correctAnswer: "str.length",
    incorrectAnswers: ["str.size()", "str.count()"]
  },
  {
    question: "What is the correct way to get the length of an array in JavaScript?",
    correctAnswer: "arr.length",
    incorrectAnswers: ["arr.size()", "arr.count()"]
  },
  {
    question: "What is the correct way to get the length of an object in JavaScript?",
    correctAnswer: "Object.keys(obj).length",
    incorrectAnswers: ["obj.length", "obj.size()"]
  },
  {
    question: "What is the correct way to add an element to the end of an array in JavaScript?",
    correctAnswer: "arr.push(element)",
    incorrectAnswers: ["arr[arr.length] = element", "arr.add(element)"]
  },
  {
    question: "What is the correct way to remove an element from the end of an array in JavaScript?",
    correctAnswer: "arr.pop()",
    incorrectAnswers: ["arr.remove()", "arr[arr.length - 1] = undefined"]
  },
  {
    question: "What is the correct way to add an element to the beginning of an array in JavaScript?",
    correctAnswer: "arr.unshift(element)",
    incorrectAnswers: ["arr.push(element)", "arr[0] = element"]
  },
  {
    question: "What is the correct way to remove an element from the beginning of an array in JavaScript?",
    correctAnswer: "arr.shift()",
    incorrectAnswers: ["arr.pop()", "arr[0] = undefined"]
  },
  {
    question: "What is the correct way to get the first element of an array in JavaScript?",
    correctAnswer: "arr[0]",
    incorrectAnswers: ["arr.first()", "arr.start()"]
  },
  {
    question: "What is the correct way to get the last element of an array in JavaScript?",
    correctAnswer: "arr[arr.length - 1]",
    incorrectAnswers: ["arr.last()", "arr.end()"]
  },
  {
    question: "What is the correct way to loop through the properties of an object in JavaScript?",
    correctAnswer: "for (const prop in obj) {}",
    incorrectAnswers: ["for (const prop of obj) {}", "obj.forEach(prop => {})"]
  },
  {
    question: "What is the correct way to access a property of an object using a variable?",
    correctAnswer: "obj[prop]",
    incorrectAnswers: ["obj.prop", "obj{prop}"]
  },
  {
    question: "What is the correct way to delete a property of an object in JavaScript?",
    correctAnswer: "delete obj.prop",
    incorrectAnswers: ["obj.prop = undefined", "obj[prop] = undefined"]
  },
  {
    question: "What is the correct way to add a property to an object in JavaScript?",
    correctAnswer: "obj.prop = value",
    incorrectAnswers: ["obj[prop] = value", "obj{prop: value}"]
  },
  {
    question: "What is the correct way to check if a property exists in an object in JavaScript?",
    correctAnswer: "prop in obj",
    incorrectAnswers: ["obj.hasOwnProperty(prop)", "obj.prop !== undefined"]
  },
  {
    question: "What is the correct way to check if a property exists in an object in JavaScript?",
    correctAnswer: "prop in obj",
    incorrectAnswers: ["obj.hasOwnProperty(prop)", "obj.prop !== undefined"]
  },
  {
    question: "What is the correct way to create a new class in JavaScript?",
    correctAnswer: "class MyClass {}",
    incorrectAnswers: ["function MyClass() {}", "var MyClass = function() {}"]
  },
  {
    question: "What is the correct way to define a method in a class in JavaScript?",
    correctAnswer: "class MyClass { myMethod() {} }",
    incorrectAnswers: ["class MyClass { function myMethod() {} }", "class MyClass { var myMethod = function() {} }"]
  },
  {
    question: "What is the correct way to define a constructor in a class in JavaScript?",
    correctAnswer: "class MyClass { constructor() {} }",
    incorrectAnswers: ["class MyClass { function constructor() {} }", "class MyClass { var constructor = function() {} }"]
  },
  {
    question: "What is the correct way to extend a class in JavaScript?",
    correctAnswer: "class MySubclass extends MyClass {}",
    incorrectAnswers: ["class MySubclass extends MyClass() {}", "class MySubclass extends new MyClass() {}"]
  },
  {
    question: "What is the correct way to call the parent constructor from a subclass in JavaScript?",
    correctAnswer: "super()",
    incorrectAnswers: ["this.parent()", "MyClass.constructor()"]
  },
  {
    question: "What is the correct way to create a new instance of a class in JavaScript?",
    correctAnswer: "const instance = new MyClass()",
    incorrectAnswers: ["const instance = MyClass()", "const instance = new MyClass"]
  },
  {
    question: "What is the correct way to create a new instance of a subclass in JavaScript?",
    correctAnswer: "const instance = new MySubclass()",
    incorrectAnswers: ["const instance = MySubclass()", "const instance = new MySubclass"]
  },
  {
    question: "What is the correct way to access a static method of a class in JavaScript?",
    correctAnswer: "MyClass.myMethod()",
    incorrectAnswers: ["this.myMethod()", "myMethod()"]
  },
  {
    question: "What is the correct way to spread the properties of an object into another object in JavaScript?",
    correctAnswer: "const newObj = { ...obj }",
    incorrectAnswers: ["const newObj = Object.assign(obj)", "const newObj = { obj }"]
  },
  {
    question: "What is the correct way to spread the properties of an object into a new object, overwriting any existing properties with the same name in JavaScript?",
    correctAnswer: "const newObj = { ...obj, ...overrides }",
    incorrectAnswers: ["const newObj = Object.assign(obj, overrides)", "const newObj = { obj, overrides }"]
  },
  {
    question: "What is the correct way to get the current date and time in JavaScript?",
    correctAnswer: "new Date()",
    incorrectAnswers: ["Date.now()", "Date()"]
  },
  {
    question: "What is the correct way to get the current year in JavaScript?",
    correctAnswer: "new Date().getFullYear()",
    incorrectAnswers: ["new Date().year", "new Date().getYear()"]
  },
  {
    question: "What is the correct way to get the current month in JavaScript?",
    correctAnswer: "new Date().getMonth()",
    incorrectAnswers: ["new Date().month", "new Date().getMon()"]
  },
  {
    question: "What is the correct way to get the current day of the month in JavaScript?",
    correctAnswer: "new Date().getDate()",
    incorrectAnswers: ["new Date().date", "new Date().getDay()"]
  },
  {
    question: "What is the correct way to get the current hour in JavaScript?",
    correctAnswer: "new Date().getHours()",
    incorrectAnswers: ["new Date().hours", "new Date().getHr()"]
  },
  {
    question: "What is the correct way to get the current minute in JavaScript?",
    correctAnswer: "new Date().getMinutes()",
    incorrectAnswers: ["new Date().minutes", "new Date().getMin()"]
  },
  {
    question: "What is the correct way to get the current second in JavaScript?",
    correctAnswer: "new Date().getSeconds()",
    incorrectAnswers: ["new Date().seconds", "new Date().getSec()"]
  },
  {
    question: "What is the correct way to get the current millisecond in JavaScript?",
    correctAnswer: "new Date().getMilliseconds()",
    incorrectAnswers: ["new Date().milliseconds", "new Date().getMillisec()"]
  },
  {
    question: "What is the correct way to get the current time in milliseconds since the epoch in JavaScript?",
    correctAnswer: "Date.now()",
    incorrectAnswers: ["new Date().getTime()", "new Date().time"]
  },
  {
    question: "What is the correct way to select an element by its ID in jQuery?",
    correctAnswer: "$('#my-id')",
    incorrectAnswers: ["$('.my-id')", "$('my-id')"]
  },
  {
    question: "What is the correct way to select elements by their class in jQuery?",
    correctAnswer: "$('.my-class')",
    incorrectAnswers: ["$('#my-class')", "$('my-class')"]
  },
  {
    question: "What is the correct way to select elements by their tag name in jQuery?",
    correctAnswer: "$('div')",
    incorrectAnswers: ["$('.div')", "$('#div')"]
  },
  {
    question: "What is the correct way to select elements by their attribute in jQuery?",
    correctAnswer: "$('[data-attr=value]')",
    incorrectAnswers: ["$('.data-attr=value')", "$('#data-attr=value')"]
  },
  {
    question: "What is the correct way to select the first element that matches a selector in jQuery?",
    correctAnswer: "$('#my-id:first')",
    incorrectAnswers: ["$('#my-id').first()", "$('#my-id').first"]
  },
  {
    question: "What is the correct way to select the last element that matches a selector in jQuery?",
    correctAnswer: "$('#my-id:last')",
    incorrectAnswers: ["$('#my-id').last()", "$('#my-id').last"]
  },
  {
    question: "What is the correct way to filter a selection by an attribute value in jQuery?",
    correctAnswer: "$('div').filter('[data-attr=value]')",
    incorrectAnswers: ["$('div').find('[data-attr=value]')", "$('[data-attr=value]').filter('div')"]
  },
  {
    question: "What is the correct way to filter a selection by a class in jQuery?",
    correctAnswer: "$('div').filter('.my-class')",
    incorrectAnswers: ["$('div').find('.my-class')", "$('.my-class').filter('div')"]
  },
  {
    question: "What is the correct way to get the value of an input field in jQuery?",
    correctAnswer: "$('#my-input').val()",
    incorrectAnswers: ["$('#my-input').value", "$('#my-input').getValue()"]
  },
  {
    question: "What is the correct way to set the value of an input field in jQuery?",
    correctAnswer: "$('#my-input').val('my value')",
    incorrectAnswers: ["$('#my-input').value = 'my value'", "$('#my-input').setValue('my value')"]
  },
  {
    question: "What is the correct way to get the text of an element in jQuery?",
    correctAnswer: "$('#my-element').text()",
    incorrectAnswers: ["$('#my-element').getText()", "$('#my-element').val()"]
  },
  {
    question: "What is the correct way to set the text of an element in jQuery?",
    correctAnswer: "$('#my-element').text('my text')",
    incorrectAnswers: ["$('#my-element').setText('my text')", "$('#my-element').val('my text')"]
  },
  {
    question: "What is the correct way to get the HTML of an element in jQuery?",
    correctAnswer: "$('#my-element').html()",
    incorrectAnswers: ["$('#my-element').getHTML()", "$('#my-element').innerHTML"]
  },
  {
    question: "What is the correct way to set the HTML of an element in jQuery?",
    correctAnswer: "$('#my-element').html('<p>my html</p>')",
    incorrectAnswers: ["$('#my-element').setHTML('<p>my html</p>')", "$('#my-element').innerHTML = '<p>my html</p>'"]
  },
  {
    question: "What is the correct way to get the value of a data attribute in jQuery?",
    correctAnswer: "$('#my-element').data('attr')",
    incorrectAnswers: ["$('#my-element').getData('attr')", "$('#my-element').attr('data-attr')"]
  },
  {
    question: "What is the correct way to set the value of a data attribute in jQuery?",
    correctAnswer: "$('#my-element').data('attr', 'value')",
    incorrectAnswers: ["$('#my-element').setData('attr', 'value')", "$('#my-element').attr('data-attr', 'value')"]
  },
  {
    question: "What is the correct way to add a class to an element in jQuery?",
    correctAnswer: "$('#my-element').addClass('my-class')",
    incorrectAnswers: ["$('#my-element').setClass('my-class')", "$('#my-element').className = 'my-class'"]
  },
  {
    question: "What is the correct way to remove a class from an element in jQuery?",
    correctAnswer: "$('#my-element').removeClass('my-class')",
    incorrectAnswers: ["$('#my-element').unsetClass('my-class')", "$('#my-element').className = ''"]
  }

]

// shuffle the questions array so that the order is randomized
questions.sort(() => Math.random() - 0.5);
