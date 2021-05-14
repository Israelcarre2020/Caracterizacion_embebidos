function pantalla6_info(){
    var info = `
            <div id="pantalla6_caja">
                <p class="p_black font-weight-bold">¿Cómo están construidos los sistemas embebidos?</p>
                <p class="p_black">La mayoría de estos tipos de sistemas en sus componentes siempre traen una computadora con características muy especiales, estas se denominan microcontroladores, estos son microprocesadores que tienen una entrada y una salida en el mismo chip. Estos sistemas poseen una interfaz externa que es el método mediante el cual el dispositivo se conecta a una red para hacer un constante monitoreo del estado del sistema y su diagnóstico.</p>
                <p class="p_black">Normalmente, para programar los sistemas embebidos, se hace con un lenguaje (idioma) ensamblador de microcontrolador o también utilizando las herramientas de otros lenguajes externos al sistema como C++ o C, en casos en específicos. En otras circunstancias, cuando no se necesita una respuesta instantánea del procesador, se puede usar otro tipo de lenguajes interpretadores como java, esta plataforma tiene una gran capacidad de soporte de red y puede optimizar los dispositivos y procesar los datos</p>
            </div>`;
    $("#pantalla6_info").html(info);
    $("#pantalla6_info").css({
        "border": "solid",
        "border-color": "#2c538e",
        "border-radius": "15px"
    });

}

function cambio8_color(num){
    $(".punto8_color").css('background','#2c538e');
    $(".opcion8_"+num+"").css('background','#92ced8');
    var parrafo = "";
    if (num == 1) {
        parrafo = `<span class="fa fa-check"></span><span class="font-weight-bold"> Un cifrado débil:</span> la criptografía de estos sistemas es muy básica, lo que lleva a que los datos compartidos entre estos dispositivos pueden ser interceptados fácilmente y descifrados.`;
        $("#pantalla8_btn").hide();
    }else if (num == 2) {
        parrafo = `<span class="fa fa-check"></span><span class="font-weight-bold"> Falta de certificados:</span> normalmente, para economizar gastos, estos sistemas utilizan cifrados de bajo costo, esto significa que no tiene un buen soporte de grandes empresas o entidades, lo que facilita a los atacadores hacerse pasar por tales entidades y engañar al usuario.`;
        $("#pantalla8_btn").hide();
    }else if (num == 3) {
        parrafo = `<span class="fa fa-check"></span><span class="font-weight-bold"> Backdoors:</span> esto es como una especie de puerta trasera por donde el fabricante puede entrar al sistema, si un atacante logra utilizar estas Backdoors, la información puede ser vulnerada.`;
        $("#pantalla8_btn").hide();
    }else if (num == 4) {
        parrafo = `<span class="fa fa-check"></span><span class="font-weight-bold"> Código libre o reutilizado:</span> a veces los sistemas embebidos utilizan códigos para su programación ya utilizados sin constatar que este esté libre.<button id="pantalla8_btn" class="btn btn-info" data-toggle="modal" data-target="#pantalla8_modal1" onclick="pantalla8_voz(1)">Características de los sistemas embebidos</button>`;
    }
    $("#pantalla8_info").html(parrafo);
}

function cambio8_color2(num){
    $(".punto8_color2").css('background','#2c538e');
    $(".punto8_color2 p").removeClass('text-primary');
    $(".punto8_color2 p").addClass('text-light');
    var nume = `<p class="text-primary">`+num+`</p>`;
    $(".opcion8_"+num+"_2").html(nume);
    $(".opcion8_"+num+"_2").css("background","white");
      
    var parrafo = "";
    if (num == 1) {
        parrafo = `<p class="text-light">Este tipo de sistemas están diseñados para un solo tipo de función, a diferencia de un sistema multifuncional que se ocupa de diferentes trabajos.</p>`;
    }else if (num == 2) {
        parrafo = `<p class="text-light">Su componente principal es un microprocesador que brinda un soporte de cómputo al sistema.</p>`;
    }else if (num == 3) {
        parrafo = `<p class="text-light">Puede tener memoria interna o externa, esto depende de la necesidad o el diseño.</p>`;
    }else if (num == 4) {
        parrafo = `<p class="text-light">La comunicación de este tipo de sistemas se da, normalmente, por medio alámbrico o inalámbrico, suelen incorporar puertos de USB, Ip, WI-FI, entre otros. (narranz soluciones , s.f.)</p>`;
    }
    $("#pantalla8_info2").html(parrafo);
}

function pantalla9_info(num){
    $(".ocultar9").hide();
    var text = "";
    if (num == 1) {
        text = `
                <div class="ocultar9">
                  <p class="text-light text-center">permite el control de la programación casi completa de un sistema por medio de programadores para adaptarse a cualquier entorno. </p>
                </div>
                `;
    }else if (num == 2) {
        text = `
                <div class="ocultar9">
                  <p class="text-light text-center">estos sistemas disponen de una alta conectividad ya que se pueden acoplar a casi cualquier dispositivo que tenga conexión a la red, también es muy sencilla la adaptación de más sistemas embebidos. </p>
                </div>
                `;
    }else if (num == 3) {
        text = `
                <div class="ocultar9">
                  <p class="text-light text-center">son de muy bajo costo, y esto posibilita su adquisición.</p>
                </div>
                `;
    }else if (num == 4) {
        text = `
                <div class="ocultar9">
                  <p class="text-light text-center">la respuesta de estos sistemas es casi instantánea, por lo que cuando se habla de enviar señales a un actuador, estos sistemas son muy eficientes. </p>
                </div>
                `;
    }else if (num == 5) {
        text = `
                <div class="ocultar9">
                  <p class="text-light text-center">el acceso a estos sistemas es muy fácil, lo que permite que cualquier usuario que tenga conocimiento de este pueda adquirirlo o programarlo. (oasys, s.f.)</p>
                </div>
                `;
    }
    $(".opcion9_"+num).html(text);
}

function cambio10_color(num){
    $(".punto10_color").css('background','#ffc107');
    $(".opcion10_"+num).css('background','#F89423');
    var parrafo = "";
    if (num == 1) {
        parrafo = `
                    <p class="p_black font-weight-bold">Características de los sistemas embebidos</p>
                    <ul>
                      <li class="text-left">El microcontrolador posee solo 35 instrucciones diferentes.</li>
                      <li class="text-left">La frecuencia de operación es de 0-20 MHz.</li>
                      <li class="text-left">Cuenta con un oscilador interno de alta precisión.</li>
                      <li class="text-left">El voltaje de la fuente de alimentación es de 2.0V a 5.5V.</li>
                      <li class="text-left">Tiene 35 pines de entrada/salida.</li>
                      <li class="text-left">Memoria ROM de 8K.</li>
                      <li class="text-left">Cuenta con opción de programación serial en el circuito.</li>
                      <li class="text-left">Posee 256 bytes de memoria EEPROM y los datos se logran grabar más de 1.000.000 veces.</li>
                      <li class="text-left">Cuenta con 368 bytes de memoria RAM.</li>
                      <li class="text-left">Convertidor A/D:14 canales - Resolución de 10 bits.</li>
                      <li class="text-left">Tiene 3 temporizadores/contadores independientes.</li>
                      <li class="text-left">Cuenta con un módulo comparador analógico.</li>
                      <li class="text-left">Módulo PWM incorporado.</li>
                      <li class="text-left">Módulo USAR: puede soportar las comunicaciones seriales RS-485, RS-232 y LIN2.0.</li>
                      <li class="text-left">Puerto Serie Síncrono Maestro (MSSP) – Soporta los modos SPI e I2C.</li>
                    </ul>
                    `;
    }else if (num == 2) {
        parrafo = `<img src="assets/img/Ilustración3.png" class="img-fluid"><p class="p_black">Microcontrolador 16f887</p>`;
    }else if (num == 3) {
        parrafo = `<img src="assets/img/Ilustración4.png" class="img-fluid"><p class="p_black">Datasheet 16f887</p>`;
    }else if (num == 4) {
        parrafo = `
                    <p class="p_black text-left">El datasheet del microcontrolador nos permite conocer cómo deben ir conectados los componentes a este.</p>
                    <p class="p_black text-left">Tiene 4 diferentes tipos de memoria, las cuales son: La pila, la memoria EEPROM, Memoria de datos y memoria de programa.</p>
                    <p class="p_black text-left">Los requerimientos mínimos para colocar en operación al microcontrolador son:</p>
                    <ul>
                      <li class="text-left">Suministro eléctrico.</li>
                      <li class="text-left">Circuito de RESET.</li>
                      <li class="text-left">Oscilador.</li>
                      <li class="text-left">Configuración de los fusibles.</li>
                    </ul>
                    `;
    }else if (num == 5) {
        parrafo = `<img src="assets/img/Ilustración5.png" class="img-fluid"><p class="p_black">DISEÑO CIRCUITO CON PIC 16F887</p>`;
    }else if (num == 6) {
        parrafo = `
                    <p class="p_black text-left">Como se nombró anteriormente un sistema de embebido se puede programar en un lenguaje maquina como C ó C++, en este caso mostraremos los parámetros que se deben tener en cuenta a la hora de realizar la programación en C:</p>
                    <p class="p_black text-left">El lenguaje C fue creado en los años 70 por Brian Kernighan y Dennis Ritchie. El lenguaje C, es un lenguaje estructurado, pero este no es estructurado por bloques o sea que no es posible poner otra programación dentro de la programación original que se está diseñando, el lenguaje C tiene un número reducido de palabras reservadas son:</p>
                    <div class="row">
                        <div class="col-md-4">
                            <ul>
                              <li class="text-left">Auto</li>
                              <li class="text-left">Break</li>
                              <li class="text-left">Case</li>
                              <li class="text-left">Char</li>
                              <li class="text-left">Const</li>
                              <li class="text-left">Continue</li>
                              <li class="text-left">Default </li>
                              <li class="text-left">Do </li>
                              <li class="text-left">Double</li>
                              <li class="text-left">Else</li>
                              <li class="text-left">Enum</li>
                              <li class="text-left">Extern</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                              <li class="text-left">Float</li>
                              <li class="text-left">For</li>
                              <li class="text-left">Goto</li>
                              <li class="text-left">If</li>
                              <li class="text-left">Int</li>
                              <li class="text-left">Long</li>
                              <li class="text-left">Register</li>
                              <li class="text-left">Return</li>
                              <li class="text-left">Short</li>
                              <li class="text-left">Signed</li>
                              <li class="text-left">Sizeof</li>
                              <li class="text-left">Static</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                              <li class="text-left">Struct</li>
                              <li class="text-left">Switch</li>
                              <li class="text-left">Typedef</li>
                              <li class="text-left">Union</li>
                              <li class="text-left">Usingned</li>
                              <li class="text-left">Void</li>
                              <li class="text-left">Volatile</li>
                              <li class="text-left">While</li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <p class="p_black text-left" style="background:#FCF9CF;">De las cuales veremos cómo funcionan algunas a continuación:</p>
                        </div>
                    </div>
                    `;
    }
    $("#pantalla10_modal_info").html(parrafo);
}

