import React    from 'react'
import renderer from 'react-test-renderer'

import PluralitySelect from './PluralitySelect'

describe('PluralitySelect', () => {
	it('Renders correctly', () => {
		const state = {selectedPOS:{plurality:0}}
		const component = renderer.create(<PluralitySelect state={state} />)
		const json = component.toJSON()
		expect(json).toMatchSnapshot()
	})
})
