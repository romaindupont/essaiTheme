<?php

function veldt_theme_enqueue_scripts() {
	wp_enqueue_style(
		'veldt-style',
		get_theme_file_uri('dist/main.css'),
		[],
		'20220413'
	); 
	wp_enqueue_style( 
		' add_google_fonts ', 
		'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap', 
		false
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