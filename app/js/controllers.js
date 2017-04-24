angular.module('starter.controllers', [])

.filter('range', function(){
    return function(n) {
        var res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    };
})

.factory('Alfabeto',function(){
    var alfabeto = [
        {
            'letra':'img/alfabeto/greek_alpha.png',
            'resposta': 'alpha',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_beta.png',
            'resposta': 'beta',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_gamma.png',
            'resposta': 'gamma',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_delta.png',
            'resposta': 'delta',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_epsilon.png',
            'resposta': 'epsilon',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_zeta.png',
            'resposta': 'zeta',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_eta.png',
            'resposta': 'eta',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_theta.png',
            'resposta': 'theta',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_iota.png',
            'resposta': 'iota',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_kappa.png',
            'resposta': 'kappa',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_lambda.png',
            'resposta': 'lambda',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_mu.png',
            'resposta': 'mu',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_nu.png',
            'resposta': 'nu',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_xi.png',
            'resposta': 'xi',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_omicron.png',
            'resposta': 'omicron',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_pi.png',
            'resposta': 'pi',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_rho.png',
            'resposta': 'rho',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_sigma.png',
            'resposta': 'sigma',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_tau.png',
            'resposta': 'tau',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_upsilon.png',
            'resposta': 'upsilon',
            'tipo': 'vogal',
        },
        {
            'letra':'img/alfabeto/greek_phi.png',
            'resposta': 'phi',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_chi.png',
            'resposta': 'chi',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_psi.png',
            'resposta': 'psi',
            'tipo': 'consoante',
        },
        {
            'letra':'img/alfabeto/greek_omega.png',
            'resposta': 'omega',
            'tipo': 'vogal',
        }
    ];
    return alfabeto;
})

.factory('AlfabetoHebraico',function(){
    var alfabeto = [
        {
            'letra':'img/alfabeto-hebraico/aleph.svg',
            'resposta': 'aleph',
            'transliteracao' : 'ʼ'
        },
        {
            'letra':'img/alfabeto-hebraico/beth.svg',
            'resposta': 'beth',
            'transliteracao' : 'B'
        },
        {
            'letra':'img/alfabeto-hebraico/gimel.svg',
            'resposta': 'gimel',
            'transliteracao' : 'G'
        },
        {
            'letra':'img/alfabeto-hebraico/daleth.svg',
            'resposta': 'daleth',
            'transliteracao' : 'D'
        },
        {
            'letra':'img/alfabeto-hebraico/he.svg',
            'resposta': 'he',
            'transliteracao' : 'H'
        },
        {
            'letra':'img/alfabeto-hebraico/waw.svg',
            'resposta': 'waw',
            'transliteracao' : 'W'
        },
        {
            'letra':'img/alfabeto-hebraico/zayin.svg',
            'resposta': 'zayin',
            'transliteracao' : 'Z'
        },
        {
            'letra':'img/alfabeto-hebraico/heth.svg',
            'resposta': 'heth',
            'transliteracao' : 'H'
        },
        {
            'letra':'img/alfabeto-hebraico/teth.svg',
            'resposta': 'teth',
            'transliteracao' : 'T'
        },
        {
            'letra':'img/alfabeto-hebraico/yodh.svg',
            'resposta': 'yodh',
            'transliteracao' : 'Y'
        },
        {
            'letra':'img/alfabeto-hebraico/kaph.svg',
            'resposta': 'kaph',
            'transliteracao' : 'K'
        },
        {
            'letra':'img/alfabeto-hebraico/lamedh.svg',
            'resposta': 'lamedh',
            'transliteracao' : 'L'
        },
        {
            'letra':'img/alfabeto-hebraico/mem.svg',
            'resposta': 'mem',
            'transliteracao' : 'M'
        },
        {
            'letra':'img/alfabeto-hebraico/nun.svg',
            'resposta': 'nun',
            'transliteracao' : 'N'
        },
        {
            'letra':'img/alfabeto-hebraico/samekh.svg',
            'resposta': 'samekh',
            'transliteracao' : 'S'
        },
        {
            'letra':'img/alfabeto-hebraico/ayin.svg',
            'resposta': 'ayin',
            'transliteracao' : ''
        },
        {
            'letra':'img/alfabeto-hebraico/pe.svg',
            'resposta': 'pe',
            'transliteracao' : 'P'
        },
        {
            'letra':'img/alfabeto-hebraico/tsadeh.svg',
            'resposta': 'tsadeh',
            'transliteracao' : 'TS'
        },
        {
            'letra':'img/alfabeto-hebraico/qoph.svg',
            'resposta': 'qoph',
            'transliteracao' : 'Q'
        },
        {
            'letra':'img/alfabeto-hebraico/resh.svg',
            'resposta': 'resh',
            'transliteracao' : 'R'
        },
        {
            'letra':'img/alfabeto-hebraico/shin.svg',
            'resposta': 'shin',
            'transliteracao' : 'SS'
        },
        {
            'letra':'img/alfabeto-hebraico/taw.svg',
            'resposta': 'taw',
            'transliteracao' : 'T'
        },
    ];
    return alfabeto;
})

