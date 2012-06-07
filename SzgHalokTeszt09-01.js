 var tesztFeladatok = [
            { kerdes: "Mi igaz a termikus zajra �ltal�ban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Gaussi eloszl�s�", jo: true },
                { valasz: "Minden zaj megfelel� elektrom�gneses �rny�kol�ssal megsz�ntethet�", jo: false },
                { valasz: "V�rhat� �rt�ke nulla", jo: true },
                { valasz: "A jelhez hozz�ad�dik", jo: true },
                { valasz: "�tviteli hib�t okozhat", jo: true }
              ]
            },
            { kerdes: "Egy �tvitel sor�n a +3 V, +1 V, -1 V �s -3 V fesz�lts�gszinteket haszn�ljuk. H�ny volt fesz�lts�gn�l legyen a d�nt�si k�sz�b a fels� k�t jelszint k�z�tt, ha a zaj Gauss-eloszl�s�?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "+5 V", jo: false },
                { valasz: "+3 V", jo: false },
                { valasz: "+2,5 V", jo: false },
                { valasz: "+2 V", jo: true },
                { valasz: "+ pi/2 V", jo: false },
                { valasz: "+1,5 V", jo: false },
                { valasz: "+1 V", jo: false },
                { valasz: "0 V", jo: false }
              ]
            },
            { kerdes: "Mely(ek) a protokollanaliz�tor szerepe(i) az al�bbiak k�z�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati forgalom �rtelmez�se", jo: true },
                { valasz: "A h�l�zati forgalom megjelen�t�se.", jo: true },
                { valasz: "A h�l�zati forgalom r�gz�t�se.", jo: true },
                { valasz: "A h�l�zati forgalom gener�l�sa", jo: true },
                { valasz: "Protokollok szimul�lt tesztel�se.", jo: false, megjegyzes: "K�rd�ses" },
                { valasz: "A h�l�zati forgatom visszaj�tsz�sa", jo: false }
              ],
			  megjegyzes: "http://alpha.tmit.bme.hu/meresek/5-9.htm"
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a QPSK-ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WLAN-okban is haszn�lj�k", jo: true, megjegyzes: "802.11a haszn�lja a wikipedia szerint" },
                { valasz: "A viv�frekvenci�t v�ltoztatjuk", jo: false },
                { valasz: "Minden szimb�lumot azonos amplit�d�j� jel k�pvisel", jo: true },
                { valasz: "Egy szimb�lummal 4 bit vihet� �t", jo: false, megjegyzes: "biztosan nem j�, mert 2 bit vihet� �t" },
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk.", jo: true }
              ]
            },
            { kerdes: "Mi�rt nem EGY inform�ci�tov�bb�t� protokollt haszn�lunk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fejleszt�sek sor�n egym�st�l t�bb�-kev�sb� elt�r� megold�sok alakultak ki ugyanarra a feladatra, amelyek annyira elterjedtek, hogy nem lehet �ket megsz�ntetni", jo: false },
                { valasz: "Az inform�ci�tov�bb�t�s olyan �sszetett tev�kenys�g, hogy c�lszer� r�szfeladatokra t�rdelni, amelyek mindegyike k�l�n protokollal szab�lyozand�", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az NRZI k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nem tartalmaz nullafrekvenci�s (DC) komponenst.", jo: true },
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja", jo: false },
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek", jo: false }
              ]
            },
            { kerdes: "Az al�bbi �llt�sok k�z�l mely(ek) igaz(ak) a 8PSK-ra? ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk", jo: true },
                { valasz: "A viv�hull�m frekvenci�j�t v�ltoztatjuk", jo: false },
                { valasz: "Egy szimb�lummal 8 bit vihet� �t", jo: false },
                { valasz: "Minden szimb�lum azonos amplit�d�j�", jo: true }
              ]
            },
            { kerdes: "Az ISO OSI referencia modell a protokollarchitekt�r�k viszony�t�s�nak alapvet� eszk�ze.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) az On-Off Keyingre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A bitsorozatnak megfelel�en v�ltozik a frekvencia", jo: false },
                { valasz: "K�nny� a csatorna foglalts�g�nak �rz�kel�se.", jo: false, megjegyzes: "Az is jel, hogy nincs jel, ez el�gg� megnehez�ti..." },
                { valasz: "A konstell�ci�s diagramj�n 2 �llapotot jel�l� pont tal�lhat�", jo: true, megjegyzes: "Vagy van jel vagy nincs jel, teh�t k�t �llapot van" },
                { valasz: "Ez egyfajta ASK.", jo: true }
              ],
			  megjegyzes: "Az �br�r�l is l�tszik-> 2012.02.16_Fizikai1.pdf, 36.o.: http://sdrv.ms/L50CuR"
            },
            { kerdes: "A vez�rl� s�k protokolljai f�k�nt az �sszek�ttet�sek kezel�s��rt felel�sek.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s igaz egy PDU be�gyaz�d�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak fejet (header) kap", jo: false },
                { valasz: "Csak farkat (trailer) kap", jo: false },
                { valasz: "Mindig kap fejet (header), de farkat (trailer) csak opcion�lisan", jo: true, megjegyzes: "A jegyzetben sz�gletes z�r�jelben van a farok" },
                { valasz: "Sem fejet (header), sem farkat (trailer) nem kap", jo: false },
                { valasz: "Mindig kap fejet (header) �s farkat (trailer)", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a Manchester k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron", jo: false },
                { valasz: "Nem tartalmaz nullafrekvenci�s (DC) komponenst.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek.", jo: true },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az NRZ k�dol�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csupa 0 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A 0 �rt�ket mindig az alacsony jelszint azonos�tja.", jo: true },
                { valasz: "Tartalmaz nullafrekvenci�s (DC) komponenst", jo: false },
                { valasz: "A csupa 1 bitsorozat eset�n elveszhet a szinkron.", jo: true },
                { valasz: "A jelv�ltoz�s frekvenci�ja k�tszerese a bitsebess�gnek", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s igaz a szimb�lumra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy szimb�lumot reprezent�lhat egy pont a konstell�ci�s diagramon", jo: true },
                { valasz: "Egy szimb�lumot reprezent�lhat egy frekvencia", jo: true },
                { valasz: "Egy vagy t�bb bit jelent�s�t hordoz� elemi jel", jo: true },
                { valasz: "A szimb�lumok csak p�r�s�val vihet�k �t kommunik�cios csatorn�n", jo: false },
                { valasz: "Egy szimb�lumot reprezent�lhat egy fesz�lts�gszint", jo: true, megjegyzes: "amplit�d�k�dol�s a neve" }
              ]
            },
            { kerdes: "A h�l�zat csom�pontjaiban a protokollarchikt�ra a v�gpontok�val megegyez� m�don- az �sszes r�teg implement�l�s�val- ker�l kialak�t�sra",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely igaz az FSK modul�ci�ra",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m amplit�d�j�t v�ltoztatjuk", jo: false },
                { valasz: "El��ll�t�sa �s demodul�l�sa egyszer�", jo: true },
                { valasz: "A viv�ferekvenci�t v�ltoztatjuk", jo: true },
                { valasz: "viv�hull�m f�zis�t v�ltoztatjuk", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s igaz az al�bbiak k�z�l az ISO OSI szerint PDU- elnevez�sekkel kapcsolatban ",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati r�tegbeli PDU neve : csomag(packet)", jo: true },
                { valasz: "A fizikai r�tegbeli PDU neve : �zenet (message)", jo: false },
                { valasz: "Minden r�teg PDU-j�ra hivatalosan haszn�lh� a csomag elnevez�s", jo: false },
                { valasz: "A adatkapcsolati r�tegbeli PDU neve : keret (frame)", jo: true },
                { valasz: "A sz�ll�t�si r�teg beli PDU neve : szegments (segment)", jo: true }
              ]
            },
            { kerdes: "8PSK eset�n mekkora a null�t�l k�l�nb�z� legkisebb pozit�v f�zistol�s m�rt�ke fokban?",
              tipus: "valaszolos",
              valasz: "45"
            },
            { kerdes: "A protokollok ler�gz�t�s�n�l el�nyben kell r�szes�teni a term�szetes nyelven t�rt�n� le�r�s�t.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) a szimb�lumsebess�gre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Bin�ris jel�tvitel eset�n megegyezik a bitsebess�ggel.", jo: true },
                { valasz: "M�rt�kegys�ge: baud vagy Bd", jo: true },
                { valasz: "A jel terjed�si sebess�ggel egyenesen ar�nyos", jo: false },
                { valasz: "Jelz�si sebess�g�nek is nevezik.", jo: true }
              ]
            },
            { kerdes: "Mi a felt�tele annak, hogy egy protokoll-architekt�ra valamely r�teg�ben a megval�s�t�st megv�ltoztassuk?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a felette l�v� r�teg - amely szolg�ltat�st ny�jt - hozz�j�rul�s�ra van sz�ks�g", jo: false },
                { valasz: "A szomsz�d r�t�gek hozz�j�rul�sa sz�ks�ges", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Mit �rt�nk azon, hogy a protokollarchitekt�ra megfelel� r�tegei k�z�tt virtu�lis kapcsolat j�n l�tre?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az egyik v�gpont n. r�tege �ltal k�ld�tt PDU k�zvetlen�l �tjut a m�sik v�gpont n. r�teg�be", jo: false },
                { valasz: "�gy tekinthet�nk a v�gpontok n. r�tegei k�z�tti kapcoslatokra - elfedve a n. r�teg alatt m�k�d�st -, mintha azok egym�ssal k�zvetlen kapcsolatban �lln�nak.", jo: true },
                { valasz: "Az ISO OSI referenciamodellben egy virtu�lis r�teg is l�trej�n", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Azt az elvet �s folyamatot, mely sor�n a magasabb r�tegb�l �rkez� protokoll-adategys�g als�bb r�tegek fel� haladva kieg�sz�t� inform�ci�kkal ker�l ell�t�sra, bor�t�kol�snak, be�gyaz�d�snak (encapsulation) nevezz�k.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Mi t�rt�nik, ha egy n�gysz�gjelet s�vhat�rolt csatorn�n visz�nk �t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A n�gysz�gjel sz�gletess�ge megsz�nik", jo: true },
                { valasz: "A nagyobb frekvenci�j� felharmonikusok elt�nnek", jo: true },
                { valasz: "A kisebb frekvenci�j� felharmonikusok elt�nnek", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A jel invert�l�dik", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l melyek NEM szerepel(nek) az ISO OSI referenciamodellben?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Fizikai", jo: false },
                { valasz: "Alkalmaz�si", jo: false },
                { valasz: "Adatkapcsolati", jo: false },
                { valasz: "Adategyeztet�si", jo: true },
                { valasz: "Interf�sz", jo: true },
                { valasz: "Megjelen�t�si", jo: false },
                { valasz: "Adatbiztons�gi", jo: true },
                { valasz: "Fizikaik�zeg-f�gg�", jo: true },
                { valasz: "K�zeghozz�f�r�s-vez�rl�si", jo: true },
                { valasz: "Menedzsment", jo: true }
              ]
            },
            { kerdes: "64QAM eset�n 16 szimb�lummal h�ny b�jtot visz�nk �t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "6", jo: false },
                { valasz: "12", jo: true, megjegyzes: "64 lehet�s�get 6 bit �r le, egy szimb�lum teh�t 6 bites. 16 szimb�lum teh�t 6*16=96 bit, ami 96/8=12 b�jt" }
              ]
            },
            { kerdes: "Mi jellemezi a felhaszn�l�i s�k protokolljait?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Biztos�tj�k a felhaszn�l�i inform�ci�nak a legr�videbb �ton t�rt�n� c�lba juttat�s�t", jo: false },
                { valasz: "A felhaszn�l�k tov�bb�t�sra sz�nt inform�ci�j�t kezelik (el��ll�tj�k, �rtelmezik).", jo: true },
                { valasz: "Gondoskodnak a felhaszn�l�i inform�ci� sz�ll�t�s�nak hib�tlans�g�r�l. �������", jo: false },
                { valasz: "Egyik v�lasz sem j�. ���", jo: false }
              ]
            },
            { kerdes: "A bin�ris jel�tvitelhez k�pest h�nyszoros lesz a bitsebess�g, ha 8 szint� jelet visz�nk �t azonos szimb�lumsebess�ggel?",
              tipus: "valaszolos",
              valasz: "3* -- mivel szimb�lumonk�nt 3 bit"
            },
            { kerdes: "H�nyszoros�ra n� a bitsebess�g, ha QPSK-r�l 16QAM-re v�ltunk azonos szimb�lumsebess�g mellett?",
              tipus: "valaszolos",
              valasz: "2"
            },
            { kerdes: "Az al�bbi �ll�t�sok k�z�l mely(ek) igaz(ak) az ASK modul�ci�ra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A viv�hull�m f�zis�t v�ltoztatjuk", jo: false },
                { valasz: "A viv�hull�m amplit�d�j�t v�ltoztatjuk.", jo: true },
                { valasz: "Lehet k�t- vagy t�bbszint�.", jo: true },
                { valasz: "A konstell�ci�s diagramon az �llapotoknak megfelel� pontok egy egyenes ment�n helyezkednek el", jo: true },
                { valasz: "A viv�hull�m frekvenci�j�t v�ltoztatjuk", jo: false }
              ]
            },
            { kerdes: "Mit olvashatunk le egy szem�br�r�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A jelterjed�si sebess�get", jo: false },
                { valasz: "A \"szem\" �ltal meghat�rozott h�romsz�g sz�geit", jo: false },
                { valasz: "Id�z�t�si hib�t.", jo: true },
                { valasz: "A tov�bb�tott bitek �rt�k�t", jo: false },
                { valasz: "A jelre rak�dott zajt.", jo: true }
              ],
            }
         ];