function pantalla11_info(num){
   /* $('#carouselpantalla11_1').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla11_1>div>div.active').index();
        var totalSlides = $('#carouselpantalla11_1>div>div.carousel-item').length -1;
        var idCarousel = $(this).attr("id");
        configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel)
    });
    $('#carouselpantalla11_2').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla11_2>div>div.active').index();
        var totalSlides = $('#carouselpantalla11_2>div>div.carousel-item').length -1;
        var idCarousel = $(this).attr("id");
        configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel)
    });
    $('#carouselpantalla11_3').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla11_3>div>div.active').index();
        var totalSlides = $('#carouselpantalla11_3>div>div.carousel-item').length -1;
        var idCarousel = $(this).attr("id");
        configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel)
    });
    $('#carouselpantalla11_4').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla11_4>div>div.active').index();
        var totalSlides = $('#carouselpantalla11_4>div>div.carousel-item').length -1;
        var idCarousel = $(this).attr("id");
        configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel)
    });
    $('#carouselpantalla11_5').on('slid.bs.carousel', function () {

        var numeroSlide = $('#carouselpantalla11_5>div>div.active').index();
        var totalSlides = $('#carouselpantalla11_5>div>div.carousel-item').length -1;
        var idCarousel = $(this).attr("id");
        configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel)
    });*/
   
    var text = "";
    if (num == 1) {
        text =`
                <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                  <p class="p_black">En la lengua C, se distingue entre minúsculas y mayúsculas al momento de programar, por ello se debe prestar mucha atención en la utilización de estas. Un <span class="font-weight-bold">identificador</span> es cualquier palabra que no es reservada, es decir que no es ninguna de las que se vieron anteriormente y deben ser solo para programación de C, y que empieza por una letra o por un subrayado (guiones bajos) y estas pueden contener en su interior letras, números y subrayados. El número de caracteres dependen del compilador que se esté utilizando, el cual es normalmente es de 32 bits.</p>
                </div>
                `;
    }else if (num == 2) {
        text =`
                <div id="carouselpantalla11_2carrusel" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div style="background: #FCF9CF; width: 100%; height:100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                  <p class="p_black">En programación, una variable es un espacio de memoria, al cual se le asigna un nombre simbólico y cuyo valor puede cambiar frecuentemente durante el funcionamiento del programa. En C, todo tipo de variable debe ser declarada antes de usarla y se hace de la siguiente manera:</p>
                                  <p class="p_black">&lt;tipo de dato&gt; &lt;nombre de variable&gt; [, nombre de variable];</p>
                                  <p class="p_black text-center">En C existen cinco tipos de datos</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center">
                            <a class="" href="#carouselpantalla11_2carrusel" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                  <img src="assets/img/Tabla1.png" class="img-fluid">
                                  <p class="bg-warning p_black">Tipos de datos en C</p>
                                  <p class="p_black">Ejemplos de variables en C:</p>
                                  <p class="p_black">float a;</p>
                                  <p class="p_black">int b,c;</p>
                                  <p class="p_black">char caracter,otro_caracter;</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_2carrusel" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="" href="#carouselpantalla11_2carrusel" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <p class="p_black">También existen cuatro modificadores de tipo que se aplican sobre los tipos de datos que se mencionaron anteriormente. Estos permiten cambiar el tamaño de los tipos de datos que se mencionan anteriormente, estos son:</p>
                                    <img src="assets/img/Tabla2.png" class="img-fluid">
                                    <p class="bg-warning p_black">Modificadores de los tipos de datos en C</p>
                                    <p class="p_black">Se pueden declarar variables tales como:</p>
                                    <p class="p_black text-center">unsigned char a;</p>
                                    <p class="p_black text-center">long double b;</p>
                                    <p class="p_black text-center">short int i;</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="tablinks2" data-country="pantalla11_1_b" href="#carouselpantalla11_2carrusel" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="tablinks2" data-country="pantalla11_1_d" href="#carouselpantalla11_2carrusel" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <p class="p_black">Además, es posible asignar dos modificadores seguidos a un mismo tipo de datos, aunque esto dependerá del sistema operativo del compilador, por ello es necesario recurrir al manual, ya que hay compiladores de 16 bits, 32 bits, entre otros.</p>
                                    <img src="assets/img/Tabla3.png" class="img-fluid">
                                    <p class="bg-warning p_black">Rango de las variables en lenguaje C</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="tablinks2" data-country="pantalla11_1_c" href="#carouselpantalla11_2carrusel" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="tablinks2" data-country="pantalla11_1_e" href="#carouselpantalla11_2carrusel" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <p class="p_black">Existen modificadores de acceso, estos permiten limitar el uso que puede realizar las variables declaradas.</p>
                                    <img src="assets/img/Tabla4.png" class="img-fluid">
                                    <p class="bg-warning p_black">Modificadores de acceso en C</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="tablinks2" data-country="pantalla11_1_d" href="#carouselpantalla11_2carrusel" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="tablinks2" data-country="pantalla11_1_f" href="#carouselpantalla11_2carrusel" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <p class="p_black">La declaración de variables es muy importante, ya que si se hace uso de estas el programa no podrá modificar nada de esta constante a excepción del momento de declaración, por ejemplo: const int x=237; .</p>
                                    <p class="p_black">Cualquier intento posterior de modificar el valor de x, tal como x=x+5; producirá un error en tiempo de compilación.</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center"><a class="tablinks2" data-country="pantalla11_1_e" href="#carouselpantalla11_2carrusel" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
                `;
    }else if (num == 3) {
        text =`
              <div id="carouselpantalla11_3" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div style="background: #FCF9CF; width: 100%; height:100%;" class="p-2">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="m-3">
                                <p class="p_black text-center">En C, pueden ser declaradas en cuatro módulos diferentes del programa que se está diseñando.</p>
                                <ul>
                                  <li>Fuera de todas las funciones del programa, son las llamadas variables globales, accesibles desde cualquier parte del programa. </li>
                                  <li>Dentro de una función, son las llamadas variables locales, accesibles tan solo por la función en las que se declaran. </li>
                                  <li>Como parámetros a la función, accesibles de igual forma que si se declararan dentro de la función.</li>
                                  <li>Dentro de un bloque de código del programa, accesible tan solo dentro del bloque donde se declara. Esta forma de declaración puede interpretarse como una variable local del bloque donde se declara.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <p class="text-center d-flex justify-content-between">
                            <a class="" href="#carouselpantalla11_3" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="m-3">
                                  <p class="p_black">A continuación, se muestra un programa de C para ver mejor las variables declaradas:</p>
                                  <button class="btn btn-warning button-3d" data-toggle="modal" data-target="#pantalla11_modal1">Ver Más</button>
                              </div>
                            </div>
                          </div>
                          <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_3" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                      </div>
                  </div>
                </div>
              </div>
              `;
    }else if (num == 4) {
        text =`
                <div id="carouselpantalla11_4" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div style="background: #FCF9CF; width: 100%; height:100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                  <p class="p_black">Esto es posible realizarlo mediante los especificadores de almacenamiento, existen 4 tipos de almacenamiento y cuando se emplea uno de estos se debe de proceder a la declaración de tipo de dato de la variable. </p>
                                  <p class="p_black">A continuación, se muestran:</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between">
                            <a class="" href="#carouselpantalla11_4" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <img src="assets/img/Tabla5.png" class="img-fluid">
                                    <p class="bg-warning p_black">Especificaciones de almacenamiento en C</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_4" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="" href="#carouselpantalla11_4" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                  <ul>
                                    <li>El especificador auto se usa para declarar que una variable local existe.</li>
                                    <li>El especificador extern se usa en el desarrollo de programas compuestos y en variables globales del módulo.</li>
                                    <li>
                                      <p class="p_black">El especificador static se usa según el alcance de la variable:</p>
                                      <ul>
                                        <li>Cuando las variables son locales el especificador static indica que la variable local se debe de almacenar de forma permanente en la memoria.</li>
                                        <li>Cuando las variables son globales el especificador static indica que la variable es local al módulo donde se declara en el programa.</li>
                                      </ul>
                                    </li>
                                    <li>El especificador register se aplica solo a variables locales de tipo char e int.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_4" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            <a class="" href="#carouselpantalla11_4" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                    <p class="p_black">Ejemplos de uso de especificadores de almacenamiento:</p>
                                    <p class="p_black">register unsigned int a;</p>
                                    <p class="p_black">static float b;</p>
                                    <p class="p_black">extern int c;</p>
                                    <p class="p_black">static const unsigned long int d;</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_4" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
                `;
    }else if (num == 5) {
        text =`
                <div id="carouselpantalla11_5" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div style="background: #FCF9CF; width: 100%; height:100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="m-3">
                                  <p class="p_black">En C, se refiere a constantes a los valores que son fijos y que el programa no puede cambiar:</p>
                                  <img src="assets/img/Tabla6.png" class="img-fluid">
                                  <p class="p_black bg-warning">Tipos de constantes en C</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between">
                            <a class="" href="#carouselpantalla11_5" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style="background: #FCF9CF; width: 100%; height: 100%;" class="p-2">
                            <div class="row">
                              <div class="col-md-6">
                                <div class="m-3">
                                    <p class="p_black">Las constantes de caracteres de barra invertida se utilizan para los caracteres que son imposibles digitar en el teclado, estos son:</p>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="m-3">
                                  <img src="assets/img/Tabla7.png" class="img-fluid">
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="m-3">
                                  <p class="p_black bg-warning">constantes de barra invertida en C</p>
                                </div>
                              </div>
                            </div>
                            <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_5" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
                `;
    }
    $("#pantalla11_carrusel").html(text);
}

