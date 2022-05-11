<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;
global $post;
$variations = $product->get_available_variations();
$product_sku = $product->get_sku();
$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$images = $product->get_image();
$wrapper_classes   = apply_filters(
	'woocommerce_single_product_image_gallery_classes',
	array(
		'woocommerce-product-gallery',
		'woocommerce-product-gallery--' . ( $post_thumbnail_id ? 'with-images' : 'without-images' ),
		'woocommerce-product-gallery--columns-' . absint( $columns ),
		'images',
	)
);

$short_description = apply_filters( 'woocommerce_short_description', $post->post_excerpt );

if ( ! $short_description ) {
	return;
}

?>
<main class="custom-singleProduct-page"> 
	<section class="section">
		<div class="slider" data-columns="<?php echo esc_attr( $columns ); ?>">
				<?php
				$attachment_ids = $product->get_gallery_image_ids();
				if ( $attachment_ids && $product->get_image_id() ) {
					foreach ( $attachment_ids as $attachment_id ) {
						echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', my_gallery( $attachment_id ), $attachment_id );
					}
					
		}
		else {
			$html  = '<div class="woocommerce-product-gallery__image--placeholder">';
			$html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
			$html .= '</div>';
		
		}
		if(count($attachment_ids) < 3) {
			$html  = '<div class="slide">';
			$html .= sprintf( '<img src="%s" alt="%s" class="" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
			$html .= '</div>';
			echo $html;
		}
				?>
			<div class="btn-slider-container">
				<span class="btn btn-first btn-slider-active"></span>
				<span class="btn btn-second"></span>
				<span class="btn btn-third"></span>
			</div>
		</div>
		<div class="custom-singleProduct-page--right">
			<?php the_title( '<h1 class="product_title entry-title">', '</h1>' );?>
			<div class="woocommerce-product-details__short-description">
				<?php echo $short_description; ?>
			</div>
			<div class="woocommerce-price-container">
				<p class="<?php echo esc_attr( apply_filters( 'woocommerce_product_price_class', 'price' ) ); ?>"><?php echo $product->get_price_html(); ?></p>
				<p class="deliveryMessage">Free delivery <span>- 10 weeks</span></p>
			</div>
			<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="get">
			<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>
			<?php echo '<ul class="woocommerce-attribute-list">';
		/* foreach( wc_get_attribute_taxonomies() as $values ) {
			$term_names = get_terms( array('taxonomy' => 'pa_' . $values->attribute_name, 'fields' => 'names' ) );
			echo '<li class="woocommerce-attribute-title '. $values->attribute_label .'"><strong>'. $values->attribute_label .'</strong><div class="woocommerce-attribute-choiceList">';
			for($i= 0; $i < count($term_names); $i++){
				echo '<div class="woocommerce-attribute-input"><input type="radio" id='. $term_names[$i] .' name="attribute_pa_'. $values->attribute_name .'" value='. $term_names[$i] .'><label for='. $term_names[$i] .'>'. $term_names[$i] .'</label></div>';
				
			}
			echo '</div></li>';
		}
		echo '</ul>'; */?>
		<?php $products = $product->get_attribute( 'pa_size' );
$product_attributes = explode(',', $products);
		/* var_dump($product_attributes); */
?>
<?php foreach ( $product_attributes as $product_attribute_key => $product_attribute ) : ?>
	<li class="woocommerce-attribute-titlewoocommerce-attribute-title woocommerce-product-attributes-item woocommerce-product-attributes-item--<?php echo esc_attr( $product_attribute_key ); ?>">
	<div class="woocommerce-attribute-input"><input type="radio" class="woocommerce-product-attributes-item__label"><?php echo wp_kses_post( $product_attribute ); ?></div>
		<td class="woocommerce-product-attributes-item__value"><?php /* echo wp_kses_post( $product_attribute['value'] ); */ ?></td>
	</li>
	
<?php endforeach; ?>
<?php/* 	$data_store   = WC_Data_Store::load( 'product' );
		$attributes = array(
			"attribute_pa_certification" => 'dot',
			"attribute_pa_size" => 'ml'
		);
		$variation_id = $data_store->find_matching_product_variation(
			new \WC_Product( $product->id), $attributes
		);
		var_dump($variations);  */?>
			<div class="buttonZone">
				<button type="submit" class="add_to_cart"><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>
				<button class="personnalize"><a href="<?php echo get_permalink( get_page_by_path('configurator' )); ?>">Personnalize</a></button>
			</div>
			<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
			<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->id );  ?>" />
			<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
			<input type="hidden" name="variation_id" class="variation_id" value="0" />
		</form>
		</div>
	</section>
		<script>
			(function ($) {
    $(document).ready(function () {
        const customVariations = document.getElementsByClassName('custom-wc-variations');
        if (customVariations.length > 0) {
            
            Array.from(customVariations).forEach(function (variation) {
                const radios = variation.querySelectorAll('input[type=radio]');
                radios.forEach(function (radio) {
                    radio.addEventListener('change', function () {
                        const variationName = radio.getAttribute('data-variation-name');
                        const selectBox = document.querySelector('select[name=' + variationName + ']');
                        selectBox.value = radio.getAttribute('data-value');
                        $(selectBox).trigger('change');
                    });
                });
            });
        }
    });
})(jQuery);
		</script>
</main>
