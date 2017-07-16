import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import State from './state'

import NodeView from './NodeView'
import POSSelect from './POSSelect'
//import SortableTree, { toggleExpandedForAll } from '../../index'
import SortableTree, { toggleExpandedForAll } from 'react-sortable-tree'
import Freezer from 'freezer-js'
import styles from './stylesheets/app.scss'

//import '../shared/favicon/SenmakerApple-touch-icon.png'
//import '../shared/favicon/favicon-16x16.png'
//import '../shared/favicon/favicon-32x32.png'
//import '../shared/favicon/favicon.ico'
//import '../shared/favicon/safari-pinned-tab.svg'

import NodeRendererTFR from './node-renderer-tfr'
//import {observer} from 'mobx-react'
import 'bulma/css/bulma.css'
//console.log(20,bulma)
//@observer
class SenmakerApp extends Component {

	componentDidMount() {
		var me = this
		// Here the magic happens. Everytime that the
		// state is updated the app will re-render.
		// A real data driven app.
		State.on('update', function(){
			console.log(32, 'update!')
			me.forceUpdate()
		})
	}

	//constructor(props) {
	//super(props);


	//this.updateTreeData = this.updateTreeData.bind(this)
	//this.expandAll = this.expandAll.bind(this)
	//this.collapseAll = this.collapseAll.bind(this)
	//this.canDrop = this.canDrop.bind(this)
	//this.updateSearchString = this.updateSearchString.bind(this)
	//this.updateSearchStats = this.updateSearchStats.bind(this)
	//this.updateSearchFocusIndex = this.updateSearchFocusIndex.bind(this)

	//this.insertPOS = this.insertPOS.bind(this)
	//this.insertAdj = this.insertAdj.bind(this)
	//this.insertClause = this.insertClause.bind(this)
	//this.insertNoun = this.insertNoun.bind(this)
	//this.insertNP = this.insertNP.bind(this)
	//this.insertVerb = this.insertVerb.bind(this)
	//this.insertVP = this.insertVP.bind(this)
	//}

	updateTreeData(treeData) {
		console.log(59,'updateTreeData')
		// do this within actions?
		State.get().set('treeData',treeData)
		State.get().set('selectedPOSPath', undefined)
		//this.forceUpdate()
	}

	canDrop(nextParent, node) {
		//if(nextParent) {
		//if(nextParent.accept) {
		//if(nextParent.accept.indexOf(node.type) >= 0 ) {
		//return true // the parent exists and it accepts this node.type
		//}
		//}
		//} else return true // no parent. this means we're moving the node to the root level, but that's cool.
		//return false
		return true
	}

	// Acutally, expand or collapse.
	//expand(expanded) {
	//this.state.get().set('treeData',toggleExpandedForAll({treeData: this.state.get().treeData, expanded}))
	//this.forceUpdate()
	//}

	//expandAll() {this.expand(true)}
	//collapseAll() {this.expand(false)}

	//updateSearchString(newString) {
	//this.state.get().set('searchString', newString)
	//this.forceUpdate()
	//}

	updateSearchStats(searchFoundCount, searchFocusIndex) {
	//this.state.get().set('searchFoundCount', searchFoundCount)
	//this.state.get().set('searchFocusIndex', searchFocusIndex)
	//this.forceUpdate()
	}

	//updateSearchFocusIndex(newSearchFocusIndex) {
	//this.state.get().set('searchFocusIndex', newSearchFocusIndex)
	//this.forceUpdate()
	//}

	//insertPOS(pos) {
	//this.state.get().set('treeData',this.state.get().treeData.push(pos))
	//this.forceUpdate()
	//}
	handleDelete() {
		//console.log('delete')
		State.emit( 'todo:delete', 666 );
	}

	// A nodeA can be dropped onto another nodeB if nodeB.accept contains nodeA.type
	//insertAdj()    {this.insertPOS({title:'new adj', type:'Adj'})}
	//insertClause() {this.insertPOS({title:'new clause', accept:['NP','VP']})}
	//insertNoun()   {this.insertPOS({title:'new noun', type:'N'})}
	//insertNP()     {this.insertPOS({title:'new noun phrase', type:'NP', accept:['N','Adj']})}
	//insertVerb()   {this.insertPOS({title:'new verb',type:'V'})}
	//insertVP()     {this.insertPOS({title:'new verb phrase', type:'VP', accept:['V']})}

	//addPronoun = () => {this.props.store.addPronoun()}
	//addNoun = () => {this.props.store.addNoun()}

