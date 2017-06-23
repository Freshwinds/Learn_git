module.exports = function main() {
    class Person{
		constructor(name,age){
			this.name=name;
			this.age=age;
		}
		introduce(){
			return 'My name is ' +this.name+'.'+' I am '+this.age+' years old.';
		}
	}
	class Student extends Person{
		constructor(name,age,klass){
			super(name,age);
			this.klass=klass;
			
		}
		introduce(){
			return super.introduce()+' I am a Student. I am at Class '+klass+'.';
		}
		
	}
		
};