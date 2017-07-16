import {Gender}    from 'engcore'
import React       from 'react'
import Select      from 'react-select'

class GenderSelect extends React.Component {
	render() {

		const state = this.props.state

		return (
			<div>
				<Select
					name="form-field-name"
					value={state.selectedPOS.gender + ''}
					options={Object.entries(Gender).map((e) => {return {value:e[1]+'', label:e[0]}})}
					onChange={(e) => {state.selectedPOS.changeGender(e)}}
				/>
			</div>
		)
	}

}

export default GenderSelect
