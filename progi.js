var most, sikeres, hibas, osszesKint, userContent, effect = true;

function kovetkezoFeladat(){
    if(most.id != tesztFeladatok.length -1){
        if(most.id != 0 && !osszesKint)
            tesztFeladatok[most.id -1].div.hide();
        most.div.show();
        most = tesztFeladatok[most.id +1];
        most.div.show();
    } else
        mindentMegmutat();

    refreshStat();
}

function elozoFeladat(){
    if(most.id >= 1 && !osszesKint){
        tesztFeladatok[most.id].div.hide();
        most = tesztFeladatok[most.id -1];
        most.div.show();
        if(most.id != 0)
            tesztFeladatok[most.id -1].div.show();
    }

    refreshStat();
}

function mindentMegmutat(){
    for(var feladatId = 0; feladatId < tesztFeladatok.length; feladatId++){
        var feladat = tesztFeladatok[feladatId];
        feladat.div.css("display", "block");
    }
    osszesKint = true;
}

$(document).ready(firstInit);

function firstInit(){
    userContent = jQuery.trim($("#TesztProgi").html());

    var tesztJsName = getQueryStrParam('teszt');
    if(tesztJsName !== null)
        loadTeszt(tesztJsName);
    else if(typeof(tesztek) != 'undefined' && typeof(tesztFeladatok) == 'undefined')
        loadTeszt(tesztek[0].url);
    else
        init();
}

function menuInit(){
	$("ul.TPmenu_body li:even").addClass("alt");

    $('div.TPmenu_head').click(function () {
        $('ul.TPmenu_body').slideToggle('medium');
    });

	$('ul.TPmenu_body li a').mouseover(function () {
        $(this).animate({ fontSize: "14px", paddingLeft: "20px" }, 50 );
    });

	$('ul.TPmenu_body li a').mouseout(function () {
        $(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );
    });
}

function loadTeszt(url){
    tesztFeladatok = null;
    jsInclude(url+'.js');
    var clId = setInterval(function(){ 
        if(tesztFeladatok !== null){ 
            clearInterval(clId); 
            init(); 
        }}, 100);
}

