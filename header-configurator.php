<?php get_template_part('template-parts/header-start'); ?>
<header class="configurator-header">
	<div class="header-configurator">
		<div class="header-configurator-left">
			<div class="header-configurator-left-menu">
			<img class="header-configurator__menu-mobile-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/menu-configurator.svg" alt="menu-tel">
			</div>
			<div class="header-configurator-left-title">
			<img class="configurator-header__heading-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/veldt-logo.svg" alt="logo-veldt">
				<h2 class="header-configurator-left-title-2">Configurator</h2>
			</div>
		</div>
		<div class="header-configurator-right">
			<div class="header-configurator-right-priceZone">
				<div class="header-configurator-right-priceZone-price">950<span>€</span></div>
				<button
					type="submit"
					name="add"
					class="header-configurator-right-priceZone-buy"
				>
						<span>
							Acheter
						</span>
				</button>
			</div>
			<div class="header-configurator-right-comment"><?php esc_html_e( "Free delivery 10 weeks", "deliveryInfo") ?></div>
		</div>
	</div>
	<div class="first_menu-configurator">
		<div class="first_menu-configurator-nav-title">
		<img class="configurator-header__heading-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/veldt-logo.svg" alt="logo-veldt">
		<svg version="1.1" id="closeLogo" class="closeLogo" viewBox="0 0 41 41">
			<polygon class="cross" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
		</svg>
		</div>
		<?php wp_nav_menu( 
					array( 
							'theme_location' => 'configurator-menu-desktop',
							'container' => 'nav',
							'container_class' => 'first_menu-configurator-nav',
							'walker' => new My_Walker()
					) 
			); ?>
	</div>
	</header>