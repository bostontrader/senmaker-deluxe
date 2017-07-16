import React    from 'react'
import renderer from 'react-test-renderer'

import POSSelect from './POSSelect'

describe('POSSelect', () => {
	it('Renders correctly', () => {
		const component = renderer.create(<POSSelect />);
		const json = component.toJSON();
		expect(json).toMatchSnapshot();
	})
})