/**
 * Habilita o deshabilita los botones usados en el carousel.
 * @param {número actual de slide} numeroSlide 
 * @param {número total de slides} totalSlides 
 * @param {id del carousel} idCarousel 

function configurePrevNextCarouselButtons(numeroSlide, totalSlides, idCarousel){
    if(numeroSlide == 0){
        $("#prev_"+idCarousel).hide();
        $("#next_"+idCarousel).show();
    } else if(numeroSlide == totalSlides){
        $("#prev_"+idCarousel).show();
        $("#next_"+idCarousel).hide();
    } else {
        $("#prev_"+idCarousel).show();
        $("#next_"+idCarousel).show();
    }
}
 */
function cambio12_color(num){
    $(".punto12_color").css('background','#2c538e');
    $(".opcion12_"+num).css('background','#C6FAF7');
    var parrafo = "";
    if (num == 1) {
        parrafo = `
                  <div class="col-md-10">
                    <p class="font-weight-bold p_black">Operadores aritméticos</p>
                    <p class="p_black">Estos operadores en el lenguaje C son ordenados de mayor a menor</p>
                    <img src="assets/img/tabla.png" class="img70">
                    <ul>
                      <li>Los operadores ++, -- y % solo pueden usarse con datos de tipo int o char.</li>
                      <li>El operador (++) incrementa una unidad en el valor de la variable donde se aplicó.</li>
                      <li>El operador (--) decrementa una unidad en el valor de la variable donde se aplicó.</li>
                      <li>El operador (%) calcula el resto de una división de dos variables.</li>
                    </ul>
                  </div>
                  <div class="col-md-2 d-flex align-items-center">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla12_modal1">EJEMPLO</button>
                  </div>
                  `;
    }else if (num == 2) {
        parrafo = `
                  <div class="col-md-12">
                    <p class="font-weight-bold p_black">Operadores relacionales y lógicos </p>
                    <p class="p_black">Estos tipos de operadores en el lenguaje C ordenan de mayor a menor, y estos son:</p>
                    <img src="assets/img/tabla8.png" class="img50">
                    <p class="p_black p-2" style="background: #D2D5D5;">Operadores relacionales y lógicos en C</p>
                  </div>
                  `;
    }else if (num == 3) {
        parrafo = `
                  <div class="col-md-11">
                    <p class="font-weight-bold p_black">Operadores asignación </p>
                    <p class="p_black">Este lenguaje no diferencia la asignación de cualquier operador en el lenguaje y el valor de una asignación siempre será asignada desde su parte derecha, en C el llamado asignación (=)  es el que posee la prioridad más baja de todos los operadores.</p>
                    <p class="p_black">Se puede expresar un ejemplo:</p>
                    <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla12_modal2">EJEMPLO</button>
                    </div>
                  </div>
                  `;
    }else if (num == 4) {
        parrafo = `
                  <div class="col-md-11">
                    <p class="font-weight-bold p_black">Operadores sobre bits</p>
                    <p class="p_black">El lenguaje C posee operadores que trabajan a un nivel de bits, estos son:</p>
                    <img src="assets/img/tabla9.png" class="img50">
                    <p class="p_black p-2" style="background: #D2D5D5; width: max-content;">Operadores de bits en C</p>
                    <p class="p_black">Los operadores &, | y ^ actúan sobre dos operandos, mientras que ∼ , << y >> actúan sobre un solo operando.</p>
                    <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla12_modal3">VER MÁS</button>
                    </div>
                  </div>
                  `;
    }else if (num == 5) {
        parrafo = `
                  <div class="col-md-10">
                    <p class="font-weight-bold p_black">El operador ?.</p>
                    <p class="p_black">El operador ? se usa para reemplazar las sentencias if/else (que veremos con posterioridad) de formato general:</p>
                    <p class="p_black">if (condición) expresión; </p>
                    <p class="p_black">else expresión;</p>
                    <p class="p_black">Donde la expresión debe ser una expresión sencilla y no otra sentencia de C. El operador (?) es un operador triduo cuyo formato general es:</p>
                    <p class="p_black">Exp1 ? Exp2 : Exp3;</p>
                    <p class="p_black">Donde Exp1, Exp2 y Exp3 son expresiones. El operador ? evalúa la expresión</p>
                    <p class="p_black">Exp1, si es cierta se evalúa Exp2 y si es falsa se evalúa Exp3.</p>
                  </div>
                  <div class="col-md-2 d-flex align-items-center">
                    <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla12_modal4">EJEMPLO</button>
                  </div>
                  `;
    }
    $("#pantalla12_info").html(parrafo);
}

function pantalla13_info(num){
    $(".punto13_color").css('background','#2c538e');
    $(".punto13_color p").removeClass('text-primary');
    $(".punto13_color p").addClass('text-light');
    $(".cambio13_color"+num).css('background','#FFFFFF');
    $(".cambio13_color"+num+" p").removeClass('text-light');
    $(".cambio13_color"+num+" p").addClass('text-primary');
    var parrafo = "";
    if (num == 1) {
        parrafo = `
                  <img src="assets/img/tipodedatos.png" class="img70">
                  `;
    }else if (num == 2) {
        parrafo = `
                  <img src="assets/img/creacioncomentarios.png" class="img70">
                  `;
    }else if (num == 3) {
        parrafo = `
                  <img src="assets/img/puertos.png" class="img70">
                  `;
    }else if (num == 4) {
        parrafo = `
                  <img src="assets/img/funciones.png" class="img70">
                  `;
    }

    $("#pantalla13_info").html(parrafo);
}

function pantalla19_info(){
    $(".cambio19_color1").css('background','#FFFFFF');
    $(".cambio19_color1 p").removeClass('text-light');
    $(".cambio19_color1 p").addClass('text-primary');
    var parrafo = `
                  <div style="border-top-right-radius: 15px; border-bottom-right-radius: 15px; background: #2c538e;">
                    <div class="row">
                      <div class="col-md-4">
                        <img src="assets/img/tecnico.png" class="img-fluid">
                      </div>
                      <div class="col-md-8">
                        <div id="carouselpantalla11_19" class="carousel slide">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Protección personal para los trabajadores</p>
                                        <p class="text-light">A los trabajadores se le debe de proveer todos los instrumentos necesarios que brinden seguridad y bienestar al operador, además de eso se le debe de proveer un lugar en excelentes condiciones y que el empleado conozca con el fin de que si hay alguna emergencia sepa como desplazarse de manera eficiente.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between">
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Señales y avisos de seguridad e higiene</p>
                                        <p class="text-light">Las instalaciones donde se encuentre el empleado deben de estar bien señalizadas, esto con el fin de que si hay algún imprevisto pueda moverse de manera eficiente a través de las instalaciones, además de eso también se debe explicar claramente la vestimenta normativa y como se debe interactuar en el espacio.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Prevención y protección para incendios</p>
                                        <p class="text-light">Toda instalación debe de tener por obligación un sistema que ayude contra los incendios, esta norma tiene dos puntos, el primero es que el espacio debe de estar en las mejores condiciones para que en la medida de lo posible se pueda evitar un incendio y el segundo es que debe de estar dotado con herramientas que permitan controlar un incendio en caso de que ocurra. Entre estas herramientas pueden ser, extintores de fuego, manguera de agua contra incendios y salidas de emergencia con fácil acceso.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Dispositivos de protección y sistemas de seguridad</p>
                                        <p class="text-light">Toda industria debe tener un plan de emergencias, dependiendo de la emergencia debe haber un plan específico para esta, se debe de tener rutas de escape, herramientas que ayuden a contener el peligro y los empleados deben de estar actos para enfrentar ese tipo de situaciones.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Condiciones de seguridad en donde la electricidad representa un riesgo</p>
                                        <p class="text-light">Cada instalación tiene sus riesgos, pero hay instalaciones que producen electricidad y es de suma importancia que la instalación brinde a los trabajadores el equipo adecuado para el trabajo y tener el sitio de trabajo apto para esta labor.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Condiciones adecuadas de seguridad para el manejo de sustancias inflamables</p>
                                        <p class="text-light">Esta norma se aplica en lugares donde se maneja o se almacena sustancias químicas inflamables, en este caso la normativa contra incendios es totalmente estricta.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Seguridad e higiene para el manejo de sustancias corrosivas</p>
                                        <p class="text-light">Hay sustancias químicas y acidas de tipo corrosivo, por eso es importante apelar por el bienestar del trabajador en este caso la normativa es específica, mantener a los trabajadores a salvo de quemaduras o intoxicaciones. </p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Dispositivos de seguridad en maquinaria y equipos</p>
                                        <p class="text-light">Los empleados deben estar en condiciones de poder hacer un uso adecuado de la maquinaria que se encuentre en las instalaciones, con el fin de evitar accidentes que podrían llegar a ser fatales.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Materiales y personal de primeros auxilios</p>
                                        <p class="text-light">Siempre existe la posibilidad de un accidente en un ambiente laboral, por eso las industrias deben estar equipadas con primeros auxilios y herramientas para salvaguardar el buen estado de los trabajadores, porque a pesar de que los sistemas de prevención sean perfectos siempre abra una posibilidad de alguna calamidad.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Personal de seguridad y protección </p>
                                        <p class="text-light">En algunas empresas o industrias, se maneja productos muy peligrosos o costosos, por eso estas empresas optan por contratar personal calificado para la custodia de estos productos, para evitar que sean robados o sean manipulados de manera errónea provocando un daño mayor en la empresa y en el peor de los casos en la sociedad.</p>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      <a class="" href="#carouselpantalla11_19" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="p-2">
                                    <div class="row">
                                      <div class="col-md-12 p-3">
                                        <p class="font-weight-bold text-light" style="border-bottom: solid; border-color: white;">Reciclaje de conocimientos </p>
                                        <p class="text-light">Las normas pueden ir variando, dependiendo del tiempo o las condiciones, por eso es importante que los trabajadores asistan a charlas y estén constantemente actualizando sus conocimientos de estas normas.</p>
                                        <div class="d-flex justify-content-end">
                                          <button class="button-3d" data-toggle="modal" data-target="#pantalla19_modal1">Ver más</button>
                                        </div>
                                      </div>
                                      <p class="text-center d-flex justify-content-between"><a class="" href="#carouselpantalla11_19" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                                      </p>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `;

    $("#pantalla19_info").html(parrafo);
}

