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
                                        <div class="span">Terminaux de paiement</div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/tarifs">
                                    <div class="span active">Nos tarif</div>
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
                <h4 class="title color-white">Nos tarifs de carte de débit et crédit</h4>
                <div class="col_terminaux">
                    <div class="left">
                        <h4 class="title color-blue" id="te">Carte de debit</h4>
                        <div class="terminal">


                        </div>
                    </div>
                    <div class="right">
                        <p class="title color-white">Un coût de transaction pour les paiements par carte Bancontact simple et transparent ! Choisissez le tarif qui convient le mieux à votre activité!</p>
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