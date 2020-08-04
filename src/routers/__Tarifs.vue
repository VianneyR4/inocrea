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
                    <li class="active">
                        <a href="#" class="dropdown">
                            <img src="../assets/img/icones/blanc-2.png">
                            <span onclick="myFunction()" class="dropbtn">Solutions de paiement<img id="dd_icon" src="../assets/img/icones/icons8_sort_down_52px-white.png"></span>
                            <div id="myDropdown" class="dropdown-content show">
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
                    <h4 class="title color-white">Nos tarifs de carte de débit et crédit</h4>
                    <div class="col_terminaux">
                        <div class="left">
                            <div class="item-terminal fade show-item" id="terminal1">
                                <div class="btn_slide">
                                    <span id="arrow_left">
                                    </span>
                                    <span id="arrow_right">
                                    <img onclick="terminalRight1()" src="../assets/img/icones/arrow-right.png">
                                    </span>
                                </div>
                                <h4 class="title color-blue" id="te">Carte de debit</h4>
                                <div class="carte-dc">
                                    <div>
                                        <span class="carte-title">Entre 1 a 500 transactions</span>
                                        <div class="entete">
                                            <div class="entete-left">
                                                BLENDED +
                                            </div>
                                            <div class="entete-right">
                                                <a class="btn primary btn-oc" href="#">Commander</a>
                                            </div>
                                        </div>
                                        <div class="body-price">
                                            <img src="../assets/img/icones/tarifs-00-euro.png">
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="small-text">
                                            <small>Transaction de 0 a 5 E : <span>0,02 E</span></small>
                                            <small>Transaction de 5 a 10 E : <span>0,5 E</span></small>
                                            <small>Transaction de plus de 10 E : <span>0,12 E</span></small>
                                            <small>Activation unique : <span>33,64 E</span></small>
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="bancontact">
                                            <img src="../assets/img/icones/Bancontact_logo.png">
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="footer-carte">
                                            <span>*</span>
                                            <span>
                                                <div class="small-text">
                                                    <small id="small">Activation du service bancontact offert</small>
                                                    <small id="small">si la commende du service carte de</small> 
                                                    <small id="small">credit est fait ensemble.</small>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="carte-separation"></div>
                                            
                                    <div class="rr">
                                        <span class="carte-title">Plus de 500 transactions</span>
                                        <div class="entete">
                                            <div class="entete-left">
                                                BLENDED +
                                            </div>
                                            <div class="entete-right">
                                                <a class="btn primary btn-oc" href="#">Commander</a>
                                            </div>
                                        </div>
                                        <div class="body-price">
                                            <img id="prix_carte" src="../assets/img/icones/tarifs-26-euro.png">
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="small-text">
                                            <small>Transaction de 0 a 5 E : <span>0,02 E</span></small>
                                            <small>Transaction de 5 a 10 E : <span>0,5 E</span></small>
                                            <small>Transaction de plus de 10 E : <span>0,12 E</span></small>
                                            <small>Activation unique : <span>33,64 E</span></small>
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="bancontact">
                                            <img src="../assets/img/icones/Bancontact_logo.png">
                                        </div>
                                        <div class="carte-contenue-separation"></div>
                                        <div class="footer-carte">
                                            <span>*</span>
                                            <span>
                                                <div class="small-text">
                                                    <small id="small">Activation du service bancontact offert</small>
                                                    <small id="small">si la commende du service carte de</small> 
                                                    <small id="small">credit est fait ensemble.</small>
                                                </div>
                                            </span>
                                        </div>
                                        <div class="footer-carte">
                                            <span>*</span>
                                            <span>
                                                <div class="small-text">
                                                    <small id="small">Transaction en mode hors connection inclus</small>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item-terminal fade" id="terminal2">
                                <div class="btn_slide">
                                    <span id="arrow_left">
                                    <img onclick="terminalleft2()" src="../assets/img/icones/arrow-left.png">
                                    </span>
                                    <span id="arrow_right">
                                    </span>
                                </div>
                                <h4 class="title color-blue" id="te">Carte de credit</h4>
                                <div class="carte-dc" id="carte-dc-right">
                                    <div class="entete-2">
                                        <div class="entete-left">
                                            BLENDED +
                                        </div>
                                        <div class="entete-center">
                                            <img src="../assets/img/icones/tarifs-1.5-euro.png">
                                        </div>
                                        <div class="entete-right">
                                            <a class="btn primary btn-oc" href="#">Commander</a>
                                        </div>
                                    </div>
                                    <div id="separation_2"></div>
                                    <div class="body-big">
                                        <div class="bblelf">
                                            <span class="bbleft-title">MasterCard, Maestro & Visa</span><br/>
                                            <span>Transaction de cartes europeennes residentielles 1,15%</span><br/>
                                            <span>Transaction de cartes europeennes business Surcharge de 1,1%</span><br/>
                                            <span>Transaction de cartes non europeennes Surcharge 1,75%</span><br/>
                                        </div>
                                        <div class="bbright">
                                            <span class="bbleft-title">JCB, CUP</span><br/>
                                            <span>Surcharge de 1,95%</span><br/>
                                            <br/>
                                            <span class="bbleft-title">Diners</span><br/>
                                            <span>Surcharge de 2,50%</span><br/>
                                        </div>
                                    </div>
                                    <div id="separation_2"></div>
                                    <div class="body-small">
                                        Pour les transactions MasterCard du programme *Global wholesale transaction <br/>program* (GWTTP), une surcharger de 1,85% sera d'application.<br/>
                                        le programme ne s'applique pas qu'au secteurs de compagnies aeriennes,<br/>
                                        croisier, hotels et location de vehicules.<br/>
                                        un montant minimum de 0,15 E sera facture par transaction.
                                    </div>
                                    <div id="separation_2"></div>
                                    <div class="footer-brends">
                                        <img src="../assets/img/icones/payement.png" width="100%">
                                    </div>
                                    <div id="separation_2"></div>
                                    <div class="footer">
                                        *Activation du service carte de credit de 81E offert si la commande du service Bancontact est egalement activee.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <p class="title color-white">Un coût de transaction pour les <br/>paiements par carte Bancontact <br/>simple et transparent ! <br/>Choisissez le tarif qui convient le <br/>mieux à votre activité!</p>
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