function cambio19_color(num){
    $(".punto12_color").css('background','#2c538e');
    $(".opcion19_"+num).css('background','#92ced8');
    var parrafo = "";
    if (num == 1) {
        parrafo = `
                  <p class="p_black"><span class="fa fa-circle"></span>   Supervisar cada uno de los puntos que puedan afectar negativamente el bienestar de los trabajadores y vigilar la alta dirección de la organización en cuestión.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Examinar el trabajo desde considerando temas como la higiene, factores físicos y psíquicos. Aconsejar a las directivas de la empresa acerca de las debilidades y fortalezas de los trabajadores.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Atender a las organizaciones con respecto a los elementos que podrían llegar a afectar la integridad física de los trabajadores, como lo son: la salubridad de cocina, comedores, el estado de higiene, servicios sanitarios, entre otras.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Efectuar pruebas periódicas ocupacionales y cuando sea necesario hacer inclusión de indagaciones de tipo biológico y radiológico, según lo que exijan las organizaciones legales.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Controlar el proceso de adecuación del trabajo de los empleados de la instalación, en especial a trabajadores que sufren de alguna discapacidad física o mental, esto dependiendo de las capacidades de cada persona en participación de rehabilitación y entrenamiento.</p>
                  `;
    }else if (num == 2) {
        parrafo = `
                  <p class="p_black"><span class="fa fa-circle"></span>   Asesorar de manera personal y específica a cada trabajador, esto con el fin de distinguir las consecuencias desencadenadas de la realización del trabajo.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Orientar a cerca de asuntos de reinstalación de trabajadores, a ellos mismos y a empresarios.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Tratar accidentes.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Preparar para realizar primeros auxilios a cualquier persona que requiera atención de emergencia.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Enseñar y desarrollar organización sobre temas de la salud e higiene al personal.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Agrupar y chequear regularmente los datos estadísticos sobre las situaciones de salud e higiene en la organización.</p>
                  <p class="p_black"><span class="fa fa-circle"></span>   Indagar sobre temas de salud ocupacional sin importar el tipo de establecimiento.</p>
                  `;
    }

    $("#pantalla19_info2").html(parrafo);
}

function pantalla22_info(num){
    $(".punto22_color").css('background','#ffc107');
    $(".punto22_color").removeClass('text-warning');
    $(".punto22_color").addClass('text-primary');
    $(".cambio22_color"+num).css('background','#2c538e');
    $(".cambio22_color"+num).removeClass('text-primary');
    $(".cambio22_color"+num).addClass('text-warning');
    var parrafo = "";
    if (num == 1) {
        parrafo = `
                  <div class="col-md-12 p-3">
                    <div class="p-2" id="pantalla22_Coherencia" style="border-radius: 15px; border:solid; border-color: #2c538e; background: #2c538e;">
                      <div id="pantalla22_Coherencia2">
                        <p class="text-light">Coherencia es la unión o relación que hay entre unas cosas y otras, también se puede interpretar como la buena conexión de partes de una idea o cosa. </p>
                        <p class="text-light">La coherencia se puede clasificar en tres tipos que son:</p>
                      </div>
                      <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-around p-2" style="width: 150px;">
                          <div class="Coherencia22_1 Coherencia22_color" onclick="cambio22_color1(1)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">1</p>
                          </div>
                          <div class="Coherencia22_2 Coherencia22_color" onclick="cambio22_color1(2)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">2</p>
                          </div>
                          <div class="Coherencia22_3 Coherencia22_color" onclick="cambio22_color1(3)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `;
    }else if (num == 2) {
        parrafo = `
                  <div class="col-md-12 p-3">
                    <div class="p-2" id="pantalla22_Cohesión" style="border-radius: 15px; border:solid; border-color: #2c538e; background: #2c538e;">
                      <div id="pantalla22_Cohesión2">
                        <p class="text-light">Este término define la relación y la armonía que se expresa entre los propios elementos que componen el texto. Este término se puede aplicar en diferentes contextos de comunicación, estos pueden ser:</p>
                      </div>
                      <div class="d-flex justify-content-center">
                        <div class="d-flex justify-content-around p-2" style="width: 190px;">
                          <div class="Cohesión22_1 Cohesión22_color" onclick="cambio22_color2(1)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">1</p>
                          </div>
                          <div class="Cohesión22_2 Cohesión22_color" onclick="cambio22_color2(2)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">2</p>
                          </div>
                          <div class="Cohesión22_3 Cohesión22_color" onclick="cambio22_color2(3)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">3</p>
                          </div>
                          <div class="Cohesión22_4 Cohesión22_color" onclick="cambio22_color2(4)" style="width:40px;height:40px;background:#ffc107;border-radius:50%; border: solid; border-color:#ffc107; cursor: pointer;"><p class="text-center p_black">4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `;
    }

    $("#pantalla22_info1").html(parrafo);
}

function cambio22_color1(num){
  $("#pantalla22_Coherencia").css("background","#FFFFFF");
  $(".Coherencia22_color").css("background","#ffc107");
  $(".Coherencia22_"+num).css("background","#FFFFFF");
  var parrafo = "";
  if (num == 1) {
        parrafo = `
                  <p class="p_black font-weight-bold">Coherencia textual: </p>
                  <p class="p_black">Cuando se habla de coherencia textual se refiere a la redacción de un texto, como están estructuradas las ideas principales y las secundarias, también como está estructuradas sus unidades (oraciones, párrafos, secciones o partes). Para tener una buena coherencia en un texto lo principal es tener un buen orden de ideas.</p>
                  `;
  }else if (num == 2) {
        parrafo = `
                  <p class="p_black font-weight-bold">Coherencia global</p>
                  <p class="p_black">La coherencia global se refiere a la relación que hay entre la redacción del texto y la idea general de este, en pocas palabras, es aquel texto que gira en torno a la idea central.</p>
                  `;
  }else if (num == 3) {
        parrafo = `
                  <p class="p_black font-weight-bold">Coherencia local</p>
                  <p class="p_black">A diferencia de la global esta opera en un nivel más bajo que es la relación que se establece entre las oraciones individuales que van conectadas con otras oraciones.</p>
                  `;
  }
  $("#pantalla22_Coherencia2").html(parrafo);
}

function cambio22_color2(num){
  $("#pantalla22_Cohesión").css("background","#FFFFFF");
  $(".Cohesión22_color").css("background","#ffc107");
  $(".Cohesión22_"+num).css("background","#FFFFFF");
  var parrafo = "";
  if (num == 1) {
        parrafo = `
                  <p class="p_black font-weight-bold">El lenguaje</p>
                  <p class="p_black">Cualquier tipo de texto tiene como intención trasmitir una idea y para lograr que se comunique de una manera correcta, es necesario que exista una buena cohesión textual. Esto quiere decir que se debe respetar las normas de gramática básicas.</p>
                  <p class="p_black">Las normas gramaticales básicas son muy importantes a la hora de redactar un texto, estas tienen como fin poner unas pautas que permitan la buena comprensión de este, las cuales son:</p>
                  <div class="d-flex justify-content-center">
                    <button class="button-3d" data-toggle="modal" data-target="#pantalla22_modal1">Ver más</button>
                  </div>
                  `;
  }else if (num == 2) {
        parrafo = `
                  <p class="p_black font-weight-bold">El arte</p>
                  <p class="p_black">En el arte un dibujo, un edificio o una escultura, contiene en gran parte un valor artístico. Resulta algo complicado arle una definición concreta a la palabra arte, pero algo que es completamente incuestionable es el concepto de equilibrio y armonía que se encuentra en cualquier obra artística, esto quiere decir que cuando se habla de armonía se habla de cohesión, para que todos sus elementos que la conforman estén en un orden casi perfecto.</p>
                  `;
  }else if (num == 3) {
        parrafo = `
                  <p class="p_black font-weight-bold">Relaciones humanas</p>
                  <p class="p_black">Compartir, convivir y relacionarse entre si es algo fundamental entre los colectivos o grupos humanos. Para nadie es un secreto de que la convivencia no es fácil de lograr, por lo que muchos grupos de trabajo siempre intenta buscar la manera de encontrarla, para cuando se consigue a esto se le define como cohesión interna. Así que cuando se dice que un grupo esta cohesionado quiere decir que los integrantes están en un ambiente de compañerismo.</p>
                  `;
  }else if (num == 4) {
        parrafo = `
                  <p class="p_black font-weight-bold">Concordancia </p>
                  <p class="p_black">La concordancia es la forma de acomodar las palabras de una oración para que tengan sentido de acuerdo con su sujeto y su predicado en el número de personas, por ejemplo:</p>
                  <ul>
                    <li>Entre el artículo y el nombre: el libro, los libros</li>
                    <li>Cuando se da entre el nombre y el verbo: perro corre, perros corren.</li>
                    <li>Entre el pronombre y el verbo: él canta, ellos cantan.</li>
                    <li>Entre el nombre y el adjetivo: perro negro, perra negra.</li>
                  </ul>
                  `;
  }
  $("#pantalla22_Cohesión2").html(parrafo);
}

