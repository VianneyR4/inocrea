<template>
    <div class="body" id="lighter">
        <section class="side-bar" id="asas">
            <img class="logo" src="../assets/img/logo.png">
            <div class="menu">
                <ul>
                    <li class="active">
                        <a href="index.html" class="dropdown">
                            <router-link to="/">
                            <img src="../assets/img/icones/home-white.png"> Accueil
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
                    <a class="btn" href="demande-offre.html">Demander une offre</a>
                    <a class="btn primary" href="login.html">Se connecter</a>
                </div>
                <div class="contenu-accueil">
                    <h4 class="title">Votre partenaire de reference en solution de paiement.</h4>
                    <span>
                        <p>Vous souhaitez louer un terminal de paiement pour quelques mois?</p>
                        <p>Consultez notre offre pour la location saisonniere d'un terminal bancontact portable</p>
                        <p>N'attendez pas plus longtemps pour commander un terminal bancontact!</p>
                        <p>Faites appel a notre expertise en paiement electronique et gagnez en efficacite et en productivite evers vos clients!</p>
                        <br/><br/><a class="btn white btn-oc" href="#">Offre COVID 19</a>
                    </span>
                    <img id="bg_accueil" src="../assets/img/asset-1.png">
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
	
}
</script>