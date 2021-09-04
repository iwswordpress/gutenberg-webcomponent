<?php
/*
 * Plugin Name: Web Component
 * Description: A simple WordPress plugin that allows user to create recipes and rate those recipes
 * Version: 1.0
 * Author: Craig West
 * Author URI: https://udemy.com
 * Text Domain: webcomponent
 */
function gtg_demo_register_block() {
  
	wp_register_script(
		'mycomponent',
		plugins_url('src/mycomponent.js', __FILE__ )
	);
  wp_register_script(
    'gtg-demo-editor-script',
    plugins_url( 'build/editor.js', __FILE__ ),
    array( 'wp-blocks' ),
    filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.js' )
  );
wp_register_style(
    'gtg-demo-style',
    plugins_url( 'build/style.css', __FILE__ ),
    [],
    filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
  );
wp_register_style(
    'gtg-demo-editor-style',
    plugins_url( 'build/editor.css', __FILE__ ),
    [],
    filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
  );
register_block_type( 'myfirstblock/gtg-demo', array(
    'editor_script' => 'gtg-demo-editor-script',
    'editor_style' => 'gtg-demo-editor-style',
    'style' => 'gtg-demo-style'
  ) );
 
}
add_action( 'init', 'gtg_demo_register_block' );