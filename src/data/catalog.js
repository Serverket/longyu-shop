const ramens = [
  {
    id: 'indomie-agripicante-65g',
    name: 'Indomie Noodles',
    highlight: 'Pote de 65gr',
    details: ['Sabor: agridulce picante']
  },

  {
    id: 'kangshifu-clasicos-pote-100g',
    name: 'Fideos instantáneos Kangshifu clásicos [康師傅 面 经典]',
    highlight: 'Pote de 100gr',
    details: ['Sabores: carne con pimienta, pollo picante, mariscos picantes, bistec extra picante, bistec de cerdo con chalotes, carne picante, estofado de carne']
  },

  {
    id: 'kangshifu-clasicos-pack-100g',
    name: 'Fideos instantáneos Kangshifu clásicos [康師傅 面 经典]',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: carne con pimienta, pollo picante, mariscos picantes y bistec picante, bistec de cerdo con chalotes, carne a la pimienta, carne con repollo y tomate']
  },

  {
    id: 'yumyum-ramen-70g',
    name: 'Yum-yum ramen',
    highlight: 'Paquete de 70gr',
    details: ['Sabores: camarón tom yum, curry de vegetales, comida de mar y camarón tom yum picante']
  },

  {
    id: 'jin-ramen-111g',
    name: 'Jin ramen [오뚜기 진라면]',
    highlight: 'Paquete de 111gr',
    details: ['Sabores: suave, picante y vegano']
  },

  {
    id: 'buldak-ramen-cup-70g',
    name: 'Buldak ramen [불닭볶음면]',
    highlight: 'Pote de 70gr',
    details: ['Sabores: chili y carbonara']
  },

  {
    id: 'buldak-ramen-pack-140g',
    name: 'Buldak ramen [불닭볶음면]',
    highlight: 'Paquete de 140gr',
    details: ['Sabores: original, carbonara, queso picante y chili']
  },

  {
    id: 'shin-ramen-120g',
    name: 'Shin ramen [辛라면]',
    highlight: 'Paquete de 120gr',
    details: ['Sabores: carne picante (original), camarones picantes, bistec de carne, ostras picantes, cochino picante y queso']
  },

  {
    id: 'kangshifu-dashi-62g',
    name: 'Fideos instantáneos dashi Kangshifu [康師傅 高汤面]',
    highlight: 'Paquete de 62gr',
    details: ['Sabores: gallina y cerdo']
  },

  {
    id: 'super-q-ramen-100g',
    name: 'Super Q ramen clásico [超Q面]',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: jamón ahumado picante, pollo picante, mariscos picantes y carne picante']
  },

  {
    id: 'huafeng-sanxian-88g',
    name: 'Ramen Sanxian Hua Feng [华丰]',
    highlight: 'Paquete de 88gr',
    details: ['Sabores: cochino, mariscos, gambas, carne y pollo']
  },

  {
    id: 'kangshifu-sabor-feliz-pack-97g',
    name: 'Fideos instantáneos Kangshifu sabor feliz [康師傅 面 快乐 味]',
    highlight: 'Paquete de 97gr',
    details: ['Sabores: carne picante, pollo, cerdo picante']
  },

  {
    id: 'kangshifu-sabor-feliz-pote-109g',
    name: 'Fideos instantáneos Kangshifu sabor feliz [康師傅 面 快乐 味]',
    highlight: 'Pote de 109gr',
    details: ['Sabores: carne picante, pollo, cerdo picante']
  },

  {
    id: 'kangshifu-clasicos-big-pote-100g',
    name: 'Fideos instantáneos Kangshifu clásicos BIG [康師傅 面 经典 BIG]',
    highlight: 'Pote BIG de 100gr',
    details: ['Sabores: carne con pimienta, pollo picante, mariscos picantes, bistec de cerdo con chalotes picantes, carne con repollo y carne extra picante']
  },

  {
    id: 'jin-kimchi-ramen-111g',
    name: 'Kimchi ramen [오뚜기 김치라면]',
    highlight: 'Paquete de 111gr',
    details: ['Sabor: kimchi']
  },

  {
    id: 'ottogi-cheesy-ramen-111g',
    name: 'Cheesy ramen [오뚜기 보들보들 치즈라면]',
    highlight: 'Paquete de 111gr',
    details: ['Sabores: queso, queso frito y queso picante']
  },

  {
    id: 'mi-sedaap-ramen-88g',
    name: 'Ramen Mi Sedaap',
    highlight: 'Paquete de 88gr',
    details: ['Sabores: pollo con limón y frijoles, pollo crispy']
  },

  {
    id: 'avatar-ramen-pack-100g',
    name: 'Avatar Ramen [公仔麵]',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: vegetariano, wonton de mariscos, vegetales en escabeche, queso, bistec picante y pollo']
  },

  {
    id: 'avatar-ramen-bulto-500g',
    name: 'Avatar Ramen [公仔麵]',
    highlight: 'Bulto de 500gr (5 paquetes de 100gr)',
    details: ['Sabores: vegetariano, wonton de mariscos, vegetales en escabeche, queso, bistec picante, aceite de sésamo y pollo']
  },

  {
    id: 'nissin-demae-ramen-100g',
    name: 'NISSIN Ramen [NISSIN 出前一丁]',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: tonkotsu con ajo, filete 5 especias, Kyushu tonkotsu, Hokkaido miso tonkotsu']
  },

  {
    id: 'knorr-pasta-80g',
    name: 'Knorr Pasta (instantánea)',
    highlight: 'Paquete de 80gr',
    details: ['Sabores: jamón ahumado con vegetales, carne guisada, ostras y lomito']
  },

  {
    id: 'ramen-hongkong-85g',
    name: 'Ramen edición HongKong [四洲香港品牌,始于1971]',
    highlight: 'Paquete de 85gr',
    details: ['Sabores: bistec de carne, vegetales y pollo']
  },

  {
    id: 'ramen-hongkong-bulto-425g',
    name: 'Ramen edición HongKong [四洲香港品牌,始于1971]',
    highlight: 'Bulto de 425gr (5 paquetes de 85gr)',
    details: ['Sabores: bistec de carne, vegetales y pollo']
  },

  {
    id: 'kangshifu-maestro-tang-95g',
    name: 'Kangshifu Ramen del maestro Tang [康師傅 汤大师]',
    highlight: 'Paquete de 95gr',
    details: ['Sabores: bistec de res y cerdo a la BBQ']
  },

  {
    id: 'indomie-mi-goreng-85g',
    name: 'Indomie Mi Goreng Noodles',
    highlight: 'Paquete de 85gr',
    details: ['Sabor: agridulce']
  },

  {
    id: 'paldo-gomtang-125g',
    name: 'Paldo Premium Gomtang [팔도 설렁탕면]',
    highlight: 'Paquete de 125gr',
    details: ['Sabor: carne de res']
  },

  {
    id: 'kangshifu-tonkotsu-105g',
    name: 'Kangshifu Tonkotsu Ramen [康師傅 日式 豚骨面]',
    highlight: 'Paquete de 105gr',
    details: ['Sabor: costilla de cerdo']
  },

  {
    id: 'kangshifu-beef-pot-140g',
    name: 'Kangshifu Ramen [康師傅 牛肉面]',
    highlight: 'Pote de 140gr',
    details: ['Sabores: carne con escabeche y bistec de carne']
  },

  {
    id: 'kangshifu-especiales-85g',
    name: 'Kangshifu Ramen Ediciones Especiales [康師傅]',
    highlight: 'Paquete de 85gr',
    details: ['Sabores: carne en sopa dorada, pollo y carne con vegetales']
  },

  {
    id: 'kangshifu-big-120g',
    name: 'Kangshifu Ramen BIG [康師傅 大食袋]',
    highlight: 'Paquete de 120gr',
    details: ['Sabores: bistec de carne picante, carne en sopa dorada y tomate']
  },

  {
    id: 'ramen-coreano-kimchi-151g',
    name: 'Ramen estilo coreano [大食機 국스타일]',
    highlight: 'Paquete de 151gr',
    details: ['Sabor: kimchi']
  },

  {
    id: 'doll-ramen-105g',
    name: 'El Rey del Ramen [公仔文 DOLL 炒面王]',
    highlight: 'Paquete de 105gr',
    details: ['Sabores: hiper picante, carne con vegetales, tomate y ostras']
  }

];