function pantalla22_info2(){
  var pantalla22 = `
                <div class="col-md-5">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="assets/img/profesor.png" class="img-fluid">
                    </div>
                    <div class="col-md-9">
                      <p class="p_black font-weight-bold">Técnicas para la redacción de un texto </p>
                      <p class="p_black">En el momento de redactar un texto, siempre hay dificultades para esto, a continuación, se indican las técnicas que ayudaran para redactar texto.</p>
                      <p class="p_black">Desliza para ampliar la información.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div style="background: #FCF9CF; width: 100%; height: 400px;">
                    <div id="pantalla22_info3" class="p-2"></div>
                    <div style="position: absolute; bottom: 0px; right: 25%;">
                      <div class="d-flex justify-content-around p-2" style="width: 200px;">
                        <div class="pantalla22_2_1 pantalla22_2_color" onclick="cambio22_color3(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_2 pantalla22_2_color" onclick="cambio22_color3(2)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_3 pantalla22_2_color" onclick="cambio22_color3(3)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_4 pantalla22_2_color" onclick="cambio22_color3(4)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_5 pantalla22_2_color" onclick="cambio22_color3(5)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_6 pantalla22_2_color" onclick="cambio22_color3(6)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_7 pantalla22_2_color" onclick="cambio22_color3(7)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                        <div class="pantalla22_2_8 pantalla22_2_color" onclick="cambio22_color3(8)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  `;
  $("#pantalla22_info2").html(pantalla22);
}

function cambio22_color3(num){
  $(".pantalla22_2_color").css("background","#2c538e");
  $(".pantalla22_2_"+num).css("background","#ffc107");
  var parrafo = "";
  if (num == 1) {
        parrafo = `
                  <p class="p_black font-weight-bold">1. Selección del tema</p>
                  <p class="p_black">Para la selección del tema se debe tener en cuenta lo siguiente: usted debe elegir un tema que le interese, que lo motive a redactar, investigar, entre otras cosas, pero debe de tener en cuenta que tiene que ser acorde a la intensión que se tiene con el texto.</p>
                  <p class="p_black">No se debe escoger un tema muy amplio, ya que este permitiría dejar muchas ideas por fuera, tampoco muy limitado, porque este podría quedarse corto a la hora de redactar, se deben evitar tipos de temas que sean difíciles de expresar y considere el tamaño de texto o información dependiendo de qué tipo de documento este escribiendo.</p>
                  `;
  }else if (num == 2) {
        parrafo = `
                  <p class="p_black font-weight-bold">2. Búsqueda de información</p>
                  <p class="p_black">Para la búsqueda de información se debe de tener mucha paciencia, ya que, si quiere un texto rico en información, se debe de tomar la tarea de buscar información, en libros, páginas web, videos y cualquier otro método que contribuya al enriquecimiento del texto que este redactando, preferiblemente buscar artículos que provengan de autores reconocidos, universidades o sitios de investigación, para tener una base sólida de información.</p>
                  `;
  }else if (num == 3) {
        parrafo = `
                  <p class="p_black font-weight-bold">3. Conocer al publico </p>
                  <p class="p_black">Algo que puede servir a la hora de realizar un texto o trabajo escrito es tener conocimiento hacía que tipo de público nos estamos dirigiendo, ya que esto nos indica en qué términos y que tipo de vocabulario utilizar.</p>
                  `;
  }else if (num == 4) {
        parrafo = `
                  <p class="p_black font-weight-bold">4. Hacer un bosquejo </p>
                  <p class="p_black">Para realizar un buen bosquejo se hace uso de una herramienta que nos permitirá organizar de manera efectiva la información encontrada.</p>
                  <img id="pantalla22_img1" src="assets/img/Ilustración6.png" class="img50">
                  `;
  }else if (num == 5) {
        parrafo = `
                  <p class="p_black font-weight-bold">5. Separar las ideas por párrafos</p>
                  <p class="p_black">Es importante reconocer que cada párrafo debe contar con una idea precisa y concisa.</p>
                  <p class="p_black">La extensión de los párrafos es algo a tener en cuenta en los textos atractivos, si es un texto para la web es recomendado escribirlo entre 60 y 80 palabras, ya que esto ayudara a llamar la atención del lector. </p>
                  `;
  }else if (num == 6) {
        parrafo = `
                  <p class="p_black font-weight-bold">6. Escribir y reescribir </p>
                  <p class="p_black">La popular frase “la practica hace al maestro” se puede aplicar en la técnica de redacción de textos, ya que el don de escribir textos interesantes o relevantes no se hace de la noche a la mañana.</p>
                  <p class="p_black">Otra fase fundamental en la técnica de redacción de texto es la capacidad de mejorar lo que se va haciendo.</p>
                  `;
  }else if (num == 7) {
        parrafo = `
                  <p class="p_black font-weight-bold">7. Revisiones </p>
                  <p class="p_black">Es fundamental fijarnos bien en la producción textual que acabamos de realizar, ya que esto nos permitirá una visión más alejada y podremos detectar cualquier error que está y estuvo presente en nuestro proceso de escritura. Aunque los dispositivos inteligentes de hoy en día cuentan con un corrector de gramática y ortografía, es preferible hacerlo manualmente, ya que estos pueden darnos cambios no deseados.</p>
                  `;
  }else if (num == 8) {
        parrafo = `
                  <p class="p_black font-weight-bold">8. Redacción definitiva </p>
                  <p class="p_black">Para la redacción definitiva, se debe de tener en cuenta todas las correcciones que se hicieron en el bosquejo o borrador, para así tener ya un documento limpio y bien redactado.</p>
                  `;
  }
  $("#pantalla22_info3").html(parrafo);
}

function pantalla23_info1(){
  var parrafo = `
                <p class="p_padding10 p_white">Estos tipos de fichas no son fijos, el diseño de ficha técnica dependerá de lo que se esté produciendo o fabricando en el momento, ya que dependerá de las distintas variables de producción. La utilidad de la ficha técnica es brindar información y explicación corta y concisa sobre las características técnicas de un producto, este tipo de herramienta permite llevar un seguimiento con indicadores, respetando sus normas de calidad. (10 ficha , s.f.)</p>
                `;
  $("#pantalla23_info1").html(parrafo);
}

function pantalla23_info2(){
  var parrafo = `
                <p class="text-light"><span class="fa fa-check"></span>  Nombre del producto, objeto o servicio. </p>
                <p class="text-light"><span class="fa fa-check"></span>  Clasificación del producto, objeto o servicio. </p>
                <p class="text-light"><span class="fa fa-check"></span>  Información relevante del producto, objeto o servicio.</p>
                `;
  $("#pantalla23_info2").html(parrafo);
}

function cambio23_color(num){
  $(".punto23_color").css("background","#ffc107");
  $(".opcion23_"+num).css("background","#2c538e");

  var texto = "";
  if (num == 1) {
      texto = `
              <img src="assets/img/Tabla10.png" class="img-fluid">
              <p class="p_black text-center">Ficha técnica de un medicamento</p>
              `;
  }else if (num == 2) {
      texto = `
              <img src="assets/img/Tabla11.png" class="img-fluid">
              <p class="p_black text-center">Ficha técnica de un país</p>
              `;
  }else if (num == 3) {
      texto = `
              <img src="assets/img/Tabla12.png" class="img-fluid">
              <p class="p_black text-center">Ficha técnica de investigación</p>
              `;
  }else if (num == 4) {
      texto = `
              <img src="assets/img/Tabla13.png" class="img-fluid">
              <p class="p_black text-center">Ficha técnica de un bien o producto</p>
              `;
  }
  $("#pantalla23_info3").html(texto);
}

function pantalla24_info(num){
  $(".opcion24_color").css("background","#2c538e");
  $(".opcion24_"+num).css("background","#ffc107");
  if (num == 1) {
      $('#pantalla24_modal1').modal('show'); 
  }else if (num == 2) {
      $('#pantalla24_modal2').modal('show'); 
  }else if (num == 3) {
      $('#pantalla24_modal3').modal('show'); 
  }else if (num == 4) {
      $('#pantalla24_modal4').modal('show'); 
  }else if (num == 5) {
      $('#pantalla24_modal5').modal('show'); 
  }
}

function pantalla25_info(){
  var pantalla25 = `
                    <div class="col-md-4">
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(1), pantalla25_voz(1)">Página de resumen</button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(2), pantalla25_voz(3)">Márgenes de operación </button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(3), pantalla25_voz(4)">Conexiones o pinout</button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(4), pantalla25_voz(5)">Gráficos</button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(5), pantalla25_voz(6)">Circuitos de ejemplos</button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(6), pantalla25_voz(7)">Datos mecánicos y de encapsulado </button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(7), pantalla25_voz(9)">Componentes digitales </button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(8), pantalla25_voz(10)">Tablas de verdad</button>
                      </div>
                      <div>
                        <button class="button-3d" style="width: 100%;" onclick="pantalla25_info2(9), pantalla25_voz(11)">Diagramas de tiempo </button>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="m-3 p-3" style="background: #FFFFFF; border: solid; border-color: #ffc107; border-radius: 15px;" id="pantalla25_info2">
                        <div class="row" id="pantalla25_info3">
                          <div class="col-md-6">
                            <p class="p_black">Como parte principal de un datasheet está la página de resumen, esta se resalta por contener una idea general de los componentes y sus características, la intención de este resumen es hacerse una idea de cómo es el componente, saber si es apto para el trabajo.</p>
                            <p class="p_black">Entre las características que se encuentran en este fragmento, se pueden mostrar los diferentes tipos de encapsulado que puede tener el componente, también en ciertos casos explican que función cumple cada pin. A continuación, se muestra un ejemplo de página de resumen.</p>
                          </div>
                          <div class="col-md-6">
                            <img class="img-fluid" src="assets/img/Ilustración7.png">
                          </div>
                        </div>
                        <div class="d-flex justify-content-center">
                          <div class="d-flex justify-content-around" style="width: 60px;">
                            <div class="opcion25_1 punto25_color" onclick="cambio25_color(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                            </div>
                            <div class="opcion25_2 punto25_color" onclick="cambio25_color(2)" style="width:15px;height:15px;background:#ffc107;border-radius:50%; cursor: pointer;">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    `;
  $("#pantalla25_info").html(pantalla25);
}

