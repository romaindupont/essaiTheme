<?php
// fx qui permet de setuper mon theme
function veldt_theme_setup() {
	//delegue la gestion de la balise title
	add_theme_support ( 'title-tag');
}

add_action( 'after_setup_theme', 'veldt_theme_setup');