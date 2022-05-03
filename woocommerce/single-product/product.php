<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;
global $post;
$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 2 );
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
	<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" data-columns="<?php echo esc_attr( $columns ); ?>">
		<figure class="woocommerce-product-gallery__wrapper">
			<?php
			if ( $post_thumbnail_id ) {
				/* $post_thumbnail_id = $product; */
				$html = wc_get_gallery_image_html( $post_thumbnail_id, true );
				print_r($images);

			} else {
				$html  = '<div class="woocommerce-product-gallery__image--placeholder">';
				$html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src( 'woocommerce_single' ) ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
				$html .= '</div>';
			}

			echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id );

			do_action( 'woocommerce_product_thumbnails' );
/* 			$attachment_ids = $product->get_gallery_image_ids();

			if ( $attachment_ids && $product->get_image_id() ) {
				foreach ( $attachment_ids as $attachment_id ) {
					echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', wc_get_gallery_image_html( $attachment_id ), $attachment_id );
				} */
/* 	} */
			?>
		</figure>
	</div>
	<div class="custom-singleProduct-page--right">
	<?php the_title( '<h1 class="product_title entry-title">', '</h1>' );?>
	<div class="woocommerce-product-details__short-description">
		<?php echo $short_description; ?>
	</div>
	<p class="<?php echo esc_attr( apply_filters( 'woocommerce_product_price_class', 'price' ) ); ?>"><?php echo $product->get_price_html(); ?></p>
	<?php echo '<ul>';
	// Loop through WooCommerce registered product attributes
	foreach( wc_get_attribute_taxonomies() as $values ) {
			// Get the array of term names for each product attribute
			$term_names = get_terms( array('taxonomy' => 'pa_' . $values->attribute_name, 'fields' => 'names' ) );
			echo '<li><strong>'. $values->attribute_label .'</strong><div>';
			for($i= 0; $i < count($term_names); $i++){
				echo '<div><input type="radio" id='. $term_names[$i] .' name='. $values->attribute_label .' value='. $term_names[$i] .'><label for='. $term_names[$i] .'>'. $term_names[$i] .'</label></div>';
				
			}
			echo '</div></li>';
	}
	echo '</ul>';?>
	</div>
</main>