function cambio25_color(num){
  $(".punto25_color").css("background","#ffc107");
  $(".opcion25_"+num).css("background","#2c538e");
  var parrafo = "";

  if (num ==1) {
    parrafo = `
              <div class="col-md-6">
                <p class="p_black">Como parte principal de un datasheet está la página de resumen, esta se resalta por contener una idea general de los componentes y sus características, la intención de este resumen es hacerse una idea de cómo es el componente, saber si es apto para el trabajo.</p>
                <p class="p_black">Entre las características que se encuentran en este fragmento, se pueden mostrar los diferentes tipos de encapsulado que puede tener el componente, también en ciertos casos explican que función cumple cada pin. A continuación, se muestra un ejemplo de página de resumen.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="assets/img/Ilustración7.png">
              </div>
              `;
  }else if (num ==2) {
    parrafo = `
              <div class="col-md-12">
                <img class="img-fluid" src="assets/img/Ilustración8.png">
                <p class="p_black text-center">diagrama esquemático</p>
              </div>
              `;
  }
  $("#pantalla25_info3").html(parrafo);
}

function pantalla25_info2(num){
  var texto = "";
  if (num == 1) {
    texto = `
            <div class="row" id="pantalla25_info3">
              <div class="col-md-6">
                <p class="p_black">Como parte principal de un datasheet está la página de resumen, esta se resalta por contener una idea general de los componentes y sus características, la intención de este resumen es hacerse una idea de cómo es el componente, saber si es apto para el trabajo.</p>
                <p class="p_black">Entre las características que se encuentran en este fragmento, se pueden mostrar los diferentes tipos de encapsulado que puede tener el componente, también en ciertos casos explican que función cumple cada pin. A continuación, se muestra un ejemplo de página de resumen.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="assets/img/Ilustración7.png">
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="d-flex justify-content-around" style="width: 60px;">
                <div class="opcion25_1 punto25_color" onclick="cambio25_color(1), pantalla25_voz(1)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                </div>
                <div class="opcion25_2 punto25_color" onclick="cambio25_color(2), pantalla25_voz(2)" style="width:15px;height:15px;background:#ffc107;border-radius:50%; cursor: pointer;">
                </div>
              </div>
            </div>
            `;
  }else if (num == 2) {
    texto = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black">En este fragmento del datasheet se muestran todos los rangos de operación, esta parte es muy importante y se debe de respetar los rangos de operación estipulados por el fabricante, ya que si se pasan por alto en el peor de los casos podría quemarse el componente, dañándolo y causando perdida.</p>
                <p class="p_black">En este fragmento se muestra en ocasiones tres características con tres valores: mínimo MIN, el nominal NOM y el máximo MAX, esto con el fin de tener un valor de operación más preciso, ya que todos los componentes no son iguales y funcionan de diferente manera.</p>
                <img class="img-fluid" src="assets/img/tabla14.png">
                <p class="p_black text-center">rango máximo absoluto</p>
              </div>
            </div>
            `;
  }else if (num == 3) {
    texto = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black">En este apartado se encuentra la distribución de pines del componente, ya que, al momento de montar un circuito, las conexiones pueden ser un poco complicadas y pude haber la posibilidad de conectar algo erróneamente, por eso es bueno recordar la distribución de conexión del componente. </p>
                <img class="img-fluid" src="assets/img/Ilustración9.png">
                <p class="p_black text-center">diagrama de conexión</p>
              </div>
            </div>
            `;
  }else if (num == 4) {
    texto = `
            <div class="row">
              <div class="col-md-6">
                <p class="p_black">Para tener una idea de cómo se comportará el equipo en diferentes condiciones de uso, es bueno tener un gráfico que muestre unas condiciones de uso, por eso el datasheet tiene una sección de gráficos donde muestra el comportamiento del componente, a continuación, un ejemplo de cómo cambia la corriente máxima en función del voltaje entre la salida y la entrada. </p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="assets/img/Ilustración10.png">
                <p class="p_black text-center">gráfico de corriente en función del voltaje</p>
              </div>
            </div>
            `;
  }else if (num == 5) {
    texto = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black">Esta sección es muy contribuyente en el datasheet, ya que acá podemos evidenciar algunos ejemplos de un diseño de circuito que incluyan el componente del que se esté hablando, con el fin de mejorar o agregar algún otro componente que ayude al funcionamiento óptimo de nuestro circuito.</p>
                <img class="img-fluid" src="assets/img/Ilustración11.png">
                <p class="p_black text-center">circuito para aumentar la tensión de salida</p>
              </div>
            </div>
            `;
  }else if (num == 6) {
    texto = `
            <div class="row" id="pantalla25_info4">
              <div class="col-md-6">
                <p class="p_black">En este apartado se muestra información del diseño del encapsulado, sus dimensiones y otras características del encapsulado del componente, como la disipación de calor y otras consideraciones del montaje.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="assets/img/Ilustración12.1.png">
                <p class="p_black text-center">características del encapsulado</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="d-flex justify-content-around" style="width: 60px;">
                <div class="opcion25_2_1 punto25_color2" onclick="cambio25_color2(1), pantalla25_voz(7)" style="width:15px;height:15px;background:#2c538e;border-radius:50%; cursor: pointer;">
                </div>
                <div class="opcion25_2_2 punto25_color2" onclick="cambio25_color2(2), pantalla25_voz(8)" style="width:15px;height:15px;background:#ffc107;border-radius:50%; cursor: pointer;">
                </div>
              </div>
            </div>
            `;
  }else if (num == 7) {
    texto = `
            <p class="p_black text-center">Hay algunos casos de secciones específicas de circuitos digitales, los más relevantes son las tablas de verdad y los diagramas de time.</p>
            `;
  }else if (num == 8) {
    texto = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black">Nos demuestra como varían las salidas en función de las entradas, para los circuitos lógicos se debe de recordar que las señales van en código binario de 0 y 1, lo que significa que está clasificada en falso y verdadero, de ahí viene el nombre de tablas de verdad.</p>
                <img class="img-fluid" src="assets/img/Ilustración13.png">
                <p class="p_black text-center">tabla de verdad de microcontrolador AVR ATtiny2313</p>
              </div>
            </div>
            `;
  }else if (num == 9) {
    texto = `
            <div class="row">
              <div class="col-md-12">
                <p class="p_black">Un diagrama de tiempo es básicamente un gráfico que permite medir el tiempo en función del estado lógico.</p>
                <img class="img-fluid" src="assets/img/Ilustración14.png">
                <p class="p_black text-center">diagrama de tiempo</p>
              </div>
            </div>
            `;
  }
  $("#pantalla25_info2").html(texto);
}

