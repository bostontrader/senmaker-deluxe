import React    from 'react'
import renderer from 'react-test-renderer'

import PronounTypeSelect from './PronounTypeSelect'

describe('PronounTypeSelect', () => {
	it('Renders correctly', () => {
		const state = {selectedPOS:{pronounType:0}}
		const component = renderer.create(<PronounTypeSelect state={state} />)
		const json = component.toJSON()
		expect(json).toMatchSnapshot()
	})
})
