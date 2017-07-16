//import * as mobx from 'mobx'
//import {action} from 'mobx'
//import {computed} from 'mobx';
//import {observable} from 'mobx';
//import {Plurality} from 'engcore'
//import {Gender} from 'engcore'
//import {ProOb} from 'engcore'
//import {Person} from 'engcore'
//import {ProGenerateText} from 'engcore'
//import {VerbOb} from 'engcore'
//import {NGenerateText} from 'engcore'

class VPNode {

	type = 'VP'
	//@observable todos = [];
	//@observable pendingRequests
	//@observable gender = Gender.NoneSelected
	//@observable person = Person.NoneSelected
	//@observable plurality = Plurality.NoneSelected
	//@observable pronounType = 0
	//@observable treeData = []
	//@observable showPro = false
	//@observable showVerb = false
	//@observable posPanelType = null
	//@observable currentPOS = null
	//@observable currentTreeIdx = 0
	//@observable change = 0

	//@observable pronoun = new ProOb({subject:true, plurality:Plurality.Singular, person:1})
	//t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:1})),'I')

	//constructor() {
	//mobx.autorun(() => console.log('ar',this));
	//}

	//@computed get pronoun() {
	//let plurality = 0

	//console.log(35, this.plurality, Plurality.Singular)
	//if (this.plurality === Plurality.Singular)
	//plurality = Plurality.Singular
	//else if ( this.plurality === Plurality.Plural)
	//plurality = Plurality.Plural

	//let person = this.person
	//let pronounType = this.pronounType
	//let gender = 0
	//if ( this.gender === Gender.Male)
	//gender = Gender.Male
	//else if ( this.gender === Gender.Female)
	//gender = Gender.Female
	//console.log('gender =',gender)
	//const pro = new ProOb({type:pronounType, plurality:plurality, person:person, gender:gender})
	//console.log(41,pro)
	///const p = ProGenerateText(pro)
	//return p
	//let n = 'BADdd PRONOUN CONFIGURATION'
	//if(this.gender === "100")
	//n = "it"
	//else if(this.gender === "200")
	//n = "he"
	//else if(this.gender === "300")
	//n = "she"
	//return n
	//}

	//@computed get completedTodosCount() {
	//return this.todos.filter(
	//todo => todo.completed === true
	//).length;
	//}

	//@computed get report() {
	//if (this.todos.length === 0)
	//return "<none>";
	//return `Next todo: "${this.todos[0].task}". ` +
	//`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	//}

	//addTodo(task) {
	//this.todos.push({
	//task: task,
	//completed: false,
	//assignee: null
	//});
	//}

	//@action changePronounType(e) {
	//this.treeData[this.currentTreeIdx].pos.type = parseInt(e.value)
	//}

	//@action changePerson(e) {
	//this.treeData[this.currentTreeIdx].pos.person = parseInt(e.value)
	//}

	//@action changeGender(e) {this.gender = parseInt(e.value)}

	//@action changePlurality(e) {
	//console.log(88,e)
	//this.plurality = parseInt(e.value)
	//}



	//makeChange() {
	//this.change = true
	//}
	//setShowPro(rowInfo) {
	//console.log(76, rowInfo)
	//this.showPro = true
	//}

	//setPosPanelType(type) {
	//console.log(82, type)
	//this.posPanelType = type
	//}

	//setCurrentPOS(pos) {
	//this.currentPOS = pos
	//}

	//setCurrentTreeIdx(idx) {
	//this.currentTreeIdx = idx
	//}

	//setShowVerb() {this.showVerb = true}

	//addTreeNode() {
	//console.log('74',this)
	//this.treeData.push({title:'new node ', pos:new VerbOb({}))
	//this.treeData.push({title:'new'})
	//}

	//addPronoun() {
	//const n = new ProOb({})
	//const n1 = ProGenerateText(n)
	//this.treeData.push({title:n1, pos:n})
	//}

	//addVerb() {
	//const n = new VerbOb({})
	//const n1 = NGenerateText(n)
	//this.treeData.push({title:n1, pos:n})
	//}

}

export default VPNode
