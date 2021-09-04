const { registerBlockType } = wp.blocks;
import './editor.scss';
registerBlockType('myfirstblock/gtg-demo', {
	title: 'GTG Demo Block',
	icon: 'heading', // https://developer.wordpress.org/resource/dashicons/#heading
	category: 'text',
	edit: (props) => {
		return (
			<div>
				<h1 className={'gtg-demo-h1'}>Hello World!</h1>
				<my-component></my-component>
			</div>
		);
	},
	save: (props) => {
		return (
			<div>
				<h1 className={'gtg-demo-h1'}>Hello World!</h1>
				<my-component></my-component>
			</div>
		);
	},
});
