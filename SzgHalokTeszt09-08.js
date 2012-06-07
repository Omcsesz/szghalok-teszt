       var tesztFeladatok = [
            { kerdes: "Mi a f� jellemz�je a Real-time Transport Protocol-nak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A TCP-UDP egy lehets�ges alternat�v�ja", jo: false },
                { valasz: "Biztos�tja a m�dia sz�ll�t�s�nak min�s�g�t", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ],
			  megjegyzes: "Mi az RTP �s mi nem: 1. a payloadj�ban m�dia-, pl. besz�dinform�ci�t hordoz 2. sz�ll�t�si protokoll felett m�k�dik 3. t�mogatja a m�diafolyamok (streamek) sz�ll�t�s�t 4.nem ny�jt QoS garanci�t"
            },
            { kerdes: "Melyek a Real Time Streaming Protocol (RTSP) legf�bb jellemz�i?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Ez egy vez�rl� protokoll, amely nem veszt r�szt a felhaszn�l�i adatok sz�ll�t�s�ban", jo: true },
                { valasz: "Ezt dolgozt�k ki az RTP felv�lt�s�ra", jo: false }
              ]
            },
            { kerdes: "Milyen logikai r�szeket tartalmaz a Session Initiation Protocol User Agent-je?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "User Agent Server", jo: true },
                { valasz: "User Agent Controller", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mi sz�ks�g van a m�diafolyam darabjainak \"id�b�lyegz�s�re\"?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Val�j�ban nem felt�tlen�l sz�ks�ges, mert a sorsz�mok �s a t�pusra vonatkoz� jellemz�k alapj�n egy�bk�nt is lehets�ges a helyes rekonstrukci�", jo: false },
                { valasz: "Az�rt kell, mert a k�ld� �s a fogad� �r�i nem j�rnak pontosan egy�tt", jo: false },
                { valasz: "Egyik v�lasz sem j�.", jo: true, megjegyzes: "Timestamp: Az RTP csomag els� oktettj�nek megfelel� poz�ci� val�di ideje a m�diafolyamban" }
              ]
            },
            { kerdes: "Milyen m�don m�k�dik egy�tt a Session Initiation Protocol eset�n a Proxy Server �s a Location Server?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nincs k�z�tt�k semmilyen egy�ttm�k�d�s", jo: false },
                { valasz: "A Proxy Server a User Agent Client-t�l �rkez� INVITE �zenet c�mzettj�t ellen�rzi a Location Servern�l, �s ezut�n tov�bb�tja a h�votthoz", jo: true, megjegyzes: "A registrar-on kereszt�l ellen�rzi a Location Servern�l" }
              ]
            },
            { kerdes: "Melyek a Session Initiation Protocol legfontosabb jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kombin�lhat� mindenf�le web-alap� szolg�ltat�ssal", jo: true },
                { valasz: "IP-k�zpont�", jo: true, megjegyzes: "ink�bb azt mondan�m, hogy IP f�l�tt - pontosabban UDP/IP vagy TCP/IP f�l�tt m�k�dik" },
                { valasz: "�llapotalap�, bin�ris protokoll", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Hogyan oldj�k meg azt, hogy az RTCP �ltal keltett forgalom �sszer� hat�rokon bel�l maradjon?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak a vev�-v�gpontok k�ldenek jelent�seket", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "Korl�toz�s: 5!% RTCP forgalom, t�bbi RTP" },
                { valasz: "A szinkroniz�l� forr�s (SSRC) meghat�rozza a v�gpontok report-jainak gyakoris�g�t", jo: false }
              ]
            },
            { kerdes: "Mi�rt nevezz�k az RTP-t real-time protokollnak?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert seg�ti a val�sidej� forgalom tov�bb�t�s�t fontos jellemz�k �tvitel�vel.", jo: true },
                { valasz: "Egyik v�lasz sem helyes", jo: false },
                { valasz: "Mert k�sleltet�s �s veszt�s n�lk�l �tviszi a val�sidej� forgalmat", jo: false },
                { valasz: "Mert folyamatosan �tviszi a val�di id�t", jo: false }
              ]
            },
            { kerdes: "Mi a szerepe a H.323 alapj�n m�k�d� h�l�zatban a Gatekeeper-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vez�rli a konferencia-�sszek�ttet�seket", jo: false },
                { valasz: "Minden esetben rajta kereszt�l folyik a h�v�svez�rl�s", jo: false },
                { valasz: "Biztos�tja az egy�ttm�k�d�st m�s h�l�zatokkal", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true, megjegyzes: "Beenged�s-szab�lyoz�s, maga a h�v�svez�rl�s opcion�lisan mehet a GK-en kereszt�l -a m�dia nem-, er�forr�s-menedzsment, autentik�ci�" }
              ]
            },
            { kerdes: "Mi az alapvet� szerepe az RTCP-nek?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Lehet�v� teszi egy m�dia session r�sztvev�inek az �tviteli jellemz�k megfigyel�s�t", jo: true },
                { valasz: "Lehet�v� teszi egy m�dia session r�sztvev�inek az �tviteli jellemz�k garant�l�s�t", jo: false },
                { valasz: "Lehet�v� teszi m�dia session-�k l�trehoz�s�t �s elbont�s�t", jo: false }
              ],
			  megjegyzes: "RTCP: Real-time Transport Control Protocol"
            },
            { kerdes: "T�m�r�tett fejr�szek eset�n kb. h�ny sz�zal�kkal n� az �tvitelisebess�g-ig�ny a besz�d �ltal ig�nyelt nett� sebess�ghez k�pest ?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Kevesebb, mint 1%-al", jo: false },
                { valasz: "Nagym�rt�kben f�gg a besz�dt�m�r�t�s m�rt�k�t�l, �s �gy n�h�ny %-t�l 10�20%-ig v�ltozhat", jo: true }
              ]
            },
            { kerdes: "Melyik NEM tartozik a SIP �p�t�elemek k�z� az al�bbiak k�z�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Foreign Agent", jo: true },
                { valasz: "Redirection Server", jo: false },
                { valasz: "Registrar", jo: false },
                { valasz: "User Agent", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ],
			  megjegyzes: "M�g lehet a Location Server, b�r ezt nem eml�tik explicit �p�t�elemk�nt a di�k."
            },
            { kerdes: "Milyen feladatokat l�t el a Session Initiation Protocol?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "T�mogatja a mobilit�st.", jo: true },
                { valasz: "Egy kommunik�ci�s session megnyit�s�val, fenntart�s�val, jellemz�ivel kapcsolatos inform�ci�kat tov�bb�tja, kezeli.", jo: true },
                { valasz: "Kezeli a felhaszn�l�k helyzetinform�ci�it, t�mogatja pl. a h�v�s�tad�st.", jo: true }
              ]
            },
            { kerdes: "Miben k�l�nb�zik egym�st�l a Session Initiation Protocol-ban a Request �s a Response �zenetek fel�p�t�se?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az �zenetek fejr�sze teljesen k�l�nb�z�", jo: false },
                { valasz: "Csak az �zenetek t�rzsr�sze (body) k�l�nb�zik", jo: false }
              ]
            },
            { kerdes: "Milyen szolg�ltat�sokat ny�jt az RTP a m�diastreaming-alkalmaz�snak?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�rtes�ti a h�l�zati csom�pontokat a m�diafolyam kiszolg�l�si ig�nyeir�l", jo: false },
                { valasz: "Megjel�li a m�diafolyam darabjainak keletkez�si id�pontj�t.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Hordozza a m�diat�pus jellemz�it.", jo: true, megjegyzes: "Profile-ok" },
                { valasz: "Sorsz�mozza a m�diafolyam darabjait.", jo: true, megjegyzes: "Sequencenumber" }
              ]
            },
            { kerdes: "A Real-time Transport Protocol �ltal haszn�lt id�b�lyeg (timestamp) lehet�v� teszi:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomag tartalm�nak a megfelel� id�ben t�rt�n� megjelen�t�s�t.", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A csomagveszt�s kider�t�s�t", jo: false }
              ],
			  megjegyzes: "Timestamp - Az RTP csomag els� oktettj�nek megfelel� poz�ci� val�di ideje a m�diafolyamban"
            },
            { kerdes: "Miben k�l�nb�zik a SIP �zenetek form�ja a H.323 �zenetek�t�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "A SIP �zenetek sokkal t�m�rebbek, mint a H.323 �zenetei", jo: false, megjegyzes: "SIP j� kis \"szaftos\" HTML szer� k�dot ad" },
                { valasz: "A H.323 �zenetei sz�vegesek, szemben a SIP �zenetek bin�ris form�j�val!", jo: false, megjegyzes: "SIP sz�veges" }
              ]
            },
            { kerdes: "Milyen feladatok elv�gz�s�nek m�dj�r�l int�zkedik a H.323 szabv�nycsal�d?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomag- �s �ramk�rkapcsolt h�l�zatok k�z�tti egy�ttm�k�d�sr�l", jo: true },
                { valasz: "A jelz�s�tvitelr�l", jo: true },
                { valasz: "M�dia (audi�-, vide�-) k�dol�sr�l", jo: true },
                { valasz: "A m�diafolyam szervez�s�r�l (streaming)", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Hogyan val�s�tja meg a Session Initiation Protocol a felhaszn�l�k k�vet�s�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nem val�s�t meg k�vet�st, a h�v� f�lnek kell kider�tenie a h�vott aktu�lis c�m�t", jo: false },
                { valasz: "Ezt a Proxy Server val�s�tja meg", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "A Redirect Server tudja meg a Location Server-t�l az aktu�lis c�met.", jo: true }
              ]
            },
			{ kerdes: "Milyen feladatot l�t el �s mi a jellemz�je a Session Description Protocol-nak (SDP)?",
			tipus: "tobbet_jelolo",
			valaszok: [
                { valasz: "Meghat�rozza a kapcsolatban r�sztvev�knek az inform�ci�cser�re vonatkoz� legfontosabb jellemz�it (a m�dia t�pus�t, a haszn�lt portot, stb", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Val�j�ban ezt nem is igaz�n lehet protokollnak nevezni, ink�bb egy le�r� forma", jo: true },
              ]
            }
			
         ];
