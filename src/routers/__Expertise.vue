<template>
    <div class="body" id="blue">

        <section class="side-bar" id="asas">
            <img class="logo" src="../assets/img/logo.png">
            <div class="menu">
                <ul>
                    <li class="">
                        <a href="#" class="link">
                            <router-link to="/">
                            <img src="../assets/img/icones/noire-1.png"> 
                            <span>Accueil</span> 
                            </router-link>
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/noire-2.png">
                            <span onclick="myFunction()" class="dropbtn">Solutions de paiement<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
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
                            <img src="../assets/img/icones/noire-3.png">
                            <span onclick="myFunction2()" class="dropbtn">Services & Accessoires<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <div id="myDropdown2" class="dropdown-content2 show">
                                <a href="#">
                                    <router-link to="/nos-services">
                                    <div class="span">Nos services</div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/accessoires">
                                    <div class="span">Nos accessoires</div>
                                    </router-link>
                                </a>
                            </div>
                        </a>
                    </li>
                    <div class="separateur">.</div>
                    <li class="dd">
                        <a href="#" class="link">
                            <router-link to="/about">
                                <img id="icone_users" src="../assets/img/icones/icons8_group_15px_2.png"> <span>A Propos de nous</span>
                            </router-link>
                        </a>
                    </li>
                    <li class="active">
                        <a href="#" class="link">
                            <router-link to="/expertise">
                            <img src="../assets/img/icones/blanc-5.png"> <span>Expertise</span>
                            </router-link>
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="link">
                            <router-link to="/contact">
                            <img src="../assets/img/icones/noire-6.png"> <span>Contact</span>
                            </router-link>
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="link">
                            <router-link to="/news">
                            <img src="../assets/img/icones/noire-7.png"> <span>News</span>
                            </router-link>
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
                        <router-link class="routerLink" to="/demande-offre"><a class="btn primary-2" href="#">Demander une offre</a></router-link>
                        <router-link class="routerLink" to="/se-connecter"><a class="btn white" href="#">Se connecter</a></router-link>
                        </div>
                        <div class="contenu-terminaux">
                            <h4 class="title color-white">Notre Expertise</h4>
                            <div class="expertise">
                                <div class="expertise-left">
                                    <img src="../assets/img/icones/expertise-img-1.png">
                                </div>
                                <div class="expertise-right">
                                    <p>
                                        <span>Des solutions de paiement ciblées</span><br/>
                                        Comme chaque commerce a des besoins spécifiques,<br/>
                                        une solution de paiement est spécialement analysée pour répondre à vos attentes.
                                    </p>
                                </div>
                            </div>
                            <div class="expertise">
                                <div class="expertise-left">
                                    <img src="../assets/img/icones/expertise-img-2.png">
                                </div>
                                <div class="expertise-right">
                                    <p>
                                        <span>À l’écoute de nos clients</span><br/>
                                        Profitez d’un support client efficace et réceptif à vos demandes<br/>
                                        Gagnez du temps et obtenez une réponse endéans les 24 heures à votre demande.
                                        Une panne sur votre terminal de paiement ? Un dépannage endéans les 12 heures ouvrables !
                                    </p>
                                </div>
                            </div>
                            <div class="expertise">
                                <div class="expertise-left">
                                    <img src="../assets/img/icones/expertise-img-3.png">
                                </div>
                                <div class="expertise-right">
                                    <p>
                                        <span>All In One Solutions</span><br/>
                                        Profitez d’un éventail de services en optant pour nos solutions de paiement:<br/>
                                        Un prix tout compris et  clair pour mieux contrôler  votre budget  <br/>
                                        Une assurance tous risque contre tout imprévu<br/>
                                        Des paiements hors connexion possibles en cas de panne internet<br/>
                                        et bien d’autres services inclus ! <br/>
                                    </p>
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