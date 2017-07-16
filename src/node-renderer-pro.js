import React, {Component} from 'react'
import Select from 'react-select'

class ProNode extends Component {

	render() {

		const options = [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }
		];

		const n = function logChange(val) {
			console.log("Selected: " + JSON.stringify(val));
		}

		return(
			<div>This is a Pro
				<Select
					name="form-field-name"
					value="one"
					options={options}
					onChange={n}
				/>

			</div>
		)
	}
}

export default ProNode
