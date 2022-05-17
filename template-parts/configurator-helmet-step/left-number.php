<?php require_once $_SERVER['DOCUMENT_ROOT'].'/essai/wp/wp-load.php'; ?>
<div class="numberChoice">
	<button class="buttonAdd">&plus; <?php echo _e( "Add") ?></button>
	<div class="numberWindows">
		<p class="infosNumber"><?php echo _e( "Choose your style and your number") ?></p>
		<div class="chooseWindows">
			<div class="chooseWindows_input">
				<input type="number" name="numberSelection" id="numberSelection">
				<div class="selectButtonNumber">
					<svg version="1.1" id="right"	viewBox="0 0 40 40">
						<g>
							<path class="right_st0" d="M20,1c10.5,0,19,8.5,19,19s-8.5,19-19,19S1,30.5,1,20S9.5,1,20,1 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20
								S31,0,20,0L20,0z"/>
						</g>
						<polygon class="right_st1" points="27.4,14 18.2,23.2 12.6,17.5 11.2,18.9 16.8,24.6 18.2,26 28.8,15.4 "/>
					</svg>
					<svg version="1.1" id="wrong" viewBox="0 0 40 40">
						<g>
							<path class="wrong_st0" d="M20,1c10.5,0,19,8.5,19,19s-8.5,19-19,19S1,30.5,1,20S9.5,1,20,1 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20
								S31,0,20,0L20,0z"/>
						</g>
						<polygon class="wrong_st1" points="27.8,13.6 26.4,12.2 20,18.6 13.6,12.2 12.2,13.6 18.6,20 12.2,26.4 13.6,27.8 20,21.4 26.4,27.8 
							27.8,26.4 21.4,20 "/>
					</svg>
				</div>
			</div>
				<div class="chooseStyleNumber">
					<div class="allScrew">
						<svg version="1.1" id="classic" viewBox="0 0 40 40">
							<g>
								<path class="classic_st0" d="M21.3,40c-0.5,0-0.7-0.2-0.7-0.7V9c0-0.3-0.1-0.4-0.4-0.3l-5.1,2.8c-0.6,0.3-1,0.2-1.2-0.2l-2.3-3.9
									c-0.3-0.5-0.1-0.9,0.4-1.2l10.2-5.7c0.3-0.2,0.5-0.3,0.7-0.3C23.2,0,23.4,0,23.7,0h4c0.5,0,0.7,0.3,0.7,0.8v38.5
									c0,0.5-0.2,0.7-0.7,0.7H21.3z"/>
							</g>
						</svg>
						<span class="textAction"><?php echo _e( "Classic") ?></span>
					</div>
					<div class="allScrew">
						<svg version="1.1" id="dirt" viewBox="0 0 40 40">
							<path class="dirt_st0" d="M26,29l11.4-1.5L39.3,40H0.7l1.1-11.7L14.7,29V14.3l-6.7,4.3L0.7,8.8L15.3,0l13.9,0.7L26,29z"/>
						</svg>
						<span class="textAction"><?php echo _e( "Dirt") ?></span>
					</div>
					<div class="allScrew">
						<svg version="1.1" id="pixel"	viewBox="0 0 40 40">
							<g>
								<path class="pixel_st0" d="M2.9,40v-5.7h11.4V11.4H8.6V5.7h5.7V0h11.4v34.3h11.4V40H2.9z"/>
							</g>
						</svg>
						<span class="textAction"><?php echo _e( "Pixel") ?></span>
					</div>
					<div class="allScrew">
						<svg version="1.1" id="racing" viewBox="0 0 40 40">
							<path class="racing_st0" d="M35.3,40C25,40,14.7,40,4.5,40c0.1-0.3,0.1-0.7,0.2-1c10.6-0.6,10.6-2.2,12.2-9.7c1.3-5.8,2.4-11.6,3.7-17.5
							c0.2-0.8,0.5-1.8,0.5-3.5c0-2.6-3.6-2.6-8.8-2.2c0.1-0.3,0.1-0.7,0.2-1c5.1-0.8,8.5-1.2,14.5-4.9c2.7,0,5.4,0,8.1,0
							c-2.2,10.5-4.5,21.1-6.7,31.6c-0.3,1.7-0.6,3.1-0.6,3.5c0,3.7,2.2,3.5,7.9,4C35.4,39.4,35.3,39.7,35.3,40z"/>
						</svg>
						<span class="textAction"><?php echo _e( "Racing") ?></span>
					</div>
				</div>
			</div>
	</div>
</div>