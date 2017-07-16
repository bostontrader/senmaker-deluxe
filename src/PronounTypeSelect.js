import {PronounType} from 'engcore'
import React         from 'react'
import Select        from 'react-select'

class PronounTypeSelect extends React.Component {
	render() {

		const state = this.props.state

		return (
			<div>
				<Select
					name="form-field-name"
					value={state.selectedPOS.pronounType + ''}
					options={Object.entries(PronounType).map((e) => {return {value:e[1]+'', label:e[0]}})}
					onChange={(e) => {state.selectedPOS.changePronounType(e)}}
				/>
			</div>
		)
	}

}

export default PronounTypeSelect
