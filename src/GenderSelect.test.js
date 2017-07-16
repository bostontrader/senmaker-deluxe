import React    from 'react'
import renderer from 'react-test-renderer'

import GenderSelect from './GenderSelect'

describe('GenderSelect', () => {
	it('Renders correctly', () => {
		const state = {selectedPOS:{gender:0}}
		const component = renderer.create(<GenderSelect state={state} />)
		const json = component.toJSON()
		expect(json).toMatchSnapshot()
	})
})
