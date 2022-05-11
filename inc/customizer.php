<?php 
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
 }
 add_action( 'init', 'disable_emojis' );
 
 /**
	* Filter function used to remove the tinymce emoji plugin.
	* 
	* @param array $plugins 
	* @return array Difference betwen the two arrays
	*/
 function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
	return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
	return array();
	}
 }
 
 /**
	* Remove emoji CDN hostname from DNS prefetching hints.
	*
	* @param array $urls URLs to print for resource hints.
	* @param string $relation_type The relation type the URLs are printed for.
	* @return array Difference betwen the two arrays.
	*/
 function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
	/** This filter is documented in wp-includes/formatting.php */
	$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
 
 $urls = array_diff( $urls, array( $emoji_svg_url ) );
	}
 
 return $urls;
 }


function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

/* function remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
		show_admin_bar(false);
	}
}
add_action('after_setup_theme', 'remove_admin_bar'); */
add_filter( 'show_admin_bar', '__return_false' );

add_filter('woocommerce_dropdown_variation_attribute_options_html', static function ($html, $args) {
	/** @var array $args */
	$args = wp_parse_args(apply_filters('woocommerce_dropdown_variation_attribute_options_args', $args), [
			'options'          => false,
			'attribute'        => false,
			'product'          => false,
			'selected'         => false,
			'name'             => '',
			'id'               => '',
			'class'            => '',
			'show_option_none' => __('Choose an option', 'woocommerce'),
	]);

	/** @var WC_Product_Variable $product */
	$options          = $args['options'];
	$product          = $args['product'];
	$attribute        = $args['attribute'];
	$name             = $args['name'] ?: 'attribute_'.sanitize_title($attribute);
	$id               = $args['id'] ?: sanitize_title($attribute);
	$class            = $args['class'];
	$show_option_none = (bool)$args['show_option_none'];
	// We'll do our best to hide the placeholder, but we'll need to show something when resetting options.
	$show_option_none_text = $args['show_option_none'] ?: __('Choose an option', 'woocommerce');

	// Get selected value.
	if ($attribute && $product instanceof WC_Product && $args['selected'] === false) {
			$selected_key     = 'attribute_'.sanitize_title($attribute);
			$args['selected'] = isset($_REQUEST[$selected_key]) ? wc_clean(wp_unslash($_REQUEST[$selected_key]))
					: $product->get_variation_default_attribute($attribute); // WPCS: input var ok, CSRF ok, sanitization ok.
	}

	if (empty($options) && ! empty($product) && ! empty($attribute)) {
			$attributes = $product->get_variation_attributes();
			$options    = $attributes[$attribute];
	}

	$radios = '<div class="custom-wc-variations">';

	if ( ! empty($options)) {
			if ($product && taxonomy_exists($attribute)) {
					$terms = wc_get_product_terms($product->get_id(), $attribute, ['fields' => 'all']);

					foreach ($terms as $term) {
							if (in_array($term->slug, $options, true)) {

									$radios .= '<input type="radio" name="custom_'.esc_attr($name).'" data-value="'.esc_attr($term->slug).'" id="'
														 .esc_attr($name).'_'.esc_attr($term->slug).'" data-variation-name="'.esc_attr($name).'" '
														 .checked(sanitize_title($args['selected']), $term->slug, false).'>';
									$radios .= '<label for="'.esc_attr($name).'_'.esc_attr($term->slug).'">';
									$radios .= esc_html(apply_filters('woocommerce_variation_option_name', $term->name));
									$radios .= '</label>';

							}
					}
			} else {
					foreach ($options as $option) {
							$checked = sanitize_title($args['selected']) === $args['selected'] ? checked($args['selected'],
									sanitize_title($option), false) : checked($args['selected'], $option, false);
							$radios  .= '<input type="radio" name="custom_'.esc_attr($name).'" data-value="'.esc_attr($option).'" id="'
													.esc_attr($name).'_'.esc_attr($option).'" data-variation-name="'.esc_attr($name).'" '.$checked.'>';
							$radios  .= '<label for="'.esc_attr($name).'_'.esc_attr($option).'">';
							$radios  .= esc_html(apply_filters('woocommerce_variation_option_name', $option));
							$radios  .= '</label>';
					}
			}
	}

	$radios .= '</div>';

	return $html.$radios;

}, 20, 2);