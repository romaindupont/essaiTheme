<?php

function veldt_theme_enqueue_scripts() {
	wp_enqueue_style(
		'veldt-style',
		get_theme_file_uri('dist/main.css'),
		[],
		'20220413'
	); 
/* 	wp_enqueue_style(
		'veldt-style-reset',
		get_theme_file_uri('dist/reset.css'),
		[],
		'20220413'
	); 
	wp_enqueue_style(
		'veldt-style-variables',
		get_theme_file_uri('dist/variables.css'),
		[],
		'20220413'
	);  */
	wp_enqueue_script(
		'veldt-script',
		get_theme_file_uri('dist/main.js'),
		[],
		'20220413',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'veldt_theme_enqueue_scripts', 20);