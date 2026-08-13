(() => {
  const onReady = (fn) => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  onReady(() => {
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

    document.querySelectorAll('.package').forEach((card, i) => {
      card.setAttribute('aria-label', card.querySelector('h4')?.textContent?.trim() || `Catering package ${i+1}`);
    });

    const reviewBox = document.querySelector('.review-box');
    if (reviewBox) {
      const strong = reviewBox.querySelector('strong');
      if (strong) strong.textContent = 'Real customer feedback, published only with permission.';
      const old = reviewBox.querySelector('a.btn');
      if (old) old.remove();
      if (!reviewBox.querySelector('.review-actions')) {
        const wrap = document.createElement('div');
        wrap.className = 'review-actions';
        wrap.innerHTML = '<a class="btn primary" href="https://www.google.com/search?q=Delicias+Daniel+Catering+Van+Nuys" target="_blank" rel="noopener noreferrer">View on Google</a><a class="btn review-secondary" href="sms:18186908693?&body=Hi%20Delicias%20Daniel%2C%20I%27d%20like%20to%20share%20feedback%20about%20my%20catering%20experience.">Share feedback</a>';
        reviewBox.appendChild(wrap);
      }
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
      const featured = [...grid.querySelectorAll('.dd-kitchen-card')].filter(card => card.querySelector('img[src*="fresh-tortillas-grill"],img[src*="fresh-meat-grill"]'));
      featured.reverse().forEach(card => { card.classList.add('dd-featured-photo'); grid.prepend(card); });
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
