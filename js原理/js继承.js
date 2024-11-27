// 1. 构造函数继承（传统继承）
// 构造函数继承是一种通过将父类的属性和方法添加到子类实例的方式来实现继承的方法。
function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log("Hello, " + this.name);
};

function Child(name, age) {
	Parent.call(this, name); // 继承父类的属性
	this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 继承父类的方法
Child.prototype.constructor = Child; // 修正子类的构造函数指向

const child = new Child("Alice", 30);
child.sayHello(); // 输出: Hello, Alice
console.log(child.age); // 输出: 30

// 2. 原型链继承
// 通过将父类的实例作为子类的原型，直接继承父类的所有属性和方法。
function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log("Hello, " + this.name);
};

function Child(name, age) {
	this.name = name;
	this.age = age;
}

Child.prototype = new Parent(); // 子类的原型指向父类的实例
Child.prototype.constructor = Child; // 修正子类的构造函数指向

const child = new Child("Bob", 25);
child.sayHello(); // 输出: Hello, Bob
console.log(child.age); // 输出: 25

// 3. 组合继承（借用构造函数 + 原型链继承）
// 组合继承结合了构造函数继承和原型链继承的优点，避免了两者的缺点。
function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log("Hello, " + this.name);
};

function Child(name, age) {
	Parent.call(this, name); // 继承父类的属性
	this.age = age;
}

Child.prototype = Object.create(Parent.prototype); // 继承父类的方法
Child.prototype.constructor = Child; // 修正子类的构造函数指向

const child = new Child("Charlie", 28);
child.sayHello(); // 输出: Hello, Charlie
console.log(child.age); // 输出: 28

// 4. 寄生继承
// 寄生继承的思想是通过创建一个新的对象来继承父类，并在这个新对象上扩展一些新的方法或属性。
function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log("Hello, " + this.name);
};

function createChild(name, age) {
	var child = new Parent(name); // 创建父类的实例
	child.age = age; // 添加子类特有的属性
	child.sayAge = function () {
		console.log("Age: " + this.age);
	};
	return child;
}

const child = createChild("Dave", 35);
child.sayHello(); // 输出: Hello, Dave
child.sayAge(); // 输出: Age: 35

// 5. 寄生组合继承（推荐）
// 寄生组合继承结合了组合继承和寄生继承的优点，避免了组合继承中的重复调用父类构造函数。
function Parent(name) {
	this.name = name;
}

Parent.prototype.sayHello = function () {
	console.log("Hello, " + this.name);
};

function Child(name, age) {
	Parent.call(this, name); // 继承父类的属性
	this.age = age;
}

// 寄生组合继承
Child.prototype = Object.create(Parent.prototype); // 继承父类的方法
Child.prototype.constructor = Child; // 修正子类的构造函数指向

const child = new Child("Eva", 40);
child.sayHello(); // 输出: Hello, Eva
console.log(child.age); // 输出: 40