const bebidas = [
  {
    id: 'mirinda-330ml',
    name: 'Refresco Mirinda [美年达]',
    highlight: 'Lata de 330ml',
    details: ['Sabor: naranja']
  },

  {
    id: 'coca-cola-china-zero-245ml',
    name: 'Coca-cola china [可口可乐]',
    highlight: 'Lata de 245ml',
    details: ['Sabor: zero']
  },

  {
    id: 'coca-cola-china-cherry-330ml',
    name: 'Coca-cola china [可口可乐]',
    highlight: 'Lata de 330ml',
    details: ['Sabor: cherry']
  },

  {
    id: 'yogurt-zhiguoli-250gr',
    name: 'Yogurt [吕蒙牛 直果粒]',
    highlight: 'Cartón de 250gr',
    details: ['Sabores: arándanos, fresa, melocotón, aloe vera y coco']
  },

  {
    id: 'pepsi-big-500ml',
    name: 'Pepsi Cola BIG',
    highlight: 'Botella de 500ml',
    details: ['Sabores: normal y zero']
  },

  {
    id: 'pepsi-light-500ml',
    name: 'Pepsi Cola',
    highlight: 'Botella de 500ml',
    details: ['Sabor: light']
  },

  {
    id: 'pepsi-lata-500ml',
    name: 'Pepsi Cola',
    highlight: 'Lata de 500ml',
    details: ['Sabores: normal y limón']
  },

  {
    id: 'nescafe-180ml',
    name: 'Nescafé',
    highlight: 'Lata de 180ml',
    details: []
  },

  {
    id: 'nescafe-250ml',
    name: 'Nescafé',
    highlight: 'Lata de 250ml',
    details: []
  },

  {
    id: 'kangshifu-tea-330ml',
    name: 'Kangshifu bebidas [康師傅 Tea Drink]',
    highlight: 'Botella de 330ml',
    details: ['Sabores: limón, melocotón, hierbabuena con miel, naranja, durazno']
  },

  {
    id: 'kangshifu-tea-1l',
    name: 'Kangshifu bebidas [康師傅 Tea Drink]',
    highlight: 'Botella de 1lt',
    details: ['Sabores: limón, melocotón, hierbabuena con miel, yogurt, pera, naranja, frutos rojos con arándanos, frutos cítricos, ciruelas']
  },

  {
    id: 'wahaha-milktea-500ml',
    name: 'Wahaha Milktea [娃哈哈 奶茶]',
    highlight: 'Botella de 500ml',
    details: ['Sabor: original con miel']
  },

  {
    id: 'bongbong-juice-238ml',
    name: 'BongBong jugo [봉봉 Juice]',
    highlight: 'Lata de 238ml',
    details: ['Sabores: melocotón, uva verde, piña, fresa, naranja']
  },

  {
    id: 'milk-drink-245ml',
    name: 'Leche [Milk drink]',
    highlight: 'Lata de 245ml',
    details: []
  },

  {
    id: 'kangshifu-nestea-1l',
    name: 'Kangshifu Nestea [康師傅 Tea Drink]',
    highlight: 'Botella de 1lt',
    details: ['Sabores: limón, limón con menta, fruit punch']
  },

  {
    id: 'fanta-330ml',
    name: 'FANTA',
    highlight: 'Lata de 330ml',
    details: ['Sabores: fresa con kiwi y limón con mango y parchita']
  },

  {
    id: 'yakult-320-100ml',
    name: 'Yakult [乳酸菌饮料]',
    highlight: 'Botellas de 320ml y 100ml',
    details: ['Sabor: original (yogurt natural)']
  },

  {
    id: 'youlemei-milktea-80gr',
    name: 'Youlemei Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 80gr',
    details: ['Sabores: mango y café']
  },

  {
    id: 'youlemei-milktea-80gr-frijol',
    name: 'Youlemei Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 80gr',
    details: ['Sabores: frijol rojo con azúcar morena y frijol con mora']
  },

  {
    id: 'youlemei-milktea-80gr-rosas',
    name: 'Youlemei Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 80gr',
    details: ['Sabor: té de rosas']
  },

  {
    id: 'asia-sarsae-500ml',
    name: 'Asia SARSAE',
    highlight: 'Botella de 500ml',
    details: ['Sabor: sarsaparilla (vino)']
  },

  {
    id: 'soju-550ml',
    name: 'Soju [첨이슬 소주]',
    highlight: 'Botella de 550ml',
    details: ['Sabores: original, fresh, ciruela, uva, melocotón y toronja']
  },

  {
    id: 'youlemei-bubble-70gr-cerelac',
    name: 'Youlemei bubble Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 70gr',
    details: ['Sabores: original, fresa y cerelac']
  },

  {
    id: 'youlemei-bubble-70gr-frijoles',
    name: 'Youlemei bubble Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 70gr',
    details: ['Sabores: original, fresa, frijoles rojos, ocumo y vainilla']
  },

  {
    id: 'youlemei-bubble-70gr-choco',
    name: 'Youlemei bubble Milktea [优乐美 奶茶]',
    highlight: 'Vaso de 70gr',
    details: ['Sabores: original, fresa, ocumo, chocolate, café y cerelac']
  },

  {
    id: 'wahaha-yogurt-500ml',
    name: 'Yogurt [娃哈哈 100you爱你]',
    highlight: 'Botella de 500ml',
    details: ['Sabores: frutos rojos, menta, manzana, fresa, melocotón y frutas mixtas']
  },

  {
    id: 'assam-milktea-500ml',
    name: 'Milktea [统一阿萨姆 原味奶茶]',
    highlight: 'Botella de 500ml',
    details: ['Sabores: original y té verde con leche']
  },

  {
    id: 'starbucks-270ml',
    name: 'Starbucks Coffee',
    highlight: 'Botella de 270ml',
    details: ['Sabores: americano y latte']
  },

  {
    id: 'aloe-vera-juice-500ml',
    name: 'Aloe Vera Juice [니가선 알로에]',
    highlight: 'Botella de 500ml',
    details: ['Sabores: original, limón, toronja, uva y frutos rojos']
  },

  {
    id: 'lajiaoxiang-milktea-123gr',
    name: 'Té con leche Lajiaoxiang [鹿角巷]',
    highlight: 'Vaso de 123gr',
    details: ['Sabor: té negro con leche']
  },

  {
    id: 'rio-light-500ml-45',
    name: 'RIO Cóctel [RIO 轻享]',
    highlight: 'Lata de 500ml · 4.5% vol',
    details: ['Sabores: toronja, uva y melocotón']
  },

  {
    id: 'fragrant-milktea-80gr-cafe',
    name: 'Fragante Milktea [香飘飘味奶茶]',
    highlight: 'Vaso de 80gr',
    details: ['Sabores: cerelac, original, café y ocumo']
  },

  {
    id: 'fragrant-milktea-80gr-mango',
    name: 'Fragante Milktea [香飘飘味奶茶]',
    highlight: 'Vaso de 80gr',
    details: ['Sabores: mango y arándanos']
  },

  {
    id: 'fragrant-milktea-192gr-pack',
    name: 'Fragante Milktea [香飘飘味奶茶]',
    highlight: 'Cartón de 192gr (3 vasos de 64gr)',
    details: ['Sabor: frijol rojo']
  },
  {
    id: 'fragrant-milktea-240gr-pack',
    name: 'Fragante Milktea [香飘飘味奶茶]',
    highlight: 'Cartón de 240gr (3 vasos de 80gr)',
    details: ['Sabores: cerelac, fresa, ocumo y original']
  },

  {
    id: 'rio-strong-500ml',
    name: 'Rio STRONG Zero',
    highlight: 'Lata de 500ml',
    details: ['Sabores: piña, toronja, uva morada, manzana verde, limón, uva verde']
  },

  {
    id: 'rio-light-330ml-3',
    name: 'RIO Light Cóctel',
    highlight: 'Lata de 330ml · 3% vol',
    details: ['Sabores: melocotón, lychee, fresa y yogurt']
  },

  {
    id: 'salt-cola-320gr',
    name: 'Salt cola [咸乐]',
    highlight: 'Lata de 320gr',
    details: ['Sabor: cola con sal del Himalaya']
  },

  {
    id: 'old-town-white-coffee-375gr',
    name: 'Old Town White Coffee',
    highlight: 'Paquete de 375gr (15 sobres de 25gr)',
    details: ['Sabores: 30% menos azúcar, extra rico, con azúcar de caña, avellana y extra fino']
  },

  {
    id: 'rio-cocktail-275ml',
    name: 'RIO Cóctel',
    highlight: 'Botella de 275ml · 3% vol',
    details: ['Sabores: durazno, arándano, fresa y whisky rosa']
  },

  {
    id: 'cat-four-coffee-450gr',
    name: 'Cuatro Gatos de Café (instantáneo) [CAT FOUR COFFE]',
    highlight: 'Paquete de 450gr (30 sobres de 15gr)',
    details: ['Sabores: capuchino, café de montaña azul, latte y café expreso fuerte']
  },

  {
    id: 'wow-juice-490ml',
    name: 'Jugo WOW! (a base de arroz) [有米大果粒果汁!!WOW!]',
    highlight: 'Lata de 490ml',
    details: ['Sabores: uva verde y durazno']
  },

  {
    id: 'youlemei-milktea-sobre-22gr',
    name: 'Youlemei Milktea Sobre [优乐美 奶茶]',
    highlight: 'Sobre de 22gr',
    details: ['Sabores: original, fresa, cerelac, café y chocolate']
  },

  {
    id: 'mimile-yogurt-450ml',
    name: 'Yogurt [米米乐]',
    highlight: 'Vaso de 450ml',
    details: ['Sabores: uva, fresa y mango']
  },

  {
    id: 'nescafe-1plus2-105gr',
    name: 'Nescafé 1+2',
    highlight: 'Caja de 105gr (7 sobres de 15gr)',
    details: ['Sabores: suave y estilo italiano bajo en azúcar']
  },

  {
    id: 'vitasoy-330ml',
    name: 'Leche de soya Vitasoy [維他奶 Vitasoy]',
    highlight: 'Botella de 330ml',
    details: ['Sabor: original']
  },

  {
    id: 'vita-tea-480ml',
    name: 'VITA Té [維他 VITA]',
    highlight: 'Botella de 480ml',
    details: ['Sabores: milk tea, durazno, limón y manzanilla']
  },

];

