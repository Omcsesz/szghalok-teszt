        var tesztFeladatok = [
            { kerdes: "Mit mond ki a meg�rz�si t�rv�ny (conservation law)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Sorban�ll�sn�l mindenkinek meg kell �riznie a nyugalm�t!", jo: false },
                { valasz: "Az egyes felhaszn�l�kra jut� forgalomar�nyokkal s�lyozott k�sleltet�si id�k �sszege �lland�.", jo: true },
                { valasz: "A sorban felt�tlen�l meg kell �rizni a bel�p�si poz�ci�kat", jo: false },
                { valasz: "Igazs�gos feladat�temez�st csak a FIFO kiszolg�sn�l lehet el�rni", jo: false },
                { valasz: "A fentiek k�z�l egyik v�lasz sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely funkcionalit�ssal nem rendelkezhet egy IP h�l�zati csom�pont?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagtov�bb�t�s", jo: false },
                { valasz: "A c�mzett c�m�nek �sszevet�se a routing-t�bla bejegyz�seivel", jo: false },
                { valasz: "A h�l�zat lehets�ges �tvonalair�l inform�ci� gy�jt�se �s k�ld�se", jo: false },
                { valasz: "Visszajelz�s k�ld�se a felad�nak a csomag ellen�rz��sszeg�nek (\"checksum\") helyess�g�r�l", jo: false },
                { valasz: "Priorit�sok kezel�se", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyik nem lehet �rv�nyes IPv6-os c�m?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "0:0:0:0:0:0:ABCD:1", jo: false },
                { valasz: "??*::192.67.0.10", jo: false, megjegyzes: "::ffff:192.67.0.10-k�nt lenne helyes" },
                { valasz: "FEDC::C:AA89:0000:1032", jo: false },
                { valasz: "FEDC:0094:004:0000:000C:BA98:7654:3210", jo: false },
                { valasz: "??A fentiek k�z�l mindegyik lehet �rv�nyes IPv6-os c�m", jo: false, megjegyzes: "IPv6 18. dia alapj�n ez a j� v�lasz" }
              ]
            },
            { kerdes: "Melyik �ll�t�s igaz az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az IPv4 mindig MTU m�ret� csomagokat k�ld", jo: false },
                { valasz: "Az IPv4 Fragment Offset mez�je azt mutatja meg, hogy h�nyadik t�red�ke a csomag az eredetinek", jo: false },
                { valasz: "A Don\'t Fragment bit be�ll�t�s�val fel lehet t�rk�pezni az MTU-t", jo: false },
                { valasz: "Az MTU a Minimum Transport Utilization r�vid�t�se", jo: false },
                { valasz: "A fenti �ll�t�sok k�z�l egyik sem igaz.", jo: true }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapj�n m�k�d� h�l�zatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vez�rli a konferencia-�sszek�ttet�seket", jo: false },
                { valasz: "Minden esetben rajta kereszt�l folyik a h�v�svez�rl�s", jo: false },
                { valasz: "Biztos�tja az egy�ttm�k�d�st m�s, nem H.323 alap� h�l�zatokkal", jo: false },
                { valasz: "A fentiek k�z�l egyik sem szerepe a Gatekeepernek.", jo: true },
                { valasz: "Beenged�sszab�lyoz�st �s er�forr�s-foglal�st v�gez", jo: false }
              ]
            },
            { kerdes: "Mit ellen�riz az UDP-datagramm hibaellen�rz� k�dja (checksum)? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az UDP- �s az IP-fejr�szt egy�ttesen", jo: false, megjegyzes: "IPb�l csak 3 mez�t ellen�riz, nem mindet" },
                { valasz: "Az eg�sz UDP-datagrammot", jo: false, megjegyzes: "IPb�l is ellen�riz r�szeket, de nem mindent" },
                { valasz: "Csak az UDP-fejr�szt", jo: false, megjegyzes: "IPb�l is ellen�riz r�szeket" },
                { valasz: "Az UDP-fejr�szt �s az IP-c�meket", jo: false, megjegyzes: "Az IPb�l m�g a protocol mez�t is" },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ],
              megjegyzes: "A k�vetkez�kb�l gener�l�dik a checksum: IP[Source Address, Dest Address, Protocol], UDP[Length], UDP csomag TELJES tartalma. Teh�t egyik sem j�."
            },
            { kerdes: "Hogyan val�s�tja meg a Session Initiation Protocol a felhaszn�l�k k�vet�s�t? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem val�s�t meg k�vet�st, a h�v� f�lnek kell kider�tenie a h�vott aktu�lis c�m�t", jo: false },
                { valasz: "Ezt a Proxy Server val�s�tja meg", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-t�l az aktu�lis c�met", jo: true }
              ]
            },
            { kerdes: "Mit jelent a tunneling? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az IP-csomagokat adatkapcsolati r�tegbeli adategys�gekben tov�bb�tjuk", jo: false },
                { valasz: "Az IP-csomagokat &#8222;k�ls�&#8221; IP-c�mmel l�tjuk el,�s ennek alapj�n tov�bb�tjuk - ez a becsomagol�s, ez�ltal t�rt�nik az alagutaz�s, de ez nem maga az alagutaz�s!", jo: false },
                { valasz: "Az IP-csomagok c�m�t kicser�lj�k helyi �rv�ny� c�mre,�s oda tov�bb�tjuk", jo: false },
                { valasz: "Az IP-csomagokat Ethernet keretekbe �gyazzuk", jo: false },
                { valasz: "Egyik sem", jo: false }
              ]
            }
         ];
