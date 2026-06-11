/**
 * Meat Republic Meru - Main Application
 * Version: 3.1.0 - Corrected WhatsApp Contact + Enhanced CSS Integration
 * Real Contact: 0107506429 (254107506429)
 */

(function() {
  'use strict';

  // ==================== REAL BUSINESS CONTACT ====================
  const BUSINESS_PHONE = "254107506429";  // Real number: 0107506429
  const BUSINESS_PHONE_DISPLAY = "010 750 6429";
  const WHATSAPP_LINK = `https://wa.me/${BUSINESS_PHONE}`;
  const TEL_LINK = `tel:+${BUSINESS_PHONE}`;

  // ==================== CENTRALIZED IMAGE PATH REGISTRY ====================
  window.IMAGE_PATHS = {
    hero: {
      main: 'assets/images/hero/hero-main.webp',
      plate: 'assets/images/hero/hero-plate.webp',
      background: 'assets/images/hero/hero-bg.webp'
    },
    menu: {
      goat: 'assets/images/menu/goat-choma.webp',
      beef: 'assets/images/menu/beef-choma.webp',
      pork: 'assets/images/menu/pork-choma.webp',
      chicken: 'assets/images/menu/chicken-choma.webp',
      fish: 'assets/images/menu/fish-choma.webp',
      sides: 'assets/images/menu/sides-drinks.webp'
    },
    gallery: {
      gallery01: 'assets/images/gallery/gallery-01.webp',
      gallery02: 'assets/images/gallery/gallery-02.webp',
      gallery03: 'assets/images/gallery/gallery-03.webp',
      gallery04: 'assets/images/gallery/gallery-04.webp',
      gallery05: 'assets/images/gallery/gallery-05.webp',
      gallery06: 'assets/images/gallery/gallery-06.webp'
    },
    catering: {
      wedding: 'assets/images/catering/wedding-catering.webp',
      corporate: 'assets/images/catering/corporate-catering.webp',
      eventSetup: 'assets/images/catering/event-setup.webp'
    },
    about: {
      story: 'assets/images/about/restaurant-story.webp',
      chef: 'assets/images/about/chef-team.webp',
      interior: 'assets/images/about/restaurant-interior.webp'
    },
    contact: {
      map: 'assets/images/contact/location-map.webp',
      front: 'assets/images/contact/restaurant-front.webp'
    },
    testimonials: {
      customer1: 'assets/images/testimonials/customer-01.webp',
      customer2: 'assets/images/testimonials/customer-02.webp'
    },
    branding: {
      logo: 'assets/images/branding/logo.webp',
      logoDark: 'assets/images/branding/logo-dark.webp',
      favicon: 'assets/images/branding/favicon.ico'
    },
    og: {
      image: 'assets/images/og/og-image.webp',
      twitter: 'assets/images/og/twitter-card.webp'
    }
  };

  // ==================== DATA ====================
  const MENU_DATA = [
    { id: 'g1', cat: 'goat', emoji: '🐐', name: 'Goat Choma (Mbuzi)', desc: 'Tender young goat slow-roasted over charcoal. The Meru classic.', price: 'KSh 850/kg', badge: '🔥 Best Seller' },
    { id: 'g2', cat: 'goat', emoji: '🍖', name: 'Goat Ribs (Mbavu za Mbuzi)', desc: 'Juicy goat ribs, charred and served with kachumbari.', price: 'KSh 900/kg', badge: '' },
    { id: 'b1', cat: 'beef', emoji: '🥩', name: 'Beef Choma (Ng\'ombe)', desc: 'Prime cuts of Meru beef, fire-grilled to perfection.', price: 'KSh 780/kg', badge: '' },
    { id: 'b2', cat: 'beef', emoji: '🫀', name: 'Beef Liver (Ini)', desc: 'Sliced beef liver, grilled with onions and spices.', price: 'KSh 650/kg', badge: '' },
    { id: 'p1', cat: 'pork', emoji: '🐷', name: 'Pork Choma', desc: 'Succulent pork, roasted over open fire. Crispy and juicy.', price: 'KSh 720/kg', badge: '🌟 Fan Fave' },
    { id: 'p2', cat: 'pork', emoji: '🍖', name: 'Pork Ribs (Mbavu)', desc: 'Full slab of pork ribs, slow-charred.', price: 'KSh 760/kg', badge: '' },
    { id: 'c1', cat: 'chicken', emoji: '🍗', name: 'Kuku Choma (Half)', desc: 'Half kienyeji chicken, slow-roasted.', price: 'KSh 550/half', badge: '' },
    { id: 'c2', cat: 'chicken', emoji: '🐔', name: 'Kuku Choma (Whole)', desc: 'Whole free-range chicken roasted over charcoal.', price: 'KSh 1,050/whole', badge: '👨‍👩‍👧 Family' },
    { id: 'f1', cat: 'fish', emoji: '🐟', name: 'Tilapia Choma (Whole)', desc: 'Whole fresh tilapia, grilled with garlic, lemon & herbs.', price: 'KSh 600/piece', badge: '' },
    { id: 'f2', cat: 'fish', emoji: '🐠', name: 'Catfish (Kamongo) Choma', desc: 'Local catfish, spiced and roasted over charcoal.', price: 'KSh 650/piece', badge: '🌿 Local Fave' },
    { id: 's1', cat: 'sides', emoji: '🫓', name: 'Ugali', desc: 'Thick white maize ugali. The perfect choma companion.', price: 'KSh 80/portion', badge: '' },
    { id: 's2', cat: 'sides', emoji: '🥗', name: 'Kachumbari', desc: 'Fresh diced tomatoes, onions, coriander & chilli.', price: 'KSh 80/bowl', badge: '' },
    { id: 'd1', cat: 'drinks', emoji: '🍺', name: 'Tusker Lager (500ml)', desc: 'Kenya\'s iconic beer. Cold, crisp and perfect with choma.', price: 'KSh 250/bottle', badge: '🇰🇪 Kenyan' },
    { id: 'd2', cat: 'drinks', emoji: '🥤', name: 'Sodas (350ml)', desc: 'Coca-Cola, Fanta, Sprite, Krest. Ice cold.', price: 'KSh 80/bottle', badge: '' }
  ];

  const GALLERY_DATA = [
    { cat: 'goat', emoji: '🐐', label: 'Goat Choma', size: 'tall' },
    { cat: 'beef', emoji: '🥩', label: 'Beef Choma', size: 'short' },
    { cat: 'pork', emoji: '🐷', label: 'Pork Ribs', size: 'medium' },
    { cat: 'goat', emoji: '🔥', label: 'Charcoal Fire', size: 'short' },
    { cat: 'chicken', emoji: '🍗', label: 'Kuku Choma', size: 'tall' },
    { cat: 'restaurant', emoji: '🏠', label: 'Indoor Dining', size: 'medium' },
    { cat: 'events', emoji: '🎉', label: 'Catering Event', size: 'short' }
  ];

  const WHY_DATA = [
    { icon: '🔥', title: 'Authentic Charcoal Fire', desc: 'Real wood charcoal, no gas shortcuts.' },
    { icon: '🌿', title: 'Farm-Fresh Daily', desc: 'Sourced daily from local Meru farms.' },
    { icon: '👨‍🍳', title: 'Master Grill Men', desc: 'Our grill masters have been roasting choma for over 8 years.' },
    { icon: '🏡', title: 'Family-Friendly Space', desc: 'Spacious seating indoors and outdoors.' },
    { icon: '📍', title: 'Prime Location', desc: 'Opposite Meru National Polytechnic.' },
    { icon: '🎉', title: 'Event Catering', desc: 'We handle events across Meru County.' }
  ];

  const PACKAGES_DATA = [
    { name: 'Corporate Package', icon: '👨‍💼', desc: 'Perfect for company events and team building.', features: ['30–500 guests', 'Full setup', 'Goat, Beef, Chicken'], featured: false },
    { name: 'Wedding Package', icon: '💍', desc: 'Make your special day unforgettable.', features: ['50–1,500 guests', 'Premium meat', 'Serving staff'], featured: true },
    { name: 'Graduation Package', icon: '🎓', desc: 'Celebrate your milestone in style.', features: ['20–300 guests', 'Flexible menu', 'Budget-friendly'], featured: false }
  ];

  const TESTIMONIALS_DATA = [
    { stars: '★★★★★', quote: 'The best goat choma in Meru, hands down. The charcoal flavour is unmatched!', author: 'James Mutuma', location: 'Meru Town' },
    { stars: '★★★★★', quote: 'We used Meat Republic for our company event — 150 people! Everyone loved the pork ribs.', author: 'Grace Karimi', location: 'Meru — Corporate Client' },
    { stars: '★★★★★', quote: 'Opposite the poly, always packed on Friday evenings. Call 0107506429 to book!', author: 'Peter Murithi', location: 'Meru National Polytechnic' }
  ];

  // ==================== UTILITY FUNCTIONS ====================
  function getBgClass(cat) {
    const colors = {
      goat: 'linear-gradient(135deg,#3D1A0A,#5C2A10)',
      beef: 'linear-gradient(135deg,#4A1A0A,#6B2C10)',
      pork: 'linear-gradient(135deg,#3D1810,#5C2818)',
      chicken: 'linear-gradient(135deg,#3D2A0A,#5C4010)',
      fish: 'linear-gradient(135deg,#0A2040,#0D3060)',
      sides: 'linear-gradient(135deg,#1A2A0A,#2C4010)',
      drinks: 'linear-gradient(135deg,#0A1A3D,#102060)',
      restaurant: 'linear-gradient(135deg,#2C1409,#1A0804)',
      events: 'linear-gradient(135deg,#1A0F0A,#2C1409)'
    };
    return colors[cat] || 'linear-gradient(135deg,#2C1409,#1A0804)';
  }

  function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = message;
      toast.style.background = type === 'error' ? '#CC3700' : '#1a7a3e';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  }

  function orderWhatsApp(item) {
    const message = `Hello Meat Republic Meru! I would like to order: ${item}. Please confirm availability and price.`;
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  function callBusiness() {
    window.location.href = TEL_LINK;
  }

  // ==================== THEME TOGGLE ====================
  function initThemeToggle() {
    const savedTheme = localStorage.getItem('meatRepublicTheme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.innerHTML = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    toggleBtn.setAttribute('aria-label', 'Toggle dark/light theme');
    toggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('meatRepublicTheme', 'light');
        toggleBtn.innerHTML = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('meatRepublicTheme', 'dark');
        toggleBtn.innerHTML = '☀️';
      }
    });
    document.body.appendChild(toggleBtn);
  }

  // ==================== RENDER FUNCTIONS ====================
  function renderMeatsGrid() {
    const grid = document.getElementById('meatsGrid');
    if (!grid) return;
    grid.innerHTML = `
      <div class="meat-card" data-page="menu"><span class="meat-badge">🔥 Best Seller</span><div class="meat-card-img">🐐</div><div class="meat-card-body"><div class="meat-card-name">Goat Choma</div><div class="meat-card-desc">Tender young goat slow-roasted over charcoal.</div><div class="meat-card-footer"><span class="meat-price"><sup>KSh </sup>850<small>/kg</small></span><button class="meat-order-btn" data-order="Goat Choma">Order Now</button></div></div></div>
      <div class="meat-card" data-page="menu"><div class="meat-card-img">🥩</div><div class="meat-card-body"><div class="meat-card-name">Beef Choma</div><div class="meat-card-desc">Prime cuts of beef, marinated in local spices.</div><div class="meat-card-footer"><span class="meat-price"><sup>KSh </sup>780<small>/kg</small></span><button class="meat-order-btn" data-order="Beef Choma">Order Now</button></div></div></div>
      <div class="meat-card" data-page="menu"><span class="meat-badge" style="background: var(--primary);">🌟 Fan Fave</span><div class="meat-card-img">🐷</div><div class="meat-card-body"><div class="meat-card-name">Pork Choma</div><div class="meat-card-desc">Succulent pork ribs and chops, seasoned and roasted.</div><div class="meat-card-footer"><span class="meat-price"><sup>KSh </sup>720<small>/kg</small></span><button class="meat-order-btn" data-order="Pork Choma">Order Now</button></div></div></div>
      <div class="meat-card" data-page="menu"><div class="meat-card-img">🍗</div><div class="meat-card-body"><div class="meat-card-name">Kuku Choma</div><div class="meat-card-desc">Whole or half kienyeji chicken, slow-roasted.</div><div class="meat-card-footer"><span class="meat-price"><sup>KSh </sup>650<small>/kg</small></span><button class="meat-order-btn" data-order="Kuku Choma">Order Now</button></div></div></div>
      <div class="meat-card" data-page="menu"><div class="meat-card-img">🐟</div><div class="meat-card-body"><div class="meat-card-name">Samaki Choma</div><div class="meat-card-desc">Fresh whole tilapia or catfish, grilled over open fire.</div><div class="meat-card-footer"><span class="meat-price"><sup>KSh </sup>600<small>/pc</small></span><button class="meat-order-btn" data-order="Samaki Choma">Order Now</button></div></div></div>
      <div class="meat-card" data-page="catering"><div class="meat-card-img">🍽️</div><div class="meat-card-body"><div class="meat-card-name">Catering Services</div><div class="meat-card-desc">We bring the Meat Republic experience to your event.</div><div class="meat-card-footer"><span class="meat-price" style="font-size:0.82rem;">Custom Packages</span><button class="meat-order-btn" data-catering="true">Enquire</button></div></div></div>
    `;
  }

  function renderWhyGrid() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;
    grid.innerHTML = WHY_DATA.map(w => `<div class="why-card"><div class="why-icon">${w.icon}</div><div class="why-title">${w.title}</div><div class="why-desc">${w.desc}</div></div>`).join('');
  }

  function renderGalleryPreview() {
    const preview = document.getElementById('galleryPreview');
    if (!preview) return;
    preview.innerHTML = `
      <div style="background:linear-gradient(135deg,#3D1A0A,#5C2A10); display:flex; align-items:center; justify-content:center; font-size:3rem; padding:40px; border-radius:16px;">🔥</div>
      <div style="background:linear-gradient(135deg,#4A1A0A,#6B2C10); display:flex; align-items:center; justify-content:center; font-size:3rem; padding:40px; border-radius:16px;">🐐</div>
      <div style="background:linear-gradient(135deg,#3D1810,#5C2818); display:flex; align-items:center; justify-content:center; font-size:3rem; padding:40px; border-radius:16px;">🥩</div>
    `;
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    grid.innerHTML = TESTIMONIALS_DATA.map(t => `
      <div class="testi-card"><div class="testi-stars">${t.stars}</div><p class="testi-quote">"${t.quote}"</p><div class="testi-author"><div class="testi-avatar">${t.author.charAt(0)}</div><div><div class="testi-name">${t.author}</div><div class="testi-loc">${t.location}</div></div></div></div>
    `).join('');
  }

  function renderPackagesGrid() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    grid.innerHTML = PACKAGES_DATA.map(p => `
      <div class="package-card ${p.featured ? 'featured' : ''}"><div class="package-icon">${p.icon}</div><div class="package-name">${p.name}</div><div class="package-desc">${p.desc}</div><ul class="package-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul><button class="btn-primary" data-scroll="inquiryForm">Get Quote</button></div>
    `).join('');
  }

  function renderMenuCats() {
    const container = document.getElementById('menuCats');
    if (!container) return;
    const cats = ['all', 'goat', 'beef', 'pork', 'chicken', 'fish', 'sides', 'drinks'];
    const labels = { all: 'All', goat: '🐐 Goat', beef: '🥩 Beef', pork: '🐷 Pork', chicken: '🍗 Chicken', fish: '🐟 Fish', sides: '🫛 Sides', drinks: '🍺 Drinks' };
    container.innerHTML = cats.map(cat => `<button class="cat-btn ${cat === 'all' ? 'active' : ''}" data-cat="${cat}" role="tab">${labels[cat]}</button>`).join('');
  }

  function renderGalleryFilters() {
    const container = document.getElementById('galleryFilters');
    if (!container) return;
    const cats = ['all', 'goat', 'beef', 'pork', 'chicken', 'restaurant', 'events'];
    const labels = { all: 'All', goat: '🐐 Goat Choma', beef: '🥩 Beef', pork: '🐷 Pork', chicken: '🍗 Chicken', restaurant: '🏠 Restaurant', events: '🎉 Events' };
    container.innerHTML = cats.map(cat => `<button class="cat-btn ${cat === 'all' ? 'active' : ''}" data-gcat="${cat}" role="tab">${labels[cat]}</button>`).join('');
  }

  function renderMenu(category) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    const items = category === 'all' ? MENU_DATA : MENU_DATA.filter(item => item.cat === category);
    grid.innerHTML = items.map(item => `
      <div class="menu-item"><div class="menu-item-img" style="background:${getBgClass(item.cat)};">${item.emoji}${item.badge ? `<span style="position:absolute;top:10px;right:10px;background:var(--accent);color:white;font-size:0.62rem;padding:3px 9px;border-radius:100px;font-family:'Righteous',cursive;">${item.badge}</span>` : ''}</div><div class="menu-item-body"><div class="menu-item-name">${item.name}</div><div class="menu-item-desc">${item.desc}</div><div class="menu-item-footer"><span class="menu-item-price">${item.price}</span><button class="menu-item-order" data-order="${item.name.replace(/'/g, "\\'")}">Order 📲</button></div></div></div>
    `).join('');
    attachMenuOrderListeners();
  }

  function renderGallery(category) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    const items = category === 'all' ? GALLERY_DATA : GALLERY_DATA.filter(item => item.cat === category);
    grid.innerHTML = items.map(item => `<div class="gallery-item"><div class="gallery-cell gallery-cell-${item.size}" style="background:${getBgClass(item.cat)};">${item.emoji}<div class="gallery-overlay"><span>${item.label}</span></div></div></div>`).join('');
  }

  function attachMenuOrderListeners() {
    document.querySelectorAll('.menu-item-order').forEach(btn => {
      btn.removeEventListener('click', menuOrderHandler);
      btn.addEventListener('click', menuOrderHandler);
    });
  }

  function menuOrderHandler(e) {
    e.stopPropagation();
    const item = this.getAttribute('data-order');
    if (item) orderWhatsApp(item);
  }

  function attachMeatOrderListeners() {
    document.querySelectorAll('.meat-order-btn').forEach(btn => {
      btn.removeEventListener('click', meatOrderHandler);
      btn.addEventListener('click', meatOrderHandler);
    });
  }

  function meatOrderHandler(e) {
    e.stopPropagation();
    const orderItem = this.getAttribute('data-order');
    if (orderItem) orderWhatsApp(orderItem);
    if (this.hasAttribute('data-catering')) navigate('catering');
  }

  // ==================== NAVIGATION ====================
  let currentPage = 'home';

  function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.add('active');
    currentPage = pageId;

    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === pageId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'menu') renderMenu('all');
    if (pageId === 'gallery') renderGallery('all');
  }

  // ==================== FORM HANDLERS ====================
  function submitCateringHandler() {
    const name = document.getElementById('c_name')?.value.trim();
    const phone = document.getElementById('c_phone')?.value.trim();
    const eventType = document.getElementById('c_event')?.value;
    const guests = document.getElementById('c_guests')?.value.trim();
    const date = document.getElementById('c_date')?.value;
    if (!name || !phone || !eventType || !guests || !date) {
      showToast('⚠️ Please fill all required fields.', 'error');
      return;
    }
    // Send to WhatsApp
    const message = `CATERING INQUIRY\nName: ${name}\nPhone: ${phone}\nEvent: ${eventType}\nGuests: ${guests}\nDate: ${date}\nMessage: ${document.getElementById('c_msg')?.value || 'N/A'}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    
    const fields = document.getElementById('cateringFormFields');
    const submitBtn = document.getElementById('submitCatering');
    const success = document.getElementById('cateringSuccess');
    if (fields) fields.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    if (success) success.style.display = 'block';
    showToast('✅ Inquiry sent! Check WhatsApp for response.', 'success');
  }

  function submitContactHandler() {
    const name = document.getElementById('ct_name')?.value.trim();
    const phone = document.getElementById('ct_phone')?.value.trim();
    const subject = document.getElementById('ct_subject')?.value;
    const msg = document.getElementById('ct_msg')?.value.trim();
    if (!name || !phone || !msg) {
      showToast('⚠️ Please fill your name, phone and message.', 'error');
      return;
    }
    const message = `CONTACT FORM\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${msg}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    
    const success = document.getElementById('contactSuccess');
    if (success) success.style.display = 'block';
    showToast('✅ Message sent! We will respond shortly.', 'success');
  }

  function submitReservationHandler() {
    const name = document.getElementById('r_name')?.value.trim();
    const phone = document.getElementById('r_phone')?.value.trim();
    const date = document.getElementById('r_date')?.value;
    const time = document.getElementById('r_time')?.value;
    const guests = document.getElementById('r_guests')?.value;
    if (!name || !phone || !date || !time) {
      showToast('⚠️ Please fill all required fields.', 'error');
      return;
    }
    const message = `TABLE RESERVATION\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nSpecial: ${document.getElementById('r_msg')?.value || 'None'}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    
    const success = document.getElementById('resSuccess');
    const submitBtn = document.getElementById('submitReservation');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    if (success) success.style.display = 'block';
    if (submitBtn) submitBtn.style.display = 'none';
    if (step2) step2.classList.add('done');
    if (step3) step3.classList.add('active');
    showToast('🎉 Reservation request sent!', 'success');
  }

  // ==================== MOBILE MENU ====================
  function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const expanded = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', expanded);
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const page = el.getAttribute('data-page');
        if (page) navigate(page);
      });
    });

    document.querySelectorAll('#menuCats .cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (cat) {
          document.querySelectorAll('#menuCats .cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderMenu(cat);
        }
      });
    });

    document.querySelectorAll('#galleryFilters .cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-gcat');
        if (cat) {
          document.querySelectorAll('#galleryFilters .cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderGallery(cat);
        }
      });
    });

    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-scroll');
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const cateringBtn = document.getElementById('submitCatering');
    if (cateringBtn) cateringBtn.addEventListener('click', submitCateringHandler);

    const contactBtn = document.getElementById('submitContact');
    if (contactBtn) contactBtn.addEventListener('click', submitContactHandler);

    const reserveBtn = document.getElementById('submitReservation');
    if (reserveBtn) reserveBtn.addEventListener('click', submitReservationHandler);

    document.querySelectorAll('.meat-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('meat-order-btn')) return;
        const page = card.getAttribute('data-page');
        if (page) navigate(page);
      });
    });

    attachMeatOrderListeners();
  }

  // ==================== EMBERS ANIMATION ====================
  function spawnEmbers() {
    const container = document.getElementById('embers');
    if (!container) return;
    for (let i = 0; i < 24; i++) {
      const e = document.createElement('div');
      e.classList.add('ember');
      const size = Math.random() * 8 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 8 + 4;
      e.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:${Math.random() * 30}%;animation-duration:${duration}s;animation-delay:${delay}s;`;
      container.appendChild(e);
    }
  }

  // ==================== INITIALIZATION ====================
  function init() {
    spawnEmbers();
    renderMeatsGrid();
    renderWhyGrid();
    renderGalleryPreview();
    renderTestimonials();
    renderPackagesGrid();
    renderMenuCats();
    renderGalleryFilters();
    renderMenu('all');
    renderGallery('all');
    setupMobileMenu();
    setupEventListeners();
    initThemeToggle();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const fmt = tomorrow.toISOString().split('T')[0];
    ['c_date', 'r_date'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.value = fmt; el.min = new Date().toISOString().split('T')[0]; }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