function init(){
    most = null;
    sikeres = 0;
    hibas = 0;
    osszesKint = false;

    var skinek = [
        { nev: "eredeti", url: "progi" },
        { nev: "for blondies", url: "progi_blondy" },
    ];

    var skinHtml = '';
    for(var skinId = 0; skinId < skinek.length; skinId++){
        var skin = skinek[skinId];
        
        if(skin == undefined)
            continue;

        if(skinHtml != '')
            skinHtml += ', ';
        skinHtml += '<a href="#" onclick="changeSkin(\'' + skin.url + '\')">' + skin.nev + '</a>';
    }

    var mainHtml = '';

    if(typeof(tesztek) != 'undefined'){
        var tesztHtml = '';

        for(var tesztId = 0; tesztId < tesztek.length; tesztId++){
            var teszt = tesztek[tesztId];

            if(teszt == undefined)
                continue;

            tesztHtml += '<li><a href="#" onclick="loadTeszt(\'' + teszt.url + '\')">' + teszt.nev + '</a></li>';
        }

        mainHtml +=
            '<div id="tesztekMenu" class="TPmenu">'+
            '    <div class="TPmenu_head" />'+
            '    <ul class="TPmenu_body">'+
            tesztHtml+
            '    </ul>'+
            '</div>';
    }

    mainHtml += 
        '<div id="TPContainer">'+
        '<div id="feladat" class="feladat nemValaszolt">'+
        '    <div>'+
        '        <b>Kérdés: </b><span id="kerdes">a</span>'+
        '    </div>'+
        ''+
        '    <div id="valaszok">'+
        '    </div>'+
        ''+
        '    <div id="ikon">'+
        '        <div id="helyesValasz">&nbsp;'+
        '        </div>'+
        ''+
        '        <span id="igazhamisPanel">'+
        '            <input type="button" id="igazGomb" value="igaz" onclick="igazhamis(this, true)" />'+
        '            <input type="button" id="hamisGomb" value="hamis" onclick="igazhamis(this, false)" />'+
        '        </span>'+
        ''+
        '        <input type="button" id="ellenoriz" value="Ellenõriz" onclick="ellenoriz(this)" />'+
        '        <input type="button" id="helyesVolt" value="Pedig ez is helyes volt!" onclick="helyesVolt(this)" />'+
        '    </div>'+
        ''+
        '    <div id="megjegyzes">'+
        '        <b>Megjegyzés</b>: <span id="megjegyzesSzoveg"></span>'+
        '    </div>'+
        '</div>'+
        ''+
        '<div id="feladatok">'+
        '</div>'+

        '<div id="eredmenySor">'+
        '    <span id="eredmeny">'+
        '    </span>'+

        '    <span id="lapozo">'+
        '        <input id="elozoFeladat" type="button" onclick="elozoFeladat()" value="<<" />'+
        '        <input id="kovetkezoFeladat" type="button" onclick="kovetkezoFeladat()" value=">>" />'+
        '    </span>'+
        '</div>'+

        '<div id="panel">'+
        '    <a href="javascript:mindentMegmutat()">Mutasd mindet!</a> | <a href="javascript:hibasakUjrakerdezese()">Hibásak újrakérdezése</a> | <a id="effectLabel" href="javascript:switchEffect()">Effekt off</a>'+
        '</div>'+
        ''+
        '<div>'+
        '    Skinek: '+skinHtml+
        '</div>'+
        '<br/>'+
        ''+
        (userContent ? '<div id="userContent">' + userContent + '</div><br/>' : '')+
        '<div>'+
        '    A tesztprogramot készítette: Koczka Tamás (<a href="mailto:koczkatamas(kukacka)gmail(pottyocske)com">email</a>)<br/>'+
        '    <small>(a kérdések és válaszok teljességért és helyességéért felelõséget nem vállalok, mivel valószínû, hogy semmi közöm hozzájuk!)</small>'+
        '</div>'+
        '<div>'+
        '    <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/80x15.png" /></a>'+
        '</div>'+
        '</div>';

    $("#TesztProgi").html(mainHtml);

    menuInit();

    for(var i = 0; i < tesztFeladatok.length; i++){
        var feladat = tesztFeladatok[i];

        if(feladat == undefined)
            continue;

        if(!feladat.tipus){
            if(feladat.valasz === true || feladat.valasz === false)
                feladat.tipus = 'igazhamis';
            else if(!!feladat.valasz)
                feladat.tipus = 'valaszolos';
            else {
                var c = 0;
                for(var valaszId = 0; valaszId < feladat.valaszok.length; valaszId++){
                    var valasz = feladat.valaszok[valaszId];
                    if(valasz.jo)
                        c++;
                }
                feladat.tipus = (c == 1 ? 'egyet_jelolo' : 'tobbet_jelolo');
            }
        }

        tesztFeladatok[i] = feladat;
    }

    shuffle(tesztFeladatok);
//    tesztFeladatok.sort(function() {return 0.5 - Math.random()});
    
    for(var i = 0; i < tesztFeladatok.length; i++)
        if(tesztFeladatok[i] != undefined && tesztFeladatok[i].valaszok != null)
            shuffle(tesztFeladatok[i].valaszok);
//            tesztFeladatok[i].valaszok.sort(function() {return 0.5 - Math.random()});
    
    var minta = $("#feladat");
    var feladatokDiv = $("#feladatok");

    
    for(var feladatId = 0; feladatId < tesztFeladatok.length; feladatId++){
        var feladat = tesztFeladatok[feladatId];

        if(feladat == undefined)
            continue;

        feladat.id = feladatId;
        feladatokDiv.append(feladat.div = minta.clone());
        feladat.joLett = undefined;
        feladat.div.find("#kerdes").text(feladat.kerdes);
        feladat.div.find("#megjegyzesSzoveg").html(feladat.megjegyzes);
        feladat.div.find("#megjegyzes").css("display", "none");
        feladat.div.find("#helyesVolt").css("display", "none");
        feladat.div.attr("feladatId", feladatId);
        feladat.div.bind("show", { feladat: feladat }, function(){ feladat.div.css("display", "block"); });
        feladat.div.hide = function(){ $(this).animate( { height:1, opacity:0 }, effect ? 500 : 0, "swing", function(){
            $(this).css("display", "none");
            $(this).css("height", null);
            $(this).css("opacity", 1);
        }); };
        feladat.div.show = function(){  $(this).show(effect ? 200 : 0); };

        var htmlT = '';

        if(feladat.tipus != "igazhamis"){
            feladat.div.find("#igazhamisPanel").css("display", "none");
        } else {
            feladat.div.find("#ellenoriz").css("display", "none");
            feladat.div.find("#valaszok").css("display", "none");
        }

        if(feladat.tipus === "egyet_jelolo" || feladat.tipus === "tobbet_jelolo"){
            var inputType = feladat.tipus === "egyet_jelolo" ? "radio" : "checkbox";
            for(var valaszId = 0; valaszId < feladat.valaszok.length; valaszId++){
                htmlT += '<div class="valaszDiv">' + 
                         '  <span id="gombSpan'+valaszId+'" class="gombSpan"><input type="' + inputType + '" name="feladatGombok'+feladatId+'" id="valasz'+valaszId+'" class="valaszGomb" /></span>' + 
                         '  <span class="szoveg" onclick="cbClick(this)">' + 
                         feladat.valaszok[valaszId].valasz +
                         '      <span id="valaszHelyesseg'+valaszId+'" class="valaszHelyesseg"></span>' + 
                         '';

                if(feladat.valaszok[valaszId].megjegyzes)
                    htmlT += '  <div id="valaszMegjegyzes'+valaszId+'" class="valaszMegjegyzes"><b>Megj.</b>: ' + feladat.valaszok[valaszId].megjegyzes + '</div>';

                htmlT += '  </span>';
                htmlT += '</div>';
            }
        } else if(feladat.tipus === "valaszolos")
            htmlT += '<input type="text" id="valaszolos' + feladatId + '" onkeypress="valaszPressed(this, event)" />';

        feladat.div.find("#valaszok").html(htmlT);
    }

    most = tesztFeladatok[0];
    most.div.show();
    refreshStat();
}

