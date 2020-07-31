<template>
    <div class="body" id="blue">
        <section class="side-bar" id="asas">
            <img class="logo" src="../assets/img/logo.png">
            <div class="menu">
                <ul>
                    <li class="">
                        <a href="#" class="dropdown">
                            <router-link to="/">
                            <img src="../assets/img/icones/home.png"> Accueil
                            </router-link>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/box-white.png">
                            <span onclick="myFunction()" class="dropbtn">Solutions de paiement <img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#">
                                    <router-link to="/terminaux">
                                        <div class="span active">Terminaux de paiement</div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/tarifs">
                                    <div class="span">Nos tarif</div>
                                    </router-link>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li class="dd">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/icons8_credit_card_100px.png">
                            <span onclick="myFunction2()" class="dropbtn">Services & Accessoires<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <div id="myDropdown2" class="dropdown-content2 show">
                                <a href="#">
                                    <router-link to="/nos-services">
                                    <div class="span">Nos services</div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/terminaux">
                                    <div class="span">Nos accessoires</div>
                                    </router-link>
                                </a>
                            </div>
                        </a>
                    </li>
                    <div class="separateur">.</div>
                    <li class="dd">
                        <a href="about.html" class="dropdown">
                            <img src="../assets/img/icones/icons8_group_15px_2.png"> A Propos de nous
                        </a>
                    </li>
                    <li class="">
                        <a href="expertise.html" class="dropdown">
                            <img src="../assets/img/icones/icons8_search_64px.png"> Expertise
                        </a>
                    </li>
                    <li class="">
                        <a href="contact.html" class="dropdown">
                            <img src="../assets/img/icones/icons8_chat_room_60px.png"> Contact
                        </a>
                    </li>
                    <li class="">
                        <a href="news.html" class="dropdown">
                            <img src="../assets/img/icones/icons8_news_64px.png"> News
                        </a>
                    </li>
                </ul>
                <div class="footer-sid-bar">
                    <img id="social-lite" src="../assets/img/icones/icons8_facebook_f_100px.png">
                    <img id="social-lite" src="../assets/img/icones/icons8_linkedin_2_100px.png">
                    <img id="social-lite" src="../assets/img/icones/icons8_twitter_100px.png">
                    <img id="social-lite" src="../assets/img/icones/icons8_instagram_64px.png">
                </div>
            </div>
        </section>
        <section class="mobile" onclick="showMenu()">
            <button>MENU</button>
        </section>
				
				<section class="main">
					<div class="container">
							<div class="top">
									<a class="btn primary-2" href="demande-offre.html">Demander une offre</a>
									<a class="btn white" href="login.html">Se connecter</a>
							</div>
							<div class="contenu-terminaux">
									<h4 class="title color-white">Nos terminaux de paiement</h4>
									<div class="col_terminaux">
											<div class="left">
													<h4 class="title color-blue" id="te">Terminal de comptoir</h4>
													<div class="terminal">
															<div class="entete">
																	<div class="entete-left">
																			<span class="yomani">YOMANI</span><br/>
																			<div class="pt-icones flex-box">
																					<img src="../assets/img/Image -1@2x.png">
																					<img src="../assets/img/Image -3@2x.png">
																					<img src="../assets/img/Image -2@2x.png">
																					<img src="../assets/img/Image -7@2x.png">
																					<img src="../assets/img/Image -8@2x.png">
																			</div>
																	</div>
																	<div class="entete-right">
																			<a class="btn primary btn-oc" href="#">Commander</a>
																	</div>
															</div>
															<center class="">
																	<img src="../assets/img/YaMoNi.png">
															</center>
															<div class="body-terminal">
																	<h4 class="title">Connectivite:</h4>
																	<small>3G/2G, WIFI, ETHERNET</small>
																	<h4 class="title">Mode de paiement supporte:</h4>
																	<div class="mode2">
																			<div class="mode2-left">
																					<small>Lecteur de bande magnetique</small>
																					<small>Lecteur de carte a puce</small>
																					<small>Lecteur sans contact</small>
																			</div>
																			<div class="mode2-right">
																					<small>(NFC)Paiement par smartphone(Smartpay)</small>
																					<small>TINA (transactions en mode hors connection)*</small>
																			</div>
																	</div>
																	<h4 class="title">Permet également la lecture de:</h4>
																	<small>Cartes chèques repas et eco-chèques</small>
																	<small>Cartes d’identité électroniques</small>
																	<small>Gift Cards de Worldline</small>
																	<h4 class="title">Norme:</h4>
																	<small>PCI: PCI 4.x</small>
																	<small>ECR protocol: NVIC/VIC/CTEP</small>
															</div>
															<div class="entete">
																	<div class="entete-left"><br/>
																			<h4 class="title" id="petit_small">*TINA en option</h4>
																	</div>
																	<div class="entete-right">
																			<a class="btn" id="tarifs_btn" href="#">Tarif de transactions</a>
																	</div>
															</div>
													</div>
											</div>
											<div class="right">
													<h4 class="title color-white">Pourquoi opter pour un terminal de paiement ?</h4>
													<p>Vous souhaitez louer un terminal de paiement pour quelques mois?</p>
													<p>Consultez notre offre pour la location saisonniere d'un terminal bancontact portable</p>
													<p>N'attendez pas plus longtemps pour commander un terminal bancontact!</p>
													<p>Faites appel a notre expertise en paiement electronique et gagnez en efficacite et en productivite evers vos clients!</p>
													<p>Consultez notre offre pour la location saisonniere d'un terminal bancontact portable</p>
											</div>
									</div>
							</div>
							<br/><br/><br/>
					</div>
			</section>
    </div>

</template>

<script>
export default {
	
}
</script>