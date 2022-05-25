<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
require_once $_SERVER['DOCUMENT_ROOT'].'/essai/wp/wp-load.php';
global $product;
global $post;
global  $woocommerce;
$product_sku = $product->get_sku();
$product = new WC_Product_Variable(	$product->id ); 
$attributes = $product->get_variation_attributes();
$available_variations = $product->get_available_variations();
$columns = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
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
<script>
	const passedArray = 	
    <?php echo json_encode($available_variations); ?>;
		localStorage.setItem("variationTable", JSON.stringify(passedArray));
</script>
<main class="custom-singleProduct-page"> 
	<section class="section singlePageSection">
		<div class="slider" data-columns="<?php echo esc_attr( $columns ); ?>">
				<?php
					$attachment_ids = $product->get_gallery_image_ids();
					if ( $attachment_ids && $product->get_image_id() ) {
						foreach ( $attachment_ids as $attachment_id )
						{
							echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', my_gallery( $attachment_id ), $attachment_id );
						}
						
					}
					else {
						$html  = '<div class="woocommerce-product-gallery__image--placeholder">';
						$html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
						$html .= '</div>';
					
					}
					if (count($attachment_ids) < 3) {
						$html  = '<div class="slide">';
						$html .= sprintf( '<img src="%s" alt="%s" class="" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
						$html .= '</div>';
						echo $html;
					}
				?>
			<div class="button-slider-container">
				<span class="buttons button-first button-slider-active"></span>
				<span class="buttons button-second"></span>
				<span class="buttons button-third"></span>
			</div>
		</div>
		<div class="custom-singleProduct-page--right">
			<?php the_title( '<h1 class="product_title entry-title">', '</h1>' );?>
			<div class="woocommerce-product-details__short-description">
				<?php echo $short_description; ?>
			</div>
			<div class="woocommerce-price-container">
				<p><span class="<?php echo esc_attr( apply_filters( 'woocommerce_product_price_class', 'price' ) ); ?>"><?php echo $product->get_variation_price(); ?>-<?php echo $product->get_variation_price('max'); ?></span><span class="symbol"><?php echo get_woocommerce_currency_symbol(); ?></span></p>
				<p class="deliveryMessage"><?php echo _e( "Free delivery" ) ?> <span>- 10 <?php echo _e( "weeks") ?></span></p>
			</div>
			<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="get">
				<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>
				<?php echo '<ul class="woocommerce-attribute-list">';
					foreach ( wc_get_attribute_taxonomies() as $values )
					{
						$term_names = get_terms( array( 'taxonomy' => 'pa_' . $values->attribute_name, 'fields' => 'names' ) );
						echo '<li class="woocommerce-attribute-title '. $values->attribute_label .'"><strong>'. $values->attribute_label .'</strong><div class="woocommerce-attribute-choiceList">';
						for ($i = 0; $i < count($term_names); $i++)
						{
							echo '<div class="woocommerce-attribute-input"><input type="radio" id='. $term_names[$i] .' name="attribute_pa_'. $values->attribute_name .'" value='. $term_names[$i] .'><label for='. $term_names[$i] .'>'. $term_names[$i] .'</label></div>';
						}
						echo '</div></li>';
					}
					echo '</ul>';
				?>
				<div class="buttonZone">
					<button type="submit" class="add_to_cart"><?php echo esc_html__( $product->single_add_to_cart_text(), 'Add_to_cart' ); ?></button>
					<button class="personnalize"><a href="<?php echo get_permalink( get_page_by_path( 'configurator' ) ); ?>"><?php echo _e( "Personnalize" ) ?></a></button>
				</div>
				<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
				<input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->id );  ?>" />
				<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
				<input type="hidden" name="sku" class="sku" value="<?php echo $product_sku; ?>" />
				<input type="hidden" name="quantity" class="quantity" value="1" />
				<input type="hidden" name="variation_id" class="variation_id" value="0" />
			</form>
		</div>
	</section>
</main>
