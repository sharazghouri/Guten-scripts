<?php
/**
 * Plugin Name: Guten Scripts
 *
 */


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function guten_scripts_editor_assets() {
	//enqueuing our blocks main script
	wp_enqueue_script( 'guten-script', plugins_url( 'index.js', __FILE__ ), array( 'wp-blocks', 'wp-element' ) , filemtime( plugin_dir_path( __FILE__ ) . 'index.js' ) );
	//enqueuing our blocks editor style sheet
	wp_enqueue_style ( 'guten-script-editor-style', plugins_url( 'editor.css', __FILE__ ), array(), filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) );

}

add_action( 'enqueue_block_editor_assets', 'guten_scripts_editor_assets');
