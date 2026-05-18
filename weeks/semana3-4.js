window.WEEK_DATA = {
  id: 'semana3-4',
  label: 'Semanas 3-4',
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
          label: 'PECTORAL (AISLAMIENTO)',
          exercises: [
            {
              id: 'd1e3', icon: '🦋',
              name: 'Peck-deck o máquina contractora',
              muscle: 'Pectoral (aislamiento · contracción)',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Cable Crossover',
                  name: 'Cruces en polea',
                  steps: [
                    'Poleas a la altura del pecho',
                    'Brazos ligeramente flexionados',
                    'Cierra los brazos delante del cuerpo hasta cruzarlos ligeramente',
                    'Abre controlando, sintiendo el estiramiento del pecho'
                  ],
                  tip: { bold: 'Tensión constante durante todo el recorrido —', text: 'gran ventaja sobre las mancuernas.' }
                },
                {
                  appName: 'Dumbbell Flyes',
                  name: 'Aperturas con mancuernas',
                  desc: 'Si todo lo demás está ocupado.'
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
              name: 'Elevaciones laterales con mancuernas',
              muscle: 'Deltoides lateral',
              altHeader: 'Alternativa si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Cable Lateral Raise',
                  name: 'Elevaciones laterales en polea',
                  steps: [
                    'Polea baja, mano contraria al lado de la polea',
                    'Sube el brazo en arco lateral hasta la altura del hombro',
                    'Baja controlando'
                  ],
                  tip: { bold: 'Ventaja vs mancuerna:', text: 'la polea mantiene tensión constante en todo el recorrido.' }
                }
              ]
            },
            {
              id: 'd1e5', icon: '🔌',
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
          label: 'TRÍCEPS',
          exercises: [
            {
              id: 'd1e6', icon: '⬆️',
              name: 'Extensión de tríceps por encima de la cabeza barra',
              muscle: 'Tríceps cabeza larga',
              altHeader: 'Alternativa si la barra está ocupada',
              alternatives: [
                {
                  appName: 'Cable Overhead Tricep Extension',
                  name: 'Extensión por encima de la cabeza en polea',
                  steps: [
                    'Polea baja, agarra la cuerda y date la vuelta',
                    'Brazos arriba, codos pegados a las orejas',
                    'Extiende los brazos hacia arriba',
                    'Baja lento doblando solo el codo'
                  ],
                  tip: { bold: 'Codos fijos —', text: 'solo se mueve el antebrazo. La cabeza larga del tríceps trabaja al máximo en estiramiento.' }
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
              name: 'Remo en polea con barra',
              muscle: 'Dorsal · Trapecio medio · Romboides',
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Barbell Bent Over Row',
                  name: 'Remo con barra inclinado',
                  steps: [
                    'Pies a la anchura de hombros, torso inclinado ~45°',
                    'Agarre prono, manos algo más anchas que los hombros',
                    'Tira hacia el abdomen, codos cerca del cuerpo',
                    'Baja controlando, estiramiento completo'
                  ],
                  tip: { bold: 'Espalda neutra siempre —', text: 'si se redondea, el peso es demasiado.' }
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
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Pullover',
                  name: 'Pullover con mancuerna en banco plano',
                  steps: [
                    'Tumbado en banco plano, mancuerna con las dos manos sobre el pecho',
                    'Baja en arco por detrás de la cabeza, codos ligeramente flexionados',
                    'Llega hasta el estiramiento del dorsal',
                    'Vuelve al inicio sin coger impulso'
                  ],
                  tip: { bold: 'Peso ligero —', text: 'el hombro trabaja en posición comprometida.' }
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
              altHeader: 'Alternativas si el banco está ocupado',
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
                },
                {
                  appName: 'Barbell Concentration Curl',
                  name: 'Curl concentrado sentado',
                  desc: 'Si el banco Scott también está ocupado — codo apoyado en cara interna del muslo.'
                }
              ]
            },
            {
              id: 'd2e6', icon: '📐',
              name: 'Curl en banco inclinado con mancuernas',
              muscle: 'Bíceps cabeza larga',
              altHeader: 'Alternativas si el banco está ocupado',
              alternatives: [
                {
                  appName: 'Barbell Curl',
                  name: 'Curl con barra recta de pie',
                  steps: [
                    'De pie, agarre supino (palmas arriba), pies a la anchura de cadera',
                    'Codos pegados al cuerpo durante todo el movimiento',
                    'Sube hasta la altura del pecho, aprieta arriba',
                    'Baja controlando — no dejes caer la barra'
                  ],
                  tip: { bold: 'Si los codos se van hacia delante,', text: 'el hombro roba parte del trabajo.' }
                },
                {
                  appName: 'Cable Curl',
                  name: 'Curl en polea baja',
                  desc: 'Tensión constante — el bíceps trabaja de inicio a fin.'
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
              name: 'Prensa a 45 grados',
              muscle: 'Cuádriceps · Glúteos · Femorales',
              altHeader: 'Alternativas si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Leg Press Machine',
                  name: 'Prensa horizontal',
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
                    'Aísla bien el cuádriceps de la pierna delantera',
                    'Pie trasero apoyado en banco, pie delantero a ~60cm',
                    'Baja controlando, rodilla delantera sin pasar el pie',
                    'Empieza sin peso para aprender el equilibrio'
                  ],
                  tip: { bold: 'Si la búlgara te resulta difícil,', text: 'puedes hacer sentadilla con peso corporal a una pierna apoyándote ligeramente.' }
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
              id: 'd3e6', icon: '🔩',
              name: 'Kaz press en multipower',
              muscle: 'Tríceps · Pectoral · Hombro anterior',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Close Grip Bench Press',
                  name: 'Press banca agarre cerrado',
                  steps: [
                    'Agarre al ancho de hombros o menos, codos a 45° del cuerpo',
                    'Baja al pecho bajo sin rebotar',
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
                  name: 'Extensión de tríceps en polea alta con cuerda',
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
              name: 'Curl alterno con mancuernas',
              muscle: 'Bíceps',
              altHeader: 'Alternativas si las mancuernas están ocupadas',
              alternatives: [
                {
                  appName: 'Barbell Curl',
                  name: 'Curl con barra recta',
                  steps: [
                    'De pie, agarre supino (palmas arriba)',
                    'Codos pegados al cuerpo durante todo el movimiento',
                    'Sube hasta la altura del pecho, aprieta arriba',
                    'Baja controlando'
                  ],
                  tip: { bold: 'Si los codos se van hacia delante,', text: 'el hombro toma parte del trabajo.' }
                },
                {
                  appName: 'Cable Curl',
                  name: 'Curl en polea baja',
                  desc: 'Tensión constante en todo el recorrido — alternativa con cable.'
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
              name: 'Press inclinado en multipower',
              muscle: 'Pectoral superior · Hombro anterior',
              altHeader: 'Alternativa si la máquina está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Incline Bench Press',
                  name: 'Press inclinado con mancuernas',
                  steps: [
                    'Banco a 30-45°, codos a ~45°',
                    'Mancuernas a los lados del pecho superior',
                    'Empuja hacia arriba sin extender del todo',
                    'Baja al estiramiento del pecho superior'
                  ],
                  tip: { bold: 'Más rango de movimiento que en multipower —', text: 'mejor activación del pectoral superior.' }
                }
              ]
            },
            {
              id: 'd4e3', icon: '✂️',
              name: 'Cruces en polea de arriba a abajo',
              muscle: 'Pectoral (aislamiento)',
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
              id: 'd4e6', icon: '🔄',
              name: 'Pullover en polea con barra',
              muscle: 'Dorsal ancho · Serrato · Core',
              altHeader: 'Alternativa si la polea está ocupada',
              alternatives: [
                {
                  appName: 'Dumbbell Pullover',
                  name: 'Pullover con mancuerna en banco plano',
                  steps: [
                    'Tumbado en banco plano, mancuerna con las dos manos sobre el pecho',
                    'Baja en arco por detrás de la cabeza',
                    'Codos ligeramente flexionados',
                    'Vuelve al inicio sin impulso'
                  ],
                  tip: { bold: 'Peso ligero —', text: 'la posición del hombro es comprometida.' }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
