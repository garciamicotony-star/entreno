// Plan nutricional rotativo · 9 días · ~2000 kcal · 4 comidas
// Autor: Toni Garcia | Coach: Alberto Mareque
// Ingredientes: [nombre, cantidad, kcal, carbohidratos, proteína, grasa]
window.NUTRITION = {
  author: 'Toni Garcia',
  coach: 'Alberto Mareque',
  target: '~2000 kcal · 4 comidas',
  days: [
    // ─────────── DÍA 1 ───────────
    {
      n: 1,
      totals: { kcal: 1964, c: 206, p: 156, f: 58 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Avena con crema de cacahuete',
          kcal: 433, c: 51, p: 33, f: 11,
          ing: [
            ['Avena instantánea', '70g', 249, 41.3, 9.8, 4.9],
            ['Leche desnatada', '120g', 41, 5.6, 3.7, 0.4],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['Crema de cacahuete', '10g', 59, 1.2, 3, 4.7]
          ],
          prep: 'Añade avena, leche y proteína en polvo. Mezcla bien. Añade edulcorante al gusto. Añade crema de cacahuete.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Fajitas de pollo y queso + yogur',
          kcal: 570, c: 52, p: 56, f: 15,
          ing: [
            ['2 tortillas de trigo', '72g', 209, 36, 5.8, 4.6],
            ['Pechuga de pollo desmenuzada', '150g', 159, 0.8, 33, 2.7],
            ['Queso mozzarella rallado', '30g', 85, 0.8, 6.3, 6.3],
            ['Pimiento rojo/verde (opcional)', '100g', 25, 4.5, 0.9, 0.4],
            ['Yogur proteico', '120g', 92, 10, 10, 1.3]
          ],
          prep: 'Saltea el pollo y las verduras con especias. Rellena la tortilla con el salteado y el queso. Cierra y pasa por la sartén para que quede crujiente.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Sándwich de pavo, tomate, lechuga y queso',
          kcal: 418, c: 50, p: 34, f: 10,
          ing: [
            ['Pan blanco', '100g', 239, 40, 10.7, 4],
            ['Lechuga (opcional)', '100g', 25, 4.5, 0.9, 0.4],
            ['Tomate (opcional)', '100g', 25, 4.5, 0.9, 0.4],
            ['Pechuga de pavo fiambre', '80g', 62, 0.5, 14.2, 0.4],
            ['Queso havarti light', '25g', 67, 0.4, 6.8, 4.3]
          ],
          prep: 'Monta el sándwich con el pavo, el queso, la lechuga y el tomate.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Fajipizza de jamón y queso + postre',
          kcal: 543, c: 53, p: 33, f: 22,
          ing: [
            ['Piadina / maxi fajita de trigo', '80g', 252, 42, 5.6, 6.8],
            ['Salsa de tomate', '70g', 44, 4.6, 1.1, 2.5],
            ['Queso mozzarella rallado', '50g', 142, 1.3, 10.5, 10.5],
            ['Jamón cocido fiambre', '79g', 79, 0.7, 14.7, 2],
            ['Cebolla/pimientos/champiñones (opcional)', '100g', 25, 0, 0, 0],
            ['Postre: manzana, plátano, mandarina, kiwi, 2 onzas chocolate 80% o helado bombón sin azúcar', '—', 0, 0, 0, 0]
          ],
          prep: 'Precalienta horno/airfryer. Añade salsa de tomate, queso y jamón a la base. Cocina hasta que se derrita el queso.'
        }
      ]
    },

    // ─────────── DÍA 2 ───────────
    {
      n: 2,
      totals: { kcal: 2024, c: 243, p: 127, f: 61 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Avena de Lotus',
          kcal: 432, c: 55, p: 29, f: 11,
          ing: [
            ['Avena instantánea', '60g', 213, 35.4, 8.4, 4.2],
            ['Leche desnatada', '120g', 41, 5.6, 3.7, 0.4],
            ['Proteína en polvo (vainilla)', '20g', 84, 2.7, 16, 1],
            ['Galleta Lotus', '1 ud', 36, 5.5, 0.4, 1.4],
            ['Crema Lotus Biscoff', '10g', 58, 5.7, 0.3, 3.8]
          ],
          prep: 'Mezcla avena, leche y proteína. Añade crema Lotus por encima. Deja en nevera 4h o toda la noche. Tritura una galleta Lotus y añade como topping.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Pasta bolognesa',
          kcal: 599, c: 82, p: 30, f: 17,
          ing: [
            ['Pasta', '70g', 247, 50.4, 9.1, 1.1],
            ['Carne picada de vacuno', '100g', 204, 0.5, 19, 14],
            ['Salsa de tomate', '50g', 32, 3.3, 0.8, 1.8],
            ['Postre: manzana, plátano, mandarina o yogur proteico', '—', 0, 0, 0, 0]
          ],
          prep: 'Dora la carne picada en sartén mientras cuece la pasta. Añade la salsa de tomate y la pasta.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Yogur con muesli y arándanos',
          kcal: 403, c: 44, p: 32, f: 11,
          ing: [
            ['Yogur griego ligero', '200g', 120, 9.4, 11.6, 4],
            ['Muesli sin azúcares', '50g', 176, 26, 4.4, 6],
            ['Arándanos', '50g', 23, 5.5, 0.4, 0],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1]
          ],
          prep: 'Mezcla yogur con proteína hasta que no haya grumos. Añade muesli y arándanos.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Hamburguesa de ternera con patatas',
          kcal: 590, c: 62, p: 36, f: 22,
          ing: [
            ['Carne picada de vacuno', '100g', 204, 0.5, 19, 14],
            ['Pan de hamburguesa', '75g', 197, 34, 7.5, 3.4],
            ['Queso havarti light', '25g', 67, 0.4, 6.8, 4.3],
            ['Patata', '150g', 106, 23.6, 2.6, 0.2],
            ['Ketchup zero', '20g', 16, 3.6, 0.3, 0]
          ],
          prep: 'Cocina la hamburguesa en sartén o airfryer. Corta y cocina las patatas en horno o airfryer. Monta en el pan con queso y ketchup.'
        }
      ]
    },

    // ─────────── DÍA 3 ───────────
    {
      n: 3,
      totals: { kcal: 1983, c: 257, p: 125, f: 51 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Tostadas con aguacate y huevo',
          kcal: 353, c: 34, p: 18, f: 16,
          ing: [
            ['2 rebanadas pan de molde blanco', '60g', 159, 30, 5.8, 1.8],
            ['Aguacate', '40g', 69, 3.4, 0.8, 5.8],
            ['2 huevos', '120g', 125, 0.8, 11, 8.6]
          ],
          prep: 'Tuesta el pan. Añade aguacate o guacamole y los huevos (a la plancha o cocidos).'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Arroz con pechuga de pollo y verduras',
          kcal: 608, c: 101, p: 42, f: 4,
          ing: [
            ['Arroz blanco', '90g', 308, 67.5, 7.4, 0.9],
            ['Pechuga de pollo', '150g', 159, 0.8, 33, 2.7],
            ['Pimiento / cebolla al gusto', '100g', 25, 0, 0, 0],
            ['Postre: manzana, plátano, mandarina, kiwi o yogur proteico', '—', 0, 0, 0, 0]
          ],
          prep: 'Cocina el pollo a la plancha o airfryer con especias. Cuece el arroz. Saltea verduras y sirve todo junto.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Brownie de plátano, avena y chocolate al microondas',
          kcal: 449, c: 70, p: 29, f: 6,
          ing: [
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['1 plátano maduro', '100g', 137, 32, 1.3, 0.4],
            ['Cacao puro', '5g', 16, 0.8, 1.3, 0.8],
            ['Copos de avena', '50g', 178, 29.5, 7, 3.5],
            ['Leche desnatada', '100g', 34, 4.7, 3.1, 0.3],
            ['Edulcorante', '5g', 0, 0, 0, 0]
          ],
          prep: 'Mezcla todo en un recipiente apto para microondas. 5 minutos a máxima potencia. También se puede comer sin cocinar.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Salmón con patatas y brócoli en airfryer',
          kcal: 573, c: 52, p: 36, f: 25,
          ing: [
            ['Lomo de salmón', '150g', 336, 0, 30, 24],
            ['Patata cocida / airfryer / horno', '300g', 212, 47.1, 5.1, 0.3],
            ['Brócoli (opcional)', '100g', 25, 0, 0, 0]
          ],
          prep: 'Lava y corta las patatas. Airfryer a 180°C durante 15 min. Añade el salmón y cocina 7-8 min más. Añade el brócoli.'
        }
      ]
    },

    // ─────────── DÍA 4 ───────────
    {
      n: 4,
      totals: { kcal: 2061, c: 197, p: 153, f: 74 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Tortitas proteicas con sirope de chocolate',
          kcal: 364, c: 33, p: 38, f: 9,
          ing: [
            ['Copos de avena', '40g', 142, 23.6, 5.6, 2.8],
            ['Leche desnatada', '100g', 34, 4.7, 3.1, 0.3],
            ['1 huevo', '60g', 62, 0.4, 5.5, 4.3],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['Edulcorante', '5g', 0, 0, 0, 0],
            ['Sirope (proteína de chocolate + leche)', '10g', 42, 1.3, 8, 0.5]
          ],
          prep: 'Mezcla avena, huevo, proteína, leche y edulcorante. Cocina porciones en sartén a fuego medio hasta que salgan burbujas y dale la vuelta. Sirope: mezcla proteína de chocolate con leche.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Sándwich de carne y queso + patatas',
          kcal: 662, c: 41, p: 47, f: 35,
          ing: [
            ['Filete de ternera', '150g', 306, 0.8, 28.5, 21],
            ['Queso mozzarella rallado', '60g', 170, 1.5, 12.6, 12.6],
            ['Pan de masa madre integral o blanco', '30g', 80, 15, 2.9, 0.9],
            ['Patata al horno / airfryer / cocida', '150g', 106, 23.6, 2.6, 0.2]
          ],
          prep: 'Cocina el filete a la plancha o airfryer. Sirve sobre el pan con mozzarella derretida. Acompaña con patatas.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Batido de fresa y plátano',
          kcal: 418, c: 58, p: 36, f: 5,
          ing: [
            ['Proteína en polvo (vainilla)', '30g', 125, 4, 24, 1.5],
            ['1 plátano congelado', '100g', 137, 32, 1.3, 0.4],
            ['Yogur griego ligero', '125g', 75, 5.9, 7.2, 2.5],
            ['Fresas congeladas', '100g', 47, 11, 0.7, 0],
            ['Leche desnatada', '100g', 34, 4.7, 3.1, 0.3]
          ],
          prep: 'Añade todos los ingredientes en la batidora y bate hasta que quede cremoso.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Tortilla de patatas FIT + pan y jamón serrano',
          kcal: 617, c: 65, p: 32, f: 25,
          ing: [
            ['Patata cocida de bote', '200g', 141, 31.4, 3.4, 0.2],
            ['Cebolla caramelizada (Hacendado)', '30g', 37, 6.4, 0.2, 1.2],
            ['2 huevos grandes', '120g', 125, 0.8, 11, 8.6],
            ['Aceite de oliva en spray', '10g', 82, 0, 0, 0],
            ['Pan blanco / masa madre / integral', '60g', 133, 25.8, 4.4, 1.4],
            ['Jamón serrano', '40g', 99, 0.4, 13.4, 4.9]
          ],
          prep: 'Corta las patatas en láminas. Saltéalas en sartén con spray 2-3 min. Añade cebolla caramelizada 1 min. Bate los huevos con sal, añade patatas y cebolla, reposa 2-3 min. Vierte en sartén con spray. Cocina a fuego medio-bajo 3-4 min. Da la vuelta con un plato y cocina 2-3 min más.'
        }
      ]
    },

    // ─────────── DÍA 5 ───────────
    {
      n: 5,
      totals: { kcal: 1935, c: 216, p: 134, f: 60 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Bagel de jamón y queso',
          kcal: 368, c: 44, p: 28, f: 9,
          ing: [
            ['Pan de bagel', '75g', 210, 40, 8, 2],
            ['Jamón cocido', '80g', 80, 0.7, 14.9, 2],
            ['Queso crema de untar light', '60g', 78, 2.9, 5.4, 5]
          ],
          prep: 'Corta el bagel por la mitad, unta el queso crema y añade el jamón cocido.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Ensalada césar de pasta',
          kcal: 585, c: 57, p: 42, f: 21,
          ing: [
            ['Pasta', '40g', 141, 28.8, 5.2, 0.6],
            ['Pechuga de pollo', '100g', 106, 0.5, 22, 1.8],
            ['Lechuga', '100g', 17, 3, 0.9, 0.2],
            ['Queso Parmesano / Grana Padano', '20g', 79, 0, 6.6, 5.8],
            ['Pan tostado (picatostes)', '30g', 117, 22.1, 3.6, 1.5],
            ['Yogur griego ligero (para la salsa)', '60g', 36, 2.8, 3.5, 1.2],
            ['Aceite de oliva', '10g', 82, 0, 0, 0],
            ['Zumo de limón', '5g', 0, 0, 0, 0],
            ['Mostaza', '10g', 7, 0, 0, 0]
          ],
          prep: 'Cuece la pasta. Salsa césar: mezcla yogur, aceite de oliva, zumo de limón, mostaza, sal y ajo en polvo. Cocina el pollo a la plancha, córtalo en dados. Monta en bowl: lechuga, pasta fría, pollo, picatostes, salsa y parmesano.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Avena horneada con frutos rojos y chocolate',
          kcal: 403, c: 54, p: 29, f: 8,
          ing: [
            ['Copos de avena', '60g', 213, 35.4, 8.4, 4.2],
            ['Leche desnatada', '100g', 34, 4.7, 3.1, 0.3],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['Levadura / polvo para hornear', '5g', 0, 0, 0, 0],
            ['Edulcorante', '5g', 0, 0, 0, 0],
            ['Arándanos / frutos rojos', '50g', 23, 5.5, 0.4, 0],
            ['Pepitas de chocolate', '10g', 49, 5.9, 0.6, 2.5]
          ],
          prep: 'Mezcla avena, proteína, levadura y edulcorante. Añade leche. Incorpora frutos rojos y pepitas de chocolate. Vierte en molde. Hornea/airfryer 15-20 min hasta dorado.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Filete de ternera con arroz',
          kcal: 579, c: 61, p: 35, f: 22,
          ing: [
            ['Filete de ternera', '150g', 306, 0.8, 28.5, 21],
            ['Arroz blanco', '80g', 273, 60, 6.6, 0.8]
          ],
          prep: 'Cocina el filete en sartén o airfryer mientras cuece el arroz. Puedes añadir salsa de tomate y verduras al gusto.'
        }
      ]
    },

    // ─────────── DÍA 6 ───────────
    {
      n: 6,
      totals: { kcal: 1999, c: 245, p: 175, f: 37 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Cereales con leche + plátano',
          kcal: 493, c: 81, p: 36, f: 3,
          ing: [
            ['Cereales tipo corn flakes', '40g', 146, 32.8, 2.7, 0.4],
            ['Leche desnatada', '250g', 85, 11.8, 7.8, 0.8],
            ['Proteína en polvo', '30g', 125, 4, 24, 1.5],
            ['Plátano', '100g', 137, 32, 1.3, 0.4]
          ],
          prep: 'Mezcla la leche con la proteína (sin grumos, en shaker o batidora). Calienta en microondas 1-2 min. Añade los cereales y el plátano.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Ñoquis con queso',
          kcal: 555, c: 60, p: 36, f: 19,
          ing: [
            ['Gnocchi (ñoquis)', '150g', 258, 56.4, 6.8, 0.6],
            ['Queso cottage', '100g', 99, 1.7, 14, 4],
            ['Queso mozzarella rallado', '70g', 198, 1.8, 14.7, 14.7]
          ],
          prep: 'Cuece los ñoquis según el paquete. Escurre y en la misma olla añade el queso cottage y la mozzarella. Revuelve hasta que se derrita.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Tortitas de arroz con pavo y quesitos + batido proteico',
          kcal: 441, c: 43, p: 53, f: 7,
          ing: [
            ['4 tortitas de arroz', '31g', 111, 23, 2.6, 0.9],
            ['Jamón cocido (fiambre)', '80g', 80, 0.7, 14.9, 2],
            ['2 quesitos light', '16g', 23, 0.9, 1.8, 1.4],
            ['Leche desnatada (batido)', '300g', 102, 14.1, 9.3, 0.9],
            ['Proteína en polvo (batido)', '30g', 125, 4, 24, 1.5]
          ],
          prep: 'Come las tortitas con el jamón y los quesitos. Batido: mezcla leche con proteína en shaker o batidora.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Merluza con patatas al horno + yogur con arándanos y muesli',
          kcal: 510, c: 61, p: 50, f: 8,
          ing: [
            ['Filete de merluza', '200g', 170, 1, 36, 2.4],
            ['Patata', '250g', 176, 39.3, 4.3, 0.3],
            ['Yogur griego ligero', '125g', 75, 5.9, 7.2, 2.5],
            ['Muesli sin azúcares', '20g', 70, 10.4, 1.8, 2.4],
            ['Arándanos', '40g', 19, 4.4, 0.3, 0]
          ],
          prep: 'Coloca merluza y patatas en láminas en bandeja de horno/airfryer. Añade especias. Cocina hasta que esté todo hecho. De postre: yogur con muesli y arándanos.'
        }
      ]
    },

    // ─────────── DÍA 7 ───────────
    {
      n: 7,
      totals: { kcal: 2008, c: 219, p: 151, f: 59 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Tostadas francesas proteicas',
          kcal: 472, c: 46, p: 33, f: 17,
          ing: [
            ['Pan blanco', '80g', 178, 34.4, 5.9, 1.9],
            ['Leche desnatada', '100g', 34, 4.7, 3.1, 0.3],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['1 huevo', '60g', 62, 0.4, 5.5, 4.3],
            ['2 onzas chocolate negro 85%', '20g', 114, 4, 2.4, 9.8]
          ],
          prep: 'Mezcla leche, huevo y proteína. Empapa el pan en la mezcla por ambos lados. Cocina en sartén a fuego medio hasta dorado. Coloca el chocolate encima para que se derrita.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Pasta con atún y salsa de tomate',
          kcal: 583, c: 94, p: 39, f: 6,
          ing: [
            ['Pasta', '120g', 424, 86.4, 15.6, 1.8],
            ['2 latas de atún claro al natural', '120g', 95, 0.6, 21.6, 0.7],
            ['Salsa de tomate sin azúcares', '100g', 64, 6.5, 1.5, 3.5]
          ],
          prep: 'Escurre el atún mientras cuece la pasta. Mezcla todo junto.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Batido de Oreo proteico',
          kcal: 342, c: 35, p: 34, f: 7,
          ing: [
            ['Proteína en polvo (vainilla o cookies)', '30g', 125, 4, 24, 1.5],
            ['Leche desnatada', '300g', 102, 14.1, 9.3, 0.9],
            ['Hielo', '100g', 0, 0, 0, 0],
            ['2 Oreos', '24g', 115, 17, 1, 4.8],
            ['Edulcorante', '5g', 0, 0, 0, 0]
          ],
          prep: 'Añade todos los ingredientes en una licuadora y sirve en un vaso.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Filete de ternera con puré de patata',
          kcal: 611, c: 44, p: 45, f: 29,
          ing: [
            ['Filete de ternera / vacuno', '200g', 408, 1, 38, 28],
            ['Patata cocida', '250g', 176, 39.3, 4.3, 0.3],
            ['Leche desnatada', '80g', 27, 3.8, 2.5, 0.2]
          ],
          prep: 'Precalienta horno/airfryer a 200°C. Sazona el steak con sal y pimienta. Horno: 12-15 min; airfryer: 8-10 min, dando la vuelta a mitad. Machaca las patatas, calienta la leche en microondas 20-30s, mezcla con las patatas y añade sal.'
        }
      ]
    },

    // ─────────── DÍA 8 ───────────
    {
      n: 8,
      totals: { kcal: 1972, c: 210, p: 163, f: 54 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Tostadas de queso cottage y miel + Colacao proteico',
          kcal: 518, c: 63, p: 49, f: 8,
          ing: [
            ['Pan blanco o integral', '80g', 213, 40, 7.7, 2.4],
            ['Queso cottage', '80g', 79, 1.4, 11.2, 3.2],
            ['Miel', '10g', 33, 8.3, 0, 0],
            ['Leche desnatada (Colacao)', '200g', 68, 9.4, 6.2, 0.6],
            ['Proteína en polvo (Colacao)', '30g', 125, 4, 24, 1.5]
          ],
          prep: 'Tuesta el pan. Unta queso cottage y añade miel. Colacao proteico: mezcla leche con proteína en shaker o batidora.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Quesadillas de jamón + yogur',
          kcal: 571, c: 48, p: 47, f: 21,
          ing: [
            ['2 tortillas de trigo', '72g', 209, 36, 5.8, 4.6],
            ['Jamón cocido (fiambre)', '100g', 100, 0.9, 18.6, 2.5],
            ['Queso mozzarella rallado', '60g', 170, 1.5, 12.6, 12.6],
            ['Yogur proteico', '120g', 92, 10, 10, 1.3]
          ],
          prep: 'Rellena las tortillas con jamón y mozzarella. Cocina en sartén o airfryer hasta que queden doradas y el queso se derrita. Sirve con el yogur como acompañamiento.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Sándwich de atún',
          kcal: 436, c: 56, p: 38, f: 7,
          ing: [
            ['Atún claro al natural', '120g', 95, 0.6, 21.6, 0.7],
            ['Pan blanco', '120g', 286, 48, 12.8, 4.8],
            ['Yogur griego ligero', '50g', 30, 2.4, 2.9, 1],
            ['Cebolla roja / pepino al gusto', '100g', 25, 0, 0, 0]
          ],
          prep: 'Corta la cebolla/pepino. Mezcla el atún escurrido con el yogur y las verduras. Tuesta el pan y añade la mezcla.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Bowl BigMac',
          kcal: 447, c: 43, p: 29, f: 18,
          ing: [
            ['Carne picada de vacuno', '100g', 204, 0.5, 19, 14],
            ['Patata', '150g', 106, 23.6, 2.6, 0.2],
            ['Lechuga', '100g', 17, 3, 0.9, 0.2],
            ['Tomate en dados', '100g', 21, 3.9, 0.9, 0.2],
            ['Pepinillos', '50g', 13, 2.3, 0.5, 0.2],
            ['Ketchup zero', '30g', 23, 5.3, 0.5, 0],
            ['Mostaza', '30g', 22, 0.7, 1.1, 1.6],
            ['Yogur griego ligero (salsa)', '60g', 36, 2.8, 3.5, 1.2],
            ['Salsa de pepinillos / sweet relish', '20g', 5, 0, 0, 0]
          ],
          prep: 'Patatas en airfryer 180°C 25 min. Corta lechuga, tomate y pepinillos en dados. Salsa BigMac: mezcla yogur, ketchup, mostaza, salsa de pepinillos y especias. Cocina la carne en sartén con spray de aceite. Monta en bowl y corona con la salsa.'
        }
      ]
    },

    // ─────────── DÍA 9 ───────────
    {
      n: 9,
      totals: { kcal: 2060, c: 247, p: 154, f: 51 },
      meals: [
        {
          type: 'DESAYUNO', icon: '☀️',
          name: 'Pudding de chia y arándanos',
          kcal: 369, c: 19, p: 38, f: 16,
          ing: [
            ['Leche desnatada', '150g', 51, 7.1, 4.7, 0.5],
            ['Proteína en polvo', '30g', 125, 4, 24, 1.5],
            ['Chia', '20g', 81, 0.5, 4.4, 6.8],
            ['Arándanos', '50g', 23, 5.5, 0.4, 0],
            ['Crema de cacahuete', '15g', 89, 1.8, 4.5, 7.1],
            ['Edulcorante', '5g', 0, 0, 0, 0]
          ],
          prep: 'Mezcla las semillas de chia con la leche sin grumos. Añade proteína y edulcorante, mezcla bien. Incorpora arándanos congelados. Refrigera al menos 4h (idealmente toda la noche). Antes de comer añade crema de cacahuete y más arándanos por encima.'
        },
        {
          type: 'COMIDA', icon: '🍽️',
          name: 'Ñoquis salteados con pollo y verduras',
          kcal: 577, c: 84, p: 44, f: 7,
          ing: [
            ['Gnocchi (ñoquis)', '200g', 344, 75.2, 9, 0.8],
            ['Pechuga de pollo', '150g', 159, 0.8, 33, 2.7],
            ['Salsa de tomate sin azúcares', '100g', 64, 6.5, 1.5, 3.5],
            ['Cebolla', '20g', 5, 0, 0, 0],
            ['Pimiento rojo', '20g', 5, 0, 0, 0],
            ['Ajo', '1g', 0, 0, 0, 0]
          ],
          prep: 'Saltea cebolla, pimiento y ajo con especias con spray de aceite. Añade los ñoquis y el pollo troceado. Incorpora la salsa de tomate y cocina hasta que todo esté bien mezclado y los ñoquis dorados.'
        },
        {
          type: 'MERIENDA', icon: '🍎',
          name: 'Bizcocho de plátano y nueces',
          kcal: 487, c: 55, p: 32, f: 16,
          ing: [
            ['1/2 plátano maduro', '80g', 109, 25.6, 1, 0.3],
            ['1 huevo', '60g', 62, 0.4, 5.5, 4.3],
            ['Copos de avena', '40g', 142, 23.6, 5.6, 2.8],
            ['Proteína en polvo', '20g', 84, 2.7, 16, 1],
            ['Leche desnatada', '60g', 20, 2.8, 1.9, 0.2],
            ['Levadura / polvo para hornear', '5g', 0, 0, 0, 0],
            ['Edulcorante', '5g', 0, 0, 0, 0],
            ['Nueces', '10g', 70, 0.2, 1.7, 7]
          ],
          prep: 'Tritura el plátano maduro con un tenedor. Añade el huevo, avena, proteína, levadura, leche y edulcorante y mezcla bien. Añade las nueces picadas. Hornea a 180°C 20-25 min o hasta que un palillo salga limpio.'
        },
        {
          type: 'CENA', icon: '🌙',
          name: 'Pasta con crema de champiñones + postre',
          kcal: 627, c: 89, p: 40, f: 12,
          ing: [
            ['Pasta', '70g', 247, 50.4, 9.1, 1.1],
            ['Pechuga de pollo', '100g', 106, 0.5, 22, 1.8],
            ['Champiñones', '50g', 13, 2.3, 0.5, 0.2],
            ['Leche desnatada o bebida vegetal', '100g', 34, 4.7, 3.1, 0.3],
            ['Cebolla', '50g', 13, 2.3, 0.5, 0.2],
            ['Queso mozzarella rallado', '20g', 57, 0.5, 4.2, 4.2],
            ['Aceite de oliva spray', '5g', 41, 0, 0, 0],
            ['Postre: manzana, plátano, mandarina, kiwi o yogur proteico', '—', 0, 0, 0, 0]
          ],
          prep: 'Cuece la pasta. Sofríe la cebolla picada hasta transparente. Añade champiñones y cocina hasta dorados. Añade leche y ajo en polvo, cocina a fuego medio-bajo hasta que espese. Añade mozzarella y remueve hasta que se funda. Cocina el pollo a la plancha, córtalo en dados. Escurre la pasta, añádela a la sartén con la salsa e incorpora el pollo.'
        }
      ]
    }
  ]
};