.factory('Vocabulario',function(){
    var vocabulario = [
        {
            'img_src':'img/vocabulario/0001.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'irmã'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0002.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'homem'
                },
                {
                    'significado' : 'marido'
                },
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0003.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'reino'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0004.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'mulher'
                },
                {
                    'significado' : 'esposa'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0005.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'glória'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0006.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'vida espiritual'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0007.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'puro'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0008.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'senhor'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0009.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'palavra'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0010.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'discipulo'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0011.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'circunsisão'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0012.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'fé'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0013.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'ovelha'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0014.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'oração'
                },
                {
                    'significado' : 'prece'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0015.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'profeta'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0016.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'primeiro'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0017.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'tribo'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0018.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'ungido'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0019.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'alma'
                },
                {
                    'significado' : 'vida'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0020.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'nome'
                }
            ],
            'vocabulario' : 1,
        },
        {
            'img_src':'img/vocabulario/0021.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'santo'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0022.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'irmão'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0023.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'homem'
                },
                {
                    'significado' : 'ser humano'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0024.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'terra'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0025.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'em'
                },
                {
                    'significado' : 'com'
                },
                {
                    'significado' : 'por'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0026.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'Terra'
                },
                {
                    'significado' : 'terra'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0027.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' : 'Deus'
                },
                {
                    'significado' : 'deus'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0028.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' :  'e'
                },
                {
                    'significado' :  'mas'
                },
                {
                    'significado' :  'também'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0029.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' :  'céu'
                },
                {
                    'significado' :  'céus'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0030.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' :  'pai'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0031.svg',
            'palavra':'',
            'significados' : [
                {
                    'significado' :  'filho'
                }
            ],
            'vocabulario' : 2,
        },
        {
            'img_src':'img/vocabulario/0032.svg',
            'palavra':'ἄγγελος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'anjo'
                },
                {
                    'significado' : 'mensageiro'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0033.svg',
            'palavra':'αὐτός',
            'significados' : [
                {
                    'significado' : 'ele'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0034.svg',
            'palavra':'ἐγώ',
            'significados' : [
                {
                    'significado' : 'eu'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0035.svg',
            'palavra':'ἔργον, -ου, τό',
            'significados' : [
                {
                    'significado' : 'trabalho'
                },
                {
                    'significado' : 'obra'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0036.svg',
            'palavra':'καρδία, -ας, ἡ',
            'significados' : [
                {
                    'significado' : 'coração'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0037.svg',
            'palavra':'κόσμος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'mundo'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0038.svg',
            'palavra':'μέγας, μεγάλη, μέγα',
            'significados' : [
                {
                    'significado' : 'grande'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0039.svg',
            'palavra':'νεκρός, -ά, -όν',
            'significados' : [
                {
                    'significado' : 'morto'
                },
                {
                    'significado' : 'morta'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0040.svg',
            'palavra':'νόμος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'lei'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0041.svg',
            'palavra':'ὅτι',
            'significados' : [
                {
                    'significado' : 'que'
                },
                {
                    'significado' : 'porque'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0042.svg',
            'palavra':'σύ',
            'significados' : [
                {
                    'significado' : 'tu'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0043.svg',
            'palavra':'ὡς',
            'significados' : [
                {
                    'significado' : 'como'
                },
                {
                    'significado' : 'conforme'
                }
            ],
            'vocabulario' : 3,
        },
        {
            'img_src':'img/vocabulario/0044.svg',
            'palavra':'ἀλλά',
            'significados' : [
                {
                    'significado' : 'mas'
                },
                {
                    'significado' : 'porém'
                },
                {
                    'significado' : 'exceto'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0045.svg',
            'palavra':'ἁμαρτία, -ας, ἡ',
            'significados' : [
                {
                    'significado' : 'pecado'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0046.svg',
            'palavra':'ἀρχιερεύς, -έως, ὁ',
            'significados' : [
                {
                    'significado' : 'sumo sacerdote'
                },
                {
                    'significado' : 'sacerdote principal'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0047.svg',
            'palavra':'δέ',
            'significados' : [
                {
                    'significado' : 'mas'
                },
                {
                    'significado' : 'porém'
                },
                {
                    'significado' : 'e'
                },
                {
                    'significado' : 'também'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0048.svg',
            'palavra':'δοῦλος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'escravo'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0049.svg',
            'palavra':'ἔθνος, -ους, τό',
            'significados' : [
                {
                    'significado' : 'povo'
                },
                {
                    'significado' : 'nação'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0050.svg',
            'palavra':'ἐκεῖνος, -η, -ο',
            'significados' : [
                {
                    'significado' : 'aquele'
                },
                {
                    'significado' : 'aquela'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0051.svg',
            'palavra':'ἑπτά',
            'significados' : [
                {
                    'significado' : 'sete'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0052.svg',
            'palavra':'ἵνα',
            'significados' : [
                {
                    'significado' : 'para que'
                },
                {
                    'significado' : 'a fim de que'
                },
                {
                    'significado' : 'que'
                },
                {
                    'significado' : 'de modo que'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0053.svg',
            'palavra':'οὐ, οὐκ, οὐχ',
            'significados' : [
                {
                    'significado' : 'não'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0054.svg',
            'palavra':'οὖν',
            'significados' : [
                {
                    'significado' : 'pois'
                },
                {
                    'significado' : 'portanto'
                },
                {
                    'significado' : 'então'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0055.svg',
            'palavra':'ὄχλος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'multidão'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0056.svg',
            'palavra':'πόλις, -εως, ἡ',
            'significados' : [
                {
                    'significado' : 'cidade'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0057.svg',
            'palavra':'πρός',
            'significados' : [
                {
                    'significado' : 'para'
                },
                {
                    'significado' : 'em prol de'
                },
                {
                    'significado' : 'para que'
                },
                {
                    'significado' : 'junto a'
                },
                {
                    'significado' : 'com'
                }
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0058.svg',
            'palavra':'χάρις, -ιτος, ἡ',
            'significados' : [
                {
                    'significado' : 'graça'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0059.svg',
            'palavra':'χείρ, χειρός, ἡ',
            'significados' : [
                {
                    'significado' : 'mão'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0060.svg',
            'palavra':'λαός, -οῦ, ὁ',
            'significados' : [
                {
                    'significado' : 'povo'
                },
            ],
            'vocabulario' : 4,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'ἀγάπη, -ης, ἡ',
            'significados' : [
                {
                    'significado' : 'amor'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'αἰών, -ῶνος, ὁ',
            'significados' : [
                {
                    'significado' : 'idade'
                },
                {
                    'significado' : 'era'
                },
                {
                    'significado' : 'século'
                },
                {
                    'significado' : 'eternidade'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'ἀκούω',
            'significados' : [
                {
                    'significado' : 'eu ouço'
                },
                {
                    'significado' : 'eu escuto'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'γάρ',
            'significados' : [
                {
                    'significado' : 'pois'
                },
                {
                    'significado' : 'portanto'
                },
                {
                    'significado' : 'assim pois'
                },
                {
                    'significado' : 'a saber'
                },
                {
                    'significado' : 'com efeito'
                },
                {
                    'significado' : 'certamente'
                },            
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'γινώσκω',
            'significados' : [
                {
                    'significado' : 'eu sei'
                },
                {
                    'significado' : 'eu conheço'
                },
                {
                    'significado' : 'eu compreendo'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'γραφω',
            'significados' : [
                {
                    'significado' : 'eu escrevo'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'δικαιοσύνη, -ης, ἡ',
            'significados' : [
                {
                    'significado' : 'justiça'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'εἰρήνη, -ης, ἡ',
            'significados' : [
                {
                    'significado' : 'paz'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'εἰς',
            'significados' : [
                {
                    'significado' : 'para'
                },
                {
                    'significado' : 'até'
                },
                {
                    'significado' : 'entre'
                },
                {
                    'significado' : 'por causa de'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'εὑρίσκω',
            'significados' : [
                {
                    'significado' : 'eu encontro'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'θάνατος, -ου, ὁ',
            'significados' : [
                {
                    'significado' : 'morte'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'λαλέω',
            'significados' : [
                {
                    'significado' : 'eu falo'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'μή',
            'significados' : [
                {
                    'significado' : 'não'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'πολύς, πολλή, πολύ',
            'significados' : [
                {
                    'significado' : 'muito(s), muita(s)'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'σάρξ, σαρκός, ἡ',
            'significados' : [
                {
                    'significado' : 'carne'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'σῶμα, -ατος, τό',
            'significados' : [
                {
                    'significado' : 'corpo'
                },
            ],
            'vocabulario' : 5,
        },
        {
            'img_src':'img/vocabulario/0000.svg',
            'palavra':'φωνή, -ῆς, ἡ',
            'significados' : [
                {
                    'significado' : 'voz; som'
                },
            ],
            'vocabulario' : 5,
        },
    ]
;    return vocabulario;
})

.factory('Filler', function(){
    var words = ["riqueza","inestimável","amado","salvador","bem","maior","que","vida","meu","deus","senhor","junto","quero","andar","contigo","sempre","jornada","minha","aqui","confortos","deste","mundo","não","venho","suplicar","mesmo","meio","sofrimento","pelo","vale","tão","sombrio","violento","mar","queira","tua","mão","divina","seguro","guardar","quando","entrar","fim","feliz","jerusalém","estarei","sumo","cristo","esperança","viva","triunfante","conforta","anima","nosso","coração","guarda","teu","povo","retidão","constante","fiel","toda","provação","nossa","verteste","generoso","sangue","redentor","tens","nossas","vidas","pois","cruz","morreste","querer","responda","amor","vitorioso","mal","morte","seu","horror","somos","teus","servos","precioso","reina","domina","pensar","jesus","sinto","alegria","paz","melhor","rosto","ver","descanso","dás","nome","meigo","ouviu","terra","nem","nos","céus","doce","filho","eterno","abatido","traz","faminto","vem","pedir","bondoso","satisfaz","prêmio","dado","aos","glória","salvação","agora","apaga","minhas","transgressões","limpa","diante","puro","estar","viver","perfeita","união","tem","misericórdia","mim","segundo","bondade","dentro","faze","dominar","verdade","confesso","pecados","meus","contra","pequei","mas","purificado","por","mais","alvo","neve","serei","restaura","porque","salvaste","ser","lábios","abrir","alegre","louvor","encher","livro","santo","sagrada","escritura","firme","palavra","muda","jamais","envelhece","transmite","mensagem","céu","espelho","martelo","espada","amigo","cristão","fortaleza","bíblia","santa","luz","caminho","enganoso","carnal","iluminas","passos","pra","dando","força","vigor","perenal","proclama","perdão","com","promessas","preciosas","lindas","levar","celeste","mansão"];
    return words;
})

.controller('AlfabetoCtrl', function($scope, $ionicModal, $timeout,$ionicSlideBoxDelegate,Alfabeto) {
    
    $scope.alfabeto = Alfabeto;

    $scope.first = function() {
        $ionicSlideBoxDelegate.slide(0);
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        console.log(index);
        // $scope.slideIndex = index;
    };
})

.controller('AlfabetoHebraicoCtrl', function($scope, $ionicModal, $timeout,$ionicSlideBoxDelegate,AlfabetoHebraico) {
    
    $scope.alfabeto = AlfabetoHebraico;

    $scope.first = function() {
        $ionicSlideBoxDelegate.slide(0);
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        console.log(index);
        // $scope.slideIndex = index;
    };
})

.controller('VogaisCtrl', function($scope,$ionicSlideBoxDelegate,Alfabeto) {
    
    $scope.alfabeto = Alfabeto;

    $scope.first = function() {
        $ionicSlideBoxDelegate.slide(0);
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})

.controller('JogoCtrl', function($scope,$ionicSlideBoxDelegate,Alfabeto) {
    
    $scope.alfabeto = Alfabeto;

    $scope.randomLetter = function(){
        var number = Math.floor((Math.random() * 23) + 1);
        $scope.letra = number;
        $scope.resposta = "";
    }

    $scope.checkResposta = function(){
        if ( $scope.resposta != '' && $scope.resposta == $scope.alfabeto[$scope.letra].resposta ) {
            alert('Certa Resposta');
            $scope.randomLetter();
        } else {
            alert('Tente outra Vez!');
            $scope.resposta = "";
        }
    }

    $scope.resposta;
    
    // Inicia o random, para pegar uma letra
    $scope.randomLetter();

})

.controller('JogoHebraicoCtrl', function($scope,$ionicSlideBoxDelegate,$ionicModal,AlfabetoHebraico) {
    
    $scope.alfabeto = AlfabetoHebraico;
    $scope.resposta;

    var arr_rand = [];

    function get_rand() {
        
        var number = Math.floor((Math.random() * $scope.alfabeto.length));

        if ( arr_rand.length == $scope.alfabeto.length ) {
            arr_rand = [];
        }

        if ( arr_rand.indexOf(number) == -1 ) {
            arr_rand.push(number);
            return number;
        } else {
            return get_rand();
        }

    }

    $scope.randomLetter = function(){
        var number = get_rand();
                
        $scope.letra = number;
        $scope.resposta = "";

    }

    $scope.checkResposta = function(){

        if ( $scope.resposta != ''  ) {        
            var resposta = $scope.resposta;
            var ptt = new RegExp(resposta,'gmi');
            var str = $scope.alfabeto[$scope.letra].resposta;        

            if ( ptt.test(str) ) {
                    
                $scope.titulo   = 'Resposta correta';
                $scope.conteudo = 'Parabéns! Você acertou a resposta';
                $scope.openModal('slide-in-up');

                $scope.randomLetter();

            } else {
                
                $scope.titulo   = 'Resposta incorreta';
                $scope.conteudo = 'Não foi desta vez, tente novamente!';
                $scope.openModal('slide-in-up');

                $scope.resposta = "";
            }
        } else {
            $scope.titulo   = 'Atenção!';
            $scope.conteudo = 'Insira um resposta válida!';
            $scope.openModal('jelly');
        }

    }

    $scope.openModal = function(animation) {
        $ionicModal.fromTemplateUrl('templates/modal/vocabulario-modal.html', {
            scope: $scope,
            animation: animation
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });

    
    // Inicia o random, para pegar uma letra
    $scope.randomLetter();

})

.controller('JogoVocabularioCtrl', function($scope,$ionicSlideBoxDelegate,$ionicModal,Vocabulario,Filler) {
    
    $scope.vocabulario = Vocabulario;
    $scope.filler = Filler;

    $scope.acertos = 0;
    $scope.acertos_consecutivos = 0;
    $scope.jogadas = 0;

    $scope.opcoes = [];
    
    $scope.openModal = function(animation) {
        $ionicModal.fromTemplateUrl('templates/modal/vocabulario-modal.html', {
            scope: $scope,
            animation: animation
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });

    var arr = [];
    var total = $scope.vocabulario.length;

    function get_rand() {
        
        if ( arr.length == total ) {
            arr = [];
        }

        var number = Math.floor((Math.random() * total));
        var res; 
        
        if ( arr.indexOf(number) == -1 ) {
            arr.push(number);
            return number;
        } else {
            return get_rand();
        }

    }

    function get_filler() {

        var total = $scope.filler.length;
        var number = Math.floor((Math.random() * total));
        var res = $scope.filler[number];

        res = res.replace(/,/,"");

        return res

    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    $scope.randomLetter = function(){
        
        var number = get_rand();

        $scope.palavra = number;
        
        $scope.opcoes = [];
        var arr = [];

        arr.push(get_filler());
        var index = Math.floor((Math.random() * $scope.vocabulario[number].significados.length));
        arr.push($scope.vocabulario[number].significados[index].significado);
        arr.push(get_filler());
        arr.push(get_filler());

        arr = shuffle(arr);

        $scope.opcoes = arr;

        $scope.resposta = "";
    }

    $scope.checkResposta = function(resposta){
        
        $scope.resposta = resposta;
        $scope.jogadas += 1;

        if ( $scope.resposta != '' ) {
            
            var resposta = $scope.resposta;
            
            if ( $scope.vocabulario[$scope.palavra].significados.indexOf(resposta) ) {            

                $scope.titulo   = 'Resposta correta';
                $scope.conteudo = 'Parabéns! Você acertou a resposta';
                $scope.openModal('slide-in-up');

                $scope.acertos += 1;
                $scope.acertos_consecutivos += 1;
                $scope.randomLetter();

            } else {
                
                $scope.acertos_consecutivos = 0;
                
                $scope.titulo   = 'Resposta incorreta';
                $scope.conteudo = 'Não foi desta vez, tente novamente!';
                $scope.openModal('slide-in-up');
                
                $scope.resposta = "";
            }

        } else {
            $scope.titulo   = 'Atenção!';
            $scope.conteudo = 'Insira um resposta válida!';
            $scope.openModal('jelly');
        }
        
    }

    // Inicia o random, para pegar uma letra
    $scope.randomLetter();

})

.controller('VocabularioCtrl', function($scope,$ionicSlideBoxDelegate,Vocabulario) {

    $scope.vocabulario = Vocabulario;
    $scope.slideIndex = 0;

    $scope.first = function() {
        $ionicSlideBoxDelegate.slide(0);
    };

    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
        $scope.slideIndex = $scope.slideIndex;
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
        $scope.slideIndex = $scope.slideIndex;
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
        $ionicSlideBoxDelegate.slide(index);
    };

});

/*
    'slide-in-up',
    'slide-in-down',
    'fade-in-scale',
    'fade-in-right',
    'fade-in-left',
    'newspaper',
    'jelly',
    'road-runner',
    'splat',
    'spin',
    'swoosh',
    'fold-unfold'
*/