	render() {

		//var freezer = new Freezer({obj: {a:'hola', b:'adios'}, treeData: []},{live:true});
		//freezer.on('update', function(){
			//console.log(127, 'update!')
		//})


		// Updating using a hash
		//freezer.get().obj.set( {b:'bye', c:'ciao'} );

		// Updating using key and value
		///freezer.get().treeData.push( {title:'root1', children:[]} );
		//freezer.get().treeData.push( {title:'root2', children:[]} );
		//const c = freezer.get().treeData[0].getListener()
		//c.on('update',function() {
			//console.log(138,'update child')
		//})
		//const n1 = freezer.get().treeData[0]
		//const pos = {pronounType: 0, person:1}
		//n1.children.set(0,{title:'1st leaf', children:[],pos:pos})

		//pos.pronounType = 1
		//console.log(146,pos)

		//console.log( 148,JSON.stringify(freezer.get().toJS(),null, 2) )
		//const store = this.props.store;
		//const projectName = 'React Sortable Tree';
		//const authorName = 'Chris Fritz';
		//const authorUrl = 'https://github.com/fritz-c';
		//const githubUrl = 'https://github.com/fritz-c/react-sortable-tree';

		//const treeData = this.state.get().treeData
		//const treeData = []
		//const searchString = this.state.get().searchString
		const searchString = ''
		//const searchFocusIndex = this.state.get().searchFocusIndex
		const searchFocusIndex = 0
		//const searchFoundCount = this.state.get().searchFoundCount
		const searchFoundCount = 0

		const alertNodeInfo = ({ node, path, treeIndex }) => {
			console.log(168,node)
			console.log(169,path)
			console.log(170,treeIndex)

			//store.setCurrentPOS(node.pos)
			State.get().set('selectedPOS', node.pos)
			State.get().set('currentTreeIdx', treeIndex)
			//store.setCurrentTreeIdx(treeIndex)
			//switch(node.pos.t) {
				//case 5:
					//store.setPosPanelType('N')
					//break
				//case 7:
					//store.setPos16PanelType('Pro')
					//break
				//default:
			//}
			//const objectString = Object.keys(node)
			//.map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
			//.join(',\n   ');
			//global.alert(
			//'Info passed to the button generator:\n\n' +
			//`node: {\n   ${objectString}\n},\n` +
			//`path: [${path.join(', ')}],\n` +
			//`treeIndex: ${treeIndex}`
			//);
		}

		//const selectPrevMatch = () => {
			//this.updateSearchFocusIndex(
			//searchFocusIndex !== null ?
			//(searchFoundCount + searchFocusIndex - 1) % searchFoundCount  :
			//searchFoundCount - 1
			//)
		//}

		//const selectNextMatch = () => {
			//this.updateSearchFocusIndex(
			//searchFocusIndex !== null ?
			//(searchFocusIndex + 1) % searchFoundCount : 0
			//)
		//}

		const isVirtualized = true
		const treeContainerStyle = isVirtualized ? { height: 300 } : {}

		/*return(
		 <div>
		 <button onClick={ this.handleDelete } />
		 </div>
		 )*/
	// store.treeData.slice()

		return (
			<div className="columns">

				<div className="column" >

					<div>
						<button onClick={ this.handleDelete } >click</button>
					</div>

					<section className={styles['main-content']}>



						Add new part of speech
						<POSSelect state={ State.get() } />
						<div style={treeContainerStyle}>
							<SortableTree
								treeData={State.get().treeData}
								onChange={this.updateTreeData}
								searchQuery={searchString}
								searchFocusOffset={searchFocusIndex}
								canDrag={({ node }) => !node.noDragging}
								canDrop={({ nextParent, node }) => this.canDrop(nextParent, node)}
								searchFinishCallback={matches => {
								this.updateSearchStats(
								matches.length,
								matches.length > 0 ?
								searchFocusIndex % matches.length : 0
								)
								}
								}
								isVirtualized={isVirtualized}
								rowHeight={50}
								nodeContentRenderer={NodeRendererTFR}
								generateNodeProps={
									rowInfo => ({
										buttons: [

											<button
												style={{verticalAlign: 'middle'}}
												onClick={() => alertNodeInfo(rowInfo)}
											>ℹ</button>,

											<button
												style={{verticalAlign: 'middle'}}
												onClick={() => store.setShowPro(rowInfo) }
											>x</button>
										]
									})
								}
							/>
						</div>


					</section>



				</div>

				<div className="column" >
					<NodeView state={ State.get() } />
				</div>

			</div>
		)
	}
}

export default SenmakerApp
