        var tesztFeladatok = [
            { kerdes: "Milyen kieg�sz�t�sekre van sz�ks�g a sz�les �rtelemben vett routingot illet�en, ha mobil v�gpontokat is meg akarjuk engedni a h�l�zatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Idegen (foreign) �gyn�k", jo: true },
                { valasz: "Otthoni (home) �gyn�k", jo: true },
                { valasz: "A mobil v�gpont felk�sz�t�se az �gyn�kkel val� p�rbesz�dre", jo: true },
                { valasz: "A mobil v�gpont mozg�si jellemz�inek korl�toz�sa", jo: false }
              ]
            },
            { kerdes: "Milyen inform�ci�t gy�jthet�nk a h�l�zat �llapot�r�l az �tvonalt�bl�k kit�lt�s�hez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hol helyezkednek el f�ldrajzilag a csom�pontok", jo: false },
                { valasz: "Az egyes csom�pontok melyik m�sik csom�pontokkal vannak �sszek�tve", jo: true },
                { valasz: "Az egyes csom�pontok melyik v�gpontokat (bele�rtve a LAN-okat) szolg�lj�k ki", jo: true }
              ]
            },
            { kerdes: "Routing csak �sszek�ttet�smentes csomagkapcsolt h�l�zatban van, mert az �ramk�rkapcsolt h�l�zatok dedik�lt �tviteli csatorn�kat haszn�lnak, az �sszek�ttet�s alap� csomagkapcsol�s pedig l�nyeg�ben virtu�lis �ramk�rkapcsol�s",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen inform�ci�t juttatnak el a csom�pontok �s kiknek a link state (�sszek�ttet�s-alap�) routing m�dszer eset�n?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csom�pontok elomdj�k a szomsz�daiknak a vel�k kapcsolatos tapasztalataikat", jo: false },
                { valasz: "A csom�pontok elmondj�k a h�l�zatr�l alkotott elk�pzel�seiket mindenkinek", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "mindenkinek elmondj�k a szomsz�daikkal kapcsolatos tapasztalataikat" }
              ]
            },
            { kerdes: "Milyen tulajdons�gai vannak a routing centraliz�lt megold�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem biztos�that�, hogy a h�l�zati csom�pontok egys�gesen \"l�ss�k\" a h�l�zatot", jo: false },
                { valasz: "A h�l�zat m�k�d�s�nek ez a legbiztons�gosabb m�dja", jo: false },
                { valasz: "�gy biztos�that� a legk�nnyebben, hogy a h�l�zati csom�pontok egys�gesen \"l�ss�k\" a h�l�zatot", jo: true },
                { valasz: "Nagy kock�zatot jelent az eg�sz h�l�zat m�k�d�s�t biztos�t� centrum meghib�sod�sa", jo: true }
              ]
            },
            { kerdes: "Milyen szerepet j�tszanak az Auton�m Rendszerek (AS) Internet �tvonalir�ny�t�s�ban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megnehez�tik a gerincrouterek dolg�t, hogy helyesen �llap�ts�k meg a v�gpontok fel� vezet� legalkalmasabb utat", jo: false },
                { valasz: "Lehet�v� teszik a h�l�zat gerinc r�sz�ben m�k�d� routerek sz�m�ra, hogy a felhaszn�l�i v�gpontok nagysz�m� csoportjait csak egy-egy bejegyz�sk�nt kezelj�k az �tvonalt�bl�ikban", jo: true },
                { valasz: "Lehet�v� teszik a routing feladatok hierarchikus megoszt�s�t a vil�gm�ret� h�l�zatban", jo: true },
                { valasz: "Megnehez�tik az egys�ges (konzisztens) k�p kialak�t�s�t a h�l�zatr�l, mert a belsej�kben szabadon d�nthetnek az alkalmazott routing protokollr�l", jo: false }
              ]
            },
            { kerdes: "Melyik �ll�t�sokat tartja helyesnek az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A routing kiz�r�lag a csomagtov�bb�t�st jelenti az �sszek�ttet�smentes h�l�zatokban", jo: false },
                { valasz: "A routing alatt kiz�r�lag az �tvonalt�bl�k l�trehoz�s�t �rtj�k", jo: false },
                { valasz: "A routingra nincs sz�ks�g az �sszek�ttet�s-alap� h�l�zatokban", jo: false },
                { valasz: "A routing a v�gpontok k�z�tti alkalmas �tvonal kiv�laszt�s�t �s az �gy kiv�lasztott �tvonalon a csomagtov�bb�t�st jelenti", jo: true }
              ]
            },
            { kerdes: "Milyen routing feladatokat jelent a mozg� (a h�l�zatban csatlakoz�si pontot v�ltoztat�) felhaszn�l�nak �rkez� csomag eljuttat�sa a c�mzetthez?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A mobil felhaszn�l� �rtes�ti a partnereit, hogy melyik h�l�zatot sz�nd�kozik megl�togatni, �s �gy azok m�r a megfelel� h�l�zati c�mre k�ldik az �zeneteiket", jo: false },
                { valasz: "A mobil felhaszn�l� ig�nyel egy �gynevezett mozg� IP c�met, �s ezen a h�l�zati protokoll megtal�lja, b�rhol van a h�l�zatban", jo: false },
                { valasz: "A hazai �gyn�k�t (home agent) �rtes�tenie kell az idegen �gyn�knek (foreign agent), hogy egy mobil felhaszn�l� van a h�l�zatban", jo: true },
                { valasz: "Az idegen �gyn�k a hozz� �rkez�, belsej�ben a mobil felhaszn�l�nak sz�l� csomagot k�zbes�ti a hozz� bejelentkezett mobil felhaszn�l�nak", jo: true },
                { valasz: "A hazai �gyn�knek �t kell csomagolnia a mobil felhaszn�l� r�sz�re �rkezett �zenetet, �s elk�ldeni azt az idegen �gyn�kh�z?", jo: true, megjegyzes: "IPv4-ben biztosan" }
              ]
            },
            { kerdes: "A t�vols�g-vektor (routing) m�dszer v�gtelens�gig sz�mol�s�t oly m�don sz�ntethetj�k meg, hogy v�gesre korl�tozzuk a h�l�zatban lehets�ges t�vols�gokat",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "A t�vols�g-vektor (routing) m�dszer a Dijkstra algoritmust haszn�lja a h�l�zatr�l �sszegy�jt�tt inform�ci�b�l az �tvonalt�bl�k kit�lt�s�hez.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mit neveznek az �tvonalv�laszt�sn�l auton�m rendszernek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egy �nm�k�d�en, fel�gyelet n�lk�l dolgoz� rendszert", jo: false },
                { valasz: "Olyan h�l�zat, amely maga d�nti el a haszn�lt h�l�zati protokollt", jo: false },
                { valasz: "Egy olyan h�l�zatr�szt, amely nem kapcsol�dik tov�bbi h�l�zatokhoz", jo: false },
                { valasz: "Egy olyan h�l�zatr�sz, amelyen bel�l egys�ges �tvonalv�laszt�si m�dszert alkalmaznak", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) routing feladat(ok)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Megismerni a h�l�zatot alkot� csom�pontok �s �sszek�t�sek (linkek) aktu�lis strukt�r�j�t, �llapot�t", jo: true },
                { valasz: "Megoldani az aktu�lisan fell�p� �tvonal-kijel�l�si vagy �tv�laszt�si feladatokat", jo: true },
                { valasz: "A h�l�zat aktu�lis �llapot�nak ismeret�ben mindegyik csom�pontban olyan inform�ci�s b�zist gener�lni, amelynek haszn�lat�val meg lehet oldani az �tvonal-kijel�l�si vagy �tv�laszt�si feladatokat", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ],
			  megjegyzes: "Nem egy�rtelm� a di�k alapj�n, hogy ezek lehet-e vagy sem, teh�t itt van egy bizonytalans�gi t�nyez�. Mindenesetre n�h�ny hivatkoz�si alap: http://tools.ietf.org/html/rfc760 http://tools.ietf.org/html/rfc1058 http://en.wikipedia.org/wiki/Routing"
            },
            { kerdes: "Elosztott routing eset�n a csom�pontok �ltal�ban �n�ll�an, saj�t kezdem�nyez�sk�nt k�z�lnek routing inform�ci�t a t�bbiek r�sz�re.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen eszk�zt haszn�lnak a csom�pontok az �tvonal-kijel�l�s, illetve az �tv�laszt�s elv�gz�s�re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Keres�si algoritmusokat", jo: true },
                { valasz: "Sz�m�t�si algoritmusokat", jo: false },
                { valasz: "T�bl�zatokban nyilv�ntartott adatokat", jo: true }
              ]
            },
            { kerdes: "A t�vols�gvektor routing m�dszern�l a csom�pontok a t�bbi csom�pontt�l �LTALUK M�RT T�VOLS�GUKAT k�zlik a szomsz�daikkal.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Milyen nagys�grend� sz�m�t�st ig�nyel a legr�videbb �t meghat�roz�sa egy olyan h�l�zatban, amelynek N csom�pontja �s E �sszek�ttet�se van? (egy �sszef�gg�st, \"k�pletet\", kifejez�st kell megadni)",
              tipus: "valaszolos",
              valasz: "O(!ElogE)"
            },
            { kerdes: "Mi a szerepe, jelent�s�ge a _multicast routing_-nak, �s melyek a jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A c�mzetteket az egyedi c�meik alapj�n, azok �gyes t�m�r�t�s�vel azonos�tja", jo: false },
                { valasz: "A c�mzettek azonos�t�s�ra nem a csoporttagok egyedi c�meinek list�j�t haszn�lja, hanem egy csoportc�met", jo: true },
                { valasz: "Lehet�v� teszi k�l�nb�z� csomagoknak ugyanahhoz a c�mzetthez val� hat�kony eljuttat�s�t", jo: false },
                { valasz: "Lehet�v� teszi ugyanannak a csomagnak t�bb c�mzetthez val� hat�kony eljuttat�s�t", jo: true }
              ]
            }
         ];