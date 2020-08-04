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
                    <li class="dd active">
                        <a href="#" class="link">
                            <router-link to="/about">
                                <img id="icone_users" src="../assets/img/icones/group-white.png"> <span>A Propos de nous</span>
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
                        <router-link class="routerLink" to="/demande-offre"><a class="btn primary-2" href="#">Demander une offre</a></router-link>
                        <router-link class="routerLink" to="/se-connecter"><a class="btn white" href="#">Se connecter</a></router-link>
                        </div>
                        <div class="contenu-terminaux">
                                <h4 class="title color-white">À Propos de Nous</h4>
                                <div class="apropos">
                                    <p>
                                        <span>INOCREA</span>
                                        est spécialisée dans les solutions de paiement : que ce soit un paiement par carte bancaire via via un terminal de paiement portable ou terminal de paiement fixe, plus communément appelé une machine Bancontact .
                                    </p>
                                    <p>
                                        Etant Partenaire privilégié de Worldline en tant que Field Market expert pour la distribution de terminaux de paiements dans les commerces belges, notre expertise pour la vente et le développement de solutions de paiements en Belgique est largement appréciée par nos clients mais également par nos partenaires commerciaux.<br/>
                                        Nous sommes principalement présents en région bruxelloise, Barbant Wallon, Hainaut,Liège et Luxembourg.
                                    </p>
                                    <p>
                                        Faites appel à notre expertise en paiement par carte bancaire pour  vous conseiller et vous offrir une solution de paiement efficace et étudiée spécifiquement pour votre activité.
                                    </p>
                                    <p>
                                        Fondée en 2012, INOCREA est une entreprise jeune et dynamique, née d’une association entre trois jeunes entrepreneurs , dotés chacun d’une expertise en Marketing, développement commercial et informatique.
                                    </p>
                                    <p>
                                        Notre compétence repose sur  la création de nouveaux outils de gestions innovantes et performantes pour tous types d’entreprises.
                                        De là découle le nom de notre société : innovation par la création.
                                    </p>
                                    <p>
                                        <span>Nos valeurs:</span><br/>
                                        Savoir-faire et Qualité, Engagement, Disponibilité, Responsabilité.<br/>
                                        Quel que soit votre projet, Inzocrea vous accompagne, identifie l’ensemble de vos besoins et vous propose une solution  personnalisée
                                        répondant à vos attentes.
                                    </p>

                                    <div class="lire-plus" id="solapsShow">
                                        <span class="flex-box" onclick="colaps()">
                                            lire-plus
                                            <div>
                                                <img class="show" id="grey22" src="../assets/img/icones/icons8_sort_down_52px.png">
                                                <img class="" id="white22" src="../assets/img/icones/icons8_sort_down_52px-white.png">
                                            </div>
                                        </span>
                                        <p class="p-lp">
                                            Savoir-faire et Qualité, Engagement, Disponibilité, Responsabilité.<br/>
                                            Quel que soit votre projet, Inzocrea vous accompagne, identifie l’ensemble de vos besoins et vous propose une solution  personnalisée
                                            répondant à vos attentes.
                                            Savoir-faire et Qualité, Engagement, Disponibilité, Responsabilité.<br/>
                                            Quel que soit votre projet, Inzocrea vous accompagne, identifie l’ensemble de vos besoins et vous propose une solution  personnalisée
                                            répondant à vos attentes.
                                            Savoir-faire et Qualité, Engagement, Disponibilité, Responsabilité.<br/>
                                            Quel que soit votre projet, Inzocrea vous accompagne, identifie l’ensemble de vos besoins et vous propose une solution  personnalisée
                                            répondant à vos attentes.
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