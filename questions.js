const questions = [
  {
    question: "1. What is the form of government of the United States?",
    question_es: "1. ¿Cuál es la forma de gobierno de los Estados Unidos?",
    answers: [
      { answer: "Republic", answer_es: "República" },
      { answer: "Constitution-based federal republic", answer_es: "República federal basada en la Constitución" },
      { answer: "Representative democracy", answer_es: "Democracia representativa" }
    ]
  },
  {
    question: "2. What is the supreme law of the land?",
    question_es: "2. ¿Cuál es la ley suprema del país?",
    answers: [
      { answer: "(U.S.) Constitution", answer_es: "Constitución (de EE.UU.)" }
    ]
  },
  {
    question: "3. Name one thing the U.S. Constitution does.",
    question_es: "3. Nombre una cosa que hace la Constitución de EE.UU.",
    answers: [
      { answer: "Forms the government", answer_es: "Forma el gobierno" },
      { answer: "Defines powers of government", answer_es: "Define los poderes del gobierno" },
      { answer: "Defines the parts of government", answer_es: "Define las partes del gobierno" },
      { answer: "Protects the rights of the people", answer_es: "Protege los derechos de las personas" }
    ]
  },
  {
    question: "4. The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
    question_es: "4. La Constitución de EE.UU. comienza con las palabras 'Nosotros, el Pueblo'. ¿Qué significa 'Nosotros, el Pueblo'?",
    answers: [
      { answer: "Self-government", answer_es: "Autogobierno" },
      { answer: "Popular sovereignty", answer_es: "Soberanía popular" },
      { answer: "Consent of the governed", answer_es: "Consentimiento de los gobernados" },
      { answer: "People should govern themselves", answer_es: "El pueblo debe gobernarse a sí mismo" },
      { answer: "(Example of) social contract", answer_es: "(Ejemplo de) contrato social" }
    ]
  },
  {
    question: "5. How are changes made to the U.S. Constitution?",
    question_es: "5. ¿Cómo se hacen los cambios a la Constitución de EE.UU.?",
    answers: [
      { answer: "Amendments", answer_es: "Enmiendas" },
      { answer: "The amendment process", answer_es: "El proceso de enmienda" }
    ]
  },
  {
    question: "6. What does the Bill of Rights protect?",
    question_es: "6. ¿Qué protege la Carta de Derechos?",
    answers: [
      { answer: "(The basic) rights of Americans", answer_es: "Los derechos básicos de los estadounidenses" },
      { answer: "(The basic) rights of people living in the United States", answer_es: "Los derechos básicos de las personas que viven en Estados Unidos" }
    ]
  },
  {
    question: "7. How many amendments does the U.S. Constitution have?",
    question_es: "7. ¿Cuántas enmiendas tiene la Constitución de EE.UU.?",
    answers: [
      { answer: "Twenty-seven (27)", answer_es: "Veintisiete (27)" }
    ]
  },
  {
    question: "8. Why is the Declaration of Independence important?",
    question_es: "8. ¿Por qué es importante la Declaración de Independencia?",
    answers: [
      { answer: "It says America is free from British control.", answer_es: "Dice que América es libre del control británico." },
      { answer: "It says all people are created equal.", answer_es: "Dice que todas las personas son creadas iguales." },
      { answer: "It identifies inherent rights.", answer_es: "Identifica los derechos inherentes." },
      { answer: "It identifies individual freedoms.", answer_es: "Identifica las libertades individuales." }
    ]
  },
  {
    question: "9. What founding document said the American colonies were free from Britain?",
    question_es: "9. ¿Qué documento fundacional decía que las colonias americanas eran libres de Gran Bretaña?",
    answers: [
      { answer: "Declaration of Independence", answer_es: "Declaración de Independencia" }
    ]
  },
  {
    question: "10. Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    question_es: "10. Nombre dos ideas importantes de la Declaración de Independencia y la Constitución de EE.UU.",
    answers: [
      { answer: "Equality", answer_es: "Igualdad" },
      { answer: "Liberty", answer_es: "Libertad" },
      { answer: "Social contract", answer_es: "Contrato social" },
      { answer: "Natural rights", answer_es: "Derechos naturales" },
      { answer: "Limited government", answer_es: "Gobierno limitado" },
      { answer: "Self-government", answer_es: "Autogobierno" }
    ]
  },
  {
    question: "11. The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
    question_es: "11. Las palabras 'Vida, Libertad y la búsqueda de la Felicidad' están en qué documento fundacional?",
    answers: [
      { answer: "Declaration of Independence", answer_es: "Declaración de Independencia" }
    ]
  },
  {
    question: "12. What is the economic system of the United States?",
    question_es: "12. ¿Cuál es el sistema económico de los Estados Unidos?",
    answers: [
      { answer: "Capitalism", answer_es: "Capitalismo" },
      { answer: "Free market economy", answer_es: "Economía de mercado libre" }
    ]
  },
  {
    question: "13. What is the rule of law?",
    question_es: "13. ¿Qué es el estado de derecho?",
    answers: [
      { answer: "Everyone must follow the law.", answer_es: "Todos deben seguir la ley." },
      { answer: "Leaders must obey the law.", answer_es: "Los líderes deben obedecer la ley." },
      { answer: "Government must obey the law.", answer_es: "El gobierno debe obedecer la ley." },
      { answer: "No one is above the law.", answer_es: "Nadie está por encima de la ley." }
    ]
  },
  {
    question: "14. Many documents influenced the U.S. Constitution. Name one.",
    question_es: "14. Muchos documentos influyeron en la Constitución de EE.UU. Nombre uno.",
    answers: [
      { answer: "Declaration of Independence", answer_es: "Declaración de Independencia" },
      { answer: "Articles of Confederation", answer_es: "Artículos de la Confederación" },
      { answer: "Federalist Papers", answer_es: "Documentos Federalistas" },
      { answer: "Anti-Federalist Papers", answer_es: "Documentos Antifederalistas" },
      { answer: "Virginia Declaration of Rights", answer_es: "Declaración de Derechos de Virginia" },
      { answer: "Fundamental Orders of Connecticut", answer_es: "Órdenes Fundamentales de Connecticut" },
      { answer: "Mayflower Compact", answer_es: "Pacto del Mayflower" },
      { answer: "Iroquois Great Law of Peace", answer_es: "Gran Ley de Paz de los Iroqueses" }
    ]
  },
  {
    question: "15. There are three branches of government. Why?",
    question_es: "15. Hay tres ramas de gobierno. ¿Por qué?",
    answers: [
      { answer: "So one part does not become too powerful", answer_es: "Para que una parte no se vuelva demasiado poderosa" },
      { answer: "Checks and balances", answer_es: "Controles y equilibrios" },
      { answer: "Separation of powers", answer_es: "Separación de poderes" }
    ]
  },
  {
    question: "16. Name the three branches of government.",
    question_es: "16. Nombre las tres ramas del gobierno.",
    answers: [
      { answer: "Legislative, executive, and judicial", answer_es: "Legislativa, ejecutiva y judicial" },
      { answer: "Congress, president, and the courts", answer_es: "Congreso, presidente y los tribunales" }
    ]
  },
  {
    question: "17. The President of the United States is in charge of which branch of government?",
    question_es: "17. ¿El Presidente de Estados Unidos está a cargo de qué rama del gobierno?",
    answers: [
      { answer: "Executive branch", answer_es: "Rama ejecutiva" }
    ]
  },
  {
    question: "18. What part of the federal government writes laws?",
    question_es: "18. ¿Qué parte del gobierno federal hace las leyes?",
    answers: [
      { answer: "(U.S.) Congress", answer_es: "Congreso (de EE.UU.)" },
      { answer: "(U.S. or national) legislature", answer_es: "Legislatura (de EE.UU. o nacional)" },
      { answer: "Legislative branch", answer_es: "Rama legislativa" }
    ]
  },
  {
    question: "19. What are the two parts of the U.S. Congress?",
    question_es: "19. ¿Cuáles son las dos partes del Congreso de EE.UU.?",
    answers: [
      { answer: "Senate", answer_es: "Senado" },
      { answer: "House (of Representatives)", answer_es: "Cámara de Representantes" }
    ]
  },
  {
    question: "20. Name one power of the U.S. Congress.",
    question_es: "20. Nombre un poder del Congreso de EE.UU.",
    answers: [
      { answer: "Writes laws", answer_es: "Hace leyes" },
      { answer: "Declares war", answer_es: "Declara la guerra" },
      { answer: "Makes the federal budget", answer_es: "Hace el presupuesto federal" }
    ]
  },
  {
    question: "21. How many U.S. senators are there?",
    question_es: "21. ¿Cuántos senadores hay en EE.UU.?",
    answers: [
      { answer: "One hundred (100)", answer_es: "Cien (100)" }
    ]
  },
  {
    question: "22. How long is a term for a U.S. senator?",
    question_es: "22. ¿Cuánto dura el mandato de un senador de EE.UU.?",
    answers: [
      { answer: "Six (6) years", answer_es: "Seis (6) años" }
    ]
  },
  {
    question: "23. Who is one of your state’s U.S. senators now?",
    question_es: "23. ¿Quién es uno de los senadores de su estado actualmente?",
    answers: [
      { answer: "Answers will vary", answer_es: "Las respuestas pueden variar" }
    ]
  },
  {
    question: "24. How many voting members are in the House of Representatives?",
    question_es: "24. ¿Cuántos miembros con derecho a voto hay en la Cámara de Representantes?",
    answers: [
      { answer: "Four hundred thirty-five (435)", answer_es: "Cuatrocientos treinta y cinco (435)" }
    ]
  },
  {
    question: "25. How long is a term for a member of the House of Representatives?",
    question_es: "25. ¿Cuánto dura el mandato de un miembro de la Cámara de Representantes?",
    answers: [
      { answer: "Two (2) years", answer_es: "Dos (2) años" }
    ]
  },
  {
    question: "26. Why do U.S. representatives serve shorter terms than U.S. senators?",
    question_es: "26. ¿Por qué los representantes de EE.UU. sirven mandatos más cortos que los senadores?",
    answers: [
      { answer: "To more closely follow public opinion", answer_es: "Para seguir más de cerca la opinión pública" }
    ]
  },
  {
    question: "27. How many senators does each state have?",
    question_es: "27. ¿Cuántos senadores tiene cada estado?",
    answers: [
      { answer: "Two (2)", answer_es: "Dos (2)" }
    ]
  },
  {
    question: "28. Why does each state have two senators?",
    question_es: "28. ¿Por qué cada estado tiene dos senadores?",
    answers: [
      { answer: "Equal representation (for small states)", answer_es: "Representación igual (para los estados pequeños)" },
      { answer: "The Great Compromise (Connecticut Compromise)", answer_es: "El Gran Compromiso (Compromiso de Connecticut)" }
    ]
  },
  {
    question: "29. Name your U.S. representative.",
    question_es: "29. Nombre a su representante de EE.UU.",
    answers: [
      { answer: "Answers will vary", answer_es: "Las respuestas pueden variar" }
    ]
  },
  {
    question: "30. What is the name of the Speaker of the House of Representatives now?",
    question_es: "30. ¿Cuál es el nombre del Presidente de la Cámara de Representantes actualmente?",
    answers: [
      { answer: "Visit uscis.gov/citizenship/testupdates for the name", answer_es: "Visite uscis.gov/citizenship/testupdates para el nombre" }
    ]
  },
  {
    question: "31. Who does a U.S. senator represent?",
    question_es: "31. ¿A quién representa un senador de EE.UU.?",
    answers: [
      { answer: "Citizens of their state", answer_es: "Ciudadanos de su estado" },
      { answer: "People of their state", answer_es: "Personas de su estado" }
    ]
  },
  {
    question: "32. Who elects U.S. senators?",
    question_es: "32. ¿Quién elige a los senadores de EE.UU.?",
    answers: [
      { answer: "Citizens from their state", answer_es: "Ciudadanos de su estado" }
    ]
  },
  {
    question: "33. Who does a member of the House of Representatives represent?",
    question_es: "33. ¿A quién representa un miembro de la Cámara de Representantes?",
    answers: [
      { answer: "Citizens in their (congressional) district", answer_es: "Ciudadanos de su distrito (congresional)" },
      { answer: "People in their (congressional) district", answer_es: "Personas de su distrito (congresional)" }
    ]
  },
  {
    question: "34. Who elects members of the House of Representatives?",
    question_es: "34. ¿Quién elige a los miembros de la Cámara de Representantes?",
    answers: [
      { answer: "Citizens from their (congressional) district", answer_es: "Ciudadanos de su distrito (congresional)" }
    ]
  },
  {
    question: "35. Some states have more representatives than other states. Why?",
    question_es: "35. Algunos estados tienen más representantes que otros estados. ¿Por qué?",
    answers: [
      { answer: "(Because of) the state’s population", answer_es: "Por la población del estado" },
      { answer: "(Because) they have more people", answer_es: "Porque tienen más personas" },
      { answer: "(Because) some states have more people", answer_es: "Porque algunos estados tienen más personas" }
    ]
  },
  {
    question: "36. The President of the United States is elected for how many years?",
    question_es: "36. ¿Por cuántos años se elige al Presidente de Estados Unidos?",
    answers: [
      { answer: "Four (4) years", answer_es: "Cuatro (4) años" }
    ]
  },
  {
    question: "37. The President of the United States can serve only two terms. Why?",
    question_es: "37. El Presidente de Estados Unidos solo puede servir dos mandatos. ¿Por qué?",
    answers: [
      { answer: "(Because of) the 22nd Amendment", answer_es: "Por la 22ª Enmienda" },
      { answer: "To keep the president from becoming too powerful", answer_es: "Para evitar que el presidente se vuelva demasiado poderoso" }
    ]
  },
  {
    question: "38. What is the name of the President of the United States now?",
    question_es: "38. ¿Cuál es el nombre del Presidente de Estados Unidos actualmente?",
    answers: [
      { answer: "Visit uscis.gov/citizenship/testupdates for the name", answer_es: "Visite uscis.gov/citizenship/testupdates para el nombre" }
    ]
  },
  {
    question: "39. What is the name of the Vice President of the United States now?",
    question_es: "39. ¿Cuál es el nombre del Vicepresidente de Estados Unidos actualmente?",
    answers: [
      { answer: "Visit uscis.gov/citizenship/testupdates for the name", answer_es: "Visite uscis.gov/citizenship/testupdates para el nombre" }
    ]
  },
  {
    question: "40. If the president can no longer serve, who becomes president?",
    question_es: "40. Si el presidente ya no puede servir, ¿quién se convierte en presidente?",
    answers: [
      { answer: "The Vice President (of the United States)", answer_es: "El Vicepresidente (de Estados Unidos)" }
    ]
  },
  {
    question: "41. Name one power of the president.",
    question_es: "41. Nombre un poder del presidente.",
    answers: [
      { answer: "Signs bills into law", answer_es: "Firma los proyectos de ley para convertirlos en ley" },
      { answer: "Vetoes bills", answer_es: "Veta proyectos de ley" },
      { answer: "Enforces laws", answer_es: "Hace cumplir las leyes" },
      { answer: "Commander in Chief (of the military)", answer_es: "Comandante en jefe (de las fuerzas armadas)" },
      { answer: "Chief diplomat", answer_es: "Jefe diplomático" },
      { answer: "Appoints federal judges", answer_es: "Nombra jueces federales" }
    ]
  },
  {
    question: "42. Who is Commander in Chief of the U.S. military?",
    question_es: "42. ¿Quién es el Comandante en Jefe de las fuerzas armadas de EE.UU.?",
    answers: [
      { answer: "The President (of the United States)", answer_es: "El Presidente (de Estados Unidos)" }
    ]
  },
  {
    question: "43. Who signs bills to become laws?",
    question_es: "43. ¿Quién firma los proyectos de ley para convertirlos en ley?",
    answers: [
      { answer: "The President (of the United States)", answer_es: "El Presidente (de Estados Unidos)" }
    ]
  },
  {
    question: "44. Who vetoes bills?",
    question_es: "44. ¿Quién veta los proyectos de ley?",
    answers: [
      { answer: "The President (of the United States)", answer_es: "El Presidente (de Estados Unidos)" }
    ]
  },
  {
    question: "45. Who appoints federal judges?",
    question_es: "45. ¿Quién nombra a los jueces federales?",
    answers: [
      { answer: "The President (of the United States)", answer_es: "El Presidente (de Estados Unidos)" }
    ]
  },
  {
    question: "46. The executive branch has many parts. Name one.",
    question_es: "46. La rama ejecutiva tiene muchas partes. Nombre una.",
    answers: [
      { answer: "President (of the United States)", answer_es: "Presidente (de Estados Unidos)" },
      { answer: "Cabinet", answer_es: "Gabinete" },
      { answer: "Federal departments and agencies", answer_es: "Departamentos y agencias federales" }
    ]
  },
  {
    question: "47. What does the President’s Cabinet do?",
    question_es: "47. ¿Qué hace el Gabinete del Presidente?",
    answers: [
      { answer: "Advises the President (of the United States)", answer_es: "Aconseja al Presidente (de Estados Unidos)" }
    ]
  },
  {
    question: "48. What are two Cabinet-level positions?",
    question_es: "48. ¿Cuáles son dos cargos de nivel de gabinete?",
    answers: [
      { answer: "Attorney General", answer_es: "Fiscal General" },
      { answer: "Secretary of Agriculture", answer_es: "Secretario de Agricultura" },
      { answer: "Secretary of Commerce", answer_es: "Secretario de Comercio" },
      { answer: "Secretary of Education", answer_es: "Secretario de Educación" },
      { answer: "Secretary of Energy", answer_es: "Secretario de Energía" },
      { answer: "Secretary of Health and Human Services", answer_es: "Secretario de Salud y Servicios Humanos" },
      { answer: "Secretary of Homeland Security", answer_es: "Secretario de Seguridad Nacional" },
      { answer: "Secretary of Housing and Urban Development", answer_es: "Secretario de Vivienda y Desarrollo Urbano" },
      { answer: "Secretary of the Interior", answer_es: "Secretario del Interior" },
      { answer: "Secretary of Labor", answer_es: "Secretario de Trabajo" },
      { answer: "Secretary of State", answer_es: "Secretario de Estado" },
      { answer: "Secretary of Transportation", answer_es: "Secretario de Transporte" },
      { answer: "Secretary of the Treasury", answer_es: "Secretario del Tesoro" },
      { answer: "Secretary of Veterans Affairs", answer_es: "Secretario de Asuntos de Veteranos" },
      { answer: "Secretary of War (Defense)", answer_es: "Secretario de Guerra (Defensa)" },
      { answer: "Vice-President", answer_es: "Vicepresidente" },
      { answer: "Administrator of the Environmental Protection Agency", answer_es: "Administrador de la Agencia de Protección Ambiental" },
      { answer: "Administrator of the Small Business Administration", answer_es: "Administrador de la Administración de Pequeñas Empresas" },
      { answer: "Director of the Central Intelligence Agency", answer_es: "Director de la Agencia Central de Inteligencia" },
      { answer: "Director of the Office of Management and Budget", answer_es: "Director de la Oficina de Administración y Presupuesto" },
      { answer: "Director of National Intelligence", answer_es: "Director de Inteligencia Nacional" },
      { answer: "United States Trade Representative", answer_es: "Representante Comercial de Estados Unidos" }
    ]
  },
  {
    question: "49. Why is the Electoral College important?",
    question_es: "49. ¿Por qué es importante el Colegio Electoral?",
    answers: [
      { answer: "It decides who is elected president.", answer_es: "Decide quién es elegido presidente." },
      { answer: "It provides a compromise between the popular election of the president and congressional selection.", answer_es: "Proporciona un compromiso entre la elección popular del presidente y la selección del Congreso." }
    ]
  },
  {
    question: "50. What is one part of the judicial branch?",
    question_es: "50. ¿Cuál es una parte de la rama judicial?",
    answers: [
      { answer: "Supreme Court", answer_es: "Corte Suprema" },
      { answer: "Federal Courts", answer_es: "Tribunales Federales" }
    ]
  },
  {
    question: "51. What does the judicial branch do?",
    question_es: "51. ¿Qué hace la rama judicial?",
    answers: [
      { answer: "Reviews laws", answer_es: "Revisa las leyes" },
      { answer: "Explains laws", answer_es: "Explica las leyes" },
      { answer: "Resolves disputes (disagreements) about the law", answer_es: "Resuelve disputas (desacuerdos) sobre la ley" },
      { answer: "Decides if a law goes against the (U.S.) Constitution", answer_es: "Decide si una ley va en contra de la Constitución (de EE.UU.)" }
    ]
  },
  {
    question: "52. What is the highest court in the United States?",
    question_es: "52. ¿Cuál es la corte más alta de Estados Unidos?",
    answers: [
      { answer: "Supreme Court", answer_es: "Corte Suprema" }
    ]
  },
  {
    question: "53. How many seats are on the Supreme Court?",
    question_es: "53. ¿Cuántos asientos hay en la Corte Suprema?",
    answers: [
      { answer: "Nine (9)", answer_es: "Nueve (9)" }
    ]
  },
  {
    question: "54. How many Supreme Court justices are usually needed to decide a case?",
    question_es: "54. ¿Cuántos jueces de la Corte Suprema se necesitan generalmente para decidir un caso?",
    answers: [
      { answer: "Five (5)", answer_es: "Cinco (5)" }
    ]
  },
  {
    question: "55. How long do Supreme Court justices serve?",
    question_es: "55. ¿Por cuánto tiempo sirven los jueces de la Corte Suprema?",
    answers: [
      { answer: "(For) life", answer_es: "De por vida" },
      { answer: "Lifetime appointment", answer_es: "Nombramiento de por vida" },
      { answer: "(Until) retirement", answer_es: "Hasta la jubilación" }
    ]
  },
  {
    question: "56. Supreme Court justices serve for life. Why?",
    question_es: "56. Los jueces de la Corte Suprema sirven de por vida. ¿Por qué?",
    answers: [
      { answer: "To be independent (of politics)", answer_es: "Para ser independientes (de la política)" },
      { answer: "To limit outside (political) influence", answer_es: "Para limitar la influencia externa (política)" }
    ]
  },
  {
    question: "57. Who is the Chief Justice of the United States now?",
    question_es: "57. ¿Quién es el Presidente de la Corte Suprema actualmente?",
    answers: [
      { answer: "Visit uscis.gov/citizenship/testupdates for the name", answer_es: "Visite uscis.gov/citizenship/testupdates para el nombre" }
    ]
  },
  {
    question: "58. Name one power that is only for the federal government.",
    question_es: "58. Nombre un poder que sea solo para el gobierno federal.",
    answers: [
      { answer: "Print paper money", answer_es: "Imprimir dinero en papel" },
      { answer: "Mint coins", answer_es: "Acunar monedas" },
      { answer: "Declare war", answer_es: "Declarar la guerra" },
      { answer: "Create an army", answer_es: "Crear un ejército" },
      { answer: "Make treaties", answer_es: "Hacer tratados" },
      { answer: "Set foreign policy", answer_es: "Establecer la política exterior" }
    ]
  },
  {
    question: "59. Name one power that is only for the states.",
    question_es: "59. Nombre un poder que sea solo para los estados.",
    answers: [
      { answer: "Provide schooling and education", answer_es: "Proporcionar educación" },
      { answer: "Provide protection (police)", answer_es: "Proporcionar protección (policía)" },
      { answer: "Provide safety (fire departments)", answer_es: "Proporcionar seguridad (bomberos)" },
      { answer: "Give a driver’s license", answer_es: "Dar licencias de conducir" },
      { answer: "Approve zoning and land use", answer_es: "Aprobar el uso del suelo y zonificación" }
    ]
  },
  {
    question: "60. What is the purpose of the 10th Amendment?",
    question_es: "60. ¿Cuál es el propósito de la 10ª Enmienda?",
    answers: [
      { answer: "Powers not given to the federal government belong to the states or to the people", answer_es: "Los poderes no otorgados al gobierno federal pertenecen a los estados o al pueblo" }
    ]
  },
  {
    question: "61. Who is the governor of your state now?",
    question_es: "61. ¿Quién es el gobernador de su estado actualmente?",
    answers: [
      { answer: "Answers will vary", answer_es: "Las respuestas pueden variar" }
    ]
  },
  {
    question: "62. What is the capital of your state?",
    question_es: "62. ¿Cuál es la capital de su estado?",
    answers: [
      { answer: "Answers will vary", answer_es: "Las respuestas pueden variar" }
    ]
  },
  {
    question: "63. There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    question_es: "63. Hay cuatro enmiendas a la Constitución de EE.UU. sobre quién puede votar. Describa una.",
    answers: [
      { answer: "Citizens eighteen (18) and older (can vote)", answer_es: "Ciudadanos de dieciocho (18) años o más (pueden votar)" },
      { answer: "You don’t have to pay (a poll tax) to vote", answer_es: "No hay que pagar (un impuesto de votación) para votar" },
      { answer: "Any citizen can vote (women and men can vote)", answer_es: "Cualquier ciudadano puede votar (mujeres y hombres pueden votar)" },
      { answer: "A male citizen of any race (can vote)", answer_es: "Un ciudadano varón de cualquier raza (puede votar)" }
    ]
  },
  {
    question: "64. Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    question_es: "64. ¿Quién puede votar en elecciones federales, postularse a un cargo federal y servir en un jurado en EE.UU.?",
    answers: [
      { answer: "Citizens", answer_es: "Ciudadanos" },
      { answer: "Citizens of the United States", answer_es: "Ciudadanos de Estados Unidos" },
      { answer: "U.S. citizens", answer_es: "Ciudadanos estadounidenses" }
    ]
  },
  {
    question: "65. What are three rights of everyone living in the United States?",
    question_es: "65. ¿Cuáles son tres derechos de todos los que viven en Estados Unidos?",
    answers: [
      { answer: "Freedom of expression", answer_es: "Libertad de expresión" },
      { answer: "Freedom of speech", answer_es: "Libertad de palabra" },
      { answer: "Freedom of assembly", answer_es: "Libertad de reunión" },
      { answer: "Freedom to petition the government", answer_es: "Libertad de petición al gobierno" },
      { answer: "Freedom of religion", answer_es: "Libertad de religión" },
      { answer: "The right to bear arms", answer_es: "El derecho a portar armas" }
    ]
  },
  {
    question: "66. What do we show loyalty to when we say the Pledge of Allegiance?",
    question_es: "66. ¿A qué mostramos lealtad cuando decimos el Juramento a la Bandera?",
    answers: [
      { answer: "The United States", answer_es: "A Estados Unidos" },
      { answer: "The flag", answer_es: "A la bandera" }
    ]
  },
  {
    question: "67. Name two promises that new citizens make in the Oath of Allegiance.",
    question_es: "67. Nombre dos promesas que hacen los nuevos ciudadanos en el Juramento de Lealtad.",
    answers: [
      { answer: "Give up loyalty to other countries", answer_es: "Renunciar a la lealtad a otros países" },
      { answer: "Defend the (U.S.) Constitution", answer_es: "Defender la Constitución (de EE.UU.)" },
      { answer: "Obey the laws of the United States", answer_es: "Obedecer las leyes de Estados Unidos" },
      { answer: "Serve in the military (if needed)", answer_es: "Servir en el ejército (si es necesario)" },
      { answer: "Serve (help, do important work for) the nation (if needed)", answer_es: "Servir (ayudar, realizar trabajo importante para) la nación (si es necesario)" },
      { answer: "Be loyal to the United States", answer_es: "Ser leal a Estados Unidos" }
    ]
  },
  {
    question: "68. How can people become United States citizens?",
    question_es: "68. ¿Cómo pueden las personas convertirse en ciudadanos de Estados Unidos?",
    answers: [
      { answer: "Be born in the United States, under the conditions set by the 14th Amendment", answer_es: "Nacer en Estados Unidos, según las condiciones de la 14ª Enmienda" },
      { answer: "Naturalize", answer_es: "Naturalizarse" },
      { answer: "Derive citizenship (under conditions set by Congress)", answer_es: "Obtener la ciudadanía (según las condiciones establecidas por el Congreso)" }
    ]
  },
  {
    question: "69. What are two examples of civic participation in the United States?",
    question_es: "69. ¿Cuáles son dos ejemplos de participación cívica en Estados Unidos?",
    answers: [
      { answer: "Vote", answer_es: "Votar" },
      { answer: "Run for office", answer_es: "Postularse a un cargo" },
      { answer: "Join a political party", answer_es: "Unirse a un partido político" },
      { answer: "Help with a campaign", answer_es: "Ayudar en una campaña" },
      { answer: "Join a civic group", answer_es: "Unirse a un grupo cívico" },
      { answer: "Join a community group", answer_es: "Unirse a un grupo comunitario" },
      { answer: "Give an elected official your opinion (on an issue)", answer_es: "Dar su opinión a un funcionario electo (sobre un tema)" },
      { answer: "Contact elected officials", answer_es: "Contactar a funcionarios electos" },
      { answer: "Support or oppose an issue or policy", answer_es: "Apoyar u oponerse a un tema o política" },
      { answer: "Write to a newspaper", answer_es: "Escribir a un periódico" }
    ]
  },
  {
    question: "70. What is one way Americans can serve their country?",
    question_es: "70. ¿Cuál es una manera en que los estadounidenses pueden servir a su país?",
    answers: [
      { answer: "Vote", answer_es: "Votar" },
      { answer: "Pay taxes", answer_es: "Pagar impuestos" },
      { answer: "Obey the law", answer_es: "Obedecer la ley" },
      { answer: "Serve in the military", answer_es: "Servir en el ejército" },
      { answer: "Run for office", answer_es: "Postularse a un cargo" },
      { answer: "Work for local, state, or federal government", answer_es: "Trabajar para el gobierno local, estatal o federal" }
    ]
  },
  {
    question: "71. Why is it important to pay federal taxes?",
    question_es: "71. ¿Por qué es importante pagar impuestos federales?",
    answers: [
      { answer: "Required by law", answer_es: "Exigido por la ley" },
      { answer: "All people pay to fund the federal government", answer_es: "Todas las personas pagan para financiar el gobierno federal" },
      { answer: "Required by the (U.S.) Constitution (16th Amendment)", answer_es: "Exigido por la Constitución (de EE.UU.) (16ª Enmienda)" },
      { answer: "Civic duty", answer_es: "Deber cívico" }
    ]
  },
  {
    question: "72. It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    question_es: "72. Es importante que todos los hombres de 18 a 25 años se registren en el Servicio Selectivo. Nombre una razón.",
    answers: [
      { answer: "Required by law", answer_es: "Exigido por la ley" },
      { answer: "Civic duty", answer_es: "Deber cívico" },
      { answer: "Makes the draft fair, if needed", answer_es: "Hace que el reclutamiento sea justo, si es necesario" }
    ]
  },
  {
    question: "73. The colonists came to America for many reasons. Name one.",
    question_es: "73. Los colonos vinieron a América por muchas razones. Nombre una.",
    answers: [
      { answer: "Freedom", answer_es: "Libertad" },
      { answer: "Political liberty", answer_es: "Libertad política" },
      { answer: "Religious freedom", answer_es: "Libertad religiosa" },
      { answer: "Economic opportunity", answer_es: "Oportunidad económica" },
      { answer: "Escape persecution", answer_es: "Escapar de la persecución" }
    ]
  },
  {
    question: "74. Who lived in America before the Europeans arrived?",
    question_es: "74. ¿Quién vivía en América antes de que llegaran los europeos?",
    answers: [
      { answer: "American Indians", answer_es: "Indígenas americanos" },
      { answer: "Native Americans", answer_es: "Nativos americanos" }
    ]
  },
  {
    question: "75. What group of people was taken and sold as slaves?",
    question_es: "75. ¿Qué grupo de personas fue llevado y vendido como esclavos?",
    answers: [
      { answer: "Africans", answer_es: "Africanos" },
      { answer: "People from Africa", answer_es: "Personas de África" }
    ]
  },
  {
    question: "76. What war did the Americans fight to win independence from Britain?",
    question_es: "76. ¿Qué guerra pelearon los estadounidenses para ganar la independencia de Gran Bretaña?",
    answers: [
      { answer: "American Revolution", answer_es: "Revolución americana" },
      { answer: "The (American) Revolutionary War", answer_es: "La Guerra Revolucionaria (americana)" },
      { answer: "War for (American) Independence", answer_es: "Guerra por la Independencia (americana)" }
    ]
  },
  {
    question: "77. Name one reason why the Americans declared independence from Britain.",
    question_es: "77. Nombre una razón por la cual los estadounidenses declararon la independencia de Gran Bretaña.",
    answers: [
      { answer: "High taxes", answer_es: "Altos impuestos" },
      { answer: "Taxation without representation", answer_es: "Impuestos sin representación" },
      { answer: "British soldiers stayed in Americans’ houses (boarding, quartering)", answer_es: "Los soldados británicos se quedaron en las casas de los estadounidenses (alojamiento, acuartelamiento)" },
      { answer: "They did not have self-government", answer_es: "No tenían autogobierno" },
      { answer: "Boston Massacre", answer_es: "Masacre de Boston" },
      { answer: "Boston Tea Party (Tea Act)", answer_es: "Motín del té de Boston (Ley del té)" },
      { answer: "Stamp Act", answer_es: "Ley del Timbre" },
      { answer: "Sugar Act", answer_es: "Ley del Azúcar" },
      { answer: "Townshend Acts", answer_es: "Leyes Townshend" },
      { answer: "Intolerable (Coercive) Acts", answer_es: "Leyes Intolerables (Coercitivas)" }
    ]
  },
  {
    question: "78. Who wrote the Declaration of Independence?",
    question_es: "78. ¿Quién escribió la Declaración de Independencia?",
    answers: [
      { answer: "(Thomas) Jefferson", answer_es: "(Thomas) Jefferson" }
    ]
  },
  {
    question: "79. When was the Declaration of Independence adopted?",
    question_es: "79. ¿Cuándo se adoptó la Declaración de Independencia?",
    answers: [
      { answer: "July 4, 1776", answer_es: "4 de julio de 1776" }
    ]
  },
  {
    question: "80. The American Revolution had many important events. Name one.",
    question_es: "80. La Revolución Americana tuvo muchos eventos importantes. Nombre uno.",
    answers: [
      { answer: "(Battle of) Bunker Hill", answer_es: "(Batalla de) Bunker Hill" },
      { answer: "Declaration of Independence", answer_es: "Declaración de Independencia" },
      { answer: "Washington Crossing the Delaware (Battle of Trenton)", answer_es: "Washington cruzando el Delaware (Batalla de Trenton)" },
      { answer: "(Battle of) Saratoga", answer_es: "(Batalla de) Saratoga" },
      { answer: "Valley Forge (Encampment)", answer_es: "Valle Forge (Campamento)" },
      { answer: "(Battle of) Yorktown (British surrender at Yorktown)", answer_es: "(Batalla de) Yorktown (Rendición británica en Yorktown)" }
    ]
  },
   {
    question: "81. There were 13 original states. Name five.",
    question_es: "81. Había 13 estados originales. Nombre cinco.",
    answers: [
      { answer: "New Hampshire", answer_es: "New Hampshire" },
      { answer: "Massachusetts", answer_es: "Massachusetts" },
      { answer: "Rhode Island", answer_es: "Rhode Island" },
      { answer: "Connecticut", answer_es: "Connecticut" },
      { answer: "New York", answer_es: "New York" },
      { answer: "New Jersey", answer_es: "New Jersey" },
      { answer: "Pennsylvania", answer_es: "Pennsylvania" },
      { answer: "Delaware", answer_es: "Delaware" },
      { answer: "Maryland", answer_es: "Maryland" },
      { answer: "Virginia", answer_es: "Virginia" },
      { answer: "North Carolina", answer_es: "North Carolina" },
      { answer: "South Carolina", answer_es: "South Carolina" },
      { answer: "Georgia", answer_es: "Georgia" }
    ]
  },
  {
    question: "82. What founding document was written in 1787?",
    question_es: "82. ¿Qué documento fundador fue escrito en 1787?",
    answers: [
      { answer: "(U.S.) Constitution", answer_es: "Constitución (de EE.UU.)" }
    ]
  },
  {
    question: "83. The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    question_es: "83. Los Federalist Papers apoyaron la aprobación de la Constitución de EE.UU. Nombre uno de los escritores.",
    answers: [
      { answer: "(James) Madison", answer_es: "(James) Madison" },
      { answer: "(Alexander) Hamilton", answer_es: "(Alexander) Hamilton" },
      { answer: "(John) Jay", answer_es: "(John) Jay" },
      { answer: "Publius", answer_es: "Publius" }
    ]
  },
  {
    question: "84. Why were the Federalist Papers important?",
    question_es: "84. ¿Por qué fueron importantes los Federalist Papers?",
    answers: [
      { answer: "They helped people understand the (U.S.) Constitution", answer_es: "Ayudaron a la gente a entender la Constitución (de EE.UU.)" },
      { answer: "They supported passing the (U.S.) Constitution", answer_es: "Apoyaron la aprobación de la Constitución (de EE.UU.)" }
    ]
  },
  {
    question: "85. Benjamin Franklin is famous for many things. Name one.",
    question_es: "85. Benjamin Franklin es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "Founded the first free public libraries", answer_es: "Fundó las primeras bibliotecas públicas gratuitas" },
      { answer: "First Postmaster General of the United States", answer_es: "Primer Director General de Correos de EE.UU." },
      { answer: "Helped write the Declaration of Independence", answer_es: "Ayudó a redactar la Declaración de Independencia" },
      { answer: "Inventor", answer_es: "Inventor" },
      { answer: "U.S. diplomat", answer_es: "Diplomático estadounidense" }
    ]
  },
  {
    question: "86. George Washington is famous for many things. Name one.",
    question_es: "86. George Washington es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "“Father of Our Country”", answer_es: "“Padre de Nuestra Nación”" },
      { answer: "First president of the United States", answer_es: "Primer presidente de Estados Unidos" },
      { answer: "General of the Continental Army", answer_es: "General del Ejército Continental" },
      { answer: "President of the Constitutional Convention", answer_es: "Presidente de la Convención Constitucional" }
    ]
  },
  {
    question: "87. Thomas Jefferson is famous for many things. Name one.",
    question_es: "87. Thomas Jefferson es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "Writer of the Declaration of Independence", answer_es: "Redactor de la Declaración de Independencia" },
      { answer: "Third president of the United States", answer_es: "Tercer presidente de Estados Unidos" },
      { answer: "Doubled the size of the United States (Louisiana Purchase)", answer_es: "Duplicó el tamaño de Estados Unidos (Compra de Luisiana)" },
      { answer: "First Secretary of State", answer_es: "Primer Secretario de Estado" },
      { answer: "Founded the University of Virginia", answer_es: "Fundó la Universidad de Virginia" },
      { answer: "Writer of the Virginia Statute on Religious Freedom", answer_es: "Redactor del Estatuto de Virginia sobre la Libertad Religiosa" }
    ]
  },
  {
    question: "88. James Madison is famous for many things. Name one.",
    question_es: "88. James Madison es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "“Father of the Constitution”", answer_es: "“Padre de la Constitución”" },
      { answer: "Fourth president of the United States", answer_es: "Cuarto presidente de Estados Unidos" },
      { answer: "President during the War of 1812", answer_es: "Presidente durante la Guerra de 1812" },
      { answer: "One of the writers of the Federalist Papers", answer_es: "Uno de los escritores de los Federalist Papers" }
    ]
  },
  {
    question: "89. Alexander Hamilton is famous for many things. Name one.",
    question_es: "89. Alexander Hamilton es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "First Secretary of the Treasury", answer_es: "Primer Secretario del Tesoro" },
      { answer: "One of the writers of the Federalist Papers", answer_es: "Uno de los escritores de los Federalist Papers" },
      { answer: "Helped establish the First Bank of the United States", answer_es: "Ayudó a establecer el Primer Banco de Estados Unidos" },
      { answer: "Aide to General George Washington", answer_es: "Ayudante del General George Washington" },
      { answer: "Member of the Continental Congress", answer_es: "Miembro del Congreso Continental" }
    ]
  },
  {
    question: "90. What territory did the United States buy from France in 1803?",
    question_es: "90. ¿Qué territorio compró Estados Unidos a Francia en 1803?",
    answers: [
      { answer: "Louisiana Territory", answer_es: "Territorio de Luisiana" },
      { answer: "Louisiana", answer_es: "Luisiana" }
    ]
  },
  {
    question: "91. Name one war fought by the United States in the 1800s.",
    question_es: "91. Nombre una guerra que Estados Unidos luchó en el siglo XIX.",
    answers: [
      { answer: "War of 1812", answer_es: "Guerra de 1812" },
      { answer: "Mexican-American War", answer_es: "Guerra Mexicano-Americana" },
      { answer: "Civil War", answer_es: "Guerra Civil" },
      { answer: "Spanish-American War", answer_es: "Guerra Hispanoamericana" }
    ]
  },
  {
    question: "92. Name the U.S. war between the North and the South.",
    question_es: "92. Nombre la guerra de EE.UU. entre el Norte y el Sur.",
    answers: [
      { answer: "The Civil War", answer_es: "La Guerra Civil" }
    ]
  },
  {
    question: "93. The Civil War had many important events. Name one.",
    question_es: "93. La Guerra Civil tuvo muchos eventos importantes. Nombre uno.",
    answers: [
      { answer: "(Battle of) Fort Sumter", answer_es: "(Batalla de) Fort Sumter" },
      { answer: "Emancipation Proclamation", answer_es: "Proclamación de Emancipación" },
      { answer: "(Battle of) Vicksburg", answer_es: "(Batalla de) Vicksburg" },
      { answer: "(Battle of) Gettysburg", answer_es: "(Batalla de) Gettysburg" },
      { answer: "Sherman’s March", answer_es: "Marcha de Sherman" },
      { answer: "(Surrender at) Appomattox", answer_es: "(Rendición en) Appomattox" },
      { answer: "(Battle of) Antietam/Sharpsburg", answer_es: "(Batalla de) Antietam/Sharpsburg" },
      { answer: "Lincoln was assassinated", answer_es: "Lincoln fue asesinado" }
    ]
  },
  {
    question: "94. Abraham Lincoln is famous for many things. Name one.",
    question_es: "94. Abraham Lincoln es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "Freed the slaves (Emancipation Proclamation)", answer_es: "Liberó a los esclavos (Proclamación de Emancipación)" },
      { answer: "Saved (or preserved) the Union", answer_es: "Salvó (o preservó) la Unión" },
      { answer: "Led the United States during the Civil War", answer_es: "Dirigió Estados Unidos durante la Guerra Civil" },
      { answer: "16th president of the United States", answer_es: "16º presidente de Estados Unidos" },
      { answer: "Delivered the Gettysburg Address", answer_es: "Pronunció el Discurso de Gettysburg" }
    ]
  },
  {
    question: "95. What did the Emancipation Proclamation do?",
    question_es: "95. ¿Qué hizo la Proclamación de Emancipación?",
    answers: [
      { answer: "Freed the slaves", answer_es: "Liberó a los esclavos" },
      { answer: "Freed slaves in the Confederacy", answer_es: "Liberó a los esclavos en la Confederación" },
      { answer: "Freed slaves in the Confederate states", answer_es: "Liberó a los esclavos en los estados confederados" },
      { answer: "Freed slaves in most Southern states", answer_es: "Liberó a los esclavos en la mayoría de los estados del sur" }
    ]
  },
  {
    question: "96. What U.S. war ended slavery?",
    question_es: "96. ¿Qué guerra de EE.UU. terminó con la esclavitud?",
    answers: [
      { answer: "The Civil War", answer_es: "La Guerra Civil" }
    ]
  },
  {
    question: "97. What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
    question_es: "97. ¿Qué enmienda dice que todas las personas nacidas o naturalizadas en Estados Unidos, y sujetas a su jurisdicción, son ciudadanos estadounidenses?",
    answers: [
      { answer: "14th Amendment", answer_es: "14ª Enmienda" }
    ]
  },
  {
    question: "98. When did all men get the right to vote?",
    question_es: "98. ¿Cuándo obtuvieron todos los hombres el derecho a votar?",
    answers: [
      { answer: "After the Civil War", answer_es: "Después de la Guerra Civil" },
      { answer: "During Reconstruction", answer_es: "Durante la Reconstrucción" },
      { answer: "With the 15th Amendment", answer_es: "Con la 15ª Enmienda" },
      { answer: "1870", answer_es: "1870" }
    ]
  },
  {
    question: "99. Name one leader of the women’s rights movement in the 1800s.",
    question_es: "99. Nombre un líder del movimiento por los derechos de las mujeres en el siglo XIX.",
    answers: [
      { answer: "Susan B. Anthony", answer_es: "Susan B. Anthony" },
      { answer: "Elizabeth Cady Stanton", answer_es: "Elizabeth Cady Stanton" },
      { answer: "Sojourner Truth", answer_es: "Sojourner Truth" },
      { answer: "Harriet Tubman", answer_es: "Harriet Tubman" },
      { answer: "Lucretia Mott", answer_es: "Lucretia Mott" },
      { answer: "Lucy Stone", answer_es: "Lucy Stone" }
    ]
  },
  {
    question: "100. Name one war fought by the United States in the 1900s.",
    question_es: "100. Nombre una guerra que Estados Unidos luchó en el siglo XX.",
    answers: [
      { answer: "World War I", answer_es: "Primera Guerra Mundial" },
      { answer: "World War II", answer_es: "Segunda Guerra Mundial" },
      { answer: "Korean War", answer_es: "Guerra de Corea" },
      { answer: "Vietnam War", answer_es: "Guerra de Vietnam" },
      { answer: "(Persian) Gulf War", answer_es: "Guerra del Golfo (Pérsico)" }
    ]
  },
  {
    question: "101. Why did the United States enter World War I?",
    question_es: "101. ¿Por qué Estados Unidos entró en la Primera Guerra Mundial?",
    answers: [
      { answer: "Because Germany attacked U.S. (civilian) ships", answer_es: "Porque Alemania atacó barcos (civiles) de EE.UU." },
      { answer: "To support the Allied Powers (England, France, Italy, and Russia)", answer_es: "Para apoyar a los Aliados (Inglaterra, Francia, Italia y Rusia)" },
      { answer: "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)", answer_es: "Para oponerse a las Potencias Centrales (Alemania, Austria-Hungría, el Imperio Otomano y Bulgaria)" }
    ]
  },
  {
    question: "102. When did all women get the right to vote?",
    question_es: "102. ¿Cuándo obtuvieron todas las mujeres el derecho a votar?",
    answers: [
      { answer: "1920", answer_es: "1920" },
      { answer: "After World War I", answer_es: "Después de la Primera Guerra Mundial" },
      { answer: "With the 19th Amendment", answer_es: "Con la 19ª Enmienda" }
    ]
  },
  {
    question: "103. What was the Great Depression?",
    question_es: "103. ¿Qué fue la Gran Depresión?",
    answers: [
      { answer: "Longest economic recession in modern history", answer_es: "La recesión económica más larga de la historia moderna" }
    ]
  },
  {
    question: "104. When did the Great Depression start?",
    question_es: "104. ¿Cuándo comenzó la Gran Depresión?",
    answers: [
      { answer: "The Great Crash (1929)", answer_es: "El Gran Colapso (1929)" },
      { answer: "Stock market crash of 1929", answer_es: "Colapso del mercado de valores de 1929" }
    ]
  },
  {
    question: "105. Who was president during the Great Depression and World War II?",
    question_es: "105. ¿Quién fue presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
    answers: [
      { answer: "(Franklin) Roosevelt", answer_es: "(Franklin) Roosevelt" }
    ]
  },
  {
    question: "106. Why did the United States enter World War II?",
    question_es: "106. ¿Por qué Estados Unidos entró en la Segunda Guerra Mundial?",
    answers: [
      { answer: "(Bombing of) Pearl Harbor", answer_es: "(Bombardeo de) Pearl Harbor" },
      { answer: "Japanese attacked Pearl Harbor", answer_es: "Japoneses atacaron Pearl Harbor" },
      { answer: "To support the Allied Powers (England, France, and Russia)", answer_es: "Para apoyar a los Aliados (Inglaterra, Francia y Rusia)" },
      { answer: "To oppose the Axis Powers (Germany, Italy, and Japan)", answer_es: "Para oponerse a las Potencias del Eje (Alemania, Italia y Japón)" }
    ]
  },
  {
    question: "107. Dwight Eisenhower is famous for many things. Name one.",
    question_es: "107. Dwight Eisenhower es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "General during World War II", answer_es: "General durante la Segunda Guerra Mundial" },
      { answer: "President at the end of (during) the Korean War", answer_es: "Presidente al final de (durante) la Guerra de Corea" },
      { answer: "34th president of the United States", answer_es: "34º presidente de Estados Unidos" },
      { answer: "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)", answer_es: "Firmó la Ley de Autopistas de Ayuda Federal de 1956 (Creó el Sistema Interestatal)" }
    ]
  },
  {
    question: "108. Who was the United States’ main rival during the Cold War?",
    question_es: "108. ¿Quién fue el principal rival de Estados Unidos durante la Guerra Fría?",
    answers: [
      { answer: "Soviet Union", answer_es: "Unión Soviética" },
      { answer: "USSR", answer_es: "URSS" },
      { answer: "Russia", answer_es: "Rusia" }
    ]
  },
  {
    question: "109. During the Cold War, what was one main concern of the United States?",
    question_es: "109. Durante la Guerra Fría, ¿cuál era una preocupación principal de Estados Unidos?",
    answers: [
      { answer: "Communism", answer_es: "Comunismo" },
      { answer: "Nuclear war", answer_es: "Guerra nuclear" }
    ]
  },
  {
    question: "110. Why did the United States enter the Korean War?",
    question_es: "110. ¿Por qué Estados Unidos entró en la Guerra de Corea?",
    answers: [
      { answer: "To stop the spread of communism", answer_es: "Para detener la expansión del comunismo" }
    ]
  },
  {
    question: "111. Why did the United States enter the Vietnam War?",
    question_es: "111. ¿Por qué Estados Unidos entró en la Guerra de Vietnam?",
    answers: [
      { answer: "To stop the spread of communism", answer_es: "Para detener la expansión del comunismo" }
    ]
  },
  {
    question: "112. What did the civil rights movement do?",
    question_es: "112. ¿Qué hizo el movimiento de derechos civiles?",
    answers: [
      { answer: "Fought to end racial discrimination", answer_es: "Luchó para acabar con la discriminación racial" }
    ]
  },
  {
    question: "113. Martin Luther King, Jr. is famous for many things. Name one.",
    question_es: "113. Martin Luther King, Jr. es famoso por muchas cosas. Nombre una.",
    answers: [
      { answer: "Fought for civil rights", answer_es: "Luchó por los derechos civiles" },
      { answer: "Worked for equality for all Americans", answer_es: "Trabajó por la igualdad de todos los estadounidenses" },
      { answer: "Worked to ensure that people would “not be judged by the color of their skin, but by the content of their character”", answer_es: "Trabajó para asegurar que las personas 'no sean juzgadas por el color de su piel, sino por el contenido de su carácter'" }
    ]
  },
  {
    question: "114. Why did the United States enter the Persian Gulf War?",
    question_es: "114. ¿Por qué Estados Unidos entró en la Guerra del Golfo Pérsico?",
    answers: [
      { answer: "To force the Iraqi military from Kuwait", answer_es: "Para expulsar al ejército iraquí de Kuwait" }
    ]
  },
  {
    question: "115. What major event happened on September 11, 2001 in the United States?",
    question_es: "115. ¿Qué evento importante ocurrió el 11 de septiembre de 2001 en Estados Unidos?",
    answers: [
      { answer: "Terrorists attacked the United States", answer_es: "Terroristas atacaron Estados Unidos" },
      { answer: "Terrorists took over two planes and crashed them into the World Trade Center in New York City", answer_es: "Terroristas tomaron dos aviones y los estrellaron contra el World Trade Center en Nueva York" },
      { answer: "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia", answer_es: "Terroristas tomaron un avión y lo estrellaron contra el Pentágono en Arlington, Virginia" },
      { answer: "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania", answer_es: "Terroristas tomaron un avión originalmente dirigido a Washington D.C., y lo estrellaron en un campo en Pennsylvania" }
    ]
  },
  {
    question: "116. Name one U.S. military conflict after the September 11, 2001 attacks.",
    question_es: "116. Nombre un conflicto militar de EE.UU. después de los ataques del 11 de septiembre de 2001.",
    answers: [
      { answer: "(Global) War on Terror", answer_es: "Guerra (global) contra el terrorismo" },
      { answer: "War in Afghanistan", answer_es: "Guerra en Afganistán" },
      { answer: "War in Iraq", answer_es: "Guerra en Irak" }
    ]
  },
  {
    question: "117. Name one American Indian tribe in the United States.",
    question_es: "117. Nombre una tribu indígena estadounidense en Estados Unidos.",
    answers: [
      { answer: "Apache", answer_es: "Apache" },
      { answer: "Blackfeet", answer_es: "Blackfeet" },
      { answer: "Cayuga", answer_es: "Cayuga" },
      { answer: "Cherokee", answer_es: "Cherokee" },
      { answer: "Cheyenne", answer_es: "Cheyenne" },
      { answer: "Chippewa", answer_es: "Chippewa" },
      { answer: "Choctaw", answer_es: "Choctaw" },
      { answer: "Creek", answer_es: "Creek" },
      { answer: "Crow", answer_es: "Crow" },
      { answer: "Hopi", answer_es: "Hopi" },
      { answer: "Huron", answer_es: "Huron" },
      { answer: "Inupiat", answer_es: "Inupiat" },
      { answer: "Lakota", answer_es: "Lakota" },
      { answer: "Mohawk", answer_es: "Mohawk" },
      { answer: "Mohegan", answer_es: "Mohegan" },
      { answer: "Navajo", answer_es: "Navajo" },
      { answer: "Oneida", answer_es: "Oneida" },
      { answer: "Onondaga", answer_es: "Onondaga" },
      { answer: "Pueblo", answer_es: "Pueblo" },
      { answer: "Seminole", answer_es: "Seminole" },
      { answer: "Seneca", answer_es: "Seneca" },
      { answer: "Shawnee", answer_es: "Shawnee" },
      { answer: "Sioux", answer_es: "Sioux" },
      { answer: "Teton", answer_es: "Teton" },
      { answer: "Tuscarora", answer_es: "Tuscarora" }
    ]
  },
  {
    question: "118. Name one example of an American innovation.",
    question_es: "118. Nombre un ejemplo de innovación estadounidense.",
    answers: [
      { answer: "Light bulb", answer_es: "Bombilla" },
      { answer: "Automobile (cars, internal combustion engine)", answer_es: "Automóvil (coches, motor de combustión interna)" },
      { answer: "Skyscrapers", answer_es: "Rascacielos" },
      { answer: "Airplane", answer_es: "Avión" },
      { answer: "Assembly line", answer_es: "Línea de ensamblaje" },
      { answer: "Landing on the moon", answer_es: "Aterrizaje en la luna" },
      { answer: "Integrated circuit (IC)", answer_es: "Circuito integrado (CI)" }
    ]
  },
  {
    question: "119. What is the capital of the United States?",
    question_es: "119. ¿Cuál es la capital de Estados Unidos?",
    answers: [
      { answer: "Washington, D.C.", answer_es: "Washington, D.C." }
    ]
  },
  {
    question: "120. Where is the Statue of Liberty?",
    question_es: "120. ¿Dónde está la Estatua de la Libertad?",
    answers: [
      { answer: "New York (Harbor)", answer_es: "Nueva York (Puerto)" },
      { answer: "Liberty Island", answer_es: "Isla de la Libertad" },
      { answer: "Also acceptable: New Jersey, near New York City, and on the Hudson (River)", answer_es: "También aceptable: Nueva Jersey, cerca de Nueva York, y en el río Hudson" }
    ]
  },
  {
    question: "121. Why does the flag have 13 stripes?",
    question_es: "121. ¿Por qué la bandera tiene 13 franjas?",
    answers: [
      { answer: "Because there were 13 original colonies", answer_es: "Porque había 13 colonias originales" },
      { answer: "Because the stripes represent the original colonies", answer_es: "Porque las franjas representan las colonias originales" }
    ]
  },
  {
    question: "122. Why does the flag have 50 stars?",
    question_es: "122. ¿Por qué la bandera tiene 50 estrellas?",
    answers: [
      { answer: "Because there is one star for each state", answer_es: "Porque hay una estrella por cada estado" },
      { answer: "Because each star represents a state", answer_es: "Porque cada estrella representa un estado" },
      { answer: "Because there are 50 states", answer_es: "Porque hay 50 estados" }
    ]
  },
  {
    question: "123. What is the name of the national anthem?",
    question_es: "123. ¿Cuál es el nombre del himno nacional?",
    answers: [
      { answer: "The Star-Spangled Banner", answer_es: "The Star-Spangled Banner" }
    ]
  },
  {
    question: "124. The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
    question_es: "124. El primer lema de la nación fue “E Pluribus Unum.” ¿Qué significa eso?",
    answers: [
      { answer: "Out of many, one", answer_es: "De muchos, uno" },
      { answer: "We all become one", answer_es: "Todos nos convertimos en uno" }
    ]
  },
  {
    question: "125. What is Independence Day?",
    question_es: "125. ¿Qué es el Día de la Independencia?",
    answers: [
      { answer: "A holiday to celebrate U.S. independence (from Britain)", answer_es: "Un feriado para celebrar la independencia de EE.UU. (de Gran Bretaña)" },
      { answer: "The country’s birthday", answer_es: "El cumpleaños del país" }
    ]
  },
  {
    question: "126. Name three national U.S. holidays.",
    question_es: "126. Nombre tres días festivos nacionales de EE.UU.",
    answers: [
      { answer: "New Year’s Day", answer_es: "Año Nuevo" },
      { answer: "Martin Luther King, Jr. Day", answer_es: "Día de Martin Luther King, Jr." },
      { answer: "Presidents Day (Washington’s Birthday)", answer_es: "Día de los Presidentes (Cumpleaños de Washington)" },
      { answer: "Memorial Day", answer_es: "Día de los Caídos" },
      { answer: "Juneteenth", answer_es: "Juneteenth" },
      { answer: "Independence Day", answer_es: "Día de la Independencia" },
      { answer: "Labor Day", answer_es: "Día del Trabajo" },
      { answer: "Columbus Day", answer_es: "Día de Colón" },
      { answer: "Veterans Day", answer_es: "Día de los Veteranos" },
      { answer: "Thanksgiving Day", answer_es: "Día de Acción de Gracias" },
      { answer: "Christmas Day", answer_es: "Navidad" }
    ]
  },
  {
    question: "127. What is Memorial Day?",
    question_es: "127. ¿Qué es el Día de los Caídos?",
    answers: [
      { answer: "A holiday to honor soldiers who died in military service", answer_es: "Un feriado para honrar a los soldados que murieron en servicio militar" }
    ]
  },
  {
    question: "128. What is Veterans Day?",
    question_es: "128. ¿Qué es el Día de los Veteranos?",
    answers: [
      { answer: "A holiday to honor people in the (U.S.) military", answer_es: "Un feriado para honrar a las personas en el ejército (de EE.UU.)" },
      { answer: "A holiday to honor people who have served (in the U.S. military)", answer_es: "Un feriado para honrar a las personas que han servido (en el ejército de EE.UU.)" }
    ]
  }
];


