<template>
    <div class="body" id="lighter">
        
        <section class="side-bar" id="asas">
            <img class="logo" src="../assets/img/logo.png">

            <div class="menu">
                <ul>
                    <li class="active">
                        <a href="#" class="link">
                            <router-link to="/">
                            <img src="../assets/img/icones/blanc-1.png"> 
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
                                    <div class="span ">Nos tarif</div>
                                    </router-link>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li class="dd">
                        <a href="#" class="dropdown">
                                <img src="../assets/img/icones/noire-3.png">
                            <!-- <span class="flex-box"> -->
                                <span onclick="myFunction2()" class="dropbtn">Services & Accessoires<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px.png"></span>
                            <!-- </span> -->
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
                    <li class="">
                        <a href="#" class="link">
                            <router-link to="/expertise">
                            <img src="../assets/img/icones/noire-5.png"> <span>Expertise</span>
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
                    <router-link class="routerLink" to="/demande-offre"><a class="btn" href="#">Demander une offre</a></router-link>
                    <router-link class="routerLink" to="/se-connecter"><a class="btn primary" href="#">Se connecter</a></router-link>
                </div>
                <div class="contenu-accueil">
                    <h4 class="title">Votre partenaire de reference en solution de paiement.</h4>
                    <span class="fade-2">
                        <p>Vous souhaitez louer un terminal de paiement pour quelques mois?</p>
                        <p>Consultez notre offre pour la location saisonniere d'un terminal bancontact portable</p>
                        <p>N'attendez pas plus longtemps pour commander un terminal bancontact!</p>
                        <p>Faites appel a notre expertise en paiement electronique et gagnez en efficacite et en productivite evers vos clients!</p>
                        <br/><br/><a class="btn white btn-oc" href="#">Offre COVID 19</a>
                    </span>
                    <img class="fade-4" id="bg_accueil" src="../assets/img/asset-1.png">
                </div>
            </div>
        </section>

        <div class="sarted-message fade">
            <div class="message effect5 fade-2">
                <div class="top" onclick="closeStartedMessage()">&times;</div>
                <div class="in">
                    Decouvrez sans plus attendre notre offre Moyen Terme.<br/>
                    Spécialement étudiée pour vous soutenir pendant cette période COVID 19.
                </div>
                <center>
                    <router-link class="btn primary" to="/demande-offre">Voir l'offre</router-link>
                </center>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>