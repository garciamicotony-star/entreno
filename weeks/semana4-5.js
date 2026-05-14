window.WEEK_DATA = {
  id: 'semana4-5',
  label: 'Semanas 4-5',
  days: [
    {
      id: 'dia1',
      label: 'Día 1 · Empujes',
      groups: [
        {
          label: 'PECTORAL · HOMBRO ANTERIOR',
          exercises: [
            {
              id: 'd1e1', icon: '📐',
              name: 'Press inclinado en multipower',
              muscle: 'Pectoral superior · Hombro anterior · Tríceps',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Incline Press',
                  name: 'Press inclinado con mancuernas',
                  desc: 'Banco a 30-45°. Igual de efectivo para el pectoral superior, con mayor rango de movimiento.',
                  steps: [
                    'Banco a 30-45°, espalda apoyada, pies en el suelo',
                    'Mancuernas a los lados del pecho, codos a ~45° del cuerpo',
                    'Empuja hacia arriba hasta casi extender los brazos',
                    'Baja lento hasta notar el estiramiento en el pecho'
                  ],
                  tip: { bold: 'No subas el banco más de 45°', text: '— si pasas de ahí el hombro anterior toma el protagonismo y el pecho descansa.' }
                }
              ]
            },
            {
              id: 'd1e2', icon: '🏋️',
              name: 'Press plano con mancuernas',
              muscle: 'Pectoral · Tríceps · Hombro anterior',
              altHeader: 'Alternativas si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Bench Press',
                  name: 'Press plano con barra',
                  desc: 'Si hay rack libre — misma mecánica, más carga posible.',
                  steps: [
                    'Banco plano, agarre algo más ancho que los hombros',
                    'Baja la barra al pecho medio-bajo de forma controlada',
                    'Toca el pecho sin rebotar, empuja hacia arriba',
                    'Codos a 45-60° del cuerpo, no totalmente abiertos'
                  ],
                  tip: { bold: 'Escápulas juntas y abajo', text: 'antes de empezar. Protege el hombro y mejora la fuerza.' }
                },
                {
                  appName: 'Chest Press Machine',
                  name: 'Máquina de press plano',
                  desc: 'Si el rack también está ocupado. Menos técnica pero igual de efectivo.'
                }
              ]
            }
          ]
        },
        {
          label: 'PECTORAL (AISLAMIENTO)',
          exercises: [
            {
              id: 'd1e3', icon: '🦋',
              name: 'Peck-deck / máquina contractora',
              muscle: 'Pectoral (aislamiento · contracción)',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Cable Crossover',
                  name: 'Cruces en polea (altura media)',
                  desc: 'Poleas a la altura del pecho. Tensión constante durante todo el recorrido.'
                },
                {
                  appName: 'Dumbbell Flyes',
                  name: 'Aperturas con mancuernas en banco plano',
                  desc: 'Si la polea también está ocupada.',
                  steps: [
                    'Banco plano, mancuernas sobre el pecho, codos ligeramente flexionados',
                    'Abre los brazos en arco hacia los lados, hasta la altura del pecho',
                    'Nota el estiramiento en el pecho abajo — no bajes más',
                    'Cierra los brazos volviendo al inicio, como si abrazaras un árbol'
                  ],
                  tip: { bold: 'Peso muy ligero.', text: 'Es un ejercicio de estiramiento y contracción, no de fuerza.' }
                }
              ]
            }
          ]
        },
        {
          label: 'HOMBRO LATERAL',
          exercises: [
            {
              id: 'd1e4', icon: '🅻',
              name: 'Elevaciones laterales en banco inclinado',
              muscle: 'Deltoides lateral (cabeza media)',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Lateral Raise',
                  name: 'Elevaciones laterales de pie',
                  desc: 'De pie, mancuernas a los lados. Igual de efectivo si se hace sin trampa.',
                  steps: [
                    'De pie, mancuernas a los lados con codos ligeramente flexionados',
                    'Sube los brazos hacia los lados hasta la altura de los hombros',
                    'El meñique ligeramente más alto que el pulgar al subir',
                    'Baja lento, sin dejar caer'
                  ],
                  tip: { bold: 'No balancees el torso.', text: 'Si tienes que usar impulso, el peso es demasiado.' }
                }
              ]
            },
            {
              id: 'd1e5', icon: '🔌',
              name: 'Elevaciones laterales en polea',
              muscle: 'Deltoides lateral (tensión constante)',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Lateral Raise',
                  name: 'Elevaciones laterales con mancuerna (una a la vez)',
                  desc: 'Una mancuerna a la vez, apoyando la otra mano en un soporte. Mayor concentración en cada lado.',
                  steps: [
                    'Mano libre apoyada en la máquina, mancuerna colgando al lado',
                    'Sube el brazo en arco lateral hasta la altura del hombro',
                    'Baja controlando — el negativo también cuenta'
                  ],
                  tip: { bold: 'Sin impulso.', text: 'El hombro lateral es pequeño — empieza con poco peso.' }
                }
              ]
            }
          ]
        },
        {
          label: 'TRÍCEPS',
          exercises: [
            {
              id: 'd1e6', icon: '⚔️',
              name: 'Extensión de tríceps katana',
              muscle: 'Tríceps cabeza larga',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Cable Tricep Extension',
                  name: 'Extensión en polea alta con cuerda',
                  desc: 'Primera opción — misma mecánica de empuje hacia abajo.',
                  steps: [
                    'Agarra la cuerda a la altura de la cara, codos pegados al cuerpo',
                    'Solo se mueve el antebrazo — codos fijos',
                    'Estira completamente los brazos, abriendo la cuerda al final',
                    'Sube lento a la posición inicial'
                  ],
                  tip: { bold: 'Codos quietos.', text: 'Si se mueven hacia delante, el tríceps deja de trabajar al máximo.' }
                },
                {
                  appName: 'Dips',
                  name: 'Fondos en paralelas',
                  desc: 'Si la polea también está ocupada. Codos pegados al cuerpo para que cargue el tríceps y no el pecho.'
                }
              ]
            },
            {
              id: 'd1e7', icon: '🪢',
              name: 'Extensión de tríceps con cuerda',
              muscle: 'Tríceps (las tres cabezas)',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Close Grip Bench Press',
                  name: 'Press banca agarre cerrado con barra',
                  desc: 'Agarre al ancho de hombros o menos. Codos pegados al cuerpo durante todo el movimiento.',
                  steps: [
                    'Agarre al ancho de hombros, codos a 45° del cuerpo',
                    'Baja al pecho bajo, sin rebotar',
                    'Empuja manteniendo codos cerca del cuerpo'
                  ],
                  tip: { bold: 'Si abres los codos,', text: 'el pectoral roba el trabajo al tríceps.' }
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'dia2',
      label: 'Día 2 · Tirones',
      groups: [
        {
          label: 'DORSAL',
          exercises: [
            {
              id: 'd2e1', icon: '🏋️',
              name: 'Remo máquina unilateral',
              muscle: 'Dorsal ancho · Romboides',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'One Arm Dumbbell Row',
                  name: 'Remo con mancuerna a una mano',
                  desc: 'Mismo patrón, mismo músculo. Apoya una rodilla y mano del mismo lado en banco plano.',
                  steps: [
                    'Rodilla y mano del mismo lado en el banco, espalda paralela al suelo',
                    'Mancuerna colgando, brazo completamente estirado',
                    'Tira del codo hacia el techo — piensa en el codo, no en la mano',
                    'Aprieta el dorsal arriba 1 segundo, baja controlando'
                  ],
                  tip: { bold: 'Error típico:', text: 'rotar el torso para subir más peso. Cadera y hombro quietos siempre.' }
                }
              ]
            },
            {
              id: 'd2e2', icon: '🔱',
              name: 'Remo en T',
              muscle: 'Dorsal · Trapecio medio · Romboides',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'One Arm Dumbbell Row',
                  name: 'Remo con mancuerna a una mano',
                  desc: 'Encaja perfectamente como sustituto bilateral. Mismo patrón de tirón horizontal.',
                  steps: [
                    'Pies a los lados de la barra, ligera inclinación hacia delante',
                    'Agarre neutro (palmas enfrentadas), codos pegados al cuerpo',
                    'Tira hasta que la barra toque el abdomen bajo',
                    'Baja lento, estiramiento completo abajo'
                  ],
                  tip: { bold: 'Alternativa B:', text: 'remo con mancuernas a dos manos en banco inclinado.' }
                }
              ]
            }
          ]
        },
        {
          label: 'DORSAL · HOMBRO POSTERIOR',
          exercises: [
            {
              id: 'd2e3', icon: '🔄',
              name: 'Pullover con cuerda',
              muscle: 'Dorsal ancho · Serrato',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Pullover',
                  name: 'Pullover con mancuerna en banco plano',
                  desc: 'Versión clásica igual de efectiva. Trabaja el dorsal en estiramiento máximo.',
                  steps: [
                    'Tumbado en banco plano, mancuerna con las dos manos sobre el pecho',
                    'Baja en arco por detrás de la cabeza, codos ligeramente flexionados',
                    'Llega hasta donde notes el estiramiento en el dorsal — no más',
                    'Vuelve al inicio sin coger impulso'
                  ],
                  tip: { bold: 'Peso ligero aquí.', text: 'El hombro trabaja en posición comprometida — prioriza la técnica.' }
                }
              ]
            },
            {
              id: 'd2e4', icon: '🦅',
              name: 'Reverse flyes máquina contractora',
              muscle: 'Deltoides posterior · Romboides',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Rear Delt Row',
                  name: 'Reverse flyes con mancuernas boca abajo en banco',
                  desc: 'Banco inclinado a 45°, tumbado boca abajo. Abre hacia los lados como un pájaro.',
                  steps: [
                    'Banco ~45°, pecho apoyado, cara mirando abajo',
                    'Mancuernas colgando, codos con leve flexión',
                    'Abre los brazos hacia los lados hasta la altura de los hombros',
                    'Baja muy lento — el negativo es donde más se trabaja'
                  ],
                  tip: { bold: 'Peso muy ligero.', text: 'El hombro posterior es pequeño — forma perfecta primero.' }
                }
              ]
            }
          ]
        },
        {
          label: 'BÍCEPS',
          exercises: [
            {
              id: 'd2e5', icon: '💪',
              name: 'Curl banco Scott barra Z',
              muscle: 'Bíceps · Braquial',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Preacher Curl',
                  name: 'Curl predicador con mancuerna',
                  desc: 'Mismo banco Scott, una mancuerna a la vez. Primera opción.'
                },
                {
                  appName: 'Barbell Concentration Curl',
                  name: 'Curl concentrado sentado',
                  desc: 'Si el banco Scott también está ocupado.',
                  steps: [
                    'Sentado, codo apoyado en la cara interna del muslo',
                    'Mancuerna colgando, brazo completamente estirado',
                    'Sube girando la muñeca hacia fuera al final del recorrido',
                    'Baja lento, sin dejar caer'
                  ],
                  tip: { bold: 'No osciles el torso.', text: 'El apoyo en el muslo existe exactamente para eso.' }
                }
              ]
            },
            {
              id: 'd2e6', icon: '📐',
              name: 'Curl banco inclinado',
              muscle: 'Bíceps cabeza larga',
              altHeader: 'Alternativas si el banco está ocupado',
              alternatives: [
                {
                  appName: 'Barbell Curl',
                  name: 'Curl con barra recta de pie',
                  desc: 'Alternativa más directa. Codos pegados al cuerpo durante todo el movimiento.',
                  steps: [
                    'De pie, agarre supino (palmas arriba), pies a la anchura de cadera',
                    'Codos pegados al cuerpo durante todo el movimiento',
                    'Sube hasta la altura del pecho, aprieta arriba',
                    'Baja controlando — no dejes caer la barra'
                  ],
                  tip: { bold: 'Si el banco inclinado está libre, úsalo', text: '— es mejor para este músculo en concreto.' }
                },
                {
                  appName: 'Cable Curl',
                  name: 'Curl en polea baja',
                  desc: 'Tensión constante en todo el recorrido — el bíceps trabaja de inicio a fin.'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'dia3',
      label: 'Día 3 · Pierna+Brazo',
      groups: [
        {
          label: 'CUÁDRICEPS · GLÚTEOS',
          exercises: [
            {
              id: 'd3e1', icon: '🏗️',
              name: 'Hack squat',
              muscle: 'Cuádriceps · Glúteos',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Squat',
                  name: 'Sentadilla con barra',
                  desc: 'Si hay rack libre — mismo patrón de movimiento.'
                },
                {
                  appName: 'Dumbbell Goblet Squat',
                  name: 'Goblet squat con mancuerna',
                  desc: 'Replica bien la mecánica de torso vertical del hack squat.',
                  steps: [
                    'Pies a la anchura de hombros, mancuerna sujeta verticalmente contra el pecho',
                    'Baja como si te sentaras en una silla, rodillas siguiendo la dirección de los pies',
                    'Muslos paralelos al suelo o más abajo si puedes',
                    'Empuja con los talones para subir'
                  ],
                  tip: { bold: 'La mancuerna al pecho', text: 'obliga a mantener el torso recto — idéntico al hack squat.' }
                }
              ]
            },
            {
              id: 'd3e2', icon: '🦵',
              name: 'Prensa horizontal',
              muscle: 'Cuádriceps · Glúteos · Femorales',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Leg Press Machine',
                  name: 'Prensa 45°',
                  desc: 'Mismo músculo, diferente ángulo. Primera opción si está libre.'
                },
                {
                  appName: 'Dumbbell Bulgarian Split Squat',
                  name: 'Sentadilla búlgara con mancuernas',
                  desc: 'Si ambas prensas están ocupadas.',
                  steps: [
                    'Pie trasero apoyado en banco, pie delantero a ~60cm del banco',
                    'Baja el cuerpo hacia abajo, rodilla delantera sin pasar el pie',
                    'Rodilla trasera casi toca el suelo',
                    'Empuja con el talón delantero para subir'
                  ],
                  tip: { bold: 'Empieza sin mancuernas', text: 'para dominar el equilibrio antes de añadir carga.' }
                }
              ]
            },
            {
              id: 'd3e3', icon: '⚡',
              name: 'Extensión de cuádriceps',
              muscle: 'Cuádriceps (aislamiento)',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Bulgarian Split Squat',
                  name: 'Sentadilla búlgara unilateral',
                  desc: 'Aísla bien el cuádriceps de la pierna delantera.',
                  steps: [
                    'Pie trasero apoyado en banco, pie delantero a ~60cm',
                    'Baja controlando, rodilla delantera sin pasar el pie',
                    'Rodilla trasera casi toca el suelo',
                    'Empuja con el talón delantero para subir'
                  ],
                  tip: { bold: 'Empieza sin mancuernas', text: 'para aprender el equilibrio primero.' }
                }
              ]
            }
          ]
        },
        {
          label: 'FEMORALES · GLÚTEOS',
          exercises: [
            {
              id: 'd3e4', icon: '🏋️',
              name: 'Peso muerto rumano con mancuernas',
              muscle: 'Femorales · Glúteos · Lumbar',
              altHeader: 'Alternativas si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Romanian Deadlift',
                  name: 'Peso muerto rumano con barra',
                  desc: 'Exactamente el mismo movimiento. Primera opción.',
                  steps: [
                    'Barra a la altura de caderas, agarre prono, pies a la anchura de cadera',
                    'Empuja las caderas hacia atrás mientras bajas la barra por las piernas',
                    'Espalda recta en todo momento — si se redondea, para ahí',
                    'Sientes el estiramiento en femorales → empuja caderas hacia delante para volver'
                  ],
                  tip: { bold: 'La barra NO toca el suelo.', text: 'El movimiento viene de la cadera, no de las rodillas.' }
                }
              ]
            },
            {
              id: 'd3e5', icon: '🔁',
              name: 'Curl de femoral sentado',
              muscle: 'Femorales / Isquiotibiales',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Lying Leg Curl Machine',
                  name: 'Curl femoral tumbado (máquina)',
                  desc: 'Si la sentado está ocupada, la tumbada trabaja igual de bien.'
                },
                {
                  appName: 'Barbell Romanian Deadlift',
                  name: 'Rumano a una pierna con mancuerna',
                  desc: 'Si ambas máquinas de curl están ocupadas. Mayor reto de equilibrio pero mismo músculo.',
                  steps: [
                    'De pie con una mancuerna, apoyo en una pierna',
                    'Inclina el torso hacia delante mientras la pierna libre se eleva detrás',
                    'Baja hasta notar el estiramiento en el femoral de la pierna de apoyo',
                    'Vuelve arriba apretando el glúteo'
                  ],
                  tip: { bold: 'Equilibrio difícil al principio', text: '— apóyate en una máquina con la otra mano si es necesario.' }
                }
              ]
            }
          ]
        },
        {
          label: 'TRÍCEPS',
          exercises: [
            {
              id: 'd3e6', icon: '🔩',
              name: 'Kaz press en multipower',
              muscle: 'Tríceps · Pectoral · Hombro anterior',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Close Grip Bench Press',
                  name: 'Press banca agarre cerrado con barra',
                  desc: 'Mismo patrón, mismo músculo objetivo.',
                  steps: [
                    'Agarre al ancho de hombros o menos, codos a 45° del cuerpo',
                    'Baja al pecho bajo, sin rebotar',
                    'Empuja manteniendo codos cerca del cuerpo'
                  ],
                  tip: { bold: 'Si abres los codos,', text: 'el pectoral roba el trabajo al tríceps.' }
                }
              ]
            },
            {
              id: 'd3e7', icon: '⚔️',
              name: 'Extensión de tríceps katana',
              muscle: 'Tríceps cabeza larga',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Cable Tricep Extension',
                  name: 'Extensión en polea alta con cuerda',
                  desc: 'Primera opción — misma mecánica.',
                  steps: [
                    'Agarra la cuerda a la altura de la cara, codos pegados al cuerpo',
                    'Solo se mueve el antebrazo — codos fijos',
                    'Estira completamente los brazos, abriendo la cuerda al final',
                    'Sube lento a la posición inicial'
                  ],
                  tip: { bold: 'Codos quietos.', text: 'Si se mueven hacia delante, el tríceps deja de trabajar al máximo.' }
                },
                {
                  appName: 'Dips',
                  name: 'Fondos en paralelas',
                  desc: 'Si la polea también está ocupada. Codos pegados al cuerpo para cargar el tríceps.'
                }
              ]
            }
          ]
        },
        {
          label: 'BÍCEPS',
          exercises: [
            {
              id: 'd3e8', icon: '📏',
              name: 'Curl a 90° en remo bajo',
              muscle: 'Bíceps cabeza larga',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Incline Curl',
                  name: 'Curl en banco inclinado con mancuernas',
                  desc: 'Sustituto directo — ambos trabajan el bíceps en estiramiento máximo.',
                  steps: [
                    'Banco a 45°, brazos colgando hacia atrás',
                    'Sube doblando el codo sin mover el hombro',
                    'Gira la muñeca hacia fuera al subir',
                    'Baja hasta el estiramiento completo — no cortes abajo'
                  ],
                  tip: { bold: 'El valor está en la bajada.', text: 'Controla el negativo y llegarás antes al fallo real.' }
                }
              ]
            },
            {
              id: 'd3e9', icon: '🔨',
              name: 'Curl martillo con mancuernas',
              muscle: 'Braquial · Braquiorradial · Bíceps',
              altHeader: 'Alternativas si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Cable Hammer Curl',
                  name: 'Curl martillo en polea baja con cuerda',
                  desc: 'Agarre neutro (pulgares arriba). Tensión constante en todo el recorrido.',
                  steps: [
                    'Agarra la cuerda en agarre neutro (pulgares apuntando al techo)',
                    'Codos pegados al cuerpo, brazos estirados como punto de inicio',
                    'Sube hasta la contracción máxima sin rotar la muñeca',
                    'Baja lento manteniendo el agarre neutro todo el recorrido'
                  ],
                  tip: { bold: 'Agarre neutro = más braquial y antebrazo.', text: 'Da más grosor al brazo que el curl normal.' }
                },
                {
                  appName: 'EZ Bar Curl',
                  name: 'Curl con barra EZ agarre semisupino',
                  desc: 'Mismo estímulo que el martillo. Más carga posible que con mancuernas.'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'dia4',
      label: 'Día 4 · Pecho+Espalda',
      groups: [
        {
          label: 'PECTORAL',
          exercises: [
            {
              id: 'd4e1', icon: '🖥️',
              name: 'Press plano en máquina',
              muscle: 'Pectoral · Tríceps · Hombro anterior',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Bench Press',
                  name: 'Press plano con mancuernas',
                  desc: 'Mayor rango de movimiento y trabajo estabilizador que la máquina.',
                  steps: [
                    'Banco plano, mancuernas a los lados del pecho, codos a ~45°',
                    'Empuja hacia arriba hasta casi extender los brazos',
                    'Baja lento hasta que los codos queden ligeramente por debajo del pecho',
                    'Escápulas juntas y abajo durante todo el movimiento'
                  ],
                  tip: { bold: 'Escápulas juntas antes de empezar.', text: 'Protege el hombro y mejora la transmisión de fuerza.' }
                },
                {
                  appName: 'Barbell Bench Press',
                  name: 'Press plano con barra',
                  desc: 'Si hay rack libre — misma mecánica, más carga posible.'
                }
              ]
            },
            {
              id: 'd4e2', icon: '📐',
              name: 'Press inclinado con mancuernas',
              muscle: 'Pectoral superior · Hombro anterior',
              altHeader: 'Alternativas si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Incline Bench Press',
                  name: 'Press inclinado con barra / multipower',
                  desc: 'Más estabilidad y puedes cargar más peso. Banco a 30-45°.',
                  steps: [
                    'Banco a 30-45°, agarre algo más ancho que los hombros',
                    'Codos a ~45°, baja la barra al pecho superior de forma controlada',
                    'Empuja hacia arriba sin extender del todo los codos'
                  ],
                  tip: { bold: 'No subas el banco más de 45°', text: '— si pasas de ahí, el hombro anterior toma el protagonismo.' }
                }
              ]
            },
            {
              id: 'd4e3', icon: '✂️',
              name: 'Cruces en polea de arriba a abajo',
              muscle: 'Pectoral (aislamiento · contracción)',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Chest Fly Machine',
                  name: 'Peck-deck (máquina contractora)',
                  desc: 'Primera opción si está libre.'
                },
                {
                  appName: 'Dumbbell Flyes',
                  name: 'Aperturas con mancuernas en banco plano',
                  desc: 'Si todo lo demás está ocupado.',
                  steps: [
                    'Banco plano, mancuernas sobre el pecho, codos ligeramente flexionados',
                    'Abre los brazos en arco, bajando hasta la altura del pecho',
                    'Nota el estiramiento en el pecho abajo — no bajes más',
                    'Cierra los brazos volviendo al inicio, como si abrazaras un árbol'
                  ],
                  tip: { bold: 'Peso muy ligero.', text: 'Es de estiramiento y contracción, no de fuerza.' }
                }
              ]
            }
          ]
        },
        {
          label: 'ESPALDA ALTA · DORSAL',
          exercises: [
            {
              id: 'd4e4', icon: '🔝',
              name: 'Remo en máquina (espalda alta)',
              muscle: 'Trapecio · Romboides · Dorsal alto',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Upright Row',
                  name: 'Remo al cuello con barra (agarre ancho)',
                  desc: 'Torso inclinado ~45°, codos abiertos hacia los lados. Carga el trapecio, no el dorsal bajo.',
                  steps: [
                    'Barra con agarre ancho, torso inclinado ~45°',
                    'Tira hacia el pecho alto — codos se abren hacia los lados',
                    'Junta las escápulas al final del recorrido',
                    'Baja lento y estira completamente'
                  ],
                  tip: { bold: 'Clave:', text: 'codos hacia fuera = trapecio. Codos hacia atrás = dorsal. Aquí los codos van hacia fuera.' }
                }
              ]
            },
            {
              id: 'd4e5', icon: '⬇️',
              name: 'Jalón al pecho agarre cerrado',
              muscle: 'Dorsal ancho · Bíceps',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Lat Pulldown',
                  name: 'Jalón agarre ancho',
                  desc: 'Si la barra cerrada está ocupada — mismo músculo, diferente énfasis.'
                },
                {
                  appName: 'Assisted Pull-up',
                  name: 'Dominadas asistidas en máquina',
                  desc: 'Buena opción para progresar hacia dominadas reales.',
                  stepsLabel: 'Ejecución jalón agarre cerrado',
                  steps: [
                    'Agarre neutro (palmas enfrentadas) en barra en V o cuerda',
                    'Tira hacia el pecho bajo, codos apuntando al suelo',
                    'Junta las escápulas al final, aprieta el dorsal',
                    'Sube lento hasta el estiramiento completo del dorsal'
                  ],
                  tip: { bold: 'Agarre cerrado vs ancho:', text: 'el cerrado da mayor rango de movimiento y más trabajo en la parte baja del dorsal.' }
                }
              ]
            },
            {
              id: 'd4e6', icon: '🔄',
              name: 'Pullover en polea unilateral',
              muscle: 'Dorsal ancho · Serrato · Core',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Pullover',
                  name: 'Pullover con mancuerna en banco plano',
                  desc: 'La versión clásica. Igual de efectiva para el dorsal en estiramiento máximo.',
                  steps: [
                    'Tumbado en banco plano, mancuerna con las dos manos sobre el pecho',
                    'Baja en arco por detrás de la cabeza, codos ligeramente flexionados',
                    'Nota el estiramiento en el dorsal — no bajes más de lo necesario',
                    'Vuelve al inicio sin coger impulso'
                  ],
                  tip: { bold: 'Peso ligero.', text: 'El hombro trabaja en posición comprometida — técnica primero.' }
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'dia5',
      label: 'Día 5 · Core 🏠',
      canReset: true,
      groups: [
        {
          label: 'CORE EN CASA · SOLO ESTERILLA',
          exercises: [
            {
              id: 'd5e1', icon: '🛡️',
              name: 'Plank',
              muscle: 'Core',
              sets: '3 × 45 seg',
              howto: true,
              steps: [
                'Boca abajo, apoya los antebrazos en el suelo con los codos justo debajo de los hombros',
                'Eleva las caderas hasta formar una línea recta de cabeza a talones',
                'Aprieta el abdomen, los glúteos y los cuádriceps',
                'Mantén la posición sin dejar caer las caderas ni elevarlas'
              ],
              tip: { bold: 'Si las caderas caen o suben, el ejercicio pierde efecto.', text: 'Imagina que tienes un vaso de agua encima de la espalda.' }
            },
            {
              id: 'd5e2', icon: '🐞',
              name: 'Dead Bug',
              muscle: 'Core',
              sets: '3 × 10 rep',
              howto: true,
              steps: [
                'Tumbado boca arriba, brazos estirados hacia el techo, rodillas dobladas a 90° en el aire',
                'Baja simultáneamente el brazo derecho hacia atrás y la pierna izquierda hacia el suelo sin tocar',
                'Vuelve al centro y repite con el lado contrario',
                'La espalda baja debe permanecer pegada al suelo en todo momento'
              ],
              tip: { bold: 'Ve muy lento.', text: 'La velocidad arruina este ejercicio — el control es lo que activa el core profundo.' }
            },
            {
              id: 'd5e3', icon: '💥',
              name: 'Crunch',
              muscle: 'Abdominales',
              sets: '3 × 15 rep',
              howto: true,
              steps: [
                'Tumbado boca arriba, rodillas dobladas, pies apoyados en el suelo',
                'Manos detrás de la cabeza sin tirar del cuello',
                'Eleva los hombros del suelo contrayendo el abdomen, no el cuello',
                'Baja lento sin apoyar del todo los hombros entre repetición'
              ],
              tip: { bold: 'El movimiento es pequeño — solo despegan los hombros.', text: 'Si el cuello duele, cruza los brazos sobre el pecho.' }
            },
            {
              id: 'd5e4', icon: '🔁',
              name: 'Reverse Crunch',
              muscle: 'Abdomen bajo',
              sets: '3 × 12 rep',
              howto: true,
              steps: [
                'Tumbado boca arriba, manos a los lados apoyadas en el suelo, rodillas dobladas a 90°',
                'Eleva las caderas del suelo llevando las rodillas hacia el pecho',
                'Controla la bajada — no dejes caer las piernas',
                'El movimiento viene del abdomen bajo, no del impulso de las piernas'
              ],
              tip: { bold: 'Complemento del crunch normal:', text: 'este trabaja la parte baja del abdomen que el crunch no alcanza.' }
            },
            {
              id: 'd5e5', icon: '🌀',
              name: 'Russian Twist',
              muscle: 'Oblicuos',
              sets: '3 × 20 rep',
              howto: true,
              steps: [
                'Sentado en el suelo, rodillas dobladas, pies ligeramente elevados o apoyados para empezar',
                'Inclina el torso hacia atrás unos 45°',
                'Gira el torso de lado a lado tocando el suelo a cada lado con las manos juntas',
                'Cada toque a un lado cuenta como 1 repetición'
              ],
              tip: { bold: 'Para hacerlo más difícil eleva los pies del suelo.', text: 'El giro viene del torso, no solo de los brazos.' }
            },
            {
              id: 'd5e6', icon: '🏊',
              name: 'Flutter Kick',
              muscle: 'Abdomen bajo',
              sets: '3 × 30 seg',
              howto: true,
              steps: [
                'Tumbado boca arriba, manos bajo los glúteos para proteger la zona lumbar',
                'Eleva las piernas unos 15-20 cm del suelo',
                'Alterna subiendo y bajando cada pierna en movimiento continuo tipo natación',
                'Mantén las piernas lo más rectas posible'
              ],
              tip: { bold: 'Si la zona lumbar se despega del suelo,', text: 'sube un poco más las piernas hasta que puedas mantener la espalda plana.' }
            },
            {
              id: 'd5e7', icon: '↔️',
              name: 'Plank Hip Dip',
              muscle: 'Oblicuos',
              sets: '3 × 12 rep',
              howto: true,
              steps: [
                'Posición de plank sobre antebrazos',
                'Rota las caderas hacia la derecha bajando hasta casi tocar el suelo',
                'Vuelve al centro y rota hacia la izquierda',
                'Un toque a cada lado cuenta como 2 repeticiones'
              ],
              tip: { bold: 'Mantén los hombros estables — solo se mueven las caderas.', text: 'El movimiento debe ser controlado, no un balanceo.' }
            },
            {
              id: 'd5e8', icon: '📐',
              name: 'V-Up',
              muscle: 'Abdominales',
              sets: '3 × 10 rep',
              howto: true,
              steps: [
                'Tumbado boca arriba, brazos extendidos por encima de la cabeza y piernas juntas estiradas',
                'Sube simultáneamente las piernas y el torso formando una V',
                'Intenta tocar los pies con las manos en el punto más alto',
                'Baja lento volviendo a la posición inicial'
              ],
              tip: { bold: 'Es el ejercicio más exigente del día:', text: 'si no llegas a tocar los pies no pasa nada. Lo importante es subir todo lo que puedas con control.' }
            },
            {
              id: 'd5e9', icon: '🦸',
              name: 'Superman',
              muscle: 'Lumbar',
              sets: '3 × 12 rep',
              howto: true,
              steps: [
                'Tumbado boca abajo, brazos extendidos hacia delante como Superman volando',
                'Eleva simultáneamente los brazos, el pecho y las piernas del suelo',
                'Mantén la posición 2 segundos arriba apretando glúteos y espalda',
                'Baja lento y repite'
              ],
              tip: { bold: 'Es el ejercicio de cierre:', text: 'compensa todo el trabajo abdominal anterior fortaleciendo la zona lumbar. No te lo saltes aunque estés cansado.' }
            }
          ]
        }
      ]
    }
  ]
};
