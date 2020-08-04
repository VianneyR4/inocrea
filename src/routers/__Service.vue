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
                    <li class="dd active">
                        <a href="#" class="dropdown">
                                <img src="../assets/img/icones/blanc-3.png">
                                <span onclick="myFunction2()" class="dropbtn">Services & Accessoires<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px-white.png"></span>
                            <div id="myDropdown2" class="dropdown-content2 show">
                                <a href="#">
                                    <router-link to="/nos-services">
                                    <div class="span active">Nos services</div>
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
                        <router-link class="routerLink" to="/demande-offre"><a class="btn primary-2" href="#">Demander une offre</a></router-link>
                        <router-link class="routerLink" to="/se-connecter"><a class="btn white" href="#">Se connecter</a></router-link>
                        </div>
                        <div class="contenu-terminaux">
                                <h4 class="title color-white">Les services liés à nos terminaux de paiement:</h4>
                                <div class="col_terminaux service">

                                    <div class="left">
                                            <h4 class="title title-active ecolor-white" onclick="js1()">
                                                    TINA :
                                                    <br/> Une Coupure de réseau sur votre terminal de paiement?
                                            </h4>
                                            <h4 class="title title-active ecolor-white" onclick="js2()">
                                                    Assitance technique :
                                                    <br/> Une panne ou un accident avec votre terminal de paiement?
                                            </h4>
                                            <h4 class="title title-active ecolor-white" onclick="js3()">
                                                    Le service Dynamic Currency Conversion (DCC):
                                                    <br/> Vous avez souvent des clients étrangers qui demandent à payer avec leur propre devise?
                                            </h4>
                                            <h4 class="title title-active ecolor-white" onclick="js4()">
                                                    Extranet :
                                                    <br/> Vous avez besoin de consulter ou d’exporter des rapports détaillé de vos transactions traitées par votre terminal paiement?
                                            </h4>
                                    </div>

                                    <div class="right">
                                        <div class="elw" id="js1">
                                            <div class="element fade">
                                                Grâce à TINA (Temporary Interrupted Network Application), vous pouvez utiliser votre terminal de paiement même si votre réseau internet est hors ligne. <br/>Une solution unique pour toujours recevoir vos paiements électroniques
                                                en toutes circonstances! <br/>Les clients ne remarquent pas si vous traitez des transactions en ligne ou hors ligne, et vos activités peuvent se poursuivre en toute simplicité ! <br/>Vous évitez ainsi de passer à côté d’une
                                                vente ou de décevoir vos clients. <br/>Des questions sur le back-up mode ou vous souhaitez l’activer sur votre terminal de paiement?
                                                <center><br/>
                                                    <router-link class="routerLink" to="/contact">
                                                        <a class="btn primary-2" href="#">Contactez-nous</a>
                                                    </router-link>
                                                </center>
                                            </div>
                                        </div>

                                        <div class="elw" id="js2">
                                            <div class="element fade">
                                                Bénéficiez d’une Assistance technique rapide et efficace endéans les 12h ouvrables du lundi au dimanche inclus! <br/> 
                                                Profitez également d’une couverture omnium sur votre terminal de paiement, quoi qu’il arrive restez productif et dormez sur vos deux oreilles!<br/>
                                                Le remplacement de votre terminal se fera via l’intervention d’un technicien sur place si le problème survient pendant les heures ouvrables (du lundi au samedi de 9h à 20h et le dimanche de 9h à 16h)
                                                <center><br/>
                                                    <router-link class="routerLink" to="/contact">
                                                        <a class="btn primary-2" href="#">Contactez-nous</a>
                                                    </router-link>
                                                </center>
                                            </div>
                                        </div>

                                        <div class="elw" id="js3">
                                            <div class="element fade">
                                                Le service Dynamic Currency Conversion (DCC) est idéal pour les commerces qui accueillent régulièrement des touristes et des hommes d’affaires.<br/>
                                                Permettez à vos clients internationaux de payer dans la devise de leur pays d’origine avec leur carte Visa ou MasterCard pour des paiement électroniques effectuées via votre terminal de paiement.<br/>
                                                Grâce à ce service, vos clients étrangers savent exactement ce qu’ils paient dans votre magasin.<br/>
                                                Un service qui vous permet d’offrir à vos clients confort et facilité de paiement, tout en représentant de nombreux avantages pour vous.<br/>
                                                Des questions sur le DCC ou vous souhaitez l’activer sur votre terminal de paiement? Contactez-nous !
                                                <center><br/>
                                                    <router-link class="routerLink" to="/contact">
                                                        <a class="btn primary-2" href="#">Contactez-nous</a>
                                                    </router-link>
                                                </center>
                                            </div>
                                        </div>
                                        
                                        <div class="elw" id="js4">
                                            <div class="element fade">
                                                L’Extranet est un site web qui vous permet de consulter où et quand bon vous semble un aperçu détaillé de vos transactions déjà traitées. L’outil vous permet une recherche fluide dans la base grâce à un système de filtres et vous offre l’opportunité de faire vos propres analyses en exportant le rapport sur Excel.<br/>
                                                Un outil pour votre reporting<br/>
                                                Aperçu pratique et complet de vos transactions traitées sur votre terminal de paiement (date et heure, montant, etc.) avec une multitude d’informations sur vos paiements électroniques effectués et sur le comportement d'achat de vos clients.<br/>
                                                Fonction de recherche complète pour affiner vos analyses et possibilité de filtrer vos opérations (par magasin, terminal, période, schémas de paiement, etc.)<br/>
                                                Possibilité d’exporter ces données vers Excel afin de pouvoir les utiliser dans le cadre de campagnes marketing et de gestion de la relation client (CRM)<br/>
                                                vous souhaitez l’activer pour votre terminal de paiement?
                                                <center><br/>
                                                    <router-link class="routerLink" to="/contact">
                                                        <a class="btn primary-2" href="#">Contactez-nous</a>
                                                    </router-link>
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