function cambio25_color2(num){
  $(".punto25_color2").css("background","#ffc107");
  $(".opcion25_2_"+num).css("background","#2c538e");
  var parrafo = "";

  if (num ==1) {
    parrafo = `
              <div class="col-md-6">
                <p class="p_black">En este apartado se muestra información del diseño del encapsulado, sus dimensiones y otras características del encapsulado del componente, como la disipación de calor y otras consideraciones del montaje.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="assets/img/Ilustración12.1.png">
                <p class="p_black text-center">características del encapsulado</p>
              </div>
              `;
  }else if (num ==2) {
    parrafo = `
              <div class="col-md-12">
                <img class="img-fluid" src="assets/img/Ilustración12.2.png">
                <p class="p_black text-center">características del encapsulado</p>
              </div>
              `;
  }
  $("#pantalla25_info4").html(parrafo);
}
var intentosEscritos=0;
function respuesta() {
        var calificacion = 0;
        var r1 = $(".actividadtruefalse #res1").attr("name");
        var r2 = $(".actividadtruefalse #res2").attr("name");
        var r3 = $(".actividadtruefalse #res3").attr("name");
            switch (r1) {
              case "r1":
                var res_1 = $("input[name*='r1']").val();
                if (res_1 ==="Componentes digitales") {
                    calificacion++;
                }
                $("#res1").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
            switch (r2) {
              case "r2":
                var res_2 = $("input[name*='r2']").val();
                if (res_2 ==="Diagramas de tiempo") {
                    calificacion++;
                }
                $("#res2").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
            switch (r3) {
              case "r3":
                var res_3 = $("input[name*='r3']").val();
                if (res_3 ==="Como hacer una ficha técnica") {
                    calificacion++;
                }
                $("#res3").html('');
                break;
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
      
      if (calificacion === 3) {
          Swal.fire({
              title: '¡Buen trabajo!',
              text: 'Has respondido correctamente todas las preguntas',
              icon: 'success',
              showDenyButton: true,            
              confirmButtonText: 'Jugar de nuevo',
              denyButtonText: 'Terminar'
          })
      } else{
          intentosEscritos++;

          if(intentosEscritos >= 2){
              Swal.fire(
                  '¡Has superado el número de intentos!',
                  'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                  'warning'
              )
              intentosEscritos = 0;
              $(".pantalla26_input").html('');
          } else {
              Swal.fire(
                  '¡Lo sentimos!',
                  'Puedes intentarlo de nuevo',
                  'error'
              )
          }
      }
    }

/*    function respuesta(num) {
                if (num == 1) {
                    var r = $(".actividadtruefalse #res1").attr("name");
                }else if (num ==2) {

                    var r = $(".actividadtruefalse #res2").attr("name");
                }else if (num == 3) {

                    var r = $(".actividadtruefalse #res3").attr("name");
                }
                switch (r) {
                  case "r1":
                    var res_1 = $("input[name*='r1']").val();
                    if (res_1 ==="Componentes digitales") {
                        Swal.fire(

                            '¡Buen trabajo!',
                            'Has acertado',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            '¡Lo siento!',
                            'Puedes intentarlo de nuevo',
                            'error'
                        )  
                    }
                    $("#res1").html('');
                    break;
                  case "r2":
                    var res_2 = $("input[name*='r2']").val();
                    if (res_2 ==="Diagramas de tiempo") {
                        Swal.fire(
                            '¡Buen trabajo!',
                            'Has acertado',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            '¡Lo siento!',
                            'Puedes intentarlo de nuevo',
                            'error'
                        )  
                    }
                    break;
                    $("#res2").html('');
                  case "r3":
                    var res_3 = $("input[name*='r3']").val();
                    if (res_3 ==="Como hacer una ficha técnica") {
                        Swal.fire(
                            '¡Buen trabajo!',
                            'Has acertado',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            '¡Lo siento!',
                            'Puedes intentarlo de nuevo',
                            'error'
                        )  
                    }
                    break;
                    $("#res3").html('');
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          
        }*/
/*$(document).ready(iniciar);
$(document).ready(plus_info);
$(document).ready(plus_info_20);

function iniciar(){
	$(".cerrar").on("click", cerrar);
}
function informacion(num){
	$(".ocultar_15").hide();
	var info = "";
	if (num == 1) {
		var info = `<p class="ocultar_15 p_black border-bottom border-primary">
						Quiere decir que la concentración de flujo eléctrico es nula en todos sus puntos.
					</p>`;
	}else if (num == 2) {
		var info = `<p class="ocultar_15 p_black border-bottom border-primary">
						Es la capacidad que tiene el material para permitir el flujo eléctrico sin oposición a este.
					</p>`;
	}else if (num == 3) {
		var info = `<p class="ocultar_15 p_black border-bottom border-primary">
						Permite la circulación de electrones a través del material.
					</p>`;
	}
	$(".texto"+num+"_15").html(info);
}

function ver_mas(num){
    if (num==1) {
        $('#pantalla7_1').modal('show');
    }else if (num==2) {
        $('#pantalla7_2').modal('show');
    }else if (num==3) {
        $('#pantalla7_3').modal('show');
    }
}

function plus_info() {
    var canvas = new fabric.Canvas('plus_info');
    var imgElement = '../unidad_15/assets/img/plus-info.gif';
    var imgElement2 = '../unidad_15/assets/img/plus-info.gif'; 
    var imgElement3 = '../unidad_15/assets/img/plus-info.gif';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=33;
        oImg.top=51;
        oImg.scaleToHeight(30);
        oImg.scaleToWidth(30);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            $('#pantalla8_1').modal('show');  
        });      
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=105;
        oImg2.top=157;
        oImg2.scaleToHeight(30);
        oImg2.scaleToWidth(30);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            $('#pantalla8_2').modal('show');                  
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=202;
        oImg3.top=72;
        oImg3.scaleToHeight(30);
        oImg3.scaleToWidth(30);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            $('#pantalla8_3').modal('show');                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
}

function cerrar(){
    $('#pantalla7_1').hide();
    $('#pantalla7_2').hide();
    $('#pantalla7_3').hide();
    $('#pantalla8_1').hide();
    $('#pantalla8_2').hide();
    $('#pantalla8_3').hide();
}

function cambio_color(num){
    $(".punto_color").css('background','#ffc107');
    $(".opcion11_"+num+"").css('background','#2c538e');
    var parrafo = "";
    if (num == 1) {
        parrafo = `Autorización para realizar la actividad de instalación del sistema de puesta a tierra.`;
    }else if (num == 2) {
        parrafo = `Comprobar los lineamientos de diseño de puesta a tierra, con el fin de saber dónde va a estar ubicada, los materiales que lleva, etc.`;
    }else if (num == 3) {
        parrafo = `Relación de los elementos requeridos para la construcción del sistema de puesta a tierra.`;
    }else if (num == 4) {
        parrafo = `Relación de la herramienta a utilizar para el montaje del sistema de puesta a tierra.`;
    }else if (num == 5) {
        parrafo = `Verificar los elementos de protección personal.`;
    }else if (num == 6) {
        parrafo = `Verificar que el sistema de puesta a tierra tenga contacto con la estructura de donde se va a instalar, como ejemplo para el caso de un edificio estar en contacto con su estructura metálica.`;
    }else if (num == 7) {
        parrafo = `Las conexiones que van debajo del suelo (enterradas) deben ir con soldadura exotérmica.`;
    }else if (num == 8) {
        parrafo = `Instalar las cajas de inspección según el plano.`;
    }else if (num == 9) {
        parrafo = `Instalar el electrodo.`;
    }else if (num == 10) {
        parrafo = `Colocar los conductores, verificando su continuidad.`;
    }else if (num == 11) {
        parrafo = `Medir el sistema de puesta a tierra, esto con el fin de conocer su resistividad.`;
    }
    $("#pantalla11_parrafo").html(parrafo);
}

function pantalla12modal(num){
    if (num == 1) {
        $('#pantalla12_1').modal('show');
    }else if (num == 2) {
        $('#pantalla12_2').modal('show');
    }else if (num == 3) {
        $('#pantalla12_3').modal('show');
    }
}

function pantalla19(num){
    $(".ocultar_19").hide();
    var info19_info = "";
    if (num == 1) {
        info19_info = ` <div style="background: #FCF3CF; height: 180px;" class="pantalla13_borde ocultar_19 py-2">
                            <p class="m-3 p_black">
                                Este método es basado en computadora, el principio de funcionamiento es el mismo que con un telurómetro, la diferencia radica en que el proceso de análisis de los resultados filtra ruido existente en las mediciones por el método de correlación.
                            </p>
                        </div>`;
        $("#pantalla19_info_1").after(info19_info);
    }else if (num == 2) {
        info19_info = ` <div style="background: #FCF3CF; height: 180px;" class="pantalla13_borde ocultar_19 py-2">
                            <p class="m-3 p_black">
                                La función principal del equipo es medir un valor de resistencia inyectando una corriente entre dos puntos y midiendo un potencial en otros dos, a continuación el esquema de conexión a realizar.
                            </p>
                            <div class="d-flex justify-content-center">
                                <button style="width: 50%; white-space: break-spaces;" class="btn btn-warning btn-lg ocultar_19" data-toggle="modal" data-target="#pantalla19_modal">Leer más</button>
                            </div>
                        </div>`;
        $("#pantalla19_info_2").after(info19_info);
    }else if (num == 3) {
        info19_info = ` <div style="background: #FCF3CF; height: 180px;" class="pantalla13_borde ocultar_19 py-2">
                            <p class="m-3 p_black">
                                Este equipo se encuentra dentro de la rama de los telurómetro por lo tanto tiene su principio de funcionamiento.
                            </p>
                        </div>`;
        $("#pantalla19_info_3").after(info19_info);
    }
}

function plus_info_20() {
    var canvas = new fabric.Canvas('plus_info_20');
    var imgElement = '../unidad_15/assets/img/positivo-modales.png';
    var imgElement2 = '../unidad_15/assets/img/positivo-modales.png'; 
    var imgElement3 = '../unidad_15/assets/img/positivo-modales.png';
    var imgElement4 = '../unidad_15/assets/img/positivo-modales.png';
    var imgElement5 = '../unidad_15/assets/img/positivo-modales.png';
    var imgElement6 = '../unidad_15/assets/img/positivo-modales.png';
    fabric.Image.fromURL(imgElement, function(oImg) {
        oImg.left=48;
        oImg.top=29;
        oImg.scaleToHeight(20);
        oImg.scaleToWidth(20);
        oImg.selectable = false;
        canvas.add(oImg);

        oImg.on('mouseup', function() {
            console.log('selected a circle');  
            $('#pantalla20_1').modal('show');  
        });      
        oImg.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement2, function(oImg2) {
        oImg2.left=43;
        oImg2.top=266;
        oImg2.scaleToHeight(20);
        oImg2.scaleToWidth(20);
        oImg2.selectable = false;
        canvas.add(oImg2);

        oImg2.on('mouseup', function() {
            $('#pantalla20_2').modal('show');                  
        });
        oImg2.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement3, function(oImg3) {
        oImg3.left=157;
        oImg3.top=62;
        oImg3.scaleToHeight(20);
        oImg3.scaleToWidth(20);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            $('#pantalla20_3').modal('show');                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement4, function(oImg3) {
        oImg3.left=195;
        oImg3.top=151;
        oImg3.scaleToHeight(20);
        oImg3.scaleToWidth(20);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            $('#pantalla20_4').modal('show');                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement5, function(oImg3) {
        oImg3.left=157;
        oImg3.top=256;
        oImg3.scaleToHeight(20);
        oImg3.scaleToWidth(20);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            $('#pantalla20_5').modal('show');                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
    fabric.Image.fromURL(imgElement6, function(oImg3) {
        oImg3.left=6;
        oImg3.top=127;
        oImg3.scaleToHeight(20);
        oImg3.scaleToWidth(20);
        oImg3.selectable = false;
        canvas.add(oImg3);

        oImg3.on('mouseup', function() {
            $('#pantalla20_6').modal('show');                
        });
        oImg3.on('mousemove', function() {
          console.log('hover a circle');
        });
    });
}

function pantalla21(num){
    $(".ocultar_21").hide();
    var info21_info = "";
    if (num == 1) {
        info21_info = ` <div style="background: #FCF3CF; height: 220px;" class="pantalla13_borde ocultar_21 py-2">
                            <p class="m-3 p_black">
                                Siendo el suelo uno de los elementos involucrados en una puesta a tierra, su medición de resistividad se vuelve determinante para un diseño correcto. El método de los cuatro electrones es el más usado. El número de lectura debe ser mayor donde se presenta fuertes variaciones de resistividad tanto verticales como horizontales.
                            </p>
                        </div>`;
        $("#pantalla21_info_1").after(info21_info);
    }else if (num == 2) {
        info21_info = ` <div style="background: #FCF3CF; height: 220px; overflow: scroll; overflow-x: hidden;" class="pantalla13_borde ocultar_21 py-2">
                            <p class="m-3 p_black">
                                Esta medición es importante porque verifica la efectividad de una puesta a tierra recientemente construida o para detectar cambios como parte de una rutina de mantenimiento, se requiere un conocimiento especializado por parte de los responsables,  para no tener un accidente o dañar el equipo, entre los más utilizados esta:
                            </p> 
                            <div class="d-flex align-items-center px-3">
                                <i><img src="assets/img/check.png" width="35"></i>
                                <p class="p_black">De curva de caída de potencial</p>
                            </div>
                            <div class="d-flex align-items-center px-3">
                                <i><img src="assets/img/check.png" width="35"></i>
                                <p class="p_black">De la regla del 62%</p>
                            </div>
                            <div class="d-flex align-items-center px-3">
                                <i><img src="assets/img/check.png" width="35"></i>
                                <p class="p_black">De la pendiente.</p>
                            </div>
                        </div>`;
        $("#pantalla21_info_2").after(info21_info);
    }else if (num == 3) {
        info21_info = ` <div style="background: #FCF3CF; height: 220px;" class="pantalla13_borde ocultar_21 py-2">
                            <p class="m-3 p_black">
                                Este equipo se encuentra dentro de la rama de los telurómetro por lo tanto tiene su principio de funcionamiento.
                            </p>
                        </div>`;
        $("#pantalla21_info_3").after(info21_info);
    }else if (num == 4) {
        info21_info = ` <div style="background: #FCF3CF; height: 220px;" class="pantalla13_borde ocultar_21 py-2">
                            <p class="m-3 p_black">
                                En rigor solo se cumple para corriente continua y electrostática, en toda instalación con sistema de puesta a tierra, es muy importante equipotencializar todas sus partes. Las mediciones se efectúan mediante la inyección de corriente continua con una fuente regulada y medición de V e I.
                            </p>
                        </div>`;
        $("#pantalla21_info_4").after(info21_info);
    }
}

function pantalla22(num){
    if (num==1) {
        $('#pantalla22_1').modal('show');
    }else if (num==2) {
        $('#pantalla22_2').modal('show');
    }else if (num==3) {
        $('#pantalla22_3').modal('show');
    }else if (num==4) {
        $('#pantalla22_4').modal('show');
    }else if (num==5) {
        $('#pantalla22_5').modal('show');
    }
}

function cambio_color23(num){
    $(".punto_color").css('background','#ffc107');
    $(".opcion23_"+num+"").css('background','#2c538e');
    var parrafo = "";
    if (num == 1) {
        parrafo = `   <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">1. En primera medida se debe utilizar una velocidad baja para empezar el hueco y luego subir de intensidad, manteniéndose constante al perforar. </p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">2. Tener con firmeza la pieza a perforar y seguidamente procedemos con el trabajo de perforación.</p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">3. Utilizar los elementos de protección como orejeras, guantes, casco y gafas de protección y mascarilla autofiltrante en caso de ser requerida.</p>
                      </div>`;
    }else if (num == 2) {
        parrafo = `   <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">4. La ropa debe ser con puños ajustables.</p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">5. La ropa debe ser con puños ajustables.</p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">6. Diariamente verificar el estado de la herramienta.</p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">7. De acurdo a la necesidad, usar la broca adecuada.</p>
                      </div>
                      <div class="d-flex align-items-center px-3 my-4">
                        <i><img src="assets/img/flecha.png" width="25"></i>
                        <p class="p_black border-bottom border-primary mx-2">8. En el caso de requerir cambio de broca, apagar la máquina.</p>
                      </div>`;
    }
    $("#pantalla23_info").html(parrafo);
}

function pantalla27_modal(num){
    if (num==1) {
        $('#pantalla27_1').modal('show');
    }else if (num==2) {
        $('#pantalla27_2').modal('show');
    }else if (num==3) {
        $('#pantalla27_3').modal('show');
    }else if (num==4) {
        $('#pantalla27_4').modal('show');
    }else if (num==5) {
        $('#pantalla27_5').modal('show');
    }else if (num==6) {
        $('#pantalla27_6').modal('show');
    }
}

function pantalla28_modal(num){
    if (num==1) {
        $('#pantalla28_1').modal('show');
    }else if (num==2) {
        $('#pantalla28_2').modal('show');
    }else if (num==3) {
        $('#pantalla28_3').modal('show');
    }else if (num==4) {
        $('#pantalla28_4').modal('show');
    }else if (num==5) {
        $('#pantalla28_5').modal('show');
    }else if (num==6) {
        $('#pantalla28_6').modal('show');
    }else if (num==7) {
        $('#pantalla28_7').modal('show');
    }
}

function pantalla29(num){
    $(".pantalla29_ocultar").hide();
    var parrafo = "";
    if (num == 1) {
        parrafo = `<img src="assets/img/boton_materiales_2.png" style="width: 68%;" class="pantalla29_ocultar">`;
    }else if (num == 2) {
        parrafo = `<img src="assets/img/boton_herramientas_2.png" style="width: 60%;" class="pantalla29_ocultar">`;
    }
    $("#pantalla29_"+num).html(parrafo);
}

function pantalla30(num){
    if (num == 1) {
        $("#pantalla30_fondo").css('background-image','url(assets/img/herramientas_elementos_hover1.png)');
        $('#pantalla30_1').modal('show');
    }else if (num == 2) {
        $("#pantalla30_fondo").css('background-image','url(assets/img/herramientas_elementos_hover2.png)');
        $('#pantalla30_2').modal('show');
    }    
}

function cambio_color30(num){
    $(".punto_color").css('background','#ffc107');
    $(".opcion30_"+num+"").css('background','#2c538e');
    var parrafo = "";
    if (num == 1) {
        parrafo =   ` 
                        <div class="col-md-3">
                          <img src="assets/img/pertiga_detector_ausencia_tension2.png" style="width: 20%">
                        </div>
                        <div class="col-md-9">
                          <div class="d-flex justify-content-star my-2">
                            <button class="btn btn-warning">Pértiga Aislante</button>
                          </div>
                          <p class="p_black text-left">
                            Es una herramienta formada por un tubo  aislante , poseedor de una empuñadura. Se usa para realizar maniobras en tensión, extracción y reposición de fusibles, maniobrar seccionadores, para colocación de equipos de puesta a tierra.  Según su requerimiento de tensión estas se clasifican en:
                          </p>
                          <div class="row" style="height: 150px;">
                            <div class="col-md-6 my-2" style="background-image: url(assets/img/perdiga_clase1.png); background-repeat: no-repeat; background-size: contain;">
                            </div>
                            <div class="col-md-6 my-2" style="background-image: url(assets/img/perdiga_clase3.png); background-repeat: no-repeat; background-size: contain;">
                            </div>
                            <div class="col-md-6 my-2" style="background-image: url(assets/img/perdiga_clase2.png); background-repeat: no-repeat; background-size: contain;">
                            </div>
                            <div class="col-md-6 my-2" style="background-image: url(assets/img/perdiga_clase4.png); background-repeat: no-repeat; background-size: contain;">
                            </div>
                          </div>
                        </div>
                    `;
    }else if (num == 2) {
        parrafo =   `
                        <div class="col-md-3">
                          <img src="assets/img/cizalla_aislante.png" style="width: 40%">
                        </div>
                        <div class="col-md-9">
                          <div class="d-flex justify-content-star my-2">
                            <button class="btn btn-warning">Cizalla Aislante</button>
                          </div>
                          <p class="p_black text-left">
                            Es una herramienta de corte, en su forma contiene dos esfuerzos de material aislante, parte superior está formada por dos cuchillas de acero. Sirve para cortar cables de hasta 25 mm de diámetro y mangos de tubo de poliéster reforzado con fibra de vidrio de 50 mm de longitud y 32 mm de diámetro, tiene una tensión de aislamiento de 25 kV.
                          </p>
                        </div>
                    `;
    }else if (num == 3) {
        parrafo =   `
                        <div class="col-md-3">
                          <img src="assets/img/banqueta_aislante.png" style="width: 100%">
                        </div>
                        <div class="col-md-9">
                          <div class="d-flex justify-content-star my-2">
                            <button class="btn btn-warning pantalla30_boton">Banqueta aislante para trabajos en tensión</button>
                          </div>
                          <p class="p_black text-left">
                            Su funcionalidad es la de servir como aislamiento tienen gran la resistencia al paso de la corriente. Están hechas de polipropileno copolímero, de alto impacto. Estan fabricadas según la tensión que puedan bloquear desde 20 kV, 30 kV, 45 kV y 66 kV
                          </p>
                        </div>
                    `;
    }else if (num == 4) {
        parrafo =   `
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Alfombrilla aislante</button>
                          </div>
                          <img src="assets/img/alfombrilla_aislante.png" style="width: 100%">
                          <p class="p_black text-left">
                            Alfombra de material aislante, habitualmente fabricada de goma sintética o caucho.
                          </p>
                        </div>
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Alicates</button>
                          </div>
                          <img src="assets/img/alicate.png" style="width: 70%">
                          <p class="p_black text-left">
                            Su uso para trabajos de hasta 1000V con agarraderas aislante, diseñados para cortar, sujetar o doblar.
                          </p>
                        </div>
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Destornillador</button>
                          </div>
                          <img src="assets/img/destornillador.png" style="width: 100%">
                          <p class="p_black text-left">
                            Su uso para trabajos de hasta 1000V con mago termoplástico, se utiliza para aflojar o apretar cualquier tipo de elemento que requiera poca fuerza.
                          </p>
                        </div>
                    `;
    }else if (num == 5) {
        parrafo =   `
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Pinza amperimétrica</button>
                          </div>
                          <img src="assets/img/pinza-amperimetrica.png" style="width: 45%">
                          <p class="p_black text-left">
                            Se caracteriza por tener de un sensor en forma de pinza, que abraza el cable cuya corriente, tensión, resistencia y frecuencias que se requiera medir.
                          </p>
                        </div>
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Polímetro</button>
                          </div>
                          <img src="assets/img/multimetro-clavijas.png" style="width: 75%">
                          <p class="p_black text-left">
                            Esta herramienta permite comprobar el correcto funcionamiento de un circuito eléctrico. Midiendo tensiones continúas y alternas, resistencias, corrientes, etc.
                          </p>
                        </div>
                        <div class="col-md-4">
                          <div class="d-flex justify-content-center my-2">
                            <button class="btn btn-warning">Empuñadura para quitar fusibles</button>
                          </div>
                          <img src="assets/img/empunadura_fusibles.png" style="width: 70%">
                          <p class="p_black text-left">
                            Están fabricadas para tensiones de hasta 5000V, protegen al trabajador de quemaduras de arcos voltaicos.
                          </p>
                        </div>
                    `;
    }
    $("#pantalla30_info").html(parrafo);
}
*/