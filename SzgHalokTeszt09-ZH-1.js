         var tesztFeladatok = [
            { kerdes: "Adja meg QPSK modul�ci� alkalmaz�sa eset�n mekkora az adat�tviteli sebess�g kbit/s-ban ha a jelz�si sebess�g (szimb�lumsebess�g) 400 kbaud?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "QPSK = Quadrature Phase-Shift Keying", jo: false },
                { valasz: "Quad, vagyis 4 �llapota van", jo: false },
                { valasz: "4 �llapot 2 biten t�rolhat�", jo: false },
                { valasz: "2 bit = 1 baud (szimb�lum)", jo: false },
                { valasz: "Innen: 400 kbaud(/s) = 800 kbit/s", jo: false }
              ]
            },
            { kerdes: "Sz�molja ki egy r�zvezet�ken CSMA/CD-vel m�k�d� 200 m maxim�lis szegmensm�rettel �s 10 Mbit/s adatsebess�ggel rendelkez� h�l�zat minim�lis r�sidej�t (minim�lis kerethosszhoz tartoz� id�t) mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "r�zvezet�k, teh�t a terjed�si sebess�g <math>2*10<sup>8</sup></math> m/s", jo: false },
                { valasz: "a r�sid� = 2L/C (L a link hossza, C a terjed�si sebess�g) = <math>2*200/2*10<sup>8</sup>=2*10<sup>-6</sup></math> s= 2us", jo: false },
                { valasz: "ez mikrom�sodpercben 2*10<sup>-3</sup>=0,002 ms", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a !WiFi �s !WiMAX szabv�nyra is?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Haszn�lhatnak FHSS-t", jo: false },
                { valasz: "Ugyanabba a h�l�zat kiterjed�s�re utal� kateg�ri�ba sorolhat�k", jo: false },
                { valasz: "F�k�nt a 2,4 GHz-es ISM s�vot haszn�lj�k", jo: false },
                { valasz: "Haszn�lhatnak OFDM-et", jo: true },
                { valasz: "Ugyanazt a fizikai k�zeget haszn�lj�k", jo: true },
                { valasz: "IEEE szabv�nyok", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) ismert (a sz�m�t�g�p-h�l�zatokban is �rdekelt) szabv�nyos�t� szervezet(ek)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "ETSI", jo: true },
                { valasz: "IETF", jo: true },
                { valasz: "ISO", jo: true },
                { valasz: "PDU", jo: false, megjegyzes: "nem szabv�nyos�t� szervezet" },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "ANSI", jo: true },
                { valasz: "IEEE", jo: true },
                { valasz: "ITU", jo: true }
              ]
            },
            { kerdes: "Sz�molja ki, hogy egy 4 Mbit/s adatsebess�g�, 500 m hossz�s�g� r�zvezet�n mekkora egy 1000 b�jtos csomag �tviteli ideje mikroszekundumban!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "4 Mbit/s = 4*10^6 bit/s, 500 m = 5*10^2m, 1000 b�jt = 8*10^3 bit", jo: false },
                { valasz: "�lland�k: c = 2*10^8 m/s, mikroszekundum = 10^-6 s", jo: false },
                { valasz: "K�t r�szb�l tev�dik �ssze:", jo: false },
                { valasz: "Ad�si id�: adatmennyis�g / s�vsz�less�g = 8*10^3 bit / 4*10^6 bit/s = 2*10-3 s = 2000 mikroszekundum", jo: false },
                { valasz: "Terjed�si id�: t�v / sebess�g = 5*10^2 m / 2*10^8 m/s = 2,5*10-6 s = 2,5 mikroszekundum", jo: false },
                { valasz: "�tviteli id�: ad�si + terjed�si id� = 2000 + 2,5 = 2002,5 mikroszekundum", jo: false }
              ]
            },
            { kerdes: "Milyen absztrakt alkot�elemekb�l �p�thet�k fel az inform�ci�tov�bb�t� h�l�zatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "r�di�csatorn�kb�l", jo: false },
                { valasz: "�sszek�t�sekb�l (link)", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "csom�pontokb�l (node)", jo: true },
                { valasz: "f�nyvezet�kb�l", jo: false },
                { valasz: "v�gpontokb�l (end system)", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) jellemz�(ek) a r�selt (slotted) Aloh�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kevesebb �tk�z�s lesz, mint az egyszer� Aloh�n�l azonos forgalom eset�n.", jo: true },
                { valasz: "Jobb a kihaszn�lts�ga, mint az egyszer� Aloh�nak.", jo: true },
                { valasz: "Jelent�sen nagyobb a k�sleltet�se, mint az egyszer� Aloh�nak", jo: false },
                { valasz: "A r�sid� hat�r�n �tny�lhatnak keretek", jo: false },
                { valasz: "A felsoroltak k�z�l egyik v�lasz sem jellemz� a r�selt Aloh�ra", jo: false }
              ]
            },
            { kerdes: "Ha A egy �zenetet k�ld D-nek, majd erre D egy �zenettel v�laszol, akkor ezen k�t �zenet k�z�l melyik fog C-hez is eljutni?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak az els�", jo: false },
                { valasz: "Egyik sem", jo: false },
                { valasz: "Nem �llap�that� meg", jo: true, megjegyzes: "lehet, hogy az eredeti feladat r�szletesebb volt, de �gy biztos ez a j� v�lasz :-)" },
                { valasz: "Mindkett�", jo: false },
                { valasz: "Csak a m�sodik", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely r�teg(ek) NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Interf�sz", jo: true },
                { valasz: "Adategyeztet�si", jo: true },
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmaz�si", jo: false },
                { valasz: "Megjelen�t�si", jo: false },
                { valasz: "Adatbiztons�gi", jo: true }
              ]
            }
         ];
