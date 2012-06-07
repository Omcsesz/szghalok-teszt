         var tesztFeladatok = [
            { kerdes: "Mekkora lesz a besz�d kezdeti csomagol�si k�sleltet�se ATM cell�k �s szabv�nyos t�m�r�tetlen digitaliz�l�s eset�n?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "10 ms", jo: false },
                { valasz: "20 ms", jo: false },
                { valasz: "Att�l f�gg, h�ny byte-ot tesz�nk bele az ATM cella v�ltoz� hossz�s�g� hasznos r�sz�be", jo: false },
                { valasz: "Egyik v�lasz sem helyes", jo: true }
              ]
            },
            { kerdes: "Az ATM-n�l egy szolg�ltat�si oszt�lyt az al�bbiak jellemeznek:",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Forgalomle�r�k �s !QoS param�terek", jo: true },
                { valasz: "!QoS param�terek", jo: false },
                { valasz: "Forgalomle�r�k", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Mit �rt�nk aszinkron �tviteli �s kapcsol�si m�don (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az �ramk�rkapcsol�snak egy speci�lis v�ltozat�t", jo: false },
                { valasz: "Az �tvitel �s a kapcsol�s nem fut egy�tt, nincs szinkronban", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true }
              ]
            },
            { kerdes: "Melyek ATM szolg�ltat�si oszt�lyok az al�bbiak k�z�l:",
              tipus: "tobbet_jelolo",
              valaszok: [
                { valasz: "UDP", jo: false },
                { valasz: "UBR", jo: true },
                { valasz: "CBR", jo: true },
                { valasz: "Egyik sem szolg�ltat�si oszt�ly", jo: false },
                { valasz: "Mindegyik szolg�ltat�si oszt�ly", jo: false }
              ]
            },
            { kerdes: "Az ATM a sz�lesk�rben elterjedt B-ISDN h�l�zatban haszn�lt �tviteli �s kapcsol�si m�dszer.",
              tipus: "igazhamis",
              valasz: false
            },
            { kerdes: "Mi�rt v�lasztott�k 48 oktetre (byte) az ATM cella hasznos r�sz-�t (payload)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Mert ez kedvez� az adattov�bb�t�s szempontj�b�l", jo: false },
                { valasz: "Mert ezt tal�lt�k elfogadhat� kompromisszumnak az adat- �s a besz�dtov�bb�t�s elt�r� k�vetelm�nyeire", jo: true },
                { valasz: "Mert ez 2-nek eg�ssz�m� hatv�nya", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: false }
              ]
            },
            { kerdes: "Melyik, az eddigiekben megismert alapvet� funkci�kat NEM alkalmazz�k az ATM-ben?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Hibakezel�s", jo: true, megjegyzes: "l�sd: https://wiki.sch.bme.hu/bin/view/Infoalap/SzgHalokVillamOsszes" },
                { valasz: "C�mz�s", jo: false },
                { valasz: "�temez�s", jo: false },
                { valasz: "Forgalomenedzsment", jo: false },
                { valasz: "H�v�svez�rl�s", jo: false },
                { valasz: "Routing", jo: false }
              ]
            },
            { kerdes: "Mely alapvet� h�l�zati funkci�k ker�lnek alkalmaz�sra az ATM-n�l?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Torl�d�svez�rl�s", jo: true },
                { valasz: "A fentiek k�z�l egyik sem", jo: false },
                { valasz: "Forgalomszab�lyoz�s", jo: false },
                { valasz: "Hibajav�t�s", jo: false }
              ]
            },
            { kerdes: "Az ATM egyik f� jellemz�je, hogy �sszek�ttet�senk�nt k�pes a k�v�nt szolg�ltat�si min�s�get biztos�tani.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Az ATM fejl�c a csomag teljes m�ret�nek a 10%-a.",
              tipus: "igazhamis",
              valasz: true
            },
            { kerdes: "Hogyan haszn�lj�k az ATM-ben a c�mk�k k�t hierarchiaszintj�t?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Vannak \"virtu�lis �t\"-kapcsol�k �s \"virtu�lis csatorna\"-kapcsol�k", jo: true },
                { valasz: "Egyik v�lasz sem j�", jo: false },
                { valasz: "Nem haszn�lj�k egy�ltal�n", jo: false }
              ]
            },
            { kerdes: "Mit �rt�nk aszinkron �tviteli �s kapcsol�si m�don (ATM)?",
              tipus: "egyet_jelolo",
              valaszok: [
                { valasz: "Az �tvitel �s a kapcsol�s nem fut egy�tt, nincs szinkronban", jo: false },
                { valasz: "Egyik v�lasz sem j�", jo: true },
                { valasz: "Az �ramk�rkapcsol�snak egy speci�lis v�ltozat�t", jo: false }
              ]
            }
         ];