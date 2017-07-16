import {Plurality} from 'engcore'
import React       from 'react'
import Select      from 'react-select'

class PluralitySelect extends React.Component {
	render() {

		const state = this.props.state

		return (
			<div>
				<Select
					name="form-field-name"
					value={state.selectedPOS.plurality + ''}
					options={Object.entries(Plurality).map((e) => {return {value:e[1]+'', label:e[0]}})}
					onChange={(e) => {state.selectedPOS.changePlurality(e)}}
				/>
			</div>
		)
	}

}

export default PluralitySelect
