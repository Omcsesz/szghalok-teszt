        var tesztFeladatok = [
            { kerdes: "Az al�bbiakban a !WiFi csatorn�k a frekvenciatartom�ny beli sorrendnek megfelel� sorsz�mmal adottak. Mely eset(ek)ben nem lesz �tlapol�d� csatorna, ha egyszerre az adott csatorn�kat k�v�njuk haszn�lni? (A feladatban a 2,4 GHz-es s�vban 13 csatorn�t felt�telez�nk.)",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "1; 2 ; 3", jo: false },
                { valasz: "Minden felsorolt konfigur�ci� eset�n lesz �tlapol�d�s", jo: false },
                { valasz: "2; 5; 11", jo: false },
                { valasz: "1; 6; 13", jo: true },
                { valasz: "4; 8; 13", jo: false }
              ]
            },
            { kerdes: "Melyek az �ramk�rkapcsol�s legfontosabb jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Nincs forgalom-torl�d�s csak kiszolg�l�s el�tti esetleges blokkol�s.", jo: true },
                { valasz: "A kommunik�l� v�gpontok k�z�tt ki�p�l� fizikai csatorna dedik�lt haszn�lat�.", jo: true },
                { valasz: "Fizikai kapcsolat �p�l ki a kommunik�l� v�gpontok k�z�tt.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A csom�pontok t�rol�s-mentesen tov�bb�tj�k a felhaszn�l�i inform�ci�t.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) WLAN m�k�d�si m�dok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Kiegyenl�tett", jo: false },
                { valasz: "Logikai gy�r�", jo: false },
                { valasz: "Mesh", jo: true },
                { valasz: "Infrastruktu�lis", jo: true },
                { valasz: "Ad-hoc", jo: true }
              ]
            },
            { kerdes: "Mikor lehet �rdemes haszn�lni az RTS/CTS m�dszert?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak hibakeres�shez", jo: false },
                { valasz: "Ha sok a nagy forgalm� �llom�s.", jo: true },
                { valasz: "Ha a WLAN-�llom�sok egym�shoz nagyon k�zel vannak", jo: false },
                { valasz: "Ha el�fordulhat a rejtett �llom�s probl�ma.", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mi okozza a blokkol�st az �ramk�rkapcsolt h�l�zat csom�pontj�ban (kapcsol�j�ban) forgalmi t�lterhel�skor?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csom�pont valamennyi t�rol�ja m�r megtelt", jo: false },
                { valasz: "A k�v�nt kimenet m�r haszn�latban van egy m�sik csatorna sz�m�ra.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Nincs szabad �t a kapcsol�ban az �sszek�tni k�v�nt be- �s kimenet k�z�tt.", jo: true }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyok k�z�l mely(ek) haszn�lhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A felsoroltak k�z�l egyik sem haszn�lhat FHSS-t", jo: false },
                { valasz: "802.11", jo: true },
                { valasz: "802.3", jo: false },
                { valasz: "802.15.1", jo: true },
                { valasz: "802.16", jo: false }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyos technol�gi�k k�z�l mely(ek) haszn�lhat(nak) FHSS-t?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: true },
                { valasz: "!WiMAX", jo: false },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak k�z�l egyiksem haszn�lhat FHSS-t", jo: false }
              ]
            },
            { kerdes: "Az �sszek�ttet�s-mentes m�don m�k�d� csomagkapcsolt h�l�zatban nincs a kommunik�l� v�gpontok k�z�tt el�re \"ki�p�tett\" (ler�gz�tett) �sszek�ttet�s, minden csomagot valamennyi �rintett csom�pont \"eml�kezet n�lk�l\" megvizsg�l �s csomagonk�nt egyedi d�nt�st hozva tov�bb�t.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "A 802.15 WPAN �s a 802.16 WMAN szabv�nyok egyar�nt magukba foglalj�k a logikai link-vez�rl�st is.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l milyen modul�ci�t alkalmazhat egy 802.11-es szabv�nyt�megval�s�t� eszk�z?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi felsorolt v�lasz egyike sem helyes", jo: false },
                { valasz: "DSSS", jo: true, megjegyzes: "802.11b, 802.11-1997, ..." },
                { valasz: "FHSS", jo: true, megjegyzes: "802.11-1997" },
                { valasz: "OFDM", jo: true, megjegyzes: "802.11a, ..." },
                { valasz: "FM (frekvenciamodul�ci�)", jo: false }
              ]
            },
            { kerdes: "Mi�rt haszn�lnak 4 MAC c�met a 802.11 protokollban?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A c�m megism�tl�s�re haszn�lj�k, hogy a r�di�s k�zegen el�fordul� gyakoribb bithiba miatt s�r�l� c�m biztosan �p maradjon", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Ez�ltal lehet egy�rtelm�v� tenni, hogy a keret honnan hov� megy.", jo: true },
                { valasz: "Jelenleg csak 2 c�met haszn�lnak bel�le, de a j�v�beli funkci�k sz�m�ra hoztak l�tre tov�bbi 2 c�mmez�t", jo: false }
              ]
            },
            { kerdes: "A 802.11-nek melyik k�zeg-hozz�f�r�si m�dszere haszn�lja a Network Allocation Vectort?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az RTS/CTS haszn�lja.", jo: true },
                { valasz: "A PCF haszn�lja", jo: false },
                { valasz: "A 802.11-ben a Network Allocation Vectort nem haszn�lj�k", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s igaz�blokkol�ssal kapcsolatban a csomagkapcsol�k eset�n?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsol�s velej�r�ja a forgalmi t�lterhel�sn�l bek�vetkez� csomag(forgalom)torl�d�s.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A torl�d�s eredm�nye az �tlagosn�l nagyobb csomagk�sleltet�s, esetleg csomagveszt�s.", jo: true },
                { valasz: "Az �ramk�rkapcsol�ssal megegyez� m�don nem j�n l�tre blokkol�s.", jo: true }
              ]
            },
            { kerdes: "Melyek a h�l�zatok alapvet� m�k�d�si m�djai?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�ramk�r-kapcsolt m�k�d�sm�d", jo: true },
                { valasz: "�sszek�ttet�s-mentes m�k�d�s", jo: false },
                { valasz: "�sszek�ttet�s alap� m�k�d�s", jo: false },
                { valasz: "csomagkapcsolt m�k�d�sm�d", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ],
			  megjegyzes: "A m�sik kett� is lehetne ak�r j�, de azok szerintem nem alapvet�ek, mivel a csomagkapcsolt egy-egy esetei."
            },
            { kerdes: "Mi a viszonya az IEEE 802.11 szabv�nycsal�dnak �s a Wi-Fi�Alliance-nek egym�shoz?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A Wi-Fi Alliance l�nyeg�ben egy�ttm�k�d�s a gy�rt�k �s a piaci szerepl�k k�z�tt a szabv�ny bevezet�s�re", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Gyakorlatilag ugyanaz a \"viszony\", mint a 802.16 szabv�ny �s a !WiMAX forum k�z�tt", jo: true, megjegyzes: "2010_03_09-BWA - 23. oldal" }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely WLAN-szab�ny(ok) elm�leti maxim�lis sebess�ge 54 Mbit/s?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "802.11g", jo: true },
                { valasz: "802.11a", jo: true },
                { valasz: "802.11b", jo: false },
                { valasz: "802.11n", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely m�dszer(ek) seg�ts�g�vel lehet az �tk�z�seket elker�lni�a 802.11 protokollban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "RTS/CTS m�dszerrel.", jo: true },
                { valasz: "DCF m�ddal.", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyiksem helyes", jo: false },
                { valasz: "�tk�z�sdetekt�l�sal", jo: false },
                { valasz: "PCF m�ddal.", jo: true }
              ]
            },
            { kerdes: "A Bluetooth piconetben egyidej�leg legfeljebb 255 Slave �llom�s lehet akt�v.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) az adatsz�r� (broadcast) h�l�zatokkal kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "L�nyeg�ben �ramk�rkapcsol�st v�geznek", jo: false },
                { valasz: "Nem alkalmaznak kapcsol�st a v�gpontok k�z�tti kommunik�ci�s csatorn�k l�trehoz�s�ra.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Jellegzetesen lok�lis k�rnyezetben m�k�dnek.", jo: true }
              ]
            },
            { kerdes: "A 802.11-es WLAN-ok a k�doszt�s� t�bbsz�r�s hozz�f�r�s k�vetkezt�ben v�ltak hat�konny�.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mi�rt nincs �tk�z�sdetekt�l�s a 802.11 k�zeghozz�f�r�si protokollban? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincs r� sz�ks�g a k�doszt�s� t�bbsz�r�s hozz�f�r�s miatt", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "Mert a r�di�csatorn�n nem tudja az akt�v �llom�s detekt�lni, hogy egyed�l haszn�lja-e a csatorn�t.", jo: true },
                { valasz: "Van �tk�z�sdetekt�l�s a 802.11 protokollban", jo: false }
              ]
            },
            { kerdes: "Milyen �zenet(eke)t haszn�l az RTS/CTS m�dszer?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "DCF", jo: false },
                { valasz: "PCF", jo: false },
                { valasz: "RTS", jo: true },
                { valasz: "CTS", jo: true },
                { valasz: "Az RTS/CTS nem haszn�l �zeneteket", jo: false }
              ]
            },
            { kerdes: "Mely �ll�t�s(ok) igaz(ak) az al�bbiak k�z�l a WLAN mesh-sel kapcsolatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A h�l�zatban szerepl� csom�pontok egyenrang�ak.", jo: true },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "A csom�pontok egym�son kereszt�l is tov�bb�thatnak inform�ci�t.", jo: true },
                { valasz: "A 802.11s szabv�ny �rja le.", jo: true },
                { valasz: "Az adatsebess�g nem f�gg att�l, hogy �tlagosan h�ny ugr�son (hop) kereszt�l ker�l tov�bb�t�sra az inform�ci�", jo: false }
              ]
            },
            { kerdes: "Mire kell gondosan �gyelni WLAN-ok alkalmaz�sa eset�n?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Egy WLAN h�l�zatban mindig csak p�ros sz�m� eszk�z tal�lhat�", jo: false },
                { valasz: "Nem szabad k�l�n gy�rt�t�l sz�rmaz� !WiFi jelz�ssel eszk�z�ket haszn�lni, mert azok �ltal�ban nem kompatibilisek", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "A titkos�t�s n�lk�li r�di�csatorn�n kereszt�l b�rki k�nnyen lehallgathatja az �zeneteinket.", jo: true },
                { valasz: "Ne legyenek azonos frekvenci�n �zemel� AP-k egym�shoz t�l k�zel.", jo: true }
              ]
            },
            { kerdes: "Melyek lehetnek az al�bbiak k�z�l a !WiMAX fontosabb alkalmaz�si ter�letei?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Otthoni felhaszn�l�k Internet-el�r�s�nek biztos�t�sa.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Wi-Fi hotspotok, mobil b�zis�llom�sok gerinch�l�zatak�nti m�k�d�s.", jo: true },
                { valasz: "Egyetemi campusok, ipari telephelyek lefed�se.", jo: true }
              ]
            },
            { kerdes: "A 802.16 sz�m�ra a !WiMAX olyan, mint a 802.11 sz�m�ra a ....",
              tipus: "valaszolos",
              valasz: "WiFi"
            },
            { kerdes: "Az ad�s ut�n legkor�bban mennyi id�vel k�s�bb adhat �jra egy ad-hoc m�d� WLAN-�llom�s?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "DIFS", jo: true },
                { valasz: "CIFS", jo: false },
                { valasz: "SIFS", jo: false },
                { valasz: "PIFS", jo: false }
              ]
            },
            { kerdes: "Mi jelenti a legf�bb k�l�nbs�get az �ramk�r- �s a csomagkapcsol�s k�z�tt a csatornahaszn�lat szempontj�b�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "A csomagkapcsol�s dedik�lt csatorn�kat alkalmaz", jo: false },
                { valasz: "Az �ramk�rkapcsol�s osztottan haszn�lja a csatorn�kat", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true }
              ]
            },
            { kerdes: "Milyen l�nyeges elt�r�sek vannak a 802.11 �s a 802.3 keretek k�z�tt?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Nincsen semmi k�l�nbs�g a 802.11 �s a 802.3 keretek k�z�tt", jo: false },
                { valasz: "Az FCS mez�ben haszn�lt CRC hosszabb a 802.11-ben, mert a r�di�s k�zegen sokkal nagyobb v�delem kell", jo: false },
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes.", jo: true },
                { valasz: "A 802.11 MAC c�mei sokkal r�videbbek, mert kevesebb eszk�zt kell csak megc�mezni", jo: false }
              ]
            },
            { kerdes: "Melyek a f� jellemz�i a Bluetooth fizikai r�teg�nek (\"r�di�s interf�sz\")?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Frequency Division Duplex (FDD) m�dszer az ad�s-v�tel megval�s�t�s�ra", jo: false },
                { valasz: "FHSS modul�ci�s elj�r�st haszn�l.", jo: true },
                { valasz: "A 2,4 GHz-es ISM s�vban m�k�dik.", jo: true }
              ]
            },
            { kerdes: "Az al�bbiak k�z�l mely �ll�t�s(ok) igaz(ak) a scatternetre?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "T�bb piconet alkotja.", jo: true },
                { valasz: "T�bb Master is lehet benne.", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Lehet olyan eszk�z, mely egyszerre lehet Master �s Slave szerepben is.", jo: true },
                { valasz: "A Bluetooth szabv�ny tartalmazza a scatternetek kialak�t�s�nak �s m�k�d�s�nek le�r�s�t", jo: false }
              ]
            },
            { kerdes: "A 802.11-ben a PCF k�zeg-hozz�f�r�si m�dszer l�nyeg�ben lek�rdez�st haszn�l a t�bbsz�r�s hozz�f�r�s vez�rl�s�re.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Melyek a 802.15.1 szabv�ny protokoll architekt�r�j�nak a jellemz�i?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Csak a fizikai r�teg le�r�s�t tartalmazza", jo: false },
                { valasz: "Saj�t r�tegezett architekt�r�ja van.", jo: true },
                { valasz: "A \"Transport protocols\" n�ven egy als� r�teget, �s \"middleware protocols\" n�ven egy fels� r�teget defini�l", jo: true },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false }
              ]
            },
            { kerdes: "Milyen m�k�d�si f�zisokat alkalmaznak az �sszek�ttet�s alap� m�don m�k�d� h�l�zatokban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "�sszek�ttet�s fel�p�t�se", jo: true },
                { valasz: "felhaszn�l�i inform�ci�-�tvitel", jo: true, megjegyzes: "mi �rtelme lenne egy�bk�nt??" },
                { valasz: "forgalom lek�rdez�se", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "�sszek�ttet�s lebont�sa", jo: true }
              ]
            },
            { kerdes: "Mi�rt el�ny�s a csomagkapcsol�sban a tov�bb�tott adategys�gek m�ret�nek korl�toz�sa?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "Nem okoz bel�thatatlan id�tartam� foglalts�got a tov�bb�t�si �tvonalon egy-egy adategys�g (komplett �zenet).", jo: true },
                { valasz: "Mert �gy cs�kken a keretez�sb�l ad�d� k�sleltet�s.", jo: true },
                { valasz: "A tov�bb�tott csomag meghib�sod�sa eset�n kedvez�bb lehet a csatorna kihaszn�lts�ga.", jo: true }
              ]
            },
            { kerdes: "Az infrastrukt�ra alap� WLAN h�l�zati elrendez�s csak egy Basic Service Setet haszn�lhat.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Az al�bbiak k�z�l mely frekvenci�t haszn�lhat egy !WiFi-eszk�z?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "3,5 GHz", jo: false },
                { valasz: "2,4 GHz", jo: true },
                { valasz: "A t�bbi felsorolt v�lasz k�z�l egyiksem helyes", jo: false },
                { valasz: "900 MHz", jo: false },
                { valasz: "5 GHz", jo: true }
              ]
            },
            { kerdes: "Az al�bbi szabv�nyos technol�gi�k k�z�l mely(ek) haszn�lhat(nak) OFDM-et?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "WiMAX", jo: true },
                { valasz: "Ethernet", jo: false },
                { valasz: "A felsoroltak k�z�l egyiksem haszn�lhat OFDM-et", jo: false },
                { valasz: "WiFi", jo: true },
                { valasz: "Bluetooth", jo: false }
              ]
            },
            { kerdes: "Jel�lje meg a hamis �ll�t�s(oka)t az al�bbiak k�z�l!",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "Az �ramk�rkapcsolt h�l�zat m�k�d�se csak �sszek�ttet�s-mentes m�don lehets�ges.", jo: true },
                { valasz: "A csomagkapcsolt h�l�zat csak �sszek�ttet�s-mentes m�don m�k�dhet.", jo: true },
                { valasz: "Az �ramk�rkapcsolt h�l�zat csak �sszek�ttet�s alap� m�don m�k�dhet", jo: false },
                { valasz: "Az �ramk�rkapcsolt h�l�zat m�k�dhet �sszek�ttet�s alap� �s �sszek�ttet�s-mentes m�don.", jo: true }
              ]
            },
            { kerdes: "A 802.11-ben alkalmazott �tk�z�selker�l�s (Collision Avoidance) sokkal nagyobb h�l�zati kihaszn�lts�got tesz lehet�v�, mint az �tk�z�sdetekt�l�s.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Milyen alapvet� m�dokon lehet tov�bb�tani a felhaszn�l�i jelz�seket a h�l�zatban?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "A t�bbi v�lasz k�z�l egyik sem helyes", jo: false },
                { valasz: "S�von k�v�li (out-of-band) m�dszerrel.", jo: true },
                { valasz: "S�von bel�li (in-band) m�dszerrel.", jo: true }
              ]
            },
            { kerdes: "Milyen absztrakt alkot�elemekb�l �p�thet�k fel az inform�ci�tov�bb�t� h�l�zatok?",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "f�nyvezet�kb�l", jo: false },
                { valasz: "v�gpontokb�l (end system)", jo: true },
                { valasz: "csom�pontokb�l (node)", jo: true },
                { valasz: "r�di�csatorn�kb�l", jo: false },
                { valasz: "t�bbi v�lasz egyike sem helyes", jo: false },
                { valasz: "�sszek�ttet�sekb�l (link)", jo: true }
              ]
            },
            { kerdes: "Mi a l�nyeges elt�r�s az IEEE 802.11-es WLAN szabv�nyv�ltozatok k�z�tt?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Csak n�melyik�k kompatibilis az �j 802.16 szabv�nnyal", jo: false },
                { valasz: "Elt�r� m�don alak�tj�k ki a kereteket", jo: false },
                { valasz: "M�s a logikai link-vez�rl�s�k", jo: false },
                { valasz: "A t�bbi v�lasz egyike sem helyes.", jo: true }
              ]
            },
            { kerdes: "A 802.16 fizikai r�tegbeli jellemz�it �gynevezett profilok �rj�k le.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az al�bbiak k�z�l mely(ek) jel�lhet(nek) mobil !WiMAX szabv�nyt? ",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "802.15.3", jo: false },
                { valasz: "802.3z", jo: false },
                { valasz: "802.15.1", jo: false },
                { valasz: "802.16d", jo: false },
                { valasz: "802.11a", jo: false },
                { valasz: "802.16e", jo: true },
                { valasz: "802.11s", jo: false }
              ]
            }
         ];