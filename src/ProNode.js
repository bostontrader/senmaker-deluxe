import {Gender}          from 'engcore'
import {Person}          from 'engcore'
import {Plurality}       from 'engcore'
import {ProGenerateText} from 'engcore'
import {PronounType}     from 'engcore'
import {ProOb}           from 'engcore'

import State from './state'

class ProNode {

	type = 'Pro'

	pronounType = PronounType.Subject
	person = Person.First
	plurality = Plurality.Singular
	gender = Gender.NoneSelected

	errors = ['This pronoun is all alone. It must be part of a noun phrase.','This pronoun does not correctly generate text.']


	get pronounText() {


		const pro = new ProOb({type:this.pronounType, person:this.person, plurality:this.plurality, gender:this.gender})
		const p = ProGenerateText(pro)
		return p

	}

	changePronounType(e) {
		console.log(93,parseInt(e.value))
		const n = State.get().selectedPOS
		n.pronounType = parseInt(e.value)
		//this.pronounType = parseInt(e.value)
		console.log(97,n)
		//State.get().set('selectedPOS',n)
		//var freezer = new Freezer({ foobar: {a: 'a', b: 'b', c: [0, 1, 2] } });

		//var newfoobar = { foo: 'bar', bar: 'foo' };

		//State.get().set({selectedPOS: n})
		console.log(105,State.get().currentTreeIdx)
		State.get().set('catfood',State.get().catfood+1)
	}

	changePerson(e) {
		const n = State.get().selectedPOS
		n.person = parseInt(e.value)
		State.get().set('catfood',State.get().catfood+1)
	}

	changePlurality(e) {
		const n = State.get().selectedPOS
		n.plurality = parseInt(e.value)
		State.get().set('catfood',State.get().catfood+1)
	}

	changeGender(e) {
		const n = State.get().selectedPOS
		n.gender = parseInt(e.value)
		State.get().set('catfood',State.get().catfood+1)
	}





}

export default ProNode
