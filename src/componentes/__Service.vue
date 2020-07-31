<template>
    <div class="body" id="blue">
        <section class="side-bar" id="asas">
            <img class="logo" src="../assets/img/logo.png">
            <div class="menu">
                <ul>
                    <li class="">
                        <a href="#" class="dropdown">
                            <router-link to="/">
                            <img id="kkk" src="../assets/img/icones/home.png"> Accueil
                            </router-link>
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/box.png">
                            <span onclick="myFunction()" class="dropbtn">Solutions de paiement <img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <div id="myDropdown" class="dropdown-content show">
                                <a href="#">
                                    <router-link to="/terminaux">
                                        <div class="span">Terminaux de paiement</div>
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
                    <li class="active dd">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/icons8_credit_card_100px.png">
                            <span onclick="myFunction2()" class="dropbtn">Services & Accessoires<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <div id="myDropdown2" class="dropdown-content2">
                                <a href="#">
                                    <router-link to="/nos-services">
                                    <div class="span active">Nos services</div>
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
									<h4 class="title color-white">Les services liés à nos terminaux de paiement:</h4>
									<div class="col_terminaux service">
											<div class="left">
													<h4 class="title color-white" onclick="js1()">
															TINA :
															<br/> Une Coupure de réseau sur votre terminal de paiement?
													</h4>
													<h4 class="title color-white" onclick="js2()">
															Assitance technique :
															<br/> Une panne ou un accident avec votre terminal de paiement?
													</h4>
													<h4 class="title color-white" onclick="js3()">
															Le service Dynamic Currency Conversion (DCC):
															<br/> Vous avez souvent des clients étrangers qui demandent à payer avec leur propre devise?
													</h4>
													<h4 class="title color-white" onclick="js4()">
															Extranet :
															<br/> Vous avez besoin de consulter ou d’exporter des rapports détaillé de vos transactions traitées par votre terminal paiement?
													</h4>
											</div>
											<div class="right">
													<div class="elw" id="js1">
															<div class="element">
																	<h1>1</h1>
																	Grâce à TINA (Temporary Interrupted Network Application), vous pouvez utiliser votre terminal de paiement même si votre réseau internet est hors ligne. <br/>Une solution unique pour toujours recevoir vos paiements électroniques
																	en toutes circonstances! <br/>Les clients ne remarquent pas si vous traitez des transactions en ligne ou hors ligne, et vos activités peuvent se poursuivre en toute simplicité ! <br/>Vous évitez ainsi de passer à côté d’une
																	vente ou de décevoir vos clients. <br/>Des questions sur le back-up mode ou vous souhaitez l’activer sur votre terminal de paiement?

																	<center><br/>
																			<a class="btn primary-2" href="#">Contactez-nous</a>
																	</center>
															</div>
													</div>
													<div class="elw" id="js2">
															<div class="element">
																	<h1>2</h1>
																	Grâce à TINA (Temporary Interrupted Network Application), vous pouvez utiliser votre terminal de paiement même si votre réseau internet est hors ligne. <br/>Une solution unique pour toujours recevoir vos paiements électroniques
																	en toutes circonstances! <br/>Les clients ne remarquent pas si vous traitez des transactions en ligne ou hors ligne, et vos activités peuvent se poursuivre en toute simplicité ! <br/>Vous évitez ainsi de passer à côté d’une
																	vente ou de décevoir vos clients. <br/>Des questions sur le back-up mode ou vous souhaitez l’activer sur votre terminal de paiement?

																	<center><br/>
																			<a class="btn primary-2" href="#">Contactez-nous</a>
																	</center>
															</div>
													</div>
													<div class="elw" id="js3">
															<div class="element">
																	<h1>3</h1>
																	Grâce à TINA (Temporary Interrupted Network Application), vous pouvez utiliser votre terminal de paiement même si votre réseau internet est hors ligne. <br/>Une solution unique pour toujours recevoir vos paiements électroniques
																	en toutes circonstances! <br/>Les clients ne remarquent pas si vous traitez des transactions en ligne ou hors ligne, et vos activités peuvent se poursuivre en toute simplicité ! <br/>Vous évitez ainsi de passer à côté d’une
																	vente ou de décevoir vos clients. <br/>Des questions sur le back-up mode ou vous souhaitez l’activer sur votre terminal de paiement?

																	<center><br/>
																			<a class="btn primary-2" href="#">Contactez-nous</a>
																	</center>
															</div>
													</div>
													<div class="elw" id="js4">
															<div class="element">
																	<h1>4</h1>
																	Grâce à TINA (Temporary Interrupted Network Application), vous pouvez utiliser votre terminal de paiement même si votre réseau internet est hors ligne. <br/>Une solution unique pour toujours recevoir vos paiements électroniques
																	en toutes circonstances! <br/>Les clients ne remarquent pas si vous traitez des transactions en ligne ou hors ligne, et vos activités peuvent se poursuivre en toute simplicité ! <br/>Vous évitez ainsi de passer à côté d’une
																	vente ou de décevoir vos clients. <br/>Des questions sur le back-up mode ou vous souhaitez l’activer sur votre terminal de paiement?

																	<center><br/>
																			<a class="btn primary-2" href="#">Contactez-nous</a>
																	</center>
															</div>
													</div>
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