const snacks = [
  {
    id: 'kangshifu-pokemon-34g',
    name: 'Kangshifu snack Pokemón [康師傅 Snack]',
    highlight: 'Paquete de 34gr',
    details: ['Sabores: pollo, pollo picante, carne, carne picante, crema y cebolla, mariscos, cangrejo picante, langosta, BBQ']
  },

  {
    id: 'marlbolu-168g',
    name: 'Marlbolu Snack',
    highlight: 'Paquete de 168gr',
    details: ['Sabores: tomate, camarón y papitas']
  },

  {
    id: 'ridge-100g',
    name: 'Papas RIDGE [丽丽 RIDGE]',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: sushi, ramen, pimentón con pimiento, crema y cebolla, tomate, pepino y carne']
  },

  {
    id: 'honey-bites-90g',
    name: 'Honey bites [허니버터칩]',
    highlight: 'Paquete de 90gr',
    details: ['Sabor: miel']
  },

  {
    id: 'copico-55g',
    name: 'Papas Copico [可比克]',
    highlight: 'Paquete de 55gr',
    details: ['Sabores: tomate, original, pimentón con pimiento, pepino, carne']
  },

  {
    id: 'lays-rizadas-70g',
    name: "Lay's papitas Rizadas",
    highlight: 'Paquete de 70gr',
    details: ['Sabores: alitas de pollo, original, tomate, calamar y picante']
  },

  {
    id: 'lays-papitas-70g',
    name: "Lay's papitas",
    highlight: 'Paquete de 70gr',
    details: ['Sabores: Texas BBQ, pescado asado, langosta picante, original, carne roja italiana, ostras asadas, hot pot, limón, tomate y pepino']
  },

  {
    id: 'lays-lata-90g',
    name: "Papas Lay's",
    highlight: 'Lata de 90gr',
    details: ['Sabores: cerdo, tomate, limón, pepino, original, sushi, carne seca, carne y cordero']
  },

  {
    id: 'lays-135g',
    name: "Papas Lay's",
    highlight: 'Paquete de 135gr',
    details: ['Sabores: pepino, tomate, original y carne italiana']
  },
  {
    id: 'xiazaimian-108g',
    name: 'Snack Xiazaimian',
    highlight: 'Paquete de 108gr',
    details: ['Sabores: camarón y cangrejo picante']
  },

  {
    id: 'yatoudou-40g',
    name: 'Snack Ya! Patata [呀!土豆]',
    highlight: 'Paquete de 40gr',
    details: ['Sabores: carne y langosta']
  },

  {
    id: 'yatoudou-70g',
    name: 'Snack Ya! Patata [呀!土豆]',
    highlight: 'Paquete de 70gr',
    details: ['Sabores: pollo, carne, miel, tomate y langosta']
  },

  {
    id: 'pepito-camaron-80g',
    name: 'Pepito de camarón [虾条]',
    highlight: 'Paquete de 80gr',
    details: ['Sabores: original, picante, algas, BBQ, no picante']
  },

  {
    id: 'orion-potato-104g',
    name: 'Papas Orión [好丽友 POTATO CHIPS]',
    highlight: 'Cartón de 104gr',
    details: ['Sabores: original, miel, pepino, carne y tomate']
  },

  {
    id: 'yakimorokoshi-85g',
    name: 'Palitos de maíz saborizados [焼きもろこし]',
    highlight: 'Paquete de 85gr',
    details: ['Sabores: ajo, pollo cantonés, picante, pollo asado, langosta, maíz asado en salsa de anguila, maíz asado sabor a carne y crema de maíz']
  },

  {
    id: 'youyouqu-45g',
    name: 'Papas onduladas [好友趣 chips]',
    highlight: 'Paquete de 45gr',
    details: ['Sabores: carne, pollo y kimchi']
  },

  {
    id: 'orion-fish-33g',
    name: 'Orion galletas de pez [好丽友 Snacks]',
    highlight: 'Caja de 33gr',
    details: ['Sabores: alas de pollo con miel, normal, BBQ y algas']
  },

  {
    id: 'haitaiguoba-276g',
    name: 'Galletas de Arroz [旺粗粮早餐620- HAI TAI GUO BA-]',
    highlight: 'Paquete de 276gr',
    details: ['Sabores: agridulce, carne y algas']
  },

  {
    id: 'cod-galletas-camaron-500g',
    name: 'Galletas de Camarón [乐品SHUO COD大连虾片]',
    highlight: 'Paquete de 500gr',
    details: ['Sabor: camarón']
  },

  {
    id: 'gemez-enaak-224g',
    name: 'GEMEZ Enaak snack',
    highlight: 'Paquete de 224gr',
    details: ['Sabores: pollo BBQ y extra picante']
  },

  {
    id: 'potato-chips-50g',
    name: 'POTATO CHIPS',
    highlight: 'Paquete de 50gr',
    details: ['Sabores: picante y tomate']
  },

];

