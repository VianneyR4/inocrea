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
                                    <div class="span">Nos services</div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/accessoires">
                                    <div class="span active">Nos accessoires</div>
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

                <div class="contenu-terminaux ">
                    <h4 class="title color-white">Commandez des accessoires</h4>
                    <div class="accessoires">
                        
                        <div class="slideshow-container">

                            <div class="mySlides" style="display: block;">
                                <div class="under-block">
                                    <div class="accessoire fade">
                                        <div class="entete">
                                            Rubans bicolores<br/>
                                            -EPSON
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-1.jpg">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-89-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boite de 10rubans bicolores(EPSON ERC30/34/38) pour imprimante a tickets de paiement</span>
                                        </div>
                                    </div>

                                    <div class="accessoire fade-2">
                                        <div class="entete">
                                            YOXIMO/<br/>
                                            XENTISSIMO
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-2.png">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-49-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boite de 10rubans bicolores(EPSON ERC30/34/38) pour imprimante a tickets de paiement</span>
                                        </div>
                                    </div>
                                    
                                    <div class="accessoire fade-3">
                                        <div class="entete">
                                            Rouleaux pour CCV/<br/>
                                            Verifone, EASY CASH/ Ingenico
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-3.png">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-49-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boîte de 50 rouleaux thermiques pour terminaux CCV/Verifone, EASY CASH /Ingenico (57x40x12)</span>
                                        </div>
                                    </div>
                                    
                                    <div class="accessoire fade-4">
                                        <div class="entete">
                                            Rouleaux pour<br/>
                                            YOMANI/ XENTA
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-4.png">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-49-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boîte de 50 rouleaux thermiques pour terminal YOMANI/ XENTA (57x46x12)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mySlides fade">
                                <div class="under-block">
                                    <div class="accessoire">
                                        <div class="entete">
                                            Rubans bicolores<br/>
                                            -EPSON
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-5.png">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-49-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boite de 10rubans bicolores(EPSON ERC30/34/38) pour imprimante a tickets de paiement</span>
                                        </div>
                                    </div>

                                    <div class="accessoire">
                                        <div class="entete">
                                            Rubans bicolores<br/>
                                            -EPSON
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-1.jpg">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-89-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boite de 10rubans bicolores(EPSON ERC30/34/38) pour imprimante a tickets de paiement</span>
                                        </div>
                                    </div>
                                    
                                    <div class="accessoire">
                                        <div class="entete">
                                            Rouleaux Non<br/>
                                            thermiques
                                        </div>
                                        <div class="body">
                                            <img src="../assets/img/icones/accessoires-7.png">
                                        </div>
                                        <div class="price">
                                            <div id="pl"><img src="../assets/img/icones/tarifs-49-euro.png"></div>
                                            <div id="pr"><a class="btn primary btn-oc" href="#">Commander</a></div>
                                        </div>
                                        <div class="separteur-contenu-accessoire"></div>
                                        <div class="footer">
                                            <p class="fa-title">Description</p>
                                            <span>Boîte de 50 rouleaux thermiques pour terminaux CCV/Verifone, EASY CASH /Ingenico (57x40x12)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a class="prev" onclick="plusSlides(-1)">                                    
                                <img onclick="terminalRight1()" src="../assets/img/icones/arrow-left.png">
                            </a>
                            <a class="next" onclick="plusSlides(-1)">                                    
                                <img onclick="terminalRight1()" src="../assets/img/icones/arrow-right.png">
                            </a>

                            </div>
                            <br>

                            <div style="text-align:center">
                            <span class="dot" onclick="currentSlide(1)"></span> 
                            <span class="dot" onclick="currentSlide(2)"></span> 
                        </div>

                    </div>
                </div>

            </div>
        </section>
        
    </div>

</template>

<script>
export default {
	
}
</script>