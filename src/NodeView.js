import React    from 'react'
import ReactDOM from 'react-dom'
import GenderSelect from './GenderSelect'
import PersonSelect from './PersonSelect'
import PluralitySelect from './PluralitySelect'
import PronounTypeSelect from './PronounTypeSelect'
//import State from './state'
//import {getNodeAtPath} from 'react-sortable-tree'

import Select from 'react-select'

class NPanel extends React.Component {
	render() {
		const state = this.props.state
		const pos = state.selectedPOS

		return(
			<div>
				<h1>Noun Panel</h1>
				<p>{pos.errors}</p>
			</div>
		)

	}
}

class NPPanel extends React.Component {
	render() {
		const state = this.props.state
		const pos = state.selectedPOS

		return(
			<div>
				<h1>Noun Phrase Panel</h1>
				<p>{pos.errors}</p>
			</div>
		)

	}
}

class ProPanel extends React.Component {
	render() {
		const state = this.props.state
		const pos = state.selectedPOS

		//const path = state.selectedPOSPath
		//const idx = path[path.length-1]
		//const posStore = getNodeAtPath()
		//const posStore = State.get().treeView[]
		//console.log(25,path)
		return(
			<div>
				Pronoun Type
				<PronounTypeSelect state={state} />
				Person
				<PersonSelect state={state} />
				Plurality
				<PluralitySelect state={state} />
				Gender
				<GenderSelect state={state} />
				<p>{pos.pronounText}</p>
				<p>{pos.errors}</p>
			</div>
		)

	}
}


class NodeView extends React.Component {

	render() {
		//const store = this.props.store
		const state = this.props.state
		let posPanel = null

		if(state.currentTreeIdx !== undefined) {
			const s = state.selectedPOS

			switch(s.type) {
				case 'Pro':
					posPanel = <ProPanel state={state} />
					break
				case 'N': // 5
					posPanel = <NPanel state={state} />
					break
				case 'V': // 8
					posPanel = <div>
						Verb Form
					</div>
					break
				case 'NP': // 9
					posPanel = <NPPanel state={state} />
					break
				case 'VP': // 10
					posPanel = <div>
						Verb Phrase
					</div>
					break
				case 'Clause':
					posPanel = <div>
						<p>Clause Form</p>
						<p>Missing Noun</p>
						<p>Missing Verb</p>
					</div>
					break
				default:
			}
		}

		return (
			<div>
				{posPanel}


			</div>
		)
	}

	onNewTodo = () => {
		//this.props.store.addTodo(prompt('Enter a new todo:','coffee plz'));
		this.props.store.addTreeNode()
	}

}

export default NodeView
