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
	/* wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); */
/* 	wp_enqueue_script(
		'veldt-addToCart-script',
		get_theme_file_uri('dist/js/add_to_cart.js'),
		[],
		'20220413',
		true
	); */
/* 	if(!is_page('product')){ 
		wp_enqueue_style(
			'parent-style',
			get_template_directory_uri() . '/style.css'
		);
	} */
	if(!is_page('configurator')){
	wp_enqueue_script(
		'veldt-script',
		get_theme_file_uri('dist/js/menu.js'),
		[],
		'20220413',
		true
	);


}
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
			'veldt-svgConfigurator-style',
			get_theme_file_uri('assets/styles/components/_svgConfigurator.css'),
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
		wp_enqueue_script( 
			' jsPdf ', 
			'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', 
			[],
			'020522',
			true
		);
	}
	if(is_singular( 'product' )) {
		wp_enqueue_style(
			'veldt-singleProduct-style',
			get_theme_file_uri('assets/styles/pages/_single-product.css'),
			[],
			'20220413'
		); 
		wp_enqueue_script(
			'veldt-singleProduct-script',
			get_theme_file_uri('dist/js/single-product.js'),
			[],
			'20220413',
			true
		);
		wp_enqueue_script(
			'veldt-addToCart-script',
			get_theme_file_uri('dist/js/add_to_cart.js'),
			[],
			'20220413',
			true
		);
	}
/* 	if(!is_singular( 'product' )) {
		wp_enqueue_style( 
			'child-style', 
			get_stylesheet_uri(),
			array( 'parenthandle' )
	);
} */
}
add_action( 'wp_enqueue_scripts', 'veldt_theme_enqueue_scripts', 20);

/* add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	if(!is_page( 'product' )) {
    wp_enqueue_style( 
			'child-style', 
			get_stylesheet_uri(),
			array( 'parenthandle' )
    );
	}
} */
/* add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), wp_get_theme()->get('Version') );
} */

/* if ( ! function_exists( 'themeslug_child_enqueue_scripts' ) ) :
	function themeslug_child_enqueue_scripts() {
			wp_enqueue_style( 'themeslug-parent-styles', trailingslashit( get_template_directory_uri() ) . 'style.css', array(), '1.0.0' );
	}
endif;
add_action( 'wp_enqueue_scripts', 'themeslug_child_enqueue_scripts' ); */