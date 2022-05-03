<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

while ( have_posts() ) : the_post();

	/* wc_get_template_part( 'content', 'single-product' ); */
	get_template_part('woocommerce/single-product/product');

endwhile; // end of the loop.

/* get_footer(); */