const dulces = [
  {
    id: 'lotte-choco-pie-336gr',
    name: 'LOTTE Choco Pie',
    highlight: 'Caja de 336gr (12 paquetes de 28gr)',
    details: ['Sabor: vainilla con chocolate']
  },

  {
    id: 'orion-q-138gr',
    name: 'Orión Q [好丽友 Q]',
    highlight: 'Caja de 138gr (6 ponques)',
    details: ['Sabores: tiramisú, red velvet y avellana']
  },

  {
    id: 'oreo-88gr',
    name: 'Galletas Oreo [夹心饼干]',
    highlight: 'Caja de 88gr',
    details: ['Sabores: original y fresa']
  },

  {
    id: 'oreo-matcha-97gr',
    name: 'Galletas Oreo [夹心饼干]',
    highlight: 'Caja de 97gr',
    details: ['Sabor: matcha']
  },

  {
    id: 'oreo-349gr',
    name: 'Galletas Oreo [夹心饼干]',
    highlight: 'Paquete de 349gr',
    details: ['Sabores: chocolate y fresa']
  },

  {
    id: 'pejoy-47gr-chocolate',
    name: 'Palitos de galleta Pejoy [พี่จอย]',
    highlight: 'Caja de 47gr',
    details: ['Sabores: chocolate y chocolate blanco']
  },

  {
    id: 'pejoy-47gr-premium',
    name: 'Palitos de galleta Pejoy [พี่จอย]',
    highlight: 'Caja de 47gr',
    details: ['Sabores: chocolate oscuro, chocolate con avellanas, chocolate blanco y chocolate con vino']
  },

  {
    id: 'pejoy-47gr-exoticos',
    name: 'Palitos de galleta Pejoy [พี่จอย]',
    highlight: 'Caja de 47gr',
    details: ['Sabores: tiramisú, té de manzanilla, té de camomila, arándanos, parchita, cheesecake, frambuesa, té verde, pie de limón y fresa']
  },

  {
    id: 'pocky-25gr-banana',
    name: 'Pocky [百奇]',
    highlight: 'Caja de 25gr',
    details: ['Sabores: chocolate con banana, fresa y original']
  },

  {
    id: 'pocky-55gr-frutas',
    name: 'Pocky [百奇]',
    highlight: 'Caja de 55gr',
    details: ['Sabores: original, chocolate blanco, arándanos, melocotón, té verde y fresa']
  },

  {
    id: 'pocky-55gr-chocolate',
    name: 'Pocky [百奇]',
    highlight: 'Caja de 55gr',
    details: ['Sabores: chocolate oscuro, chocolate con leche, arándanos y fresa']
  },

  {
    id: 'cacaomochi-80gr',
    name: 'Mochi Cacaomochi [麻/愕 可可]',
    highlight: 'Caja de 80gr',
    details: ['Sabores: matcha, mango, leche y fresa']
  },

  {
    id: 'cacaomochi-160gr',
    name: 'Mochi Cacaomochi [麻/愕 可可]',
    highlight: 'Caja de 160gr',
    details: ['Sabores: matcha, mango, leche y fresa']
  },

  {
    id: 'lotte-custard-138gr',
    name: 'LOTTE Custard Pie',
    highlight: 'Caja de 138gr',
    details: ['Sabor: vainilla']
  },

  {
    id: 'orion-pie-138gr',
    name: 'Orión pie [好丽友 pie]',
    highlight: 'Caja de 138gr (6 ponques)',
    details: ['Sabores: vainilla y tiramisú']
  },

  {
    id: 'orion-pie-mochi-168gr',
    name: 'Orión pie [好丽友 pie]',
    highlight: 'Caja de 168gr (6 ponques)',
    details: ['Sabor: vainilla con relleno de mochi']
  },

  {
    id: 'orion-pie-168gr',
    name: 'Orión pie [好丽友 pie]',
    highlight: 'Caja de 168gr (6 ponques)',
    details: ['Sabor: vainilla con relleno de malvavisco y dulce de frijol']
  },

  {
    id: 'pepero-47gr',
    name: 'Ppeppero [빼빼로]',
    highlight: 'Caja de 47gr',
    details: ['Sabores: original, cookies and cream, chocolate con almendras, chocolate crunchy, chocolate con Oreo y chocolate filled']
  },

  {
    id: 'heibaipei-60gr',
    name: 'Heibaipei galletas (pirulin) [旺旺 黑白配]',
    highlight: 'Caja de 60gr',
    details: ['Sabores: coco, dulce de leche, naranja, chocolate blanco y chocolate']
  },

  {
    id: 'koala-march-97gr',
    name: "KOALA'S MARCH / Galletas de koala",
    highlight: 'Caja de 97gr',
    details: ['Sabores: vainilla, chocolate blanco y chocolate']
  },

  {
    id: 'orion-chocopie-original',
    name: 'Orión chocopie [好丽友 pie]',
    highlight: 'Cajas de 160gr (6 ponques) y 72gr (2 ponques)',
    details: ['Sabor: original']
  },

  {
    id: 'orion-chocopie-matcha',
    name: 'Orión chocopie [好丽友 pie]',
    highlight: 'Cajas de 216gr (6 ponques) y 72gr (2 ponques)',
    details: ['Sabor: chocolate con matcha (té verde)']
  },

  {
    id: 'daliyuan-ponques-230gr',
    name: 'Ponques [达利园!派]',
    highlight: 'Paquete de 230gr (10 ponques)',
    details: ['Sabores: yogurt, fresa, vainilla y relleno de malvavisco con chocolate']
  },

  {
    id: 'jelly-stick-60gr',
    name: 'Palito de gomita [젤리스틱]',
    highlight: 'Caja de 60gr',
    details: ['Sabores: fresa y uva']
  },

  {
    id: 'sunyoung-chocostick-54gr',
    name: 'Palito de chocolate [Sunyoung 초코스틱]',
    highlight: 'Caja de 54gr',
    details: ['Sabores: chocolate con almendras, chocolate con maní, chocolate con galleta y chocolate explosivo']
  },

  {
    id: 'lotte-dream-cake-204gr',
    name: 'Dream Cake LOTTE [몽쉘]',
    highlight: 'Caja de 204gr (6 paquetes)',
    details: ['Sabores: vainilla y chocolate']
  },

  {
    id: 'daliyuan-swiss-roll-160gr',
    name: 'Swiss roll [达利园 瑞士卷]',
    highlight: 'Paquete de 160gr (8 ponques)',
    details: ['Sabores: fresa, cambur y naranja']
  },

  {
    id: 'daliyuan-swiss-roll-240gr',
    name: 'Swiss roll [达利园 瑞士卷]',
    highlight: 'Caja de 240gr (12 ponques)',
    details: ['Sabores: fresa, avellana, cambur y naranja']
  },

  {
    id: 'champi-chocolate-48gr',
    name: 'Champiñones de chocolate [蘑劼]',
    highlight: 'Caja de 48gr',
    details: ['Sabores: chocolate, fresa y chocolate con almendras']
  },

  {
    id: 'pudding-160-190gr',
    name: 'Gelatina Pudding [PUDDING 火山形布町]',
    highlight: 'Paquetes de 160gr y 190gr',
    details: ['Sabores: fresa y piña']
  },

  {
    id: 'fustua-small-biscuits-108gr',
    name: 'Fustua Small Black Biscuits',
    highlight: 'Paquete de 108gr',
    details: ['Sabores: fresa y limón']
  },

  {
    id: 'raminoduo-144gr',
    name: 'Chips ahoy [Raminoduo COOKIE]',
    highlight: 'Caja de 144gr',
    details: ['Sabor: doble chocolate']
  },

  {
    id: 'raminoduo-255gr',
    name: 'Chips ahoy [Raminoduo COOKIE]',
    highlight: 'Caja de 255gr',
    details: ['Sabores: chocolate y chocolate con frijol rojo']
  },

  {
    id: 'frutal-biscuits-205gr',
    name: 'Frutal Biscuits [果乐果香]',
    highlight: 'Paquete de 205gr',
    details: ['Sabores: limón, arándano, naranja, fresa y piña']
  },

  {
    id: 'aji-cookies-100gr',
    name: 'Aji cookies',
    highlight: 'Caja de 100gr',
    details: ['Sabores: chocolate con chispas y relleno de mochi']
  },

  {
    id: 'flaquitos-90gr',
    name: 'Flaquitos [巧缘 バスクラッカ]',
    highlight: 'Paquete de 90gr',
    details: ['Sabores: chocolate con maní, chocolate con galleta y chocolate con banana']
  },

  {
    id: 'fustua-macaroons-108gr',
    name: 'Fustua Macaroons Sandwich Biscuit',
    highlight: 'Paquete de 108gr',
    details: ['Sabores: fresa y limón']
  },

  {
    id: 'cundo-chocopie-120gr',
    name: 'Chocopie [Cundo 唇动]',
    highlight: 'Caja de 120gr (4 paquetes)',
    details: ['Sabores: fresa y vainilla']
  },

  {
    id: 'fustua-sandwich-100gr',
    name: 'Fustua Sandwich Biscuits',
    highlight: 'Paquete de 100gr',
    details: ['Sabores: naranja, cereza, arándanos y fresa']
  },

  {
    id: 'jellies-405-360gr',
    name: 'Gelatinas [喜之郎 Jellies]',
    highlight: 'Paquetes de 405gr y 360gr',
    details: ['Sabores normales: naranja, manzana, fresa y mango', 'Sabores con leche: yogurt, fresa y maíz']
  },

  {
    id: 'fustua-cookies-108gr',
    name: 'Fustua Cookies',
    highlight: 'Paquetes de 108gr',
    details: ['Variedades: cheese cookies y butter cookies']
  },

  {
    id: 'cundo-chocopie-154gr',
    name: 'Cundo Chocopie [Cundo 唇动]',
    highlight: 'Paquete de 154gr (6 paquetes)',
    details: ['Sabores: melocotón, limón, uva, chocolate, fresa y chocolate blanco']
  },

  {
    id: 'aji-wafer-160gr',
    name: 'Aji Wafer Biscuit',
    highlight: 'Caja de 160gr',
    details: ['Sabores: vainilla, frijol y queso']
  },

  {
    id: 'kangshifu-3plus2-125gr',
    name: 'Kangshifu Galletas [康師傅 3+2]',
    highlight: 'Paquete de 125gr',
    details: ['Sabores: limón, chocolate blanco, arándano, doble chocolate y yogurt']
  },

  {
    id: 'biscuit-250gr',
    name: 'Biscuit relleno de cacao [可可夹心饼干]',
    highlight: 'Paquete de 250gr',
    details: ['Sabores: limón, fresa, vainilla y variado']
  },

  {
    id: 'eshine-pudding-600gr',
    name: 'Gelatinas de Pudding [Puré E-shine Pudding]',
    highlight: 'Paquete de 600gr',
    details: ['Sabores variados: fresa, uva, arándanos, yogurt, piña, etc.']
  },

  {
    id: 'mochi-140gr',
    name: 'Mochi [和麻风糬芝麻]',
    highlight: 'Caja de 140gr',
    details: ['Sabores: original y con ajonjolí']
  },

  {
    id: 'jellies-vasos-218gr',
    name: 'Vasos de gelatina [喜之郎 Jellies]',
    highlight: 'Vaso de 218gr',
    details: ['Sabores: manzana verde, litchi, piña, naranja, uva verde']
  },

  {
    id: 'jacknjill-24u',
    name: 'Galletas Rellenas [JACKNJILL โมจิก]',
    highlight: 'Paquete de 24 unidades',
    details: ['Sabores: fresa con crema, doble chocolate, vainilla con chocolate, crema']
  },

  {
    id: 'panda-kid-58-64gr',
    name: 'Gomitas Mágicas [PANDA KID]',
    highlight: 'Paquetes de 58gr a 64gr',
    details: ['Sabores: banana milk, fresa, uva, melocotón, tamarindo y durian']
  },

  {
    id: 'panda-kid-70gr',
    name: 'Gomitas Mágicas [PANDA KID]',
    highlight: 'Paquete de 70gr',
    details: ['Sabores: uva verde y uva morada', '50% menos azúcar']
  },

  {
    id: 'panda-kid-72gr',
    name: 'Gomitas Mágicas [PANDA KID]',
    highlight: 'Paquete de 72gr',
    details: ['Sabores: mango, melón, limón, litchi, arándanos y toronja']
  },

  {
    id: 'cokelate-marshmallow-160gr',
    name: 'Marshmallows [Cokelate棉花糖マシュマロ]',
    highlight: 'Botella de 160gr',
    details: ['Sabores: vainilla, fresa, chicle y helado']
  },

  {
    id: 'yovpei-gomitas-70-92gr',
    name: 'Gomitas Ácidas [YOVPEI 传份 子機酸果条 すっぱいバ]',
    highlight: 'Paquetes de 70gr a 92gr',
    details: ['Sabor: trisabor ácidos']
  },

  {
    id: 'eshine-gelatinas-600gr',
    name: 'E-shine Gelatinas [E-Shineそのまんま蒟蒻FRUIT JELLY]',
    highlight: 'Paquete de 600gr',
    details: ['Sabores variados: mango, fresa, melocotón, parchita']
  },

  {
    id: 'daliyuan-custard-18u',
    name: 'Ponques [达利园!派 Custard Pie]',
    highlight: 'Paquete de 18 unidades',
    details: ['Sabores: vainilla y fresa']
  },

  {
    id: 'jellies-cici-150gr',
    name: 'Gelatinas CiCi [喜之郎 Jellies]',
    highlight: 'Sobre de 150gr',
    details: ['Sabores: melocotón, manzana, naranja, limón, piña y mango']
  },

  {
    id: 'meiji-yanyan-50gr',
    name: 'Meiji YANYAN',
    highlight: 'Vaso de 50gr',
    details: ['Sabores: chocolate blanco y fresa']
  },

  {
    id: 'mini-oreos-55gr',
    name: 'Mini oreos',
    highlight: 'Vaso de 55gr',
    details: ['Sabores: yogurt, chocolate y fresa']
  },

  {
    id: 'oreo-pirulin-50gr',
    name: 'Oreo Pirulin [夹心饼干 可可脆卷]',
    highlight: 'Caja de 50gr',
    details: ['Sabores: fresa, chocolate, té verde y vainilla']
  },

  {
    id: 'orion-chocopie-180gr',
    name: 'Orión Chocopie [好丽友 可可派]',
    highlight: 'Caja de 180gr (6 ponques)',
    details: ['Sabor: chocolate negro']
  },

  {
    id: 'malvaviscos-rellenos-64gr',
    name: 'Malvaviscos Rellenos [夹馅 棉花糖]',
    highlight: 'Paquetes de 64gr (20 malvaviscos)',
    details: ['Sabores: uva y naranja']
  },

  {
    id: 'khong-guan-sultana',
    name: 'KHONG GUAN Sultana biscuits',
    highlight: 'Paquetes de 200gr y 260gr (10 unidades)',
    details: ['Sabor: uva']
  },

  {
    id: 'pretz-45-65gr',
    name: 'Pretz',
    highlight: 'Cajas de 45gr (dulces) y 65gr (salados)',
    details: ['Sabores dulces: té verde y arándanos', 'Sabores salados: pizza y camarón']
  }

];

const catalogCategories = [
  {
    id: 'ramens',
    title: 'Ramens',
    icon: '🍜',
    accent: 'linear-gradient(120deg, rgba(248,113,113,0.4), rgba(244,63,94,0.3))',
    items: ramens
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    icon: '🧋',
    accent: 'linear-gradient(120deg, rgba(59,130,246,0.4), rgba(45,212,191,0.3))',
    items: bebidas
  },
  {
    id: 'snacks',
    title: 'Snacks',
    icon: '🍿',
    accent: 'linear-gradient(120deg, rgba(251,191,36,0.4), rgba(249,115,22,0.3))',
    items: snacks
  },
  {
    id: 'dulces',
    title: 'Dulces',
    icon: '🍬',
    accent: 'linear-gradient(120deg, rgba(244,114,182,0.4), rgba(168,85,247,0.3))',
    items: dulces
  }
];

export default catalogCategories;
