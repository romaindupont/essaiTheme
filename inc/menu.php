<?php 

function register_my_menus() {
	register_nav_menus(
		array(
		'dektopMenu' => __( 'Dektop Menu' ),
		'mobileMenu' => __( 'Mobile Menu' ),
		'configurator-menu-desktop' => __( 'Configurator Menu Desktop' ),
		'configuratorMenuMobile' => __( 'Configurator Menu Mobile' )
		)
	);
}
add_action( 'init', 'register_my_menus' );