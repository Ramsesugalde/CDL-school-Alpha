// Alpha Driving Academy — standalone production site logic.
// No build step, no external runtime dependency: plain DOM + one dictionary object.
(function () {
  'use strict';

  var PHONE_MAIN = '+16823588132';
  var PHONE_MAIN_DISPLAY = '(682) 358-8132';
  var WA_MAIN = '16823588132';

  var dict = {
    en: {
      tagline: 'Your Trucking Authority from Day One',
      heroEyebrow: 'PANTEGO · GRAND PRAIRIE, TEXAS',
      heroTitle: 'WE TRAIN YOU TO BECOME A PRO TRUCKER!',
      heroSub: 'Class A, B & C training — classroom, range & road, all in one place. Most students are road-ready in about a month.',
      ctaReserve: 'Reserve Your Spot', ctaCall: 'Call (682) 358-8132', ctaCallShort: 'Call Us', tuition: 'tuition',
      programsHdr: 'OUR PROGRAMS',
      fundEyebrow: "DON'T PAY OUT OF POCKET", fundTitle: 'YOUR TRAINING CAN BE PAID FOR',
      fundSub: 'Most of our students qualify for programs that cover part or all of their tuition. We handle the paperwork with you.',
      fundCta: 'Check if I qualify',
      reviewsHdr: 'STUDENT REVIEWS', reviewsSub: 'Trusted by North Texas drivers for over 4 years',
      chatTeaserTitle: 'Ask Alpha — instant answers', chatTeaserSub: 'Prices, requirements, schedules… ask anything, in English or Spanish.',
      progEyebrow: 'CHOOSE YOUR LICENSE', progTitle: 'PROGRAMS & PRICING',
      progSub: 'Every program: 20 hours in the classroom + 20 hours behind the wheel. About 1 month — up to 2 at your own pace. Flexible day, evening & weekend hours.',
      recommended: 'MOST POPULAR', depositLbl: 'DEPOSIT', durVal: '~1 MO', durLbl: 'DURATION', hoursLbl: 'CLASS+WHEEL',
      planNote: 'Payment plans available · WIOA, VA & employer funding accepted', selectCta: 'Select',
      progFoot: 'Deposits are paid in person at the school and count toward tuition. Training can extend up to 2 months depending on the student — we never rush you.',
      schedEyebrow: 'FLEXIBLE HOURS', schedTitle: 'UPCOMING START DATES',
      schedSub: 'New groups start every month. Day, evening and weekend schedules — reserve your seat before it fills.',
      reserveShort: 'Reserve', schedFoot: "Seats are confirmed with your deposit at the school. Can't make these dates? Call us — we'll work around your schedule.",
      helpEyebrow: 'WE GOT YOU', helpTitle: 'QUESTIONS & ANSWERS', faqHdr: 'MOST ASKED', stillQ: 'Still have questions? Call us',
      enrollTitle: 'RESERVE YOUR SPOT', steps: ['YOUR INFO', 'CLASS & SCHEDULE', 'REVIEW & RESERVE'], stepOf: 'STEP',
      fName: 'FULL NAME', phName: 'e.g. John Ramirez', fPhone: 'PHONE', fEmail: 'EMAIL (OPTIONAL)', fLang: 'PREFERRED LANGUAGE',
      fClass: 'CHOOSE YOUR CLASS', fStart: 'PREFERRED START DATE', fHours: 'PREFERRED HOURS', fTxdl: 'DO YOU HAVE A TEXAS DRIVER LICENSE?', fHeard: 'HOW DID YOU HEAR ABOUT US?',
      reviewHdr: 'YOUR RESERVATION', depositHdr: 'DEPOSIT DUE IN PERSON',
      depositNote: 'Pay at the school to lock in your seat — cash or card. Your deposit counts toward tuition.',
      legalNote: 'No payment is collected in the app. Submitting this form reserves your place in line; an advisor will call you within 1 business day.',
      confTitle: "YOU'RE ON THE LIST!", confRef: 'RESERVATION', confNextHdr: 'WHAT HAPPENS NEXT', confHome: 'Back to home',
      loginTitle: 'STUDENT LOGIN', loginHdr: 'WELCOME BACK', loginSub: "Enter the phone number you enrolled with and we'll text you a sign-in code.",
      loginCta: 'Text me a code', loginFoot: 'Not enrolled yet? Reserve your spot from the home screen.',
      loginMsg: "Texting sign-in codes isn't live yet — call or WhatsApp us and we'll pull up your file.",
      chatTitle: 'Ask Alpha', chatOnline: 'Online now', chatPlaceholder: 'Type your question…',
      visitHdr: 'COME SEE US',
      visitSub: 'Walk in any day — see the trucks, meet the instructors, and reserve your seat on the spot. Minutes from Arlington, Grand Prairie & Fort Worth.',
      hoursHdr: 'HOURS', hoursVal: 'Mon–Sat · 9:00 AM – 7:00 PM', dirCta: 'Directions',
      applyChip: 'LIMITED SPOTS', applyTitle: 'YOUR NEW CAREER IS ONE MONTH AWAY',
      applySub: "Trucking pays. In about 4 weeks you can be licensed, road-ready and earning — and your tuition may cost you nothing out of pocket. Don't wait for the next group to fill.",
      applyFoot: 'PERSONALIZED ATTENTION',
      googleSub: 'Alpha Driving Academy · Pantego, TX', googleRead: 'Read our reviews', googleLeave: 'Leave a review',
      socialHdr: 'FOLLOW THE SCHOOL', shareCta: 'Share with a friend',
      eldtTitle: 'FMCSA ELDT Registered Training Provider',
      eldtSub: 'Listed on the federal Training Provider Registry. Our curriculum meets all Texas DPS and federal ELDT requirements — your training counts, everywhere in the U.S.',
      eldtCta: 'Verify on FMCSA.dot.gov',
      tabHome: 'Home', tabProg: 'Programs', tabSched: 'Schedule', tabHelp: 'Help',
      nextCont: 'Continue', nextSubmit: 'Reserve my spot', allLbl: 'All',
      fundings: ['WIOA / Workforce Solutions', 'VA / GI Bill', 'Veterans — 20% off', 'Employer sponsored', 'Payment plans', 'Financing'],
      progNames: ['CLASS A CDL', 'CLASS B CDL', 'CLASS C'],
      progVehicles: ['Tractor-trailers & semis — the top-earning license', 'Box trucks, buses & dump trucks', 'Standard cars — get your Texas driver license'],
      incAB: ['20 hrs classroom + 20 hrs behind the wheel', 'Complete ELDT training — DPS & FMCSA compliant', 'Classroom, range & road — all in one place', 'Job placement assistance when you pass'],
      incC: ['20 hrs classroom + 20 hrs behind the wheel', 'Patient bilingual instructors', 'Practice on real DPS test routes', 'Flexible day, evening & weekend hours'],
      hourNames: ['Day', 'Evening', 'Weekend'],
      startOpts: ['Sep 7, 2026 (Day)', 'Sep 12, 2026 (Weekend)', 'Sep 14, 2026 (Evening)', 'Oct 5, 2026 (Day)'],
      heardOpts: ['Google', 'Facebook / Instagram', 'TikTok', 'Friend or family', 'Drove by the school'],
      txdlOpts: ['Yes', 'Not yet'],
      seats: { few: 'seats left — filling fast', some: 'seats left', open: 'Seats open' },
      sched: [
        { mon: 'SEP', day: '7', cls: 'Class A', grp: 'Day group', time: 'Mon–Fri · 9:00 AM – 3:00 PM', seats: '3', level: 'few', hours: 'Day' },
        { mon: 'SEP', day: '12', cls: 'Class B', grp: 'Weekend group', time: 'Sat & Sun · 8:00 AM – 4:00 PM', seats: '5', level: 'some', hours: 'Weekend' },
        { mon: 'SEP', day: '14', cls: 'Class A', grp: 'Evening group', time: 'Mon–Thu · 6:00 PM – 9:30 PM', seats: '8', level: 'some', hours: 'Evening' },
        { mon: 'SEP', day: '21', cls: 'Class C', grp: 'Flexible', time: 'By appointment — you pick the hours', seats: '', level: 'open', hours: 'Day' },
        { mon: 'OCT', day: '5', cls: 'Class A', grp: 'Day group', time: 'Mon–Fri · 9:00 AM – 3:00 PM', seats: '', level: 'open', hours: 'Day' }
      ],
      faqs: [
        { q: 'Do I need any experience to start?', a: 'None at all. We train complete beginners — 20 hours in the classroom and 20 hours behind the wheel with an instructor next to you, from day one to your DPS road test.' },
        { q: 'What do I need to enroll?', a: 'A valid Texas driver license (for CDL programs), being 18+ (21+ to drive interstate), and a DOT physical — we help you schedule it. Bring your ID and we handle the rest of the paperwork.' },
        { q: 'How long does it take?', a: 'About 1 month: 20 classroom hours + 20 behind-the-wheel hours. It can take up to 2 months depending on your pace and schedule — we never rush you.' },
        { q: 'Who can pay my tuition?', a: 'WIOA / Workforce Solutions, VA / GI Bill for veterans, employer sponsorships, and third-party financing. We also offer in-house payment plans. Ask us — most students qualify for something.' },
        { q: 'How does the deposit work?', a: 'You reserve your seat with a deposit paid in person at the school: $1,000 for Class A, $800 for Class B, $500 for Class C. It counts toward your tuition.' },
        { q: 'Will you help me find a job?', a: 'Yes. We offer job placement assistance with carrier partners hiring in DFW. Many students have offers before they finish the program.' }
      ],
      reviews: [
        { quote: 'Got my Class A in five weeks and a job offer two weeks later. The instructors ride with you until you get it right.', init: 'MT', name: 'Marcus T.', role: 'Class A graduate' },
        { quote: 'Los instructores tienen mucha paciencia y explican todo en español. Pasé mi examen del DPS a la primera.', init: 'JR', name: 'José R.', role: 'Class A graduate' },
        { quote: 'Workforce Solutions paid my whole tuition. The school did all the paperwork — I just showed up and trained.', init: 'DB', name: 'Danielle B.', role: 'Class B graduate' }
      ],
      chatHello: "Howdy! I'm Alpha, the school's assistant. I'll walk you through how enrolling works, or you can ask me about prices, requirements, funding or schedules — English o español.",
      chatWelcomeProcess: "Here's how it works, start to finish:\n1. Reserve your seat online (takes 2 minutes, no payment now).\n2. Visit the school and pay your deposit — $1,000 / $800 / $500 depending on class — it counts toward tuition.\n3. Train: 20 hours in the classroom + 20 hours behind the wheel, about a month.\n4. Take your DPS skills test — we handle your ELDT registration and paperwork.\n5. Graduate and let us help place you with a hiring carrier.\nAsk me anything about a step, or tap \"Reserve Your Spot\" whenever you're ready.",
      chatChips: ['How does the process work?', 'How much is Class A?', 'Who can pay my tuition?', 'What do I need to enroll?'],
      confSteps: function (dep) { return ['An advisor calls you to confirm your class and start date.', 'Visit the school and pay your ' + dep + ' deposit to lock in your seat.', 'Show up on day one — we handle your ELDT registration and paperwork.']; },
      waEnrollMsg: function (f, className, price) {
        return 'Hi Alpha Driving Academy! I just reserved a spot on the website.\n' +
          'Name: ' + f.name + '\nPhone: ' + f.phone + (f.email ? '\nEmail: ' + f.email : '') +
          '\nClass: ' + className + ' (' + price + ')\nPreferred start: ' + f.start +
          '\nPreferred hours: ' + f.hours + '\nTexas DL: ' + f.txdl + '\nLanguage: ' + f.langPref;
      }
    },
    es: {
      tagline: 'Tu autoridad en el volante desde el día uno', heroEyebrow: 'PANTEGO · GRAND PRAIRIE, TEXAS',
      heroTitle: '¡TE ENTRENAMOS PARA SER UN TROQUERO PRO!',
      heroSub: 'Clases A, B y C — salón, patio y carretera, todo en un solo lugar. La mayoría de los estudiantes están listos en aproximadamente un mes.',
      ctaReserve: 'Aparta tu lugar', ctaCall: 'Llama (682) 358-8132', ctaCallShort: 'Llámanos', tuition: 'colegiatura',
      programsHdr: 'NUESTROS PROGRAMAS',
      fundEyebrow: 'NO PAGUES DE TU BOLSILLO', fundTitle: 'TU ENTRENAMIENTO PUEDE SER PAGADO',
      fundSub: 'La mayoría de nuestros estudiantes califican para programas que cubren parte o toda su colegiatura. Nosotros te ayudamos con el papeleo.',
      fundCta: 'Ver si califico',
      reviewsHdr: 'RESEÑAS DE ESTUDIANTES', reviewsSub: 'La confianza del norte de Texas por más de 4 años',
      chatTeaserTitle: 'Pregúntale a Alpha', chatTeaserSub: 'Precios, requisitos, horarios… pregunta lo que sea, en español o inglés.',
      progEyebrow: 'ELIGE TU LICENCIA', progTitle: 'PROGRAMAS Y PRECIOS',
      progSub: 'Cada programa: 20 horas de salón + 20 horas al volante. Aproximadamente 1 mes — hasta 2 a tu propio ritmo. Horarios flexibles de día, tarde y fin de semana.',
      recommended: 'MÁS POPULAR', depositLbl: 'DEPÓSITO', durVal: '~1 MES', durLbl: 'DURACIÓN', hoursLbl: 'SALÓN+VOLANTE',
      planNote: 'Planes de pago disponibles · Aceptamos WIOA, VA y patrocinio del empleador', selectCta: 'Elegir',
      progFoot: 'El depósito se paga en persona en la escuela y cuenta para tu colegiatura. El entrenamiento puede extenderse hasta 2 meses según el estudiante — nunca te apuramos.',
      schedEyebrow: 'HORARIOS FLEXIBLES', schedTitle: 'PRÓXIMAS FECHAS DE INICIO',
      schedSub: 'Nuevos grupos cada mes. Horarios de día, tarde y fin de semana — aparta tu asiento antes de que se llene.',
      reserveShort: 'Apartar', schedFoot: 'Tu asiento se confirma con el depósito en la escuela. ¿No puedes en estas fechas? Llámanos — nos ajustamos a tu horario.',
      helpEyebrow: 'AQUÍ TE AYUDAMOS', helpTitle: 'PREGUNTAS Y RESPUESTAS', faqHdr: 'LO MÁS PREGUNTADO', stillQ: '¿Más preguntas? Llámanos',
      enrollTitle: 'APARTA TU LUGAR', steps: ['TUS DATOS', 'CLASE Y HORARIO', 'REVISAR Y APARTAR'], stepOf: 'PASO',
      fName: 'NOMBRE COMPLETO', phName: 'ej. Juan Ramírez', fPhone: 'TELÉFONO', fEmail: 'CORREO (OPCIONAL)', fLang: 'IDIOMA PREFERIDO',
      fClass: 'ELIGE TU CLASE', fStart: 'FECHA DE INICIO PREFERIDA', fHours: 'HORARIO PREFERIDO', fTxdl: '¿TIENES LICENCIA DE CONDUCIR DE TEXAS?', fHeard: '¿CÓMO SUPISTE DE NOSOTROS?',
      reviewHdr: 'TU RESERVACIÓN', depositHdr: 'DEPÓSITO EN PERSONA',
      depositNote: 'Paga en la escuela para asegurar tu asiento — efectivo o tarjeta. Tu depósito cuenta para la colegiatura.',
      legalNote: 'La app no cobra ningún pago. Al enviar este formulario apartas tu lugar en la lista; un asesor te llamará en 1 día hábil.',
      confTitle: '¡ESTÁS EN LA LISTA!', confRef: 'RESERVACIÓN', confNextHdr: 'QUÉ SIGUE', confHome: 'Volver al inicio',
      loginTitle: 'ACCESO ESTUDIANTES', loginHdr: 'BIENVENIDO DE NUEVO', loginSub: 'Escribe el teléfono con el que te inscribiste y te mandamos un código por mensaje.',
      loginCta: 'Enviar código', loginFoot: '¿Aún no te inscribes? Aparta tu lugar desde la pantalla de inicio.',
      loginMsg: 'El código por mensaje aún no está activo — llámanos o escríbenos por WhatsApp y buscamos tu expediente.',
      chatTitle: 'Pregúntale a Alpha', chatOnline: 'En línea', chatPlaceholder: 'Escribe tu pregunta…',
      visitHdr: 'VISÍTANOS',
      visitSub: 'Ven cualquier día — conoce los camiones, habla con los instructores y aparta tu asiento ese mismo día. A minutos de Arlington, Grand Prairie y Fort Worth.',
      hoursHdr: 'HORARIO', hoursVal: 'Lun–Sáb · 9:00 AM – 7:00 PM', dirCta: 'Cómo llegar',
      applyChip: 'CUPO LIMITADO', applyTitle: 'TU NUEVA CARRERA ESTÁ A UN MES',
      applySub: 'El troque paga bien. En unas 4 semanas puedes tener tu licencia y estar ganando — y tu colegiatura podría no costarte nada de tu bolsillo. No esperes a que se llene el siguiente grupo.',
      applyFoot: 'ATENCIÓN PERSONALIZADA',
      googleSub: 'Alpha Driving Academy · Pantego, TX', googleRead: 'Lee nuestras reseñas', googleLeave: 'Deja tu reseña',
      socialHdr: 'SÍGUENOS', shareCta: 'Comparte con un amigo',
      eldtTitle: 'Proveedor de Entrenamiento ELDT Registrado (FMCSA)',
      eldtSub: 'Registrados en el Training Provider Registry federal. Nuestro plan de estudios cumple con todos los requisitos de Texas DPS y ELDT federales — tu entrenamiento vale en todo EE.UU.',
      eldtCta: 'Verifícalo en FMCSA.dot.gov',
      tabHome: 'Inicio', tabProg: 'Programas', tabSched: 'Horarios', tabHelp: 'Ayuda',
      nextCont: 'Continuar', nextSubmit: 'Apartar mi lugar', allLbl: 'Todos',
      fundings: ['WIOA / Workforce Solutions', 'VA / GI Bill', 'Veteranos — 20% de descuento', 'Patrocinio del empleador', 'Planes de pago', 'Financiamiento'],
      progNames: ['CDL CLASE A', 'CDL CLASE B', 'CLASE C'],
      progVehicles: ['Tráilers y semis — la licencia que más paga', 'Camiones de caja, autobuses y de volteo', 'Autos estándar — obtén tu licencia de Texas'],
      incAB: ['20 hrs de salón + 20 hrs al volante', 'Entrenamiento ELDT completo — cumple con DPS y FMCSA', 'Salón, patio y carretera — todo en un lugar', 'Ayuda para colocarte en un trabajo al terminar'],
      incC: ['20 hrs de salón + 20 hrs al volante', 'Instructores bilingües y pacientes', 'Práctica en rutas reales del examen DPS', 'Horarios flexibles de día, tarde y fin de semana'],
      hourNames: ['Día', 'Tarde', 'Fin de semana'],
      startOpts: ['7 Sep 2026 (Día)', '12 Sep 2026 (Fin de semana)', '14 Sep 2026 (Tarde)', '5 Oct 2026 (Día)'],
      heardOpts: ['Google', 'Facebook / Instagram', 'TikTok', 'Amigo o familiar', 'Pasé por la escuela'],
      txdlOpts: ['Sí', 'Todavía no'],
      seats: { few: 'asientos — se llena rápido', some: 'asientos disponibles', open: 'Asientos abiertos' },
      sched: [
        { mon: 'SEP', day: '7', cls: 'Clase A', grp: 'Grupo de día', time: 'Lun–Vie · 9:00 AM – 3:00 PM', seats: '3', level: 'few', hours: 'Día' },
        { mon: 'SEP', day: '12', cls: 'Clase B', grp: 'Fin de semana', time: 'Sáb y Dom · 8:00 AM – 4:00 PM', seats: '5', level: 'some', hours: 'Fin de semana' },
        { mon: 'SEP', day: '14', cls: 'Clase A', grp: 'Grupo de tarde', time: 'Lun–Jue · 6:00 PM – 9:30 PM', seats: '8', level: 'some', hours: 'Tarde' },
        { mon: 'SEP', day: '21', cls: 'Clase C', grp: 'Flexible', time: 'Por cita — tú eliges las horas', seats: '', level: 'open', hours: 'Día' },
        { mon: 'OCT', day: '5', cls: 'Clase A', grp: 'Grupo de día', time: 'Lun–Vie · 9:00 AM – 3:00 PM', seats: '', level: 'open', hours: 'Día' }
      ],
      faqs: [
        { q: '¿Necesito experiencia para empezar?', a: 'Para nada. Entrenamos desde cero — 20 horas de salón y 20 horas al volante con un instructor a tu lado, desde el día uno hasta tu examen del DPS.' },
        { q: '¿Qué necesito para inscribirme?', a: 'Licencia de conducir de Texas vigente (para programas CDL), tener 18+ (21+ para rutas interestatales) y el examen físico DOT — te ayudamos a agendarlo. Trae tu identificación y nosotros hacemos el resto del papeleo.' },
        { q: '¿Cuánto tiempo toma?', a: 'Aproximadamente 1 mes: 20 horas de salón + 20 horas al volante. Puede tomar hasta 2 meses según tu ritmo y horario — nunca te apuramos.' },
        { q: '¿Quién puede pagar mi colegiatura?', a: 'WIOA / Workforce Solutions, VA / GI Bill para veteranos, patrocinio de empleadores y financiamiento externo. También ofrecemos planes de pago. Pregúntanos — la mayoría califica para algo.' },
        { q: '¿Cómo funciona el depósito?', a: 'Apartas tu asiento con un depósito pagado en persona en la escuela: $1,000 Clase A, $800 Clase B, $500 Clase C. Cuenta para tu colegiatura.' },
        { q: '¿Me ayudan a encontrar trabajo?', a: 'Sí. Ofrecemos ayuda de colocación con transportistas que contratan en DFW. Muchos estudiantes tienen ofertas antes de terminar.' }
      ],
      reviews: [
        { quote: 'Got my Class A in five weeks and a job offer two weeks later. The instructors ride with you until you get it right.', init: 'MT', name: 'Marcus T.', role: 'Graduado Clase A' },
        { quote: 'Los instructores tienen mucha paciencia y explican todo en español. Pasé mi examen del DPS a la primera.', init: 'JR', name: 'José R.', role: 'Graduado Clase A' },
        { quote: 'Workforce Solutions pagó toda mi colegiatura. La escuela hizo todo el papeleo — yo solo llegué a entrenar.', init: 'DB', name: 'Danielle B.', role: 'Graduada Clase B' }
      ],
      chatHello: '¡Hola! Soy Alpha, el asistente de la escuela. Te explico cómo funciona el proceso para inscribirte, o pregúntame sobre precios, requisitos, financiamiento u horarios — español o inglés.',
      chatWelcomeProcess: 'Así funciona, paso a paso:\n1. Aparta tu lugar en línea (toma 2 minutos, sin pago todavía).\n2. Visita la escuela y paga tu depósito — $1,000 / $800 / $500 según la clase — cuenta para tu colegiatura.\n3. Entrena: 20 horas de salón + 20 horas al volante, aproximadamente un mes.\n4. Presenta tu examen de manejo del DPS — nosotros hacemos tu registro ELDT y el papeleo.\n5. Gradúate y te ayudamos a conseguir trabajo con un transportista.\nPregúntame sobre cualquier paso, o toca "Aparta tu lugar" cuando estés listo.',
      chatChips: ['¿Cómo funciona el proceso?', '¿Cuánto cuesta la Clase A?', '¿Quién paga mi colegiatura?', '¿Qué necesito para inscribirme?'],
      confSteps: function (dep) { return ['Un asesor te llama para confirmar tu clase y fecha de inicio.', 'Visita la escuela y paga tu depósito de ' + dep + ' para asegurar tu asiento.', 'Preséntate el primer día — nosotros hacemos tu registro ELDT y el papeleo.']; },
      waEnrollMsg: function (f, className, price) {
        return '¡Hola Alpha Driving Academy! Acabo de apartar mi lugar en el sitio web.\n' +
          'Nombre: ' + f.name + '\nTeléfono: ' + f.phone + (f.email ? '\nCorreo: ' + f.email : '') +
          '\nClase: ' + className + ' (' + price + ')\nFecha de inicio: ' + f.start +
          '\nHorario: ' + f.hours + '\nLicencia de Texas: ' + f.txdl + '\nIdioma: ' + f.langPref;
      }
    }
  };

  var LETTERS = ['A', 'B', 'C'];
  var PRICES = { A: '$4,500', B: '$3,500', C: '$1,200' };
  var DEPOSITS = { A: '$1,000', B: '$800', C: '$500' };

  var state = {
    lang: 'en',
    tab: 'home',
    view: 'tabs',
    step: 1,
    hourFilter: 0,
    faqOpen: -1,
    chatMsgs: null,
    form: { name: '', phone: '', email: '', langPref: null, cls: 'A', start: null, hours: null, txdl: null, heard: null }
  };

  function t() { return dict[state.lang]; }
  function esc(s) { var d = document.createElement('div'); d.textContent = String(s); return d.innerHTML; }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // ---------- language ----------
  function applyLang() {
    var d = t();
    document.documentElement.lang = state.lang;
    document.documentElement.setAttribute('data-lang', state.lang);
    $all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] !== undefined) el.innerHTML = esc(d[key]);
    });
    $all('[data-ph-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-ph-i18n');
      if (d[key] !== undefined) el.setAttribute('placeholder', d[key]);
    });
    $('#lang-en').setAttribute('aria-pressed', String(state.lang === 'en'));
    $('#lang-es').setAttribute('aria-pressed', String(state.lang === 'es'));
    if (!state.form.langPref) state.form.langPref = state.lang === 'es' ? 'Español / Spanish' : 'English / Inglés';
    renderDynamic();
  }

  // ---------- dynamic content ----------
  function renderDynamic() {
    var d = t();

    // Home program list
    var homeList = $('#home-prog-list');
    homeList.innerHTML = LETTERS.map(function (L, i) {
      return '<button type="button" class="prog-row" data-view-class="' + L + '">' +
        '<div class="prog-letter">' + L + '</div>' +
        '<div class="prog-mid"><div class="name">' + esc(d.progNames[i]) + '</div><div class="veh">' + esc(d.progVehicles[i]) + '</div></div>' +
        '<div class="prog-price"><div class="amt">' + PRICES[L] + '</div><div class="lbl">' + esc(d.tuition) + '</div></div>' +
        '</button>';
    }).join('');
    $all('[data-view-class]', homeList).forEach(function (btn) {
      btn.addEventListener('click', function () { goTab('programs'); });
    });

    // Funding chips
    $('#fund-chips').innerHTML = d.fundings.map(function (f) { return '<span>✓ ' + esc(f) + '</span>'; }).join('');

    // Reviews
    $('#reviews-scroll').innerHTML = d.reviews.map(function (r) {
      return '<div class="review-card"><div class="stars">★★★★★</div><div class="quote">“' + esc(r.quote) + '”</div>' +
        '<div class="who"><div class="init">' + esc(r.init) + '</div><div><div class="name">' + esc(r.name) + '</div><div class="role">' + esc(r.role) + '</div></div></div></div>';
    }).join('');

    // Program cards (Programs tab)
    $('#prog-cards').innerHTML = LETTERS.map(function (L, i) {
      var includes = L === 'C' ? d.incC : d.incAB;
      var rec = L === 'A';
      return '<div class="prog-card ' + (rec ? 'rec' : '') + '">' +
        '<div class="prog-card-head">' +
        (rec ? '<div class="rec-badge">★ ' + esc(d.recommended) + '</div>' : '') +
        '<div><h3>' + esc(d.progNames[i]) + '</h3><div class="veh">' + esc(d.progVehicles[i]) + '</div></div>' +
        '<div><div class="price">' + PRICES[L] + '</div><div class="tuition">' + esc(d.tuition) + '</div></div>' +
        '</div>' +
        '<div class="prog-card-body">' +
        '<div class="stat-row">' +
        '<div class="stat"><div class="v">' + DEPOSITS[L] + '</div><div class="l">' + esc(d.depositLbl) + '</div></div>' +
        '<div class="stat"><div class="v">' + esc(d.durVal) + '</div><div class="l">' + esc(d.durLbl) + '</div></div>' +
        '<div class="stat"><div class="v">20+20</div><div class="l">' + esc(d.hoursLbl) + '</div></div>' +
        '</div>' +
        '<div class="inc-list">' + includes.map(function (inc) { return '<div><span class="check">✓</span><span>' + esc(inc) + '</span></div>'; }).join('') + '</div>' +
        '<div class="plan-note">' + esc(d.planNote) + '</div>' +
        '<button type="button" class="select-cta" data-select-class="' + L + '">' + esc(d.selectCta) + ' — ' + esc(d.progNames[i]) + '</button>' +
        '</div></div>';
    }).join('') + '<div class="foot-note">★ ' + esc(d.progFoot) + '</div>';
    $all('[data-select-class]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.form.cls = btn.getAttribute('data-select-class');
        state.view = 'enroll'; state.step = 2;
        render();
      });
    });

    // Schedule: hour filters
    var hourAll = [d.allLbl].concat(d.hourNames);
    $('#hour-filters').innerHTML = hourAll.map(function (h, i) {
      return '<button type="button" data-hf="' + i + '" aria-pressed="' + (state.hourFilter === i) + '">' + esc(h) + '</button>';
    }).join('');
    $all('[data-hf]', $('#hour-filters')).forEach(function (btn) {
      btn.addEventListener('click', function () { state.hourFilter = parseInt(btn.getAttribute('data-hf'), 10); renderDynamic(); });
    });
    var filterName = state.hourFilter === 0 ? null : d.hourNames[state.hourFilter - 1];
    var rows = d.sched.filter(function (s) { return !filterName || s.hours === filterName; });
    $('#sched-list').innerHTML = rows.map(function (s) {
      var seatsTxt = s.level === 'open' ? d.seats.open : s.seats + ' ' + d.seats[s.level];
      var seatCol = s.level === 'few' ? '#c1272d' : s.level === 'some' ? '#e89a1c' : '#2f7d3d';
      return '<div class="sched-row"><div class="date"><div class="mon">' + esc(s.mon) + '</div><div class="day">' + esc(s.day) + '</div></div>' +
        '<div class="mid"><div class="title">' + esc(s.cls) + ' — ' + esc(s.grp) + '</div><div class="time">' + esc(s.time) + '</div>' +
        '<div class="seats" style="color:' + seatCol + '">● ' + esc(seatsTxt) + '</div></div>' +
        '<button type="button" data-sched-class="' + s.cls.slice(-1) + '">' + esc(d.reserveShort) + '</button></div>';
    }).join('');
    $all('[data-sched-class]', $('#sched-list')).forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.form.cls = btn.getAttribute('data-sched-class');
        state.view = 'enroll'; state.step = 1;
        render();
      });
    });

    // FAQ
    $('#faq-list').innerHTML = d.faqs.map(function (f, i) {
      var open = state.faqOpen === i;
      return '<div class="faq-item ' + (open ? 'open' : '') + '" data-faq="' + i + '">' +
        '<button type="button" class="faq-q"><span class="q">' + esc(f.q) + '</span><span class="mark">' + (open ? '−' : '+') + '</span></button>' +
        '<div class="faq-a">' + esc(f.a) + '</div></div>';
    }).join('');
    $all('[data-faq]', $('#faq-list')).forEach(function (item) {
      $('.faq-q', item).addEventListener('click', function () {
        var i = parseInt(item.getAttribute('data-faq'), 10);
        state.faqOpen = state.faqOpen === i ? -1 : i;
        renderDynamic();
      });
    });

    renderEnrollDynamic();
    renderChatChips();
  }

  function className(L) { var idx = LETTERS.indexOf(L); return t().progNames[idx]; }

  function renderEnrollDynamic() {
    var d = t();
    // language pref
    var langOpts = [
      { v: 'English / Inglés' }, { v: 'Español / Spanish' }
    ];
    $('#f-langpref').innerHTML = langOpts.map(function (o) {
      return '<button type="button" data-lp="' + esc(o.v) + '" aria-pressed="' + (state.form.langPref === o.v) + '">' + esc(o.v) + '</button>';
    }).join('');
    $all('[data-lp]', $('#f-langpref')).forEach(function (btn) {
      btn.addEventListener('click', function () { state.form.langPref = btn.getAttribute('data-lp'); renderEnrollDynamic(); });
    });

    // class pick
    $('#f-class').innerHTML = LETTERS.map(function (L, i) {
      var sel = state.form.cls === L;
      return '<button type="button" data-cls="' + L + '" aria-pressed="' + sel + '"><div class="letter">' + L + '</div>' +
        '<div class="mid"><div class="n">' + esc(d.progNames[i]) + '</div><div class="s">' + esc(d.progVehicles[i]) + '</div></div>' +
        '<div class="price">' + PRICES[L] + '</div></button>';
    }).join('');
    $all('[data-cls]', $('#f-class')).forEach(function (btn) {
      btn.addEventListener('click', function () { state.form.cls = btn.getAttribute('data-cls'); renderEnrollDynamic(); });
    });

    // start select
    if (!state.form.start || d.startOpts.indexOf(state.form.start) === -1) state.form.start = d.startOpts[0];
    $('#f-start').innerHTML = d.startOpts.map(function (o) { return '<option ' + (o === state.form.start ? 'selected' : '') + '>' + esc(o) + '</option>'; }).join('');

    // hours
    if (!state.form.hours) state.form.hours = d.hourNames[0];
    $('#f-hours').innerHTML = d.hourNames.map(function (h) {
      return '<button type="button" data-hrs="' + esc(h) + '" aria-pressed="' + (state.form.hours === h) + '">' + esc(h) + '</button>';
    }).join('');
    $all('[data-hrs]', $('#f-hours')).forEach(function (btn) {
      btn.addEventListener('click', function () { state.form.hours = btn.getAttribute('data-hrs'); renderEnrollDynamic(); });
    });

    // txdl
    if (!state.form.txdl) state.form.txdl = d.txdlOpts[0];
    $('#f-txdl').innerHTML = d.txdlOpts.map(function (o) {
      return '<button type="button" data-txdl="' + esc(o) + '" aria-pressed="' + (state.form.txdl === o) + '">' + esc(o) + '</button>';
    }).join('');
    $all('[data-txdl]', $('#f-txdl')).forEach(function (btn) {
      btn.addEventListener('click', function () { state.form.txdl = btn.getAttribute('data-txdl'); renderEnrollDynamic(); });
    });

    // heard select
    if (!state.form.heard || d.heardOpts.indexOf(state.form.heard) === -1) state.form.heard = d.heardOpts[0];
    $('#f-heard').innerHTML = d.heardOpts.map(function (o) { return '<option ' + (o === state.form.heard ? 'selected' : '') + '>' + esc(o) + '</option>'; }).join('');

    // review rows (step 3)
    var f = state.form;
    var rows = [
      [d.fName, f.name], [d.fPhone, f.phone], [d.fEmail, f.email || '—'],
      [d.fClass, className(f.cls) + ' · ' + PRICES[f.cls]], [d.fStart, f.start],
      [d.fHours, f.hours], [d.fTxdl, f.txdl], [d.fLang, f.langPref]
    ];
    $('#review-rows').innerHTML = rows.map(function (r) { return '<div class="row"><span>' + esc(r[0]) + '</span><span>' + esc(r[1]) + '</span></div>'; }).join('');
    $('#dep-amount').textContent = DEPOSITS[f.cls];

    updateEnrollStepUI();
  }

  function updateEnrollStepUI() {
    var d = t();
    $('#step-lbl').textContent = d.stepOf + ' ' + state.step + '/3 — ' + d.steps[state.step - 1];
    $('#dot1').className = ''; $('#dot1').classList.add('on');
    $('#dot2').classList.toggle('on', state.step > 1);
    $('#dot3').classList.toggle('on', state.step > 2);
    $('#enroll-step-1').hidden = state.step !== 1;
    $('#enroll-step-2').hidden = state.step !== 2;
    $('#enroll-step-3').hidden = state.step !== 3;
    var valid1 = state.form.name.trim().length > 1 && state.form.phone.trim().length >= 7;
    var canNext = state.step !== 1 || valid1;
    var btn = $('#enroll-next');
    btn.textContent = state.step === 3 ? d.nextSubmit : d.nextCont;
    btn.disabled = !canNext;
  }

  // ---------- chat ----------
  function botReply(q) {
    var d = t(); var s = q.toLowerCase(); var es = state.lang === 'es';
    if (/(process|steps|step by step|how does|walk me|funciona|pasos|paso a paso|proceso)/.test(s)) return t().chatWelcomeProcess;
    if (/(price|cost|much|cuesta|cuánto|precio)/.test(s)) return es
      ? 'Clase A: $4,500 · Clase B: $3,500 · Clase C: $1,200. Cada programa incluye 20 hrs de salón + 20 hrs al volante (~1 mes). Apartas con depósito de $1,000 / $800 / $500 que cuenta para tu colegiatura.'
      : 'Class A: $4,500 · Class B: $3,500 · Class C: $1,200. Every program includes 20 hrs classroom + 20 hrs behind the wheel (~1 month). Reserve with a $1,000 / $800 / $500 deposit — it counts toward tuition.';
    if (/(pay|fund|wioa|va |gi bill|workforce|paga|financ|colegiatura)/.test(s)) return es
      ? 'La mayoría califica para ayuda: WIOA / Workforce Solutions, VA / GI Bill (veteranos), patrocinio del empleador, planes de pago o financiamiento. Llámanos al (682) 358-8132 y revisamos tu caso en minutos.'
      : "Most students qualify for help: WIOA / Workforce Solutions, VA / GI Bill (veterans), employer sponsorship, payment plans or financing. Call (682) 358-8132 and we'll check your case in minutes.";
    if (/(need|require|enroll|start|requisito|necesito|inscrib)/.test(s)) return es
      ? 'Solo necesitas: licencia de Texas vigente, 18+ años (21+ interestatal) y el físico DOT — te ayudamos a agendarlo. Trae tu ID; nosotros hacemos el papeleo.'
      : "You just need: a valid Texas driver license, to be 18+ (21+ interstate), and a DOT physical — we help you schedule it. Bring your ID; we handle the paperwork.";
    if (/(español|spanish|english|ingl)/.test(s)) return es
      ? '¡Claro! Todas las clases están disponibles en español o inglés — tú eliges.'
      : 'Yes — every class is available in English or Spanish, your choice. ¡Todas las clases están disponibles en español!';
    if (/(when|schedule|date|horario|cuando|cuándo|fecha)/.test(s)) return es
      ? 'Nuevos grupos cada mes: día, tarde y fin de semana. Los próximos inician el 7, 12 y 14 de septiembre. Ve la pestaña Horarios o llámanos.'
      : 'New groups start every month: day, evening and weekend. The next ones start Sep 7, 12 and 14 — check the Schedule tab or call us.';
    return es
      ? 'Buena pregunta. Llámanos al (682) 358-8132 y un asesor te atiende de inmediato — o toca "Aparta tu lugar" y nosotros te llamamos.'
      : 'Good question! Call us at (682) 358-8132 and an advisor will help you right away — or tap "Reserve Your Spot" and we\'ll call you.';
  }

  function chatHello() {
    return [
      { role: 'bot', text: t().chatHello },
      { role: 'bot', text: t().chatWelcomeProcess }
    ];
  }

  function renderChatMsgs() {
    var msgs = state.chatMsgs || chatHello();
    $('#chat-msgs').innerHTML = msgs.map(function (m) {
      return '<div class="msg ' + (m.role === 'user' ? 'user' : 'bot') + '">' + esc(m.text) + '</div>';
    }).join('');
    $('#chat-msgs').scrollTop = $('#chat-msgs').scrollHeight;
  }

  function renderChatChips() {
    $('#chat-chips').innerHTML = t().chatChips.map(function (q) {
      return '<button type="button" data-chip="' + esc(q) + '">' + esc(q) + '</button>';
    }).join('');
    $all('[data-chip]', $('#chat-chips')).forEach(function (btn) {
      btn.addEventListener('click', function () { askChat(btn.getAttribute('data-chip')); });
    });
  }

  function askChat(q) {
    if (!q || !q.trim()) return;
    if (!state.chatMsgs) state.chatMsgs = chatHello();
    state.chatMsgs.push({ role: 'user', text: q });
    state.chatMsgs.push({ role: 'bot', text: botReply(q) });
    renderChatMsgs();
    $('#chat-input').value = '';
  }

  // ---------- view / tab switching ----------
  function render() {
    $all('.view').forEach(function (v) { v.hidden = (v.id !== 'view-' + state.view); });
    if (state.view === 'tabs') {
      $all('.tabpanel').forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-tab') === state.tab); });
      $all('#tabbar button').forEach(function (b) { b.setAttribute('aria-current', String(b.getAttribute('data-tab') === state.tab)); });
    }
    if (state.view === 'enroll') renderEnrollDynamic();
    window.scrollTo(0, 0);
  }

  function goTab(tab) { state.tab = tab; state.view = 'tabs'; render(); }
  function goEnroll() { state.view = 'enroll'; state.step = 1; render(); }
  function goHome() { state.view = 'tabs'; state.tab = 'home'; render(); }

  // ---------- WhatsApp submit ----------
  function waLink(number, text) {
    return 'https://wa.me/' + number + '?text=' + encodeURIComponent(text);
  }

  function submitEnrollment() {
    var d = t();
    var f = state.form;
    var msg = d.waEnrollMsg(f, className(f.cls), PRICES[f.cls]);
    var refNum = '#ALP-' + Math.floor(1000 + Math.random() * 9000);
    $('#ref-num').textContent = refNum;
    $('#confirm-sub').textContent = (state.lang === 'es'
      ? 'Guardamos tu lugar' + (f.name ? ', ' + f.name.split(' ')[0] : '') + '. Un asesor te llamará al ' + (f.phone || 'tu teléfono') + ' en 1 día hábil.'
      : 'We saved your spot' + (f.name ? ', ' + f.name.split(' ')[0] : '') + '. An advisor will call you at ' + (f.phone || 'your number') + ' within 1 business day.');
    $('#confirm-steps').innerHTML = d.confSteps(DEPOSITS[f.cls]).map(function (txt, i) {
      return '<div class="confirm-step"><div class="n">' + (i + 1) + '</div><div class="txt">' + esc(txt) + '</div></div>';
    }).join('');
    state.view = 'confirm';
    render();
    // Open WhatsApp with the reservation pre-filled so the lead actually reaches the school —
    // this is a static page with no backend, so WhatsApp is the delivery channel.
    var win = window.open(waLink(WA_MAIN, msg), '_blank');
    if (!win) {
      var a = document.createElement('a');
      a.href = waLink(WA_MAIN, msg); a.target = '_blank'; a.rel = 'noopener';
      $('.confirm-actions').insertBefore(a, $('.confirm-actions').firstChild);
      a.textContent = state.lang === 'es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp';
      a.className = ''; a.style.cssText = 'display:block;text-align:center;background:#2f7d3d;color:#fff;font:600 12.5px Oswald,sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:14px;border-radius:8px;margin-bottom:10px';
    }
  }

  // ---------- wire static events ----------
  function init() {
    $('#lang-en').addEventListener('click', function () { state.lang = 'en'; applyLang(); });
    $('#lang-es').addEventListener('click', function () { state.lang = 'es'; applyLang(); });

    $all('.go-enroll').forEach(function (b) { b.addEventListener('click', goEnroll); });
    $('#btn-login').addEventListener('click', function () { state.view = 'login'; render(); });
    $('#login-back').addEventListener('click', goHome);
    $('#login-submit').addEventListener('click', function () {
      var msg = $('#login-msg');
      msg.textContent = t().loginMsg;
      msg.classList.add('show');
    });

    $all('#tabbar button').forEach(function (b) { b.addEventListener('click', function () { goTab(b.getAttribute('data-tab')); }); });

    $('#enroll-back').addEventListener('click', function () {
      if (state.step > 1) { state.step -= 1; render(); } else { state.view = 'tabs'; render(); }
    });
    $('#enroll-next').addEventListener('click', function () {
      var valid1 = state.form.name.trim().length > 1 && state.form.phone.trim().length >= 7;
      if (state.step === 1 && !valid1) return;
      if (state.step < 3) { state.step += 1; render(); }
      else { submitEnrollment(); }
    });
    $('#f-name').addEventListener('input', function (e) { state.form.name = e.target.value; updateEnrollStepUI(); });
    $('#f-phone').addEventListener('input', function (e) { state.form.phone = e.target.value; updateEnrollStepUI(); });
    $('#f-email').addEventListener('input', function (e) { state.form.email = e.target.value; });
    $('#f-start').addEventListener('change', function (e) { state.form.start = e.target.value; });
    $('#f-heard').addEventListener('change', function (e) { state.form.heard = e.target.value; });

    $('#confirm-home').addEventListener('click', goHome);

    function openChat() {
      $('#chat-overlay').hidden = false;
      if (!state.chatMsgs) state.chatMsgs = chatHello();
      renderChatMsgs();
    }
    function closeChat() { $('#chat-overlay').hidden = true; }
    $('#btn-chat-1').addEventListener('click', openChat);
    $('#btn-chat-2').addEventListener('click', openChat);
    $('#chat-close').addEventListener('click', closeChat);
    $('#chat-send').addEventListener('click', function () { askChat($('#chat-input').value); });
    $('#chat-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') askChat($('#chat-input').value); });

    $('#btn-share').addEventListener('click', function () {
      var es = state.lang === 'es';
      var data = {
        title: 'Alpha Driving Academy',
        text: es ? 'Saca tu CDL en ~1 mes en Pantego, TX. Clases en español e inglés. (682) 358-8132 #AlphaCDLSchool' : 'Get your CDL in ~1 month in Pantego, TX. Classes in English & Spanish. (682) 358-8132 #AlphaCDLSchool',
        url: 'https://www.cdlalphadrivingschool.com/'
      };
      if (navigator.share) navigator.share(data).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(data.text + ' ' + data.url);
    });

    applyLang();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
