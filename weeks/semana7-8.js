window.WEEK_DATA = {
  id: 'semana7-8',
  label: 'Semanas 7-8',
  days: [

    // ─────────── DÍA 1 · EMPUJES ───────────
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
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Incline Bench Press',
                  name: 'Press inclinado con mancuernas',
                  steps: [
                    'Banco a 30-45°, espalda apoyada, pies en el suelo',
                    'Mancuernas a los lados del pecho, codos a ~45°',
                    'Empuja hacia arriba hasta casi extender los brazos',
                    'Baja lento hasta notar estiramiento en el pecho'
                  ],
                  tip: { bold: 'No subas el banco más de 45°', text: '— si pasas de ahí, el hombro anterior roba el trabajo al pecho.' }
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
                  steps: [
                    'Banco plano, agarre algo más ancho que los hombros',
                    'Baja la barra al pecho medio-bajo de forma controlada',
                    'Toca el pecho sin rebotar, empuja hacia arriba',
                    'Codos a 45-60° del cuerpo'
                  ],
                  tip: { bold: 'Escápulas juntas y abajo antes de empezar', text: '— protege el hombro y mejora la fuerza.' }
                },
                {
                  appName: 'Machine Chest Press',
                  name: 'Máquina de press plano',
                  desc: 'Si el rack también está ocupado. Menos técnica pero igual de efectivo.'
                }
              ]
            }
          ]
        },
        {
          label: 'HOMBRO LATERAL',
          exercises: [
            {
              id: 'd1e3', icon: '🛌',
              name: 'Elevaciones laterales con mancuerna con el pecho apoyado en banco inclinado',
              muscle: 'Deltoides lateral (aislamiento total)',
              altHeader: 'Alternativa si el banco está ocupado',
              alternatives: [
                {
                  appName: 'Cable Lateral Raise',
                  name: 'Elevaciones laterales en polea',
                  steps: [
                    'Polea baja al lado del cuerpo, mano contraria al lado de la polea',
                    'Sube el brazo en arco lateral hasta la altura del hombro',
                    'Baja controlando — el negativo también cuenta'
                  ],
                  tip: { bold: 'La ventaja del banco inclinado original:', text: 'elimina completamente el impulso del torso. En polea intenta replicarlo — sin balanceo.' }
                },
                {
                  appName: 'Dumbbell Lateral Raise',
                  name: 'Elevaciones laterales de pie con mancuerna',
                  steps: [
                    'De pie, mancuernas a los lados con codos ligeramente flexionados',
                    'Sube los brazos hacia los lados hasta la altura de los hombros',
                    'El meñique ligeramente más alto que el pulgar al subir',
                    'Baja lento sin dejar caer'
                  ],
                  tip: { bold: 'Opción peor que el banco inclinado', text: 'porque permite trampa — controla el torso y ve muy lento.' }
                }
              ]
            },
            {
              id: 'd1e4', icon: '🔌',
              name: 'Elevaciones laterales con polea (altura cadera)',
              muscle: 'Deltoides lateral (tensión constante)',
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Lateral Raise',
                  name: 'Elevaciones laterales con mancuerna',
                  steps: [
                    'De pie, mancuernas a los lados con codos ligeramente flexionados',
                    'Sube los brazos hacia los lados hasta la altura de los hombros',
                    'El meñique ligeramente más alto que el pulgar al subir',
                    'Baja lento'
                  ],
                  tip: { bold: 'Sin impulso.', text: 'Si tienes que balancear el torso, el peso es demasiado.' }
                }
              ]
            }
          ]
        },
        {
          label: 'PECTORAL (AISLAMIENTO)',
          exercises: [
            {
              id: 'd1e5', icon: '✂️',
              name: 'Cruces en polea de arriba a abajo',
              muscle: 'Pectoral (aislamiento · contracción)',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Machine Chest Fly',
                  name: 'Peck-deck (máquina contractora)',
                  desc: 'Primera opción si está libre.'
                },
                {
                  appName: 'Dumbbell Flyes',
                  name: 'Aperturas con mancuernas',
                  steps: [
                    'Banco plano, mancuernas sobre el pecho, codos ligeramente flexionados',
                    'Abre los brazos en arco hacia los lados hasta la altura del pecho',
                    'Nota el estiramiento en el pecho abajo',
                    'Cierra como si abrazaras un árbol'
                  ],
                  tip: { bold: 'Peso muy ligero', text: '— es de estiramiento y contracción, no de fuerza.' }
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
                  name: 'Extensión de tríceps en polea alta con cuerda',
                  steps: [
                    'Agarra la cuerda a la altura de la cara, codos pegados al cuerpo',
                    'Solo se mueve el antebrazo — codos fijos',
                    'Estira completamente los brazos abriendo la cuerda al final',
                    'Sube lento a la posición inicial'
                  ],
                  tip: { bold: 'Codos quietos.', text: 'Si se mueven hacia delante, el tríceps deja de trabajar al máximo.' }
                },
                {
                  appName: 'Dips',
                  name: 'Fondos en paralelas',
                  desc: 'Codos pegados al cuerpo para que cargue el tríceps, no el pecho.'
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
                  appName: 'Cable Tricep Pushdown',
                  name: 'Pushdown con barra recta en polea',
                  steps: [
                    'Polea alta, agarre prono en barra recta',
                    'Codos pegados al cuerpo a 90° como punto de inicio',
                    'Extiende completamente los brazos hacia abajo',
                    'Sube lento con codos fijos'
                  ],
                  tip: { bold: 'Más carga posible que con cuerda,', text: 'pero menos contracción final.' }
                },
                {
                  appName: 'Dips',
                  name: 'Fondos en paralelas',
                  desc: 'Codos pegados al cuerpo para que cargue el tríceps, no el pecho.'
                }
              ]
            }
          ]
        }
      ]
    },

    // ─────────── DÍA 2 · TIRONES ───────────
    {
      id: 'dia2',
      label: 'Día 2 · Tirones',
      groups: [
        {
          label: 'DORSAL',
          exercises: [
            {
              id: 'd2e1', icon: '🏋️',
              name: 'Remo en máquina unilateral (enfoque dorsal)',
              muscle: 'Dorsal ancho · Romboides',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'One Arm Dumbbell Row',
                  name: 'Remo con mancuerna a una mano',
                  steps: [
                    'Rodilla y mano del mismo lado en el banco, espalda paralela al suelo',
                    'Mancuerna colgando, brazo completamente estirado',
                    'Tira del codo hacia el techo — piensa en el codo, no en la mano',
                    'Aprieta el dorsal arriba 1 segundo'
                  ],
                  tip: { bold: 'No rotes el torso para subir más peso.', text: 'Cadera y hombro quietos.' }
                }
              ]
            },
            {
              id: 'd2e2', icon: '🔱',
              name: 'Remo en T',
              muscle: 'Dorsal · Trapecio medio · Romboides',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'One Arm Dumbbell Row',
                  name: 'Remo con mancuerna a una mano',
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
              id: 'd2e3', icon: '⬇️',
              name: 'Jalón al pecho agarre unilateral caballero',
              muscle: 'Dorsal ancho · Bíceps (unilateral)',
              altHeader: 'Alternativas si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Cable Half Kneeling Pull',
                  name: 'Jalón en polea arrodillado unilateral',
                  steps: [
                    'Arrodíllate frente a la polea con una rodilla en el suelo — misma posición de partida',
                    'Agarra el maneral con la mano del lado contrario a la rodilla en el suelo',
                    'Tira del codo hacia la cadera manteniendo el tronco estable',
                    'Sube lento hasta el estiramiento completo del dorsal'
                  ],
                  tip: { bold: 'La rodilla en el suelo elimina la compensación del cuerpo', text: '— el dorsal trabaja solo, igual que en la posición caballero original.' }
                },
                {
                  appName: 'One Arm Lat Pulldown',
                  name: 'Jalón unilateral sentado',
                  desc: 'Si no hay espacio para arrodillarse — sentado en la silla del jalón, un brazo a la vez.'
                }
              ]
            },
            {
              id: 'd2e4', icon: '🦅',
              name: 'Reverse flyes en máquina contractora',
              muscle: 'Deltoides posterior · Romboides',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Rear Delt Row',
                  name: 'Reverse flyes con mancuernas en banco inclinado',
                  steps: [
                    'Banco inclinado a 45°, pecho apoyado, cara mirando abajo',
                    'Mancuernas colgando, codos con leve flexión',
                    'Abre los brazos hacia los lados hasta la altura de los hombros',
                    'Baja muy lento — el negativo es donde más se trabaja'
                  ],
                  tip: { bold: 'Peso muy ligero.', text: 'El hombro posterior es pequeño — forma perfecta primero.' }
                },
                {
                  appName: 'Cable Rear Delt Fly',
                  name: 'Reverse fly en polea cruzada',
                  desc: 'Poleas altas cruzadas — tensión constante.'
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
              name: 'Curl en banco scott con barra Z',
              muscle: 'Bíceps · Braquial',
              altHeader: 'Alternativa si el banco está ocupado',
              alternatives: [
                {
                  appName: 'Dumbbell Preacher Curl',
                  name: 'Curl predicador con mancuerna',
                  steps: [
                    'Mismo banco Scott, una mancuerna a la vez',
                    'Brazo apoyado completamente sobre el banco',
                    'Sube doblando solo el codo',
                    'Baja controlando hasta casi estirar el brazo'
                  ],
                  tip: { bold: 'No despegues el codo del banco —', text: 'ahí está la clave del ejercicio.' }
                }
              ]
            },
            {
              id: 'd2e6', icon: '📏',
              name: 'Curl bayesian en polea bilateral',
              muscle: 'Bíceps cabeza larga (estiramiento máximo bilateral)',
              altHeader: 'Alternativas si las poleas están ocupadas',
              alternatives: [
                {
                  appName: 'EZ Bar Curl',
                  name: 'Curl con barra EZ de pie',
                  steps: [
                    'De pie, agarre semisupino en la barra EZ',
                    'Codos pegados al cuerpo, brazos completamente estirados como punto de partida',
                    'Sube hasta la contracción máxima sin mover los codos',
                    'Baja lento — el estiramiento abajo es el punto más valioso'
                  ],
                  tip: { bold: 'El bayesian bilateral te da estiramiento en ambos brazos a la vez —', text: 'en barra EZ procura no cortar el recorrido abajo.' }
                },
                {
                  appName: 'Barbell Curl',
                  name: 'Curl con barra recta de pie',
                  desc: 'Si no hay barra EZ libre — mismo patrón, agarre supino completo.'
                }
              ]
            }
          ]
        }
      ]
    },

    // ─────────── DÍA 3 · PIERNA + BRAZO ───────────
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
                  steps: [
                    'Pies a la anchura de hombros, mancuerna sujeta verticalmente contra el pecho',
                    'Baja como si te sentaras en una silla',
                    'Muslos paralelos al suelo',
                    'Empuja con los talones para subir'
                  ],
                  tip: { bold: 'La mancuerna al pecho obliga a torso recto —', text: 'replica la mecánica del hack squat.' }
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
                  steps: [
                    'Pie trasero apoyado en banco, pie delantero a ~60cm',
                    'Baja, rodilla delantera sin pasar el pie',
                    'Rodilla trasera casi toca el suelo',
                    'Empuja con el talón delantero'
                  ],
                  tip: { bold: 'Empieza sin mancuernas', text: 'para dominar el equilibrio.' }
                }
              ]
            },
            {
              id: 'd3e3', icon: '⚡',
              name: 'Extensión de cuádriceps',
              muscle: 'Cuádriceps (aislamiento)',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Bulgarian Split Squat',
                  name: 'Sentadilla búlgara unilateral',
                  steps: [
                    'Pie trasero apoyado en banco, pie delantero a ~60cm',
                    'Baja controlando, rodilla delantera sin pasar el pie',
                    'Empieza sin peso para aprender el equilibrio'
                  ],
                  tip: { bold: 'Aísla bien el cuádriceps de la pierna delantera —', text: 'si la búlgara te resulta difícil, apóyate ligeramente con una mano.' }
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
              altHeader: 'Alternativa si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Romanian Deadlift',
                  name: 'Peso muerto rumano con barra',
                  steps: [
                    'Barra a la altura de caderas, agarre prono',
                    'Empuja caderas hacia atrás bajando la barra por las piernas',
                    'Espalda recta, sentir estiramiento en femorales',
                    'Empuja caderas adelante para volver'
                  ],
                  tip: { bold: 'La barra NO toca el suelo.', text: 'El movimiento viene de la cadera, no de las rodillas.' }
                }
              ]
            },
            {
              id: 'd3e5', icon: '🔁',
              name: 'Curl de femoral tumbado',
              muscle: 'Femorales / Isquiotibiales',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Seated Leg Curl',
                  name: 'Curl femoral sentado (máquina)',
                  desc: 'Si la tumbada está ocupada, la sentada trabaja igual de bien.'
                },
                {
                  appName: 'Dumbbell Single Leg Romanian Deadlift',
                  name: 'Rumano a una pierna con mancuerna',
                  steps: [
                    'De pie con una mancuerna, apoyo en una pierna',
                    'Inclina el torso adelante mientras la pierna libre se eleva detrás',
                    'Baja al estiramiento del femoral',
                    'Vuelve apretando el glúteo'
                  ],
                  tip: { bold: 'Apóyate en una máquina con la mano libre', text: 'si necesitas equilibrio.' }
                }
              ]
            }
          ]
        },
        {
          label: 'TRÍCEPS',
          exercises: [
            {
              id: 'd3e6', icon: '💀',
              name: 'Press francés con barra Z',
              muscle: 'Tríceps cabeza larga (estiramiento máximo)',
              altHeader: 'Alternativas si la barra Z está ocupada',
              alternatives: [
                {
                  appName: 'Cable Lying Tricep Extension',
                  name: 'Extensión de tríceps tumbado en polea',
                  steps: [
                    'Banco plano frente a la polea baja, agarra la cuerda o barra con ambas manos',
                    'Brazos estirados hacia arriba, codos apuntando al techo',
                    'Dobla solo el codo bajando hacia la frente — codos fijos',
                    'Extiende de vuelta hasta arriba'
                  ],
                  tip: { bold: 'La polea mantiene tensión constante en todo el recorrido —', text: 'ventaja sobre la barra que pierde tensión en el punto más alto.' }
                },
                {
                  appName: 'Dumbbell Lying Tricep Extension',
                  name: 'Press francés con mancuernas',
                  steps: [
                    'Tumbado en banco plano, una mancuerna en cada mano',
                    'Brazos estirados hacia arriba, palmas enfrentadas',
                    'Dobla los codos bajando las mancuernas a los lados de la cabeza',
                    'Extiende volviendo al punto de partida'
                  ],
                  tip: { bold: 'Codos fijos apuntando al techo en todo momento —', text: 'si se abren hacia los lados, el tríceps pierde tensión.' }
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
                  name: 'Extensión de tríceps en polea alta con cuerda',
                  steps: [
                    'Agarra la cuerda a la altura de la cara, codos pegados al cuerpo',
                    'Solo se mueve el antebrazo — codos fijos',
                    'Estira completamente los brazos abriendo la cuerda al final',
                    'Sube lento a la posición inicial'
                  ],
                  tip: { bold: 'Codos quietos.', text: 'Si se mueven hacia delante, el tríceps deja de trabajar al máximo.' }
                },
                {
                  appName: 'Dips',
                  name: 'Fondos en paralelas',
                  desc: 'Codos pegados al cuerpo para que cargue el tríceps.'
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
              name: 'Curl a 90 grados en remo bajo',
              muscle: 'Bíceps cabeza larga',
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Incline Curl',
                  name: 'Curl en banco inclinado',
                  steps: [
                    'Banco a 45°, brazos colgando hacia atrás',
                    'Sube doblando el codo sin mover el hombro',
                    'Gira la muñeca hacia fuera al subir',
                    'Baja al estiramiento completo'
                  ],
                  tip: { bold: 'El valor está en la bajada —', text: 'controla el negativo.' }
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
                  steps: [
                    'Agarra la cuerda en agarre neutro (pulgares apuntando al techo)',
                    'Codos pegados al cuerpo, brazos estirados como punto de inicio',
                    'Sube hasta la contracción máxima sin rotar la muñeca',
                    'Baja lento manteniendo el agarre neutro'
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

    // ─────────── DÍA 4 · PECHO + ESPALDA ───────────
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
                  steps: [
                    'Banco plano, mancuernas a los lados del pecho, codos a ~45°',
                    'Empuja hacia arriba hasta casi extender los brazos',
                    'Baja lento hasta que los codos queden ligeramente por debajo del pecho'
                  ],
                  tip: { bold: 'Escápulas juntas antes de empezar —', text: 'protege el hombro.' }
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
              altHeader: 'Alternativa si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Incline Bench Press',
                  name: 'Press inclinado con barra / multipower',
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
                  appName: 'Machine Chest Fly',
                  name: 'Peck-deck (máquina contractora)',
                  desc: 'Primera opción si está libre.'
                },
                {
                  appName: 'Dumbbell Flyes',
                  name: 'Aperturas con mancuernas en banco plano',
                  steps: [
                    'Banco plano, mancuernas sobre el pecho, codos ligeramente flexionados',
                    'Abre en arco hacia los lados a la altura del pecho',
                    'Nota el estiramiento abajo',
                    'Cierra como si abrazaras un árbol'
                  ],
                  tip: { bold: 'Peso muy ligero —', text: 'ejercicio de estiramiento, no de fuerza.' }
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
              name: 'Remo en máquina (enfoque espalda alta)',
              muscle: 'Trapecio · Romboides · Dorsal alto',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Upright Row',
                  name: 'Remo al cuello con barra',
                  steps: [
                    'Barra con agarre ancho, torso inclinado ~45°',
                    'Tira hacia el pecho alto — codos abiertos hacia los lados',
                    'Junta las escápulas al final',
                    'Baja lento'
                  ],
                  tip: { bold: 'Codos hacia fuera = trapecio.', text: 'Codos hacia atrás = dorsal. Aquí van hacia fuera.' }
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
                  steps: [
                    'Agarre ancho prono',
                    'Tira hacia el pecho alto',
                    'Junta las escápulas al final, aprieta el dorsal',
                    'Sube lento hasta el estiramiento completo'
                  ],
                  tip: { bold: 'El agarre cerrado da más rango de movimiento.', text: 'El ancho enfatiza el dorsal alto.' }
                },
                {
                  appName: 'Assisted Pull-up',
                  name: 'Dominadas asistidas',
                  desc: 'Buena opción para progresar hacia dominadas reales.'
                }
              ]
            },
            {
              id: 'd4e6', icon: '🦭',
              name: 'Seal Row con mancuernas',
              muscle: 'Dorsal · Romboides (sin compensación de torso)',
              altHeader: 'Alternativas si el banco elevado no está disponible',
              alternatives: [
                {
                  appName: 'Dumbbell Bent Over Row',
                  name: 'Remo con mancuernas inclinado',
                  steps: [
                    'Pies a la anchura de hombros, torso inclinado ~45° hacia delante',
                    'Mancuernas colgando, codos cerca del cuerpo',
                    'Tira de los codos hacia atrás hasta la altura de la cadera',
                    'Baja controlando, estiramiento completo abajo'
                  ],
                  tip: { bold: 'Sin el apoyo del banco el torso tiende a compensar —', text: 'va más lento y aprieta el core para no balancearte.' }
                },
                {
                  appName: 'Cable Seated Row',
                  name: 'Remo en polea sentado',
                  desc: 'El asiento fijo elimina también la compensación del cuerpo — buena alternativa al seal row.'
                }
              ]
            },
            {
              id: 'd4e7', icon: '🔄',
              name: 'Pullover en polea unilateral',
              muscle: 'Dorsal ancho · Serrato · Core',
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Pullover',
                  name: 'Pullover con mancuerna en banco plano',
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
    }

  ]
};
