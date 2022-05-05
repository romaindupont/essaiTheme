<?php
get_header();

while ( have_posts() ) : the_post();

	get_template_part('woocommerce/single-product/product');

endwhile; // end of the loop.

get_footer();