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
	if(is_page('configurator')){
		wp_enqueue_script(
			'veldt-configurator-script',
			get_theme_file_uri('dist/js/configurator.js'),
			[],
			'20220413',
			true
		);
		wp_enqueue_style(
			'veldt-configurator-style',
			get_theme_file_uri('assets/styles/pages/_configurator.css'),
			[],
			'20220413'
		); 
		wp_enqueue_style(
			'veldt-configurator-style-header',
			get_theme_file_uri('assets/styles/layout/_header-configurator.css'),
			[],
			'20220413'
		); 
		wp_enqueue_style(
			'veldt-configurator-style-footer',
			get_theme_file_uri('assets/styles/layout/_footer-configurator.css'),
			[],
			'20220413'
		); 
	}
}

add_action( 'wp_enqueue_scripts', 'veldt_theme_enqueue_scripts', 20);