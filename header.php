<?php get_template_part('template-parts/header-start'); ?>
<header class="main-header">
	<img class="main-header__heading-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/veldt-logo.svg" alt="logo-veldt">
	<?php wp_nav_menu( 
			array( 
					'theme_location' => 'configurator-menu-desktop',
					'container' => 'nav',
					'container_class' => 'custom_menu_class',
					'walker' => new My_Walker()
			) 
	); ?>
		<img class="main-header__menu-mobile-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/menu-configurator.svg" alt="menu-tel">
</header>