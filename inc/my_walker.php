<?php
class My_Walker extends Walker_Nav_Menu {
	//lorsqu’un niveau commence (<ul>+content)
  function start_lvl( &$output, $depth = 0, $args = array() ) {
    // $output correspond à la variable retournée en fin de walker
    // $depth correspond à la profondeur du niveau
    // $arg aux variable supplémentaires		
		$indent = ( $depth > 0  ? str_repeat( "\t", $depth ) : '' ); // code indent
    $display_depth = ( $depth + 1); // because it counts the first submenu as 0
    $classes = array(
        'sub-menu',
        'menu-depth-' . $display_depth
        );
		$image1= '';
		$closeMenu = get_stylesheet_directory_uri() . "/assets/images/close-menu.svg";
    $class_names = implode( ' ', $classes );
				if($display_depth == 1) {
					$output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n" . '<h2 class="SubmenuTitle"></h2>' . "\n" .'<img class="helmetImage" alt="Helmet Image" src="'. $image1 .'">'. "\n" . '<img class="closeMenu" alt="Close menu" src="'. $closeMenu .'">' . "\n";
						} else {
							$output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n" ;
						}
	}
	//lorsqu’un élément est initialisé (<li>+content)
  //function start_el( &$output, $item, $depth, $args, $id = 0 ) {
		//var_dump($item);
    // $output correspond à la variable retournée en fin de walker
    // $item correspond aux information sur l'item en cours
    // $depth correspond à la profondeur du niveau
    // $arg aux variable supplémentaires
  //}
	//lorsqu’un élément se termine (</li>)
 // function end_el( &$output, $item, $depth, $args ) {
    // $output correspond à la variable retournée en fin de walker
    // $item correspond aux information sur l'item en cours
    // $depth correspond à la profondeur du niveau
    // $arg aux variable supplémentaires
  //}
	//lorsqu’un niveau se termine (</ul>)
  //function end_lvl( &$output, $depth, $args ) {
    // $output correspond à la variable retournée en fin de walker
    // $depth correspond à la profondeur du niveau
    // $arg aux variable supplémentaires
  //}
}