function cbClick(obj){
    if(getFeladat(obj).joLett != null)
        return;

    var cb = $(obj).parent().find(":input");
    cb.attr("checked", !cb.attr("checked"));
}

function valaszPressed(obj, event){
    if(event.keyCode === 13)
        ellenoriz(obj);
}

function hibasakUjrakerdezese()
{
    var ujTesztFeladatok = [];
    for(var feladatId = 0; feladatId < tesztFeladatok.length; feladatId++){
        var feladat = tesztFeladatok[feladatId];
        if(feladat.joLett != true)
            ujTesztFeladatok[ujTesztFeladatok.length] = tesztFeladatok[feladatId];
    }
    tesztFeladatok = ujTesztFeladatok;

    $("#feladatok").html("");
    init();
}

function getFeladat(obj){
    var feladat = tesztFeladatok[$(obj).parents("#feladat").attr("feladatId")];
    return feladat;
}

function refreshSuccess(feladat){
    feladat.div.removeClass("nemValaszolt joValasz rosszValasz");

    feladat.div.addClass(feladat.joLett ? "joValasz" : "rosszValasz");

    refreshStat();
}

function refreshStat(){
    var feladatCount = tesztFeladatok.length;
    var dbKesz = sikeres + hibas;
    var hatravan = feladatCount - dbKesz;
    var szazalek = Math.round(sikeres/dbKesz*100);

    if(isNaN(szazalek))
        szazalek = 0;

    $("#eredmeny").text((most.id +1) + " / " + feladatCount + " => helyes: " + sikeres + ", hibás: " + hibas + 
        ", hátravan: " + hatravan + " - " + szazalek + "%");
}

function feladatDone(feladat){
    if(feladat.div.find("#megjegyzesSzoveg").text() != "")
        feladat.div.find("#megjegyzes").css("display", ""); 
    
    if(feladat.joLett)
        sikeres++;
    else
        hibas++;

    refreshSuccess(feladat);

    kovetkezoFeladat();
}

function ellenoriz(obj){
    var feladat = getFeladat(obj);

    feladat.div.find("#ellenoriz").attr("disabled", true);

    if(feladat.tipus === "egyet_jelolo" || feladat.tipus === "tobbet_jelolo"){
        var valaszok = feladat.valaszok;

        feladat.joLett = true;
        for(var i = 0; i < feladat.valaszok.length; i++){
            var cb = feladat.div.find("#valasz" + i);
            
            if(feladat.valaszok[i].jo != cb.attr("checked"))
                feladat.joLett = false;

            feladat.div.find("#gombSpan" + i).addClass(feladat.valaszok[i].jo ? "joValaszResz" : "rosszValaszResz");

            if(feladat.valaszok[i].jo)
                feladat.div.find("#valaszHelyesseg" + i).html('[<b>X</b>] ');
//            feladat.div.find("#valaszHelyesseg" + i).html('[<b>' + (feladat.valaszok[i].jo ? "X" : "-") + '</b>]');

            feladat.div.find("#valaszMegjegyzes" + i).css("display", "block");
            cb.attr("disabled", true);
        }
    } 
    else if(feladat.tipus === "valaszolos"){
        var valaszInput = feladat.div.find("#valaszolos" + feladat.id);
        valaszInput.attr("disabled", true);
        feladat.joLett = valaszInput.attr("value") === feladat.valasz;
        feladat.div.find("#helyesValasz").text("A helyes válasz: " + feladat.valasz);
        if(!feladat.joLett){
            feladat.div.find("#helyesVolt").css("display", "");
        }
    }
    
    feladatDone(feladat);
}

function helyesVolt(obj){
    var feladat = getFeladat(obj);

    feladat.div.find("#helyesVolt").attr("disabled", "disabled");

    feladat.joLett = true;
    sikeres++;
    hibas--;
    refreshSuccess(feladat);
}

function igazhamis(obj, megadottValasz){
    var feladat = getFeladat(obj);

    feladat.joLett = feladat.valasz === megadottValasz;

    feladat.div.find(megadottValasz ? "#hamisGomb" : "#igazGomb").attr("disabled", true);
    feladat.div.find(megadottValasz ? "#igazGomb" : "#hamisGomb").removeAttr("onclick");

    feladat.div.find("#helyesValasz").text("A helyes válasz: " + (feladat.valasz ? "IGAZ" : "HAMIS"));

    feladatDone(feladat);
}

function changeSkin(cssFn){
    var cssObj = document.getElementById('skin');
    var cssPath = cssObj.href.substring(0, cssObj.href.lastIndexOf('/'));
    if(cssPath != '')
        cssPath += '/';
    cssObj.href = cssPath + cssFn + '.css';
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function jsInclude(url) {
    var head = document.getElementsByTagName('head').item(0);

    var js = document.createElement('script');
    js.setAttribute('language', 'javascript');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);

    head.appendChild(js);

    return false;
}

function getQueryStrParam(paramName){
    var queryStr = window.location.search.substring(1);
    var queryParams = queryStr.split("&");

    for(i = 0; i < queryParams.length; i++){
        var arr = queryParams[i].split("=");
        if(arr[0] == paramName)
           return arr[1];
    }

    return null;
}

function switchEffect(){
    effect = !effect;
    document.getElementById('effectLabel').innerHTML = 'Effect ' + (effect ? 'off' : 'on');
}