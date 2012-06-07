       var tesztFeladatok = [
            { kerdes: "Mi�rt sz�ks�ges a TCP �sszek�ttet�s l�trehoz�s�n�l a \"h�romutas k�zfog�s\" harmadik l�p�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Val�j�ban nem sz�ks�ges, csak az \"egys�ges\" elj�r�s miatt haszn�lj�k", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mert �gy a \"h�vott\" f�l megtudja, hogy a v�lasza meg�rkezett a kezdem�nyez�h�z.", jo: true },
                { valasz: "Nincsen harmadik l�p�se a \"h�romutas k�zfog�snak\"", jo: false }
              ]
            },
            { kerdes: "Milyen feladatokat r� a h�l�zati csom�pontokra a TCP �sszek�ttet�s alap� m�k�d�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Az �sszek�ttet�s ment�n �rintett csom�pontokon fel kell jegyezni az �sszek�ttet�s param�tereit", jo: false },
                { valasz: "Az �sszek�ttet�s ment�n �rintett csom�pontokon er�forr�sokat kell foglalni az �sszek�ttet�s kiszolg�l�s�ra", jo: false },
                { valasz: "A kapcsolat param�tereit a szomsz�dos csom�pontokkal k�z�lni kell", jo: false }
              ],
              megjegyzes: "Pl. a routerek, mint h�l�zati csom�pontok, a h�l�zati r�tegben helyezkednek el, �gy nem is tudj�k, hogy TCP vagy nem TCP sz�ll�t�si r�tegen t�rt�nik a kommunik�ci�. �gy nem is tudnak emiatt plusz feladatokat elv�gezni miatta."
            },
            { kerdes: "Mik k�z�tt val�s�t meg logikai kapcsolatot a sz�ll�t�si r�teg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A h�l�zati c�mekkel azonos�tott h�l�zati csatlakoz�si pontok k�z�tt", jo: false },
                { valasz: "Az adatkapcsolati c�mekkel azonos�tott h�l�zati csatol�eszk�z�k k�z�tt", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true }
              ],
              megjegyzes: "Sz�ll�t�si r�teg: alkalmaz�sok (process) k�z�tti logikai kapcsolatok (teh�t programok k�z�tti kapcsolatot hoz l�tre)"
            },
            { kerdes: "Mit ellen�riz az UDP-datagramm hibaellen�rz� k�dja (&#8222;checksum&#8221;)? ",
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
            { kerdes: "Hogyan lehet haszn�lni a port-sz�mokat az alkalmaz�sok azonos�t�s�ra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mindig le kell k�rdezni az alkalmaz�st, hogy milyen sz�m� porton fogad �zeneteket", jo: false },
                { valasz: "Sorsolni kell egy azonos�t�t, �s azt szabadon lehet haszn�lni b�rmely alkalmaz�s el�r�s�re", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) nem a TCP feladata(i)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Forgalomszab�lyoz�s", jo: false },
                { valasz: "A felsoroltak k�z�l egyik sem feladata", jo: false },
                { valasz: "�tvonalv�laszt�s.", jo: true },
                { valasz: "V�lt�s a karakterk�szletek k�z�tt.", jo: true },
                { valasz: "Sorrendhelyes �tvitel", jo: false }
              ]
            },
            { kerdes: "Mi azonos�tja egy UDP adatmez�j�nek felad�j�t �s c�mzettj�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Kiz�r�lag az IP c�mek, mivel az UDP pszeudo fejen kereszt�l belesz�lnak az ellen�rz� �sszegbe", jo: false },
                { valasz: "Az ellen�rz� �sszeg, mivel az igen nagy val�sz�n�s�ggel egyedi", jo: false },
                { valasz: "Kiz�r�lag a port-sz�mok, mivel azok egyediek", jo: false }
              ]
            },
            { kerdes: "A TCP/IP architekt�ra eset�n a h�l�zatnak mely elemei vesznek r�szt a sz�ll�t�si r�tegbeli feladatok ell�t�s�ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A v�gpontok �s a k�zbens� csom�pontok is.", jo: false },
                { valasz: "Csak a k�zbens� csom�pontok", jo: false },
                { valasz: "Csak a v�gpontok", jo: true }
              ],
			  megjegyzes: "SZ�LL�T�SI r�tegr�l k�rdez!"
            },
            { kerdes: "Milyen szolg�ltat�s(oka)t ny�jt az UDP?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik felsorolt szolg�ltat�st sem ny�jtja", jo: false },
                { valasz: "Portkezel�st.", jo: true },
                { valasz: "Hibav�d� k�dol�st a teljes UDP PDU-ra", jo: false },
                { valasz: "Torl�d�svez�rl�st", jo: false },
                { valasz: "Sorrendhelyes �tvitelt", jo: false }
              ]
            },
            { kerdes: "Hogyan viszonyul a TCP/IP protokoll-architekt�ra az adatkapcsolati r�teghez?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "R�szletesen meghat�rozza annak protokolljait", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Egy�ltal�n nem foglalkozik az adatkapcsolati r�teggel", jo: false },
                { valasz: "Csak az adatkapcsolati r�tegben haszn�lt protokollokhoz t�rt�n� csatlakoz�sr�l (interf�szel�sr�l) rendelkezik", jo: true }
              ]
            },
            { kerdes: "Hogyan hat�rozhat� meg a go-back-n �ltal el�rhet� csatornakihaszn�l�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Viszony�tani kell a hib�s csomagok gyakoris�g�t a hib�s + ism�telt csomagok gyakoris�g�hoz", jo: false },
                { valasz: "Viszony�tani kell a sikeres csomagok gyakoris�g�t a sikeres + ism�telt csomagok gyakoris�g�hoz", jo: true },
                { valasz: "Viszony�tani kell a hib�s csomagok gyakoris�g�t a sikeres + ism�telt csomagok gyakoris�g�hoz", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Viszony�tani kell a sikeres csomagok gyakoris�g�t a hib�s + ism�telt csomagok gyakoris�g�hoz", jo: false }
              ]
            },
            { kerdes: "Mi�rt dolgoztak ki k�t sz�ll�t�si protokollt a TCP/IP architekt�r�ban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az els� haszn�lat�n�l nyert tapasztalatok alapj�n jav�tottak", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mindk�t protokoll ugyanazt a szolg�ltat�st ny�jtja, �gy l�nyeg�ben versenyt�rsai egym�snak", jo: false },
                { valasz: "L�nyeg�ben kidolgoztak egy bonyolultabb (jobb szolg�ltat�st ny�jt�), �s egy egyszer�bb protokollt kev�s szolg�ltat�ssal.", jo: true }
              ]
            },
            { kerdes: "Mit kell �rteni azon, hogy a TCP pufferelt �tvitelt val�s�t meg?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP t�rolja az adatokat, �s csakis az alkalmaz�s parancs�ra tov�bb�tja azokat", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true },
                { valasz: "Az alkalmaz�snak kell t�roli a m�g nem nyugt�zott adatokat", jo: false }
              ]
            },
            { kerdes: "Mit jelent a TCP b�jt-stream sz�ll�t�si szolg�ltat�s�ban a strukt�r�latlans�g?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�.", jo: false },
                { valasz: "Nem veszi tekintetbe az alkalmaz�s �ltal haszn�lt t�rdel�st", jo: true },
                { valasz: "Nincs tekintettel a b�jt-sorrendre", jo: false }
              ],
              megjegyzes: "With stream data transfer,TCP delivers an unstructured stream of bytes identified by sequence numbers. This service benefits applications because that the application does not have to chop data into blocks before handing it off to TCP. TCP can group bytes into segments and passes them to IP for delivery. -vagyis az alkalmaz�snak nem is kell t�rdelnie."
            },
            { kerdes: "Milyen \"eszk�z�k\" �llnak rendelkez�sre a csomaghib�k kezel�s�re?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Pozit�v nyugta hi�nya vagy negat�v nyugta k�ld�se", jo: true },
                { valasz: "Konvol�ci�s k�d alkalmaz�sa", jo: true, megjegyzes: "(egy fajta hibajav�t� k�d)" },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hibafelder�t� k�dol�ssal ellen�rizhet� a csomag \"�ps�ge\"", jo: true },
                { valasz: "Pozit�v nyugta k�ld�se", jo: false, megjegyzes: "(Csak ennek hi�nya seg�t benn�nket)" }
              ],
            },
            { kerdes: "Mi a szerep�k a forgalomszab�lyoz�sban a forgalomle�r�knak (traffic descriptors)?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Lehet�v� teszik a h�l�zat megfelel� m�retez�s�t", jo: false },
                { valasz: "Lehet�v� teszik, megalapozz�k szolg�ltat�si szerz�d�sek megk�t�s�t", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Lehet�v� teszik a szolg�ltat� r�sz�re a h�l�zati szolg�ltat�s ig�nybev�tel�nek ellen�rz�s�t", jo: true }
              ]
            },
            { kerdes: "A csomagok sorsz�moz�s�val az al�bbiak k�z�l mely hib�k jav�that�ak tov�bbi hibajav�t� m�dszerek alkalmaz�sa n�lk�l?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csomagok sorrendj�nek megv�ltoz�sa", jo: true },
                { valasz: "Csomagok t�bbsz�r�z�d�se", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Csomagveszt�s", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�sok igaz a Forward Error Correction hibajav�t� elj�r�sra?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A fogad� tov�bb�tja a hib�s �zenetet a k�ld�nek, hogy az a jav�t�st elv�gezhesse", jo: false, megjegyzes: "Ez volt j�nak megjel�lve, h�t WTF... 1: helyben jav�tja, �gy nem k�ldd vissza semmit, 2: az�rt k�ldj�k vissza, hogy a K�LD� megjav�tsa!? :D akkor nem lenne egyszer�bb a k�ld�nek �jrak�ldenie?" },
                { valasz: "Hat�konys�ga f�gg a k�r�lfordul�si id�t�l", jo: false, megjegyzes: "Nem, mert ilyenkor a v�tel hely�n t�rt�nik a jav�t�s, nem kell semmit se visszak�ldeni" },
                { valasz: "Csak hibajelz� k�dol�st haszn�l", jo: false, megjegyzes: "!HibaJAV�T� k�dol�st haszn�l" },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true }
              ],
              megjegyzes: "Forward Error Correction (FEC) = megel�z� hibajav�t�s == hibajav�t� k�dol�s. A vev� megpr�b�lja kijav�tani a hib�kat a redund�ns, hibajav�t� k�d seg�ts�g�vel, amit a k�ld� belerakott a csomagba."
            },
            { kerdes: "Mi�rt haszn�l a TCP 32 bit hossz� sorsz�mot?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Mert �gy t�bb, mint n�gymilli�rd szegmenst el lehet k�ldeni an�lk�l, hogy a sz�m k�rbefordulna", jo: true, megjegyzes: "Wikiben ez van, de ez nem biztos l�sd alul" },
                { valasz: "Semmi jelent�s�ge, csak kedvelt a 4 b�jt hossz� egys�g ebben a k�rben", jo: false }
              ],
			  megjegyzes: "It was determined that to help ensure the integrity of TCP/IP connections, every stream should be assigned a unique, random sequence number. The TCP sequence number field is able to hold a 32-bit value, and 31-bit is recommended for use by RFC specifications. An attacker wanting to establish connection originating from a fake address, or to compromise existing TCP connection integrity by inserting malicious data into the stream would have to know the Initial Sequence Number -vagyis szerintem a biztons�g miatt van 32 bit."
            },
            { kerdes: "Melyik �ll�t�sok igazak a Automatic Repeat Request hibajav�t� megold�sra?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A vev� megpr�b�lja jav�tani a hib�t, �s ha az nem siker�l, akkor ism�tl�st k�r a k�ld�t�l.", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Hat�konys�ga f�gg a k�r�lfordul�si id�t�l", jo: true },
                { valasz: "Csomagveszt�ses csatorn�n cs�kken a hat�konys�ga", jo: true }
              ]
            },
            { kerdes: "K�t �llom�s egym�s k�z�tt cs�sz�ablakos (sliding window) forgalomszab�lyoz�st haszn�l. A kommunik�ci�s csatorna 1Mbit/sec �tviteli sebess�get tesz lehet�v� a k�ld�t�l a fogad� fel�. Tegy�k fel, hogy az ad� �llom�s 1000bit hossz� csomagokat k�ld. A link k�r�lfordul�si ideje (RTT) 5 msec, a cs�sz�ablak m�rete pedig 3 csomagnyi. Mekkora a csatorna kihaszn�lts�ga?",
              tipus: "valaszolos",
              valasz: "Kihaszn�lts�g = %$ \\frac{3*\\frac{1000}{10^6}}{5*10^{-3}+\\frac{1000}{10^6}}=0,5 $% (l�sd SzgHalokGyakorlatok)"
            }
         ];
