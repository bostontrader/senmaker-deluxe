import {Person}   from 'engcore'
import React      from 'react'
import Select     from 'react-select'

class PersonSelect extends React.Component {
	render() {

		const state = this.props.state

		return (
			<div>
				<Select
					name="form-field-name"
					value={state.selectedPOS.person + ''}
					options={Object.entries(Person).map((e) => {return {value:e[1]+'', label:e[0]}})}
					onChange={(e) => {state.selectedPOS.changePerson(e)}}
				/>
			</div>
		)
	}

}

export default PersonSelect
