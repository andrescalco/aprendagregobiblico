// (function(){
    'use strict';
    angular
        .module('starter')
        .factory('Vocabulario',Vocabulario);

    function Vocabulario(){
    var vocabulario = [  
           {  
              "palavra":"ἀδελφή, ῆς, ἡ",
              "significados":[  
                 "irmã"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"ἀνήρ, ἀνδρός, ὁ",
              "significados":[  
                 "homem",
                 "marido"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"βασιλεία, ας, ἡ",
              "significados":[  
                 "reino"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"γυνή, αικός, ἡ",
              "significados":[  
                 "mulher",
                 "esposa"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"δόξα, ης, ἡ",
              "significados":[  
                 "glória"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"ζωή, ῆς, ἡ",
              "significados":[  
                 "vida espiritual"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"καθαρός, ά, όν",
              "significados":[  
                 "puro"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"κύριος, ου, ὁ",
              "significados":[  
                 "senhor"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"λόγος, ου, ὁ",
              "significados":[  
                 "palavra"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"μαθητής, οῦ, ὁ",
              "significados":[  
                 "discipulo"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"περιτομή, ῆς, ἡ",
              "significados":[  
                 "circunsisão"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"πίστις, εως, ἡ",
              "significados":[  
                 "fé"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"πρόβατον, ου, τό",
              "significados":[  
                 "ovelha"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"προσευχή, ῆς, ἡ",
              "significados":[  
                 "oração",
                 "prece"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"προφήτης, ου, ὁ",
              "significados":[  
                 "profeta"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"πρῶτος, η, ον",
              "significados":[  
                 "primeiro"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"φυλή, ῆς, ἡ",
              "significados":[  
                 "tribo"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"Χριστός, οῦ, ὁ",
              "significados":[  
                 "ungido"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"ψυχή, ῆς, ἡ",
              "significados":[  
                 "alma",
                 "vida"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"ὄνομα, ατος, τό",
              "significados":[  
                 "nome"
              ],
              "vocabulario":1
           },
           {  
              "palavra":"ἅγιος, ία, ον",
              "significados":[  
                 "santo"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"ἀδελφός, οῦ, ὁ",
              "significados":[  
                 "irmão"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"ἄνθρωπος, ου, ὁ",
              "significados":[  
                 "homem",
                 "ser humano"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"γῆ, γῆς, ἡ",
              "significados":[  
                 "terra"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"ἐν",
              "significados":[  
                 "em",
                 "com",
                 "por"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"ἡμέρα, ας, ἡ",
              "significados":[  
                 "Terra",
                 "terra"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"θεός, οῦ, ὁ",
              "significados":[  
                 "Deus",
                 "deus"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"καί",
              "significados":[  
                 "e",
                 "mas",
                 "também"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"οὐρανός, οῦ, ὁ",
              "significados":[  
                 "céu",
                 "céus"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"πατήρ, πατρός, ὁ",
              "significados":[  
                 "pai"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"υἱός, οῦ, ὁ",
              "significados":[  
                 "filho"
              ],
              "vocabulario":2
           },
           {  
              "palavra":"ἄγγελος, -ου, ὁ",
              "significados":[  
                 "anjo",
                 "mensageiro"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"αὐτός",
              "significados":[  
                 "ele"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"ἐγώ",
              "significados":[  
                 "eu"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"ἔργον, -ου, τό",
              "significados":[  
                 "trabalho",
                 "obra"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"καρδία, -ας, ἡ",
              "significados":[  
                 "coração"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"κόσμος, -ου, ὁ",
              "significados":[  
                 "mundo"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"μέγας, μεγάλη, μέγα",
              "significados":[  
                 "grande"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"νεκρός, -ά, -όν",
              "significados":[  
                 "morto",
                 "morta"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"νόμος, -ου, ὁ",
              "significados":[  
                 "lei"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"ὅτι",
              "significados":[  
                 "que",
                 "porque"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"σύ",
              "significados":[  
                 "tu"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"ὡς",
              "significados":[  
                 "como",
                 "conforme"
              ],
              "vocabulario":3
           },
           {  
              "palavra":"ἀλλά",
              "significados":[  
                 "mas",
                 "porém",
                 "exceto"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἁμαρτία, -ας, ἡ",
              "significados":[  
                 "pecado"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἀρχιερεύς, -έως, ὁ",
              "significados":[  
                 "sumo sacerdote",
                 "sacerdote principal"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"δέ",
              "significados":[  
                 "mas",
                 "porém",
                 "e",
                 "também"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"δοῦλος, -ου, ὁ",
              "significados":[  
                 "escravo"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἔθνος, -ους, τό",
              "significados":[  
                 "povo",
                 "nação"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἐκεῖνος, -η, -ο",
              "significados":[  
                 "aquele",
                 "aquela"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἑπτά",
              "significados":[  
                 "sete"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἵνα",
              "significados":[  
                 "para que",
                 "a fim de que",
                 "que",
                 "de modo que"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"οὐ, οὐκ, οὐχ",
              "significados":[  
                 "não"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"οὖν",
              "significados":[  
                 "pois",
                 "portanto",
                 "então"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ὄχλος, -ου, ὁ",
              "significados":[  
                 "multidão"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"πόλις, -εως, ἡ",
              "significados":[  
                 "cidade"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"πρός",
              "significados":[  
                 "para",
                 "em prol de",
                 "para que",
                 "junto a",
                 "com"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"χάρις, -ιτος, ἡ",
              "significados":[  
                 "graça"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"χείρ, χειρός, ἡ",
              "significados":[  
                 "mão"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"λαός, -οῦ, ὁ",
              "significados":[  
                 "povo"
              ],
              "vocabulario":4
           },
           {  
              "palavra":"ἀγάπη, -ης, ἡ",
              "significados":[  
                 "amor"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"αἰών, -ῶνος, ὁ",
              "significados":[  
                 "idade",
                 "era",
                 "século",
                 "eternidade"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"ἀκούω",
              "significados":[  
                 "eu ouço",
                 "eu escuto"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"γάρ",
              "significados":[  
                 "pois",
                 "portanto",
                 "assim pois",
                 "a saber",
                 "com efeito",
                 "certamente"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"γινώσκω",
              "significados":[  
                 "eu sei",
                 "eu conheço",
                 "eu compreendo"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"γραφω",
              "significados":[  
                 "eu escrevo"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"δικαιοσύνη, -ης, ἡ",
              "significados":[  
                 "justiça"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"εἰρήνη, -ης, ἡ",
              "significados":[  
                 "paz"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"εἰς",
              "significados":[  
                 "para",
                 "até",
                 "entre",
                 "por causa de"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"εὑρίσκω",
              "significados":[  
                 "eu encontro"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"θάνατος, -ου, ὁ",
              "significados":[  
                 "morte"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"λαλέω",
              "significados":[  
                 "eu falo"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"μή",
              "significados":[  
                 "não"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"πολύς, πολλή, πολύ",
              "significados":[  
                 "muito(s)",
                 "muita(s)"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"σάρξ, σαρκός, ἡ",
              "significados":[  
                 "carne"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"σῶμα, -ατος, τό",
              "significados":[  
                 "corpo"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"φωνή, -ῆς, ἡ",
              "significados":[  
                 "voz",
                 "som"
              ],
              "vocabulario":5
           },
           {  
              "palavra":"ἀγαπάω",
              "significados":[  
                 "eu amo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἀλήθεια, ας, ἡ",
              "significados":[  
                 "verdade"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἀποστέλλω",
              "significados":[  
                 "eu envio"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἄρτος, ου, ὁ",
              "significados":[  
                 "pão"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"βάλλω",
              "significados":[  
                 "eu lanço"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"βλέπω",
              "significados":[  
                 "eu vejo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"διδάσκω",
              "significados":[  
                 "eu ensino"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἐγείρω",
              "significados":[  
                 "eu ergo",
                 "eu levanto"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἐκκλησία, ας, ἡ",
              "significados":[  
                 "igreja",
                 "assembléia"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ἐσθίω",
              "significados":[  
                 "eu como"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ζάω",
              "significados":[  
                 "eu vivo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ζητέω",
              "significados":[  
                 "eu busco",
                 "eu procuro"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"κρίνω",
              "significados":[  
                 "eu julgo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"λαμβάνω",
              "significados":[  
                 "eu tomo",
                 "eu recebo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"λέγω",
              "significados":[  
                 "eu digo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"μένω",
              "significados":[  
                 "eu fico",
                 "eu permaneço"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ὁδός, οῦ, ἡ",
              "significados":[  
                 "caminho"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"παρακαλέω",
              "significados":[  
                 "eu exorto",
                 "eu consolo",
                 "eu rogo"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"πιστεύω",
              "significados":[  
                 "eu creio"
              ],
              "vocabulario":"6"
           },
           {  
              "palavra":"ποιέω",
              "significados":[  
                 "eu faço"
              ],
              "vocabulario":"6"
           },
          {
            "palavra": "ἀγαθός, ή, όν",
            "significados": [
              "bom",
              "boa"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἀγαθός, ή, όν",
            "significados": [
              "eu morro"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "βασιλεύς, έως, ὁ",
            "significados": [
              "rei"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "γλῶσσα, ης, ἡ",
            "significados": [
              "língua",
              "linguagem"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "δύναμις, εως, ἡ",
            "significados": [
              "poder",
              "virtude",
              "milagre"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "εἰμί",
            "significados": [
              "eu sou",
              "eu estou",
              "eu existo"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἐκ, ἐξ",
            "significados": [
              "de",
              "a partir de",
              "por"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἐξουσία, ας, ἡ",
            "significados": [
              "autoridade"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἐπί",
            "significados": [
              "sobre",
              "em cima de",
              " em",
              "com base em",
              "perto de",
              "por",
              "através",
              "para"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἔρημος, ον",
            "significados": [
              "deserto",
              "ermo"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ἔξω",
            "significados": [
              "eu tenho"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "θάλασσα, ης, ἡ",
            "significados": [
              "mar"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "θέλω",
            "significados": [
              "eu quero",
              "eu desejo"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "οἰκία, ας, ἡ",
            "significados": [
              "casa",
              "família"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "οὐδέ",
            "significados": [
              "nem",
              "e não"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "οὕτως",
            "significados": [
              "assim"
            ],
            "vocabulario": 7
          },
          {
            "palavra": "ὥρα, ας, ἡ",
            "significados": [
              "hora"
            ],
            "vocabulario": 7
          }
        ]
        return vocabulario;
    }

// })();