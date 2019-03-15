$(function(){
$(".navigation ul.level-1 > li").each(function(){
var textmenu=$(this).find('> a').text();
$(this).find('> a').attr('title',textmenu)});
$(".navigation ul.level-2 > li").each(function(){
var textmenu=$(this).find('> a').text();
$(this).find('> a').attr('title',textmenu)});
$('.banner-flutuante-desconto .btn-close').on('click',function(){
$('.banner-flutuante-desconto').addClass('cupom-hide')});
$('.pop-up-bg,.pop-up-close').on('click',function(){
$('.pop-up').css("display","none")});
var popUpCupomDesconto=window.localStorage.getItem('popUpCupomDesconto');
if(popUpCupomDesconto!='true'){
$('.pop-up').css("display","block");}
window.localStorage.setItem('popUpCupomDesconto','true');
$('#page-painel-cadastro #receberemail').prop('checked',true);
$('.check-out tfoot td a#calculate-discount.btn b').text('usar cupom');
var insertSpace='<tr><td height="10"></td><td height="10"></td></tr>';
$(insertSpace).insertAfter('.check-out .discount-loyaltyprogram');
$('#sections-menu-vertical .content .level-1 li b').parent('a').on('click',function(event){
event.preventDefault()});
$('#sections-menu-vertical .content .level-1 li a b').addClass('ativo');
$('#sections-menu-vertical .content .level-1 li a').on('click',function(){
$('#sections-menu-vertical .content .level-2.last').slideToggle(300);
if($('#sections-menu-vertical .content .level-1 li a b').hasClass('ativo')){
$('#sections-menu-vertical .content .level-1 li a b').removeClass('ativo');}else{
$('#sections-menu-vertical .content .level-1 li a b').addClass('ativo');}
});
var textcenter01='<div id="banner-20" class="banner-geral banner-centro banner-centro-01 banner-centro-01-marcas" data-time="0" style="text-align:center;"><p class="descricao-categoria">As Melhores <strong>Marcas em Suplementos Alimentares</strong> estão na Whey Store. Aqui você pesquisa,compara e aprende sobre cada marca que adora,e o melhor?Ainda aproveita os melhores preços do Brasil. O que não vai faltar para você são opções de qualidade em suplementos alimentares e com melhor custo-benefício do mercado. Confira mais informações!</p></div>';
$(textcenter01).prependTo('#page-produtos-marcas .component-brands > .content');
var textcenter02='<div id="banner-75" class="banner-geral banner-centro banner-centro-02 banner-centro-02-marcas" data-time="0" style="text-align:center;"><h2 class="title-categoria">COMO ESCOLHER A MELHOR MARCA DE SUPLEMENTO ALIMENTAR?</h2><p class="descricao-categoria">Atualmente existem diversas <strong>marcas de suplementos nutricionais</strong> disponíveis no mercado brasileiro,por isso,escolher as melhores marcas e seus produtos pode ser uma árdua tarefa. Primeiramente,entre em contato com seu nutricionista e educador físico para saber qual suplemento e quantidade melhor se adequa às suas necessidades. Os <strong>suplementos alimentares</strong> podem ser encontrados em muitas formas,como em comprimidos,líquidos e em pós.</p><p class="descricao-categoria">Você pode optar por um suplemento dependendo da forma como ele trabalha em seu corpo ou simplesmente por preferi-lo em uma determinada fórmula. Na Whey Store você encontra uma linha completa das principais marcas disponíveis no mercado,a única certeza que você pode ter é:a qualidade do produto,seja qual for a sua escolha,será garantida,confira opções em Optimum Nutrition,Ultimade Nutrition,Integralmedica,Dymatize,Max Titanium,Atlhetica Nutrition,Essential,Vitafor,Iridium Labs,Arnold Nutrition,Maxxi Ovos,Myprotein,Syntrax,Universal,Nutrata,Force Up,BSN,Nutrext,Black Skull e muito mais,aproveite!</p><h2 class="title-categoria">CONHEÇA ALGUMAS MARCAS DE SUPLEMENTOS ALIMENTARES</h2><p class="descricao-categoria"><strong>IntegralMédica</strong>:líder no mercado de suplementos nacionais,a Integralmédica atua nesse ramo desde 1983. Foi fundada por Euclésio Bragança,um médico apaixonado por musculação e nutrição,o qual utilizou a proteína da soja para criar seus primeiros suplementos. Alguns dos seus suplementos mais famosos,são:Super Whey 3W,Creatina Hardcore Reload,Super Mass,Mycellar Casein,BCAA FIX,8-Loss,BCAA Powder VO2 e Albumix. Todos bem conhecidos aqui no Brasil e alguns até lá fora,na área do fisiculturismo.</p><p class="descricao-categoria"><strong>Probiótica</strong>:a empresa começou a atuar no mercado da nutrição em 1986. E desde então a marca começou a se popularizar,ganhando força mundialmente após começar a patrocinar atletas em 1996. Os produtos disponíveis na Whey Store da marca,são:100% Pure Whey,Monster Extreme Black,Black Bee,Xtherm Black,100% Casein Protein e BCAA Black.</p><p class="descricao-categoria"><strong>Max Titanium</strong>:a Max Titanium é uma marca mais nova no mercado nutricional. Atuando desde 2006 no mercado,a Max Titanium se popularizou aqui no Brasil a partir dos seus produtos de altíssima qualidade e preços mais acessíveis. Na sua lista de produtos,os mais famosos são:Top Whey 3W,Femini Whey,Whey Pro Max,Iso Whey,Batata Doce em pó,Creatina,Mass Titanium,100% Whey e Dextrose.</p><p class="descricao-categoria"><strong>Atlhetica Nutrition</strong>:considerada como a maior indústria de suplementos alimentares do Brasil,a Atlhetica Nutrition atua há mais de 10 anos fabricando suplementos complemente puros,sempre oferecendo um diferencial a partir da sua tecnologia e fórmula exclusiva. Entre seus produtos,os populares são:Micellar Pro,XTEA,Whey Protein Pro Series,100% Pure Whey,Creatina 100% Pure,Carnitech 100% Beef Protein e BCAA Pro Series.</p><p class="descricao-categoria"><strong>Vitafor</strong>:iniciou suas atividades no mercado brasileiro a fim de melhorar a qualidade dos suplementos nutricionais disponíveis,e verdadeiramente conseguiu. Seus principais produtos são:Whey Fort,Iso Fort,Whey Protein Isolate e Creafort.</p></div>';
$(textcenter02).appendTo('#page-produtos-marcas .component-brands > .content');
if($('.header-3 .navigation ul.level-2').length){
$('.header-3 .navigation ul.level-2').each(function(){
var numberli=$(this).find('li').length;
if($(this).next('.banner-menu-horizontal').length){
if(numberli<=7){
$(this).addClass('imagem single').width(632);
$(this).next('.banner-menu-horizontal').addClass('imagem-single');}else{
$(this).addClass('imagem double').width(572);
$(this).next('.banner-menu-horizontal').addClass('imagem-double');}
}else{
if(numberli<=7){
$(this).addClass('single').width(280);}else{
$(this).addClass('double').width(568);}
}
});}
if($('.todas-categorias').length){
if($('.todas-categorias ul.level-1 > li.marcas').length){
$('.todas-categorias ul.level-1 > li.marcas').remove();}
if($('.todas-categorias ul.level-1 > li.outlet').length){
$('.todas-categorias ul.level-1 > li.outlet').remove();}
}
$('.check-out .help a.person').attr({'href':'/fale-conosco/'});
$('.field-wrapper .cep-wrapper').append($('#nacional'));
if($('.label.promotion').length){
$('.label.promotion').remove();}
$('.products li').each(function(){
$(this).find('.label').wrapAll('<div class="labels-wrapper"/>');
$(this).find('.labels-wrapper').appendTo($('.photo',this));
$(this).find('.buttons').appendTo($('.product-info',this));
$(this).find('.product-name').insertBefore($('.price',this));
$(this).find('.more-sections .brand').insertAfter($('.product-name a',this));
$(this).find('.price .sale-price').appendTo($('.list-price',this));
$(this).find('.price .list-price i:nth-of-type(2)').prependTo($(this).find('.price .sale-price'));
$(this).find('.price .no-interest').appendTo($(this).find('.price .parcel-value'));
var conditiontext=$(this).find('.price .condition').text();
if(conditiontext.indexOf('.')!=-1){
var conditionhtml=$(this).find('.price .condition').html();
conditionhtml=conditionhtml.replace("."," ");
var conditionhtml=$(this).find('.price .condition').html(conditionhtml);}
var dezoff=$(this).find(".price em .sale").text();
var name=$(this).find(".product-name a").text();
if(!dezoff==''){
dezoff=dezoff.split('R$');
dezoff=dezoff[1];
dezoff=dezoff.replace(",",".");
var calcPrice=(dezoff - ( dezoff * 10 / 100 )).toFixed(2);
calcPrice=calcPrice.replace(".",",");
calcPrice='R$ '+ calcPrice;
$("<span class='desconto'>"+calcPrice+"</span>").insertAfter($(this).find('.price small.savings'));}
});
if($('#page-produtos').length){
$('#page-produtos .without-left-column.without-right-column .product-photos').prependTo('#media .media-wrapper');
$('#page-produtos .product-service').insertBefore('#product-social-networks');
$('.label.free-shipping').html('<b>Frete Grátis</b>');
$('.purchase-info').each(function(){
if($(this).find('savings')){
$('<small class="savijs">ou à vista com <b>10% OFF</b></small>').appendTo($(this));
$('#media .product-photos').addClass('variations');}
if(!$(this).find('.list-price').length){
$(this).addClass('semdesconto');}
$(this).find('.content').addClass('validact')});
if($('#buytogether-v2').length){
$('#buytogether-v2 .title').text('Aproveite e Compre Junto');
$('#buytogether-v2 .content form .savings').remove();
$('#buytogether-v2 .content form .condition').remove();
$('.buytogether-content .save-total a b').text('Comprar Junto');
var qtsprodutos=$("#buytogether-v2 li li.buytogether-item").length;
$("<p class='qtsprodutos'>Compre os "+qtsprodutos+" produtos</p>").insertBefore('.buytogether-content .price');}
if($('#page-produtos #comments-rating').length){
$("#page-produtos #comments-rating .legend .title").text('Avaliações sobre o produto');
$('#page-produtos #comments-rating .rating-toolbar #LinkRating').text('Avalie e Comente');
$('#page-produtos #comments-rating .rating-toolbar #LinkRating').prependTo('#page-produtos #comments-rating .legend');
$('#page-produtos #comments-rating .rating-toolbar').remove();
$('#page-produtos #comments-rating .hreview').each(function(){
$(this).find('.review-reviewer').insertBefore($(this).find('.rating'))});}else{
$('<div class="legend"><h2 class="title">Avaliações sobre o produto</h2></div>').prependTo('#interactivity dd.product-rating');
$('#interactivity dd.product-rating .rate-this-product').text('Avalie e Comente');
$('#interactivity dd.product-rating').appendTo('.component-group');
$('dd.product-rating p span.rating').parent().insertAfter('#interactivity .product-description dt');
$('<div class="content"><div class="review-rating"><div class="review-reviewer"><cite class="reviewer vcard"><span class="fn">Este produto ainda não tem avaliações</span></cite></div><div class="review-content"><blockquote><p class="description" itemprop="description">Seja o primeiro a avaliar. <br />Compartilhe sua experiência com os outros usuários! <span class="btn-avalie">Clicando aqui</span></p></blockquote></div></div></div>').insertAfter('dd.product-rating .legend');
var btnShowReview=$('#interactivity-wrapper .content a.rate-this-product');
var btnCloneReview=$('.component-group .review-content .btn-avalie');
btnCloneReview.on('click',function(){
btnShowReview.trigger('click')});}
}
if($('#product-kit > #form-kit').length){
$('#product-kit-table th:not(#kit-th-products)').remove();
$('#product-kit-table th#kit-th-products').attr('colspan','1');
$('#product-kit-table .btn-buy-kit b').text('COMPRE AGORA');
$('#product-kit-table .btn-buy-kit').attr('title','Compre agora');}
$('ul.buy-together-list > li').each(function(){
$(this).find('.buytogether-content a.product-title:nth-child(5)').appendTo($('li.buytogether-item:nth-child(5) > a',this));
$(this).find('.buytogether-content a.product-title:nth-child(3)').appendTo($('li.buytogether-item:nth-child(3) > a',this));
$(this).find('.buytogether-content a.product-title:nth-child(1)').appendTo($('li.buytogether-item:nth-child(1) > a',this))});
$('#buytogether-v2 li li:nth-child(5)').parent().addClass('tres-produtos');
$('.header-atendimento ul li:empty,.footer-atendimento ul li:empty').css('display','none');
$('.products .price a').each(function(){
var textBtn=$(this).text();
if(textBtn=='Esgotado'){
$(this).addClass('esgotado');}
});
$('#sections-todas-categorias').insertBefore('.navigation ul.level-1 > li:nth-child(1)');
$('#sections-todas-categorias .title').text('Categorias');
$('.products .buttons a.buy b').text('COMPRE AGORA');
$('.products .buttons a.buy').attr('title','Compre agora');
if($('.product').length){
$(".content .products li").each(function(){
var desconto=$(this).find('.save .savePercentage').text();
$(this).find('.save .savePercentage').text(desconto+' OFF');
var parcela=$(this).find('.price .condition .parcels').text();
if(parcela=='1X'){
$(this).find('.price .condition').remove();}
var avista=$(this).find('.price small.savings b:last-child').text();
$(this).find('.price small.savings').html('<span>À vista com</span> '+avista+' OFF')});}
$('.est_lancamento b').text('Lançamento');
$('.est_blackfriday b').text('Black Friday');
$('.oferta-semana .botao-oferta-semana .icone').on({
mouseenter:function(){
$(this).parents('.oferta-semana').addClass('aberto');
$('.overlay-oferta').fadeIn();}
});
$('.overlay-oferta').on({
mouseenter:function(){
$('.oferta-semana.aberto').removeClass('aberto');
$(this).stop(true,true).fadeOut();}
});
$(".navigation ul.level-1 > li").each(function(){
if($(this).find('.level-2').length){
$(this).addClass('has-child');}
});
if($('#page-produtos-secoes,#page-produtos-pesquisa').length){
$("<ul id='select'></ul>" ).insertAfter('#center-header .ordering select');
$("#center-header .ordering select option").each(function(){
$("#center-header #select").append('<li><a href="'+$(this).attr('value')+'">'+$(this).html()+'</a></li>')
});
$("#center-header #select").on("click","li a",function(e){
e.preventDefault();
$("#center-header .ordering select").val($(this).attr("href"));
$("#center-header .ordering select").trigger('change')});
var selectatv=$("#center-header .ordering select").val();
if(selectatv!=''){
$("#center-header #select li a[href="+selectatv+"]").addClass('ativo');}
if($('#center-footer .component .bottom .page-number').length){
$('#center-header .component .top .results').insertBefore('#center-footer .component .bottom .page-number');}else{
$('#center-header .component .top .results').remove();}
if($('#left > nav .sections .level-1 > li.current').length){
$("#left > nav .sections .level-1 > li.current .level-2").insertAfter('#left > nav .sections .content .level-1');
$('#left > nav .sections .content > .level-1').remove();}
$('#left > div #filters b.filter-title').on('click',function(){
$(this).toggleClass('menuclose');
$(this).next('.filter-list').slideToggle()});
$('#left > nav .sections .legend .title').on('click',function(){
$(this).toggleClass('menuclose');
$(this).parents('#sections-menu-vertical').find('.content ul.level-2').slideToggle()});
if($('#left ul .level-2').length){
$('#left ul .level-2 > li').each(function(){
$(this).find('> a > .result').appendTo($(this).find('> a > .name'))});}
if($('#left ul .level-3').length){
$('#left ul .level-3 > li').each(function(){
$(this).find('> a > .result').appendTo($(this).find('> a > .name'))});}
if($('#left #filters .filter-wrapper .filter-categoria').length){
$('#left #filters .filter-wrapper .filter-categoria').parents(".filter-wrapper").prependTo('#left #filters .content');
if($('#left ul .level-2').length){
$('#left ul .level-2').parents('li').addClass('haslevel');}
if($('#left ul .level-3').length){
$('#left ul .level-3').parents('li').addClass('hasmorelevel');}
}
}
if($('.breadcrumb').length){
$('#center-header .component .top').addClass("globbread");
if($('#header > .banner-geral.banner-header').length){
$('#center-header .component .top').insertAfter('#header > .banner-geral.banner-header');}else{
$('#center-header .component .top').insertAfter('.header-3');}
}
if($('#page-carrinho').length){
$('#page-carrinho #middle .cart .info .send-btn .btn-continuar').wrap('<span class="wrapper-btn-continuar"></span>');
$('#page-carrinho #middle .cart .info .send-btn .btn-continuar').val('Finalizar compra');
$('#page-carrinho #middle .cart .info .send-btn .check-out-buttons a.btn-alt b').text('Continuar comprando');
$('<tr><td height="10"></td><td height="10"></td></tr>').insertBefore('.check-out .info table tfoot tr:first-child()');
$('<tr><td height="10"></td><td height="10"></td></tr>').insertBefore('.check-out .info table tfoot tr.shipping');
$('<tr><td height="10"></td><td height="10"></td></tr>').insertBefore('.check-out .info table tfoot tr.discount');
$('<tr><td height="10"></td><td height="10"></td></tr>').insertAfter('.check-out .info table tfoot tr.discount');
$('.check-out table thead th').each(function(){
if($(this).text()=='Remover'){
$(this).text('');}
});
$(".check-out tfoot .shipping td label[for='cep']").text('Calcular frete e prazo');
$(".check-out tfoot .shipping td input[name='cep']").attr('placeholder','Digite o CEP do endereço de entrega');
$(".check-out tfoot .discount td label[for='discount']").text('Cupom de desconto');
$(".check-out tfoot .discount td input[name='codigo']").attr('placeholder','Digite aqui o seu cupom');
$('a.btn-alt.pobox-search').remove();
$('.check-out table tfoot td span em small').each(function(){
if($(this).text()=='Frete'){
$(this).parents('td').remove();}
});
$(".check-out table tfoot .shipping td[colspan='4']").attr('colspan','5');
$('.redes-sociais').remove();
$('.oferta-semana').remove();}
if($('#page-painel-cadastro').length){
$('.oferta-semana').remove();}
if($('#page-textos').length){
$("<div class='left-menu'></div>").insertBefore('#middle .content article');
var institucional=$('.footer-institucional').clone();
var cliente=$('.footer-cliente').clone();
var suporte=$('.footer-suporte').clone();
$(institucional).addClass('box').appendTo('.left-menu');
$(cliente).appendTo('.left-menu');
$(suporte).appendTo('.left-menu');
$('#text > .legend').prependTo('#middle .content article');
var titlePage=$("#text h1").text();
var title="";
$("#text .content .left-menu .box .content ul li").each(function(){
title=$(this).find("a").text();
if(title==titlePage){
$(this).addClass("active");}
});
$("#page-textos #text .content article > div:not(.legend) br,#page-textos #text .content article > p br").parent().remove();}
if($('#page-atendimento-fale-conosco').length){
$("<div class='left-menu'></div>").insertBefore('#middle .content .control-panel');
var institucional=$('.footer-institucional').clone();
var cliente=$('.footer-cliente').clone();
var suporte=$('.footer-suporte').clone();
$(institucional).addClass('box').appendTo('.left-menu');
$(cliente).appendTo('.left-menu');
$(suporte).appendTo('.left-menu');}
if($('#page-produtos-marcas').length){
$('#middle #left').remove();
$('#middle #right').remove();
$('.top.globbread').remove();}
$("<ul class='level-2 marcas' style='width:681px';></ul>").insertAfter('.navigation ul.level-1 > li.marcas a');
$(".navigation ul.level-1 > li.marcas").addClass('has-child');
var im=1;
$('.carousel-marcas .brands ul li').each(function(){
$(this).clone().appendTo('.navigation ul.level-1 > li.marcas .level-2');
if(im>=8){
return false;}
im++});
$("<li class='vermarcas'><a href='http://wheystore.ezstore.ws/marcas/' title='Ver Todas as Marcas'>Ver Todas as Marcas</a></li>").appendTo('.navigation ul.level-1 > li.marcas .level-2');
if($('#page-textos').length){
var nomeclass=$('#page-textos #text .content .left-menu .box .content ul li.active').parents('.box').attr('class');
if(nomeclass.indexOf("institucional")>=0){
$('#page-textos #text > .content').addClass('institucional');}else{
$('#page-textos #text > .content').addClass('suporte');}
}
$('.goTotop').on('click',function(){
$('html,body').animate({'scrollTop':0})});
$('.purchase-toolbar .btn-container button#btn-buy').addClass('hvr-buzz-out');
if($(window).width() > 700){
effectBudget();}
});
$(window).scroll(function(){
var screenTop=$(window).scrollTop();
if(screenTop > 130){
$('.header-fixed').addClass('scroll');}else{
$('.header-fixed').removeClass('scroll');}
if(screenTop > 600){
$('.goTotop').addClass('show');}else{
$('.goTotop').removeClass('show');}
});
$(window).load(function(){
$('.banner-blog').insertBefore('#component-group-12');
if(!$('#page-default,#page-produtos').length){
$('.banner-blog').remove();}
if($('#page-produtos').length){
$('.banner-blog').appendTo('.component-group');}
setTimeout(function(){
$('.carousel-marcas').prependTo('#middle');},500);
var bannerDesconto='<div class="banner-desconto-painel-user"><img src="/FILES/_IMG/LAYOUT/banner-painel-cupom-desktop.jpg" title="Ganhe Desconto em Sua Priemira Compra!" alt="Ganhe Desconto em Sua Priemira Compra!"></div>';
$(bannerDesconto).prependTo('#page-painel-acesso-rapido .control-panel .content');
$(bannerDesconto).prependTo('#page-painel-meus-pedidos .control-panel .content');
$('.search-suggestions b.title').text('Sugestão de Produtos');
$('<li class="btn"><a href="#">Ver mais resultados</a></li>').insertAfter('.search-suggestions ul li:last-child');
if($('#page-produtos').length){
$('#interactivity form.validate').insertAfter('.purchase-info');
$('.purchase-toolbar .btn-container button#btn-buy b').text('COMPRE AGORA');
$('<span class="botoes-content"></span>').insertAfter('#interactivity-wrapper');
$('.btn-container #payments,.btn-container #shipping').appendTo('.botoes-content');}
if($('#page-painel-autenticacao').length){
$('.signin .content .input-wrapper #client-email,.signup .content .input-wrapper #email').attr({'placeholder':'Digite seu e-mail'});
$('.signin .content .field-wrapper #cryptosenha').attr({'placeholder':'Digite sua senha'});
$('.signup .content .input-wrapper #cep').attr({'placeholder':'Informe seu CEP'});
$('.signin .content form p small a').insertBefore('.signin .content form p small');
$('.signup .content form small a').insertBefore('.signup .content form small');}
if($('.outer-panel-wrapper a[href="/painel-de-controle/meus-pedidos/confirmar-pagamento/"]').length){
$('.outer-panel-wrapper a[href="/painel-de-controle/meus-pedidos/confirmar-pagamento/"]').addClass('confirmar-pagamento');}
if($('#page-produtos').length){
$(".botoes-content #payments b").text('Formas de Pagamento');
$("<span></span>").prependTo('.botoes-content #payments b');
$(".botoes-content #shipping b").text('Calcular Frete');
$("<span></span>").prependTo('.botoes-content #shipping b');}
if($('#floating-basket .basket-title').length){
$('#floating-basket .basket-title').text('Produtos no Carrinho');}
if($('#floating-basket .empty-basket-info').length){
$('#floating-basket .empty-basket-info').text('Seu Carrinho está vazio.');}
if($('#buytogether-v2').length){
$("<li class='buytogether-igual odd'><span>=</span></li>").insertAfter("#buytogether-v2 li li.last");}
$("#toolbar .logo,#toolbar .help,#toolbar .search").remove();
$("#toolbar").insertBefore('.header-loja .header-atendimento');
var ratingForm=$('#page-popup-comentario form');
var ratingProduct=$('.rate-this-product');
var ratingMsg=$('<p class="rating-msg">Por favor,&nbsp;avalie antes de prosseguir!</p>');
ratingForm.on('submit',function(){
if(ratingProduct.attr('class').indexOf('rating rate-')==-1){
ratingMsg.appendTo(ratingForm);}
})});
function insertMailAjax(form){
form=$(form);
$.ajax({
url:form.attr('action'),data:form.serialize(),type:'post',success:function(){
showMessage(form.find('[name="message-success"]').val());}
})
}
String.prototype.trunc=
function(n){
return this.substr(0,n-1)+(this.length>n?'...':'');};
function effectBudget(){
$(".hvr-buzz-out").toggleClass("active");
setTimeout(effectBudget,2500);}
$(window).scroll(function(){
if($('.oferta-semana').length){
$('.oferta-semana').removeClass('mini');
clearTimeout($.data(this,'scrollTimer'));
$.data(this,'scrollTimer',setTimeout(function(){
$('.oferta-semana').addClass('mini');},500));}
});
jQuery.fn.css2=jQuery.fn.css;
jQuery.fn.css=function(){
if(arguments.length){
return jQuery.fn.css2.apply(this,arguments);}
var attr=[
"font-family","font-size","font-weight","font-style","color","text-transform","text-decoration","letter-spacing","word-spacing","line-height","text-align","vertical-align","direction","background-color","background-image","background-repeat","background-position","background-attachment","opacity","width","height","top","right","bottom","left","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left","border-top-width","border-right-width","border-bottom-width","border-left-width","border-top-color","border-right-color","border-bottom-color","border-left-color","border-top-style","border-right-style","border-bottom-style","border-left-style","position","display","visibility","z-index","overflow-x","overflow-y","white-space","clip","float","clear","cursor","list-style-image","list-style-position","list-style-type","marker-offset"
];
var len=attr.length,obj={};
for(var i=0; i < len; i++){
obj[attr[i]]=jQuery.fn.css2.call(this,attr[i]);}
return obj;};
var comprarMagnetico=function(){
if($("#btn-buy:visible").length > 0&&$("#form-kit").length==0){
var htmlPreco="";
var titulo=$(".product-description dt").html();
var price=$(".purchase-info .price").html();
var imgbarra=$("#media .media-wrapper #img-product").attr("src");
if(typeof price==="undefined"){
price=0;
var kit=$("#product-kit");
if(kit.length){
var varsMgn=$(".grid-price-variation .entry-variation",kit);
varsMgn.each(function(){
var tmpPrice=$(".price .savings b:first",this);
if(typeof tmpPrice!=="undefined"){
tmpPrice=parseFloat(
tmpPrice
.html()
.replace("R$","")
.replace(".","")
.trim()
.replace(",","."));
if(tmpPrice < price||price==0){
price=tmpPrice;
priceToExhibition=$(".price",this).html();}
}
});}
if(price > 0){
htmlPreco=
'<div class="imgbarra"><img itemprop="image" class="photo" src="' +imgbarra +'"></div><div class="title">' +titulo +'</div><div class="price">' +priceToExhibition +'<small class="savijs">à vista com <b>10% OFF</b></small></div>';}
}else{
htmlPreco=
'<div class="imgbarra"><img itemprop="image" class="photo" src="' +imgbarra +'"></div><div class="title">' +titulo +'</div><div class="price">' +price +'<small class="savijs">à vista com <b>10% OFF</b></small></div>';}
$("body").append(
'<div class="magnetic-purchase">' +htmlPreco +"<button>Compre Agora</button></div>");
$(".magnetic-purchase button").on("click",function(){
$(".purchase-toolbar .btn-container button#btn-buy").trigger(
"click")});
$(window).bind("scroll",function(){
var win=$(window);
var el=$("#btn-buy");
var winPos=win.scrollTop();
var elPos=el.offset().top+el.height();
if(winPos > elPos){
$(".magnetic-purchase").fadeIn();}else{
$(".magnetic-purchase").fadeOut();}
});}
};
$(window).load(function(){
if($("body#page-produtos").length) comprarMagnetico()});
$(window).load(function(){
$("#product-kit select").bind("change",function(){
if($(".magnetic-purchase").length) $(".magnetic-purchase").remove();
setTimeout(function(){
comprarMagnetico();},1000)})});
$(document).ready(function(){
$("#carousel3D").CloudCarousel(
{
xPos:470,yPos:55,buttonLeft:$("#right-but"),buttonRight:$("#left-but"),altBox:$("#alt-text"),titleBox:$("#title-text"),autoRotateDelay:2000
})});