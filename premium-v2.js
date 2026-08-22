(() => {
  const onReady = (fn) => document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, {once:true})
    : fn();

  onReady(() => {
    const googleProfileUrl = 'https://www.google.com/maps/search/?api=1&query=Delicias+Daniel+Catering+Van+Nuys+CA';

    const hero = document.querySelector('.hero');
    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) {
      const existingTrust = heroCopy.querySelector('.hero-trust');
      if (existingTrust) existingTrust.remove();
      const trust = document.createElement('div');
      trust.className = 'hero-trust';
      trust.innerHTML = '<span>30+ years experience</span><span>Special-request orders</span><span>Custom quotes</span><span>Pickup & delivery options</span>';
      const number = heroCopy.querySelector('.number');
      if (number) number.insertAdjacentElement('afterend', trust);
      else heroCopy.appendChild(trust);
    }

    const actions = document.querySelector('.hero .actions');
    if (actions) {
      const primary = actions.querySelector('.primary');
      const secondary = actions.querySelector('.secondary');
      if (primary) { primary.textContent = 'Get a Custom Quote'; primary.href = '#quote'; }
      if (secondary) { secondary.textContent = 'View Menu'; secondary.href = '#menu'; }
    }

    document.querySelectorAll('img').forEach((img) => {
      if (!img.classList.contains('hero-bg') && !img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      if (!img.closest('.hero') && !img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    });

    const realFood = document.querySelector('.dd-real-food');
    const oldGallerySection = document.querySelector('.gallery')?.closest('section');
    if (hero && realFood) {
      hero.insertAdjacentElement('afterend', realFood);
      realFood.classList.add('dd-top-gallery');
    }
    if (oldGallerySection && oldGallerySection !== realFood) oldGallerySection.style.display = 'none';

    if (realFood && !document.querySelector('.chef-experience')) {
      const chef = document.createElement('section');
      chef.className = 'chef-experience';
      chef.innerHTML = `
        <div class="wrap chef-experience-grid">
          <div>
            <p class="kicker">Experience you can taste</p>
            <h2>30+ years of cooking & catering experience.</h2>
          </div>
          <div class="chef-experience-copy">
            <p>Delicias Daniel brings more than three decades of hands-on cooking and catering experience to birthdays, family celebrations, office meals, community gatherings, and special events. Mexican, Salvadoran, and American favorites are prepared with care, and special-request orders are welcome when availability allows.</p>
            <div class="chef-badges"><span>Special-request orders available</span><span>Custom menus</span><span>Made for your event</span><span>Call or text for a quote</span></div>
            <a class="btn primary" href="#quote">Request a custom quote</a>
          </div>
        </div>`;
      realFood.insertAdjacentElement('afterend', chef);
    }

    const replacePriceLanguage = (root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT','STYLE'].includes(parent.tagName)) return;
        let text = node.nodeValue || '';
        text = text.replace(/from\s*\$[\d,.]+/gi, 'Call for quote');
        text = text.replace(/\$[\d,.]+(?:\s*[-–]\s*\$?[\d,.]+)?/g, 'Call for quote');
        text = text.replace(/clear starting prices/gi, 'custom quotes for every order');
        text = text.replace(/starting prices?/gi, 'custom quotes');
        text = text.replace(/pickup pricing/gi, 'pickup details');
        text = text.replace(/prices? shown/gi, 'menu details shown');
        text = text.replace(/latest tray prices/gi, 'latest tray options');
        text = text.replace(/final pricing/gi, 'final quote');
        node.nodeValue = text;
      });
    };
    replacePriceLanguage(document.body);

    document.querySelectorAll('.price,.package-price,.ceviche-price strong').forEach(el => {
      el.textContent = 'Call for quote';
      el.classList.add('quote-only-price');
    });

    const menuHeading = document.querySelector('#menu .heading h2');
    if (menuHeading) menuHeading.textContent = 'Popular favorites. Custom quotes for every order.';
    const menuSub = document.querySelector('#menu .heading .sub');
    if (menuSub) menuSub.textContent = 'Choose from Mexican, Salvadoran, and American favorites. Quantities, special requests, pickup or delivery details, availability, and your final quote are personally confirmed for each event.';

    const grid = document.querySelector('.dd-kitchen-grid');
    if (grid) {
      const cards = [...grid.querySelectorAll('.dd-kitchen-card')];
      const priority = [
        'fresh-meat-grill','fresh-tortillas-grill','kitchen-12372','kitchen-12373',
        'kitchen-12370','kitchen-12371','kitchen-12375','kitchen-12374','kitchen-12387',
        'kitchen-12390','kitchen-12391','kitchen-12392','kitchen-12389','kitchen-12385',
        'kitchen-12388','kitchen-12379','kitchen-12380'
      ];
      const rank = (card) => {
        const img = card.querySelector('img');
        const haystack = `${img?.getAttribute('src') || ''} ${img?.dataset?.b64 || ''} ${img?.alt || ''}`.toLowerCase();
        const found = priority.findIndex(key => haystack.includes(key));
        return found === -1 ? 999 : found;
      };
      cards.sort((a,b) => rank(a) - rank(b)).forEach((card, index) => {
        card.classList.remove('dd-featured-photo','dd-hero-food','dd-wide-food','dd-extra-photo');
        if (index === 0 || index === 1) card.classList.add('dd-hero-food');
        else if (index === 2 || index === 3) card.classList.add('dd-wide-food');
        if (index >= 8) card.classList.add('dd-extra-photo');
        grid.appendChild(card);
      });

      if (!realFood.querySelector('.dd-gallery-toggle')) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'dd-gallery-toggle';
        toggle.textContent = 'See More From Our Kitchen';
        toggle.setAttribute('aria-expanded','false');
        toggle.addEventListener('click', () => {
          const expanded = realFood.classList.toggle('dd-gallery-expanded');
          toggle.textContent = expanded ? 'Show Fewer Photos' : 'See More From Our Kitchen';
          toggle.setAttribute('aria-expanded', String(expanded));
        });
        grid.insertAdjacentElement('afterend', toggle);
      }
    }

    document.querySelectorAll('.package').forEach((card, i) => {
      card.setAttribute('aria-label', card.querySelector('h4')?.textContent?.trim() || `Catering package ${i+1}`);
    });

    const reviewSection = document.querySelector('.reviews');
    const reviewBox = document.querySelector('.review-box');
    if (reviewSection) {
      const intro = reviewSection.querySelector('.sub');
      if (intro) intro.textContent = 'Read genuine customer feedback on Google and share your own experience after a completed order.';
    }
    if (reviewBox) {
      const stars = reviewBox.querySelector('.stars');
      if (stars) stars.style.display = 'none';
      const strong = reviewBox.querySelector('strong');
      if (strong) strong.textContent = 'Real customer feedback on Google.';
      reviewBox.querySelectorAll('.review-actions').forEach(node => node.remove());
      reviewBox.querySelectorAll('a.btn').forEach(node => node.remove());
      let note = reviewBox.querySelector('.google-review-note');
      if (!note) {
        note = document.createElement('p');
        note.className = 'google-review-note';
        reviewBox.appendChild(note);
      }
      note.textContent = 'Open our Google Business Profile to read reviews or choose Reviews to leave an honest review.';
      const wrap = document.createElement('div');
      wrap.className = 'review-actions';
      wrap.innerHTML = `<a class="btn primary" href="${googleProfileUrl}" target="_blank" rel="noopener noreferrer">Open Google Reviews</a><a class="btn review-secondary" href="${googleProfileUrl}" target="_blank" rel="noopener noreferrer">Leave a Review</a>`;
      reviewBox.appendChild(wrap);
    }

    const form = document.getElementById('form');
    if (form && !form.querySelector('[name="service"]')) {
      const detailsLabel = form.querySelector('textarea[name="details"]')?.closest('label');
      const extras = document.createElement('div');
      extras.className = 'quote-extras';
      extras.innerHTML = '<label><span class="quote-planner-label">Service</span><select name="service"><option value="">Choose one</option><option>Pickup</option><option>Delivery</option><option>Setup / staffed service</option><option>Not sure yet</option></select></label><label><span class="quote-planner-label">Menu interest</span><select name="menu_interest"><option value="">Choose one</option><option>Tacos</option><option>Pupusas</option><option>Tamales</option><option>American party food</option><option>Mixed / custom menu</option><option>Special request</option></select></label>';
      if (detailsLabel) detailsLabel.insertAdjacentElement('beforebegin', extras);
      else form.appendChild(extras);
    }

    const mobile = document.querySelector('.mobile');
    if (mobile && !mobile.querySelector('.mobile-quote')) {
      const quote = document.createElement('a');
      quote.href = '#quote';
      quote.className = 'mobile-quote';
      quote.textContent = 'Get Quote';
      mobile.appendChild(quote);
    }
  });
})();
