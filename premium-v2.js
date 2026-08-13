(() => {
  const onReady = (fn) => document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, {once:true})
    : fn();

  onReady(() => {
    const googleProfileUrl = 'https://www.google.com/maps/search/?api=1&query=Delicias+Daniel+Catering+Van+Nuys+CA';

    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy && !heroCopy.querySelector('.hero-trust')) {
      const trust = document.createElement('div');
      trust.className = 'hero-trust';
      trust.innerHTML = '<span>Real kitchen</span><span>Custom quotes</span><span>Pickup & delivery options</span><span>Van Nuys & nearby</span>';
      const number = heroCopy.querySelector('.number');
      if (number) number.insertAdjacentElement('afterend', trust);
      else heroCopy.appendChild(trust);
    }

    const actions = document.querySelector('.hero .actions');
    if (actions) {
      const primary = actions.querySelector('.primary');
      const secondary = actions.querySelector('.secondary');
      if (primary) { primary.textContent = 'Get a Quote'; primary.href = '#quote'; }
      if (secondary) { secondary.textContent = 'View Menu'; secondary.href = '#menu'; }
    }

    document.querySelectorAll('img').forEach((img) => {
      if (!img.classList.contains('hero-bg')) {
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      }
      if (!img.closest('.hero') && !img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    });

    document.querySelectorAll('.package').forEach((card, i) => {
      card.setAttribute('aria-label', card.querySelector('h4')?.textContent?.trim() || `Catering package ${i+1}`);
    });

    const reviewSection = document.querySelector('.reviews');
    const reviewBox = document.querySelector('.review-box');
    if (reviewSection) {
      const intro = reviewSection.querySelector('.sub');
      if (intro) intro.textContent = 'See Delicias Daniel on Google, read genuine customer feedback, and share your own experience after a completed order.';
    }
    if (reviewBox) {
      const stars = reviewBox.querySelector('.stars');
      if (stars) {
        stars.textContent = '★★★★★';
        stars.setAttribute('aria-label', 'Google review section');
      }
      const strong = reviewBox.querySelector('strong');
      if (strong) strong.textContent = 'Real customer feedback. No invented testimonials.';

      reviewBox.querySelectorAll('.review-actions').forEach(node => node.remove());
      reviewBox.querySelectorAll('a.btn').forEach(node => node.remove());

      if (!reviewBox.querySelector('.google-review-note')) {
        const note = document.createElement('p');
        note.className = 'google-review-note';
        note.textContent = 'Already ordered from us? Open our Google profile and choose Reviews to leave an honest review.';
        reviewBox.appendChild(note);
      }

      const wrap = document.createElement('div');
      wrap.className = 'review-actions';
      wrap.innerHTML = `<a class="btn primary" href="${googleProfileUrl}" target="_blank" rel="noopener noreferrer">Read Google Reviews</a><a class="btn review-secondary" href="${googleProfileUrl}" target="_blank" rel="noopener noreferrer">Leave a Google Review</a>`;
      reviewBox.appendChild(wrap);
    }

    const form = document.getElementById('form');
    if (form && !form.querySelector('[name="service"]')) {
      const detailsLabel = form.querySelector('textarea[name="details"]')?.closest('label');
      const extras = document.createElement('div');
      extras.className = 'quote-extras';
      extras.innerHTML = '<label><span class="quote-planner-label">Service</span><select name="service"><option value="">Choose one</option><option>Pickup</option><option>Delivery</option><option>Setup / staffed service</option><option>Not sure yet</option></select></label><label><span class="quote-planner-label">Menu interest</span><select name="menu_interest"><option value="">Choose one</option><option>Tacos</option><option>Pupusas</option><option>Tamales</option><option>American party food</option><option>Mixed / custom menu</option></select></label>';
      if (detailsLabel) detailsLabel.insertAdjacentElement('beforebegin', extras);
      else form.appendChild(extras);
    }

    if (form && !form.dataset.premiumQuoteBound) {
      form.dataset.premiumQuoteBound = '1';
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!form.reportValidity()) return;
        const f = new FormData(form);
        const lines = [
          "Hi Delicias Daniel, I'd like a catering quote.", '',
          `Name: ${f.get('name') || ''}`,
          `Event: ${f.get('event') || ''}`,
          `Date: ${f.get('date') || ''}`,
          `Guests: ${f.get('guests') || ''}`,
          `Location: ${f.get('location') || ''}`,
          `Service: ${f.get('service') || 'Not specified'}`,
          `Menu interest: ${f.get('menu_interest') || 'Not specified'}`,
          `Details: ${f.get('details') || ''}`
        ];
        location.href = `sms:18186908693?&body=${encodeURIComponent(lines.join('\n'))}`;
      }, true);

      const emailBtn = document.getElementById('email-quote');
      if (emailBtn) emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!form.reportValidity()) return;
        const f = new FormData(form);
        const body = [
          "Hi Delicias Daniel, I'd like a catering quote.", '',
          `Name: ${f.get('name') || ''}`,
          `Event: ${f.get('event') || ''}`,
          `Date: ${f.get('date') || ''}`,
          `Guests: ${f.get('guests') || ''}`,
          `Location: ${f.get('location') || ''}`,
          `Service: ${f.get('service') || 'Not specified'}`,
          `Menu interest: ${f.get('menu_interest') || 'Not specified'}`,
          `Details: ${f.get('details') || ''}`
        ].join('\n');
        location.href = `mailto:deliciasdanielcatering@gmail.com?subject=${encodeURIComponent('Catering quote request')}&body=${encodeURIComponent(body)}`;
      }, true);
    }

    const grid = document.querySelector('.dd-kitchen-grid');
    if (grid) {
      const cards = [...grid.querySelectorAll('.dd-kitchen-card')];
      const priority = [
        'fresh-tortillas-grill',
        'fresh-meat-grill',
        'kitchen-12372',
        'kitchen-12373',
        'kitchen-12370',
        'kitchen-12371',
        'kitchen-12375',
        'kitchen-12390',
        'kitchen-12391',
        'kitchen-12392',
        'kitchen-12374',
        'kitchen-12387',
        'kitchen-12389',
        'kitchen-12385',
        'kitchen-12388',
        'kitchen-12379',
        'kitchen-12380'
      ];

      const rank = (card) => {
        const img = card.querySelector('img');
        const haystack = `${img?.getAttribute('src') || ''} ${img?.dataset?.b64 || ''} ${img?.alt || ''}`.toLowerCase();
        const found = priority.findIndex(key => haystack.includes(key));
        return found === -1 ? 999 : found;
      };

      cards.sort((a,b) => rank(a) - rank(b)).forEach((card, index) => {
        card.classList.remove('dd-featured-photo','dd-hero-food','dd-wide-food');
        if (index === 0 || index === 1) card.classList.add('dd-hero-food');
        else if (index === 2 || index === 3 || index === 4) card.classList.add('dd-wide-food');
        grid.appendChild(card);
      });
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
