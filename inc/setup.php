<?php
// fx qui permet de setuper mon theme
function veldt_theme_setup() {
	//delegue la gestion de la balise title
	add_theme_support ( 'title-tag');
	/* add_theme_support( 'woocommerce' ); */
	
}

add_action( 'after_setup_theme', 'veldt_theme_setup');

remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
    echo '<section id="main">';
}

function my_theme_wrapper_end() {
    echo '</section>';
}
function mytheme_add_woocommerce_support() {
	/* add_theme_support( 'woocommerce' ); */
	add_theme_support( 'neve' );
/* 	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' ); */
}
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );
/* add_filter( 'woocommerce_enqueue_styles', '__return_false' ); */
remove_theme_support( 'wc-product-gallery-zoom' );
remove_theme_support( 'wc-product-gallery-lightbox' );
remove_theme_support( 'wc-product-gallery-slider' );

/* add_filter('woocommerce_add_to_cart_redirect', 'woovina_skip_cart_redirect_checkout');
 
function woovina_skip_cart_redirect_checkout($url) {
    return wc_get_checkout_url();
} */