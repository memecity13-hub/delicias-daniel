(() => {
  const menus = {
    en: {
      kicker: "Mexican, American & Salvadoran catering",
      title: "Easy, crowd-friendly menu ideas.",
      intro: "Choose a simple favorite or combine dishes into a custom party menu. Final availability, portions, and pricing are confirmed with your quote.",
      items: [
        ["🫓", "Pupusas", "Bean, bean and cheese, or mixed with chicharrón. Ask about curtido and salsa roja."],
        ["🌮", "Taco trays", "Al pastor, chicken, or beef tacos with tortillas, limes, and red or green salsa."],
        ["🥖", "Pan con pollo", "Salvadoran-style chicken sandwiches prepared for parties and family gatherings."],
        ["🧀", "Quesadilla trays", "Cheese or chicken quesadillas cut into easy-to-serve party portions."],
        ["🍗", "Chicken party trays", "Seasoned chicken with rice, beans, salad, or tortillas for a simple complete meal."],
        ["🍔", "American party favorites", "Ask about sliders, chicken tenders, macaroni and cheese, and pasta salad."],
        ["🍚", "Rice, beans & sides", "Complete the table with available rice, beans, salad, chips, or other sides."],
        ["🌶️", "Salsas & extras", "Add red or green salsa, fresh limes, toppings, tortillas, and available extras."],
        ["✨", "Mixed celebration menu", "Combine Mexican, American, and Salvadoran favorites for your event and guest count."]
      ],
      combosTitle: "Quick menu combinations",
      combos: [
        ["Taco Party", "Taco trays + rice + beans + limes + red or green salsa"],
        ["Pupusa Gathering", "Pupusas + curtido + salsa roja + available sides"],
        ["Family Celebration", "Pan con pollo + rice + salad + chips and salsa"]
      ],
      note: "Menu ideas are examples only. Delicias Daniel confirms every dish, quantity, service detail, and price before booking.",
      feature: "Availability and pricing are confirmed through a personalized quote so every event can be planned accurately.",
      adLabel: "Partner spotlight",
      adText: "Discover ABARCALYST — One World. Trusted Commerce.",
      adButton: "Visit ABARCALYST"
    },
    es: {
      kicker: "Catering mexicano, americano y salvadoreño",
      title: "Menús fáciles para compartir.",
      intro: "Elige un platillo favorito o combina varias opciones para crear un menú de fiesta. La disponibilidad, porciones y precios se confirman con tu cotización.",
      items: [
        ["🫓", "Pupusas", "De frijol, frijol con queso o revueltas con chicharrón. Pregunta por curtido y salsa roja."],
        ["🌮", "Charolas de tacos", "Tacos al pastor, de pollo o de res con tortillas, limones y salsa roja o verde."],
        ["🥖", "Pan con pollo", "Pan con pollo al estilo salvadoreño para fiestas y reuniones familiares."],
        ["🧀", "Charolas de quesadillas", "Quesadillas de queso o pollo cortadas en porciones fáciles de servir."],
        ["🍗", "Charolas de pollo", "Pollo sazonado con arroz, frijoles, ensalada o tortillas para una comida completa."],
        ["🍔", "Favoritos americanos", "Pregunta por sliders, tiras de pollo, macarrones con queso y ensalada de pasta."],
        ["🍚", "Arroz, frijoles y acompañamientos", "Completa la mesa con arroz, frijoles, ensalada, chips u otros acompañamientos disponibles."],
        ["🌶️", "Salsas y extras", "Agrega salsa roja o verde, limones, ingredientes, tortillas y extras disponibles."],
        ["✨", "Menú mixto para celebraciones", "Combina platillos mexicanos, americanos y salvadoreños según tu evento e invitados."]
      ],
      combosTitle: "Combinaciones rápidas",
      combos: [
        ["Fiesta de tacos", "Charolas de tacos + arroz + frijoles + limones + salsa roja o verde"],
        ["Reunión con pupusas", "Pupusas + curtido + salsa roja + acompañamientos disponibles"],
        ["Celebración familiar", "Pan con pollo + arroz + ensalada + chips y salsa"]
      ],
      note: "Los menús son ejemplos. Delicias Daniel confirma cada platillo, cantidad, detalle de servicio y precio antes de reservar.",
      feature: "La disponibilidad y los precios se confirman mediante una cotización personalizada para planear correctamente cada evento.",
      adLabel: "Socio destacado",
      adText: "Descubre ABARCALYST — Un mundo. Comercio confiable.",
      adButton: "Visitar ABARCALYST"
    },
    hy: {
      kicker: "Մեքսիկական, ամերիկյան և սալվադորական քեյթրինգ",
      title: "Հեշտ և հյուրասիրության համար հարմար մենյու։",
      intro: "Ընտրեք մեկ սիրված ուտեստ կամ համադրեք տարբերակները։ Հասանելիությունը, չափաբաժիններն ու գները հաստատվում են գնառաջարկով։",
      items: [
        ["🫓", "Պուպուսաներ", "Լոբով, լոբով ու պանրով կամ չիչարոնով խառը տարբերակ։ Հարցրեք curtido-ի և կարմիր սալսայի մասին։"],
        ["🌮", "Տակոների սկուտեղներ", "Al pastor, հավի կամ տավարի տակոներ՝ տորտիլյաներով, լայմով և կարմիր կամ կանաչ սալսայով։"],
        ["🥖", "Pan con pollo", "Սալվադորական ոճի հավով սենդվիչներ՝ խնջույքների և ընտանեկան հավաքույթների համար։"],
        ["🧀", "Քեսադիլյայի սկուտեղներ", "Պանրով կամ հավով քեսադիլյաներ՝ հեշտ մատուցվող բաժիններով։"],
        ["🍗", "Հավի սկուտեղներ", "Համեմված հավ՝ բրնձով, լոբով, աղցանով կամ տորտիլյաներով։"],
        ["🍔", "Ամերիկյան սիրված ուտեստներ", "Հարցրեք սլայդերների, հավի կտորների, մակարոն-պանրի և մակարոնային աղցանի մասին։"],
        ["🍚", "Բրինձ, լոբի և խավարտներ", "Լրացրեք սեղանը բրնձով, լոբով, աղցանով, չիպսերով կամ այլ հասանելի խավարտներով։"],
        ["🌶️", "Սալսաներ և հավելումներ", "Ավելացրեք կարմիր կամ կանաչ սալսա, թարմ լայմ, տորտիլյաներ և հասանելի հավելումներ։"],
        ["✨", "Խառը տոնական մենյու", "Համադրեք մեքսիկական, ամերիկյան և սալվադորական ուտեստները՝ ըստ միջոցառման։"]
      ],
      combosTitle: "Արագ մենյուի համադրություններ",
      combos: [
        ["Տակոների խնջույք", "Տակոների սկուտեղներ + բրինձ + լոբի + լայմ + կարմիր կամ կանաչ սալսա"],
        ["Պուպուսաների հավաքույթ", "Պուպուսաներ + curtido + կարմիր սալսա + հասանելի խավարտներ"],
        ["Ընտանեկան տոն", "Pan con pollo + բրինձ + աղցան + չիպս և սալսա"]
      ],
      note: "Մենյուները օրինակներ են։ Delicias Daniel-ը ամրագրումից առաջ հաստատում է ուտեստները, քանակը, սպասարկումը և գինը։",
      feature: "Հասանելիությունն ու գները հաստատվում են անհատական գնառաջարկով, որպեսզի յուրաքանչյուր միջոցառում ճիշտ պլանավորվի։",
      adLabel: "Գործընկեր",
      adText: "Բացահայտեք ABARCALYST-ը — One World. Trusted Commerce.",
      adButton: "Այցելել ABARCALYST"
    }
  };

  const style = document.createElement("style");
  style.textContent = `
    .menu .cards{grid-template-columns:repeat(3,1fr)!important}
    .quick-combos{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
    .quick-combo{padding:20px 22px;background:#fff;border:1px solid #ead8c2;border-radius:18px}
    .quick-combo strong{display:block;margin-bottom:7px;color:#6f1c10;font-size:16px}
    .quick-combo span{color:#725e56;font-size:13px;line-height:1.55}
    .combo-title{margin:34px 0 0;font-family:Georgia,serif;font-size:30px}
    .abarcalyst-banner{display:flex;align-items:center;justify-content:space-between;gap:22px;padding:22px max(20px,calc((100vw - 1160px)/2));color:white;background:linear-gradient(100deg,#0a1224,#162b52)}
    .abarcalyst-copy{display:grid;gap:4px}.abarcalyst-copy small{color:#8db8ff;font-weight:900;letter-spacing:1.5px;text-transform:uppercase}.abarcalyst-copy strong{font-size:17px}
    .abarcalyst-button{flex:0 0 auto;padding:12px 18px;border:1px solid #ffffff55;border-radius:24px;background:#ffffff12;font-weight:900}
    @media(max-width:850px){.quick-combos{grid-template-columns:1fr}.abarcalyst-banner{align-items:flex-start;flex-direction:column}.abarcalyst-button{width:100%;text-align:center}}
  `;
  document.head.appendChild(style);

  const render = (lang = "en") => {
    const data = menus[lang] || menus.en;
    const menu = document.querySelector("section.menu");
    if (menu) {
      const heading = menu.querySelector(".heading");
      const cards = menu.querySelector(".cards");
      const note = menu.querySelector(".note");
      if (heading) heading.innerHTML = `<p class="kicker">${data.kicker}</p><h2>${data.title}</h2><p class="sub">${data.intro}</p>`;
      if (cards) cards.innerHTML = data.items.map(([icon,title,copy]) => `<article class="card"><span class="icon">${icon}</span><h3>${title}</h3><p>${copy}</p></article>`).join("");
      if (note) {
        note.textContent = `ⓘ ${data.note}`;
        let comboTitle = menu.querySelector(".combo-title");
        let combos = menu.querySelector(".quick-combos");
        if (!comboTitle) {
          comboTitle = document.createElement("h3");
          comboTitle.className = "combo-title";
          note.before(comboTitle);
        }
        if (!combos) {
          combos = document.createElement("div");
          combos.className = "quick-combos";
          note.before(combos);
        }
        comboTitle.textContent = data.combosTitle;
        combos.innerHTML = data.combos.map(([title,copy]) => `<div class="quick-combo"><strong>${title}</strong><span>${copy}</span></div>`).join("");
      }
    }

    const featureCopy = document.querySelector(".feature-copy p:not(.eyebrow)");
    if (featureCopy) featureCopy.textContent = data.feature;

    // Keep the primary cinematic ABARCALYST feature; remove only the small footer duplicate.
    document.querySelector(".abarcalyst-banner")?.remove();
  };

  const activeLanguage = () => document.querySelector("[data-lang].active")?.dataset.lang || "en";
  render(activeLanguage());
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => setTimeout(() => render(button.dataset.lang), 0)));
})();
