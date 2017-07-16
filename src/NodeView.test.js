import React    from 'react'
import renderer from 'react-test-renderer'

import NodeView from './NodeView'

describe('NodeView', () => {
	it('Renders correctly', () => {
		const state = {}
		const component = renderer.create(<NodeView state={state} />);
		const json = component.toJSON();
		expect(json).toMatchSnapshot();
	})
})
