/* ============================================
   SuttonVS.com — Main JavaScript
   Sutton Venture Studio · 2026
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initCurrentNavLink();
  initContactForm();
});

/* --- Nav Scroll Behavior --- */
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  let scrolled = false;

  window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > 10;
    if (shouldBeScrolled !== scrolled) {
      scrolled = shouldBeScrolled;
      nav.classList.toggle('nav-scrolled', scrolled);
    }
  });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-overlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --- Active Nav Link --- */
function initCurrentNavLink() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (path.endsWith(href) || (href === '/' && (path === '/' || path.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);
}

/*
  Supabase Lead Capture — Agent 2 Implementation

  SQL to run in Supabase SQL Editor:
  -----------------------------------------------
  CREATE TABLE leads (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamptz DEFAULT now(),
    name text NOT NULL,
    email text NOT NULL,
    company text,
    inquiry_type text NOT NULL CHECK (inquiry_type IN (
      'Consulting Engagement',
      'Co-Founder / Partnership Opportunity',
      'Operator / CEO Interest',
      'General Inquiry'
    )),
    message text NOT NULL,
    budget_range text,
    source text DEFAULT 'suttonvs.com'
  );

  ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Allow public insert" ON leads
    FOR INSERT TO anon
    WITH CHECK (true);

  CREATE POLICY "Auth read only" ON leads
    FOR SELECT TO authenticated
    USING (true);
  -----------------------------------------------
*/

/* --- Supabase Client --- */
// Replace these with your actual Supabase project credentials.
// The anon key is safe to expose client-side — RLS policies protect the data.
const SUPABASE_URL = 'https://brzvvncvjeprxnzlwkci.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyenZ2bmN2amVwcnhuemx3a2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjI3MjgsImV4cCI6MjA5MDI5ODcyOH0.u8ysL9xw1070DpHK0WpR85YoHH45QWWMoBySDm-9yK0';

let supabase = null;

function getSupabaseClient() {
  if (!supabase && typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabase;
}

/* --- Form Validation --- */
function validateForm(form) {
  let isValid = true;

  // Clear previous errors
  form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));

  const name = form.querySelector('#name');
  if (!name.value.trim() || name.value.trim().length < 2) {
    name.closest('.form-group').classList.add('has-error');
    isValid = false;
  }

  const email = form.querySelector('#email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    email.closest('.form-group').classList.add('has-error');
    isValid = false;
  }

  const inquiryType = form.querySelector('#inquiry_type');
  if (!inquiryType.value) {
    inquiryType.closest('.form-group').classList.add('has-error');
    isValid = false;
  }

  const message = form.querySelector('#message');
  if (!message.value.trim() || message.value.trim().length < 50) {
    message.closest('.form-group').classList.add('has-error');
    isValid = false;
  }

  return isValid;
}

/* --- Form Submission --- */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const errorEl = document.getElementById('form-error');
  const successEl = document.getElementById('form-success');

  // Hide previous error
  errorEl.style.display = 'none';

  // Validate
  if (!validateForm(form)) return;

  // Disable button + show sending state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  const formData = {
    name: form.querySelector('#name').value.trim(),
    email: form.querySelector('#email').value.trim(),
    company: form.querySelector('#company').value.trim() || null,
    inquiry_type: form.querySelector('#inquiry_type').value,
    message: form.querySelector('#message').value.trim(),
    budget_range: form.querySelector('#budget_range').value || null,
    source: 'suttonvs.com'
  };

  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not available');

    const { error } = await client.from('leads').insert([formData]);
    if (error) throw error;

    // Success — hide form, show confirmation
    form.style.display = 'none';
    errorEl.style.display = 'none';
    successEl.style.display = 'block';
  } catch (err) {
    // Error — show message, re-enable button, preserve field values
    errorEl.style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send It';
  }
}
