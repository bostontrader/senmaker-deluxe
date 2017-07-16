import {POS}   from 'engcore'
//import {observer} from 'mobx-react'
import React      from 'react'
import Select     from 'react-select'
import {Schema} from 'engcore'
import State from './state'

//@observer
class POSSelect extends React.Component {

	handleDelete() {
		//console.log('delete')
		State.emit( 'todo:delete', 777 );
	}

	addPOS(newPOSType) {
		//console.log('delete')
		State.emit( 'todo:addPOS', newPOSType );
	}

	render() {

		//const store = this.props.store
		return (
			<div>
				<Select
					/*name="form-field-name"
					value={store.pos.POS + ''}
					options={Object.entries(POS).map((e) => {return {value:e[1]+'', label:e[0]}})}*/
					options = {Object.entries(Schema).map((e) => {return {value:e[1].t, label:e[0]}}).filter((e)=>{
						const n = [
							false,
							false,
							false,
							false,
							false,
							true,  //  5 N
							false,
							true,  //  7 Pro
							false, //  8 V
							true,  //  9 NP
							true,  // 10 VP
							false,
							false,
							false,
							false  // 14 Clause
						]
						return n[e.value]
					})}
					onChange={(e) => {this.addPOS(e.value)}}
				/>
			</div>
		)
	}
	//onChange={(e) => {store.addPOS(e.value)}}

}

export default POSSelect
