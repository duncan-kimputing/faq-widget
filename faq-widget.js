// ============================================================
// FAQ WIDGET - Custom Web Component for Wix
// ============================================================
//
// HOW TO EDIT FAQ DATA:
// Scroll down to the FAQ_DATA section below and edit the
// categories and questions. The format is simple:
//
// {
//   category: "Category Name",
//   questions: [
//     { q: "Question text?", a: "Full answer text here." },
//     { q: "Another question?", a: "Another answer." },
//   ]
// }
// ============================================================

const FAQ_DATA = [
  {
    category: "Getting Started",
    questions: [
      { q: "How do I create an account?", a: "To create an account, click the Sign Up button in the top right corner of our homepage. You'll need to provide your email address, create a password, and verify your email. The whole process takes less than 2 minutes." },
      { q: "What are the system requirements?", a: "Our platform works on all modern web browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience. Mobile apps are available for iOS 14+ and Android 10+." },
      { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after your trial." },
      { q: "How do I reset my password?", a: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a reset link. The link expires after 24 hours for security reasons. If you don't see the email, check your spam folder." },
      { q: "Can I change my username?", a: "Yes, you can change your username from your account settings. Go to Settings > Profile > Edit Username. Note that you can only change your username once every 30 days." },
      { q: "How do I enable two-factor authentication?", a: "Navigate to Settings > Security > Two-Factor Authentication. You can choose between SMS verification or an authenticator app. We recommend using an authenticator app for enhanced security." },
      { q: "What browsers are supported?", a: "We support all major modern browsers: Google Chrome (version 90+), Mozilla Firefox (version 88+), Safari (version 14+), and Microsoft Edge (version 90+). Internet Explorer is not supported." },
      { q: "How do I contact customer support?", a: "You can reach our support team via email at support@example.com, through our live chat feature available on the bottom right of every page, or by calling 1-800-EXAMPLE during business hours (9 AM - 6 PM EST, Monday through Friday)." },
      { q: "Is my data secure?", a: "Absolutely. We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on SOC 2 Type II certified data centers, and we undergo regular third-party security audits." },
      { q: "Can I use the service on multiple devices?", a: "Yes, you can access your account from unlimited devices. Your data syncs automatically across all devices in real-time. You can manage your active sessions from Settings > Security > Active Sessions." }
    ]
  },
  {
    category: "Billing & Pricing",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing with NET 30 terms." },
      { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period. We don't offer prorated refunds for partial months." },
      { q: "Do you offer refunds?", a: "We offer a 30-day money-back guarantee for first-time subscribers. If you're not satisfied within the first 30 days, contact support for a full refund. After 30 days, we don't offer refunds but you can cancel to prevent future charges." },
      { q: "How do I update my payment method?", a: "Go to Settings > Billing > Payment Methods. You can add a new card, remove old ones, or set a different default payment method. Changes take effect on your next billing cycle." },
      { q: "Is there a discount for annual billing?", a: "Yes! When you choose annual billing, you save 20% compared to monthly billing. That's like getting over 2 months free. You can switch to annual billing at any time from your subscription settings." },
      { q: "How do I download my invoices?", a: "All invoices are available in Settings > Billing > Invoice History. You can download individual invoices as PDFs or export your complete billing history as a CSV file for your records." },
      { q: "What happens if my payment fails?", a: "If a payment fails, we'll notify you by email and retry the charge after 3 days. You have a 14-day grace period to update your payment information before your account is downgraded to the free tier." },
      { q: "Do you offer non-profit discounts?", a: "Yes, we offer a 50% discount for registered non-profit organizations. Contact our sales team with proof of non-profit status (such as a 501(c)(3) letter) to apply for the discount." },
      { q: "Can I pause my subscription?", a: "Yes, you can pause your subscription for up to 3 months. During the pause, you won't be billed and will retain read-only access to your data. Go to Settings > Subscription > Pause Subscription to use this feature." },
      { q: "How do I upgrade or downgrade my plan?", a: "You can change your plan anytime from Settings > Subscription > Change Plan. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle." }
    ]
  },
  {
    category: "Features & Usage",
    questions: [
      { q: "How do I import my existing data?", a: "Go to Settings > Data > Import. We support CSV, Excel, JSON, and direct imports from popular platforms like Salesforce, HubSpot, and Google Sheets. Our import wizard will guide you through mapping your fields." },
      { q: "Can I export my data?", a: "Yes, you can export all your data at any time. Go to Settings > Data > Export and choose your preferred format (CSV, JSON, or Excel). Exports are processed in the background and you'll receive an email when ready." },
      { q: "How do I share access with my team?", a: "From Settings > Team, click 'Invite Member' and enter their email address. You can assign roles (Admin, Editor, or Viewer) to control what each team member can access and modify." },
      { q: "Is there an API available?", a: "Yes, we offer a comprehensive REST API for all paid plans. API documentation is available at docs.example.com/api. Pro and Enterprise plans include higher rate limits and webhook support." },
      { q: "How do I set up integrations?", a: "Navigate to Settings > Integrations to browse our library of 100+ integrations. Click on any integration to see setup instructions. Most integrations can be configured in under 5 minutes with just a few clicks." },
      { q: "Can I customize notifications?", a: "Yes, you have full control over notifications. Go to Settings > Notifications to choose which events trigger emails, push notifications, or in-app alerts. You can also set quiet hours during which notifications are muted." },
      { q: "How do I create custom reports?", a: "From the Reports section, click 'New Report' to access our report builder. You can choose metrics, set date ranges, add filters, and create visualizations. Save reports to run them automatically on a schedule." },
      { q: "Is there a mobile app?", a: "Yes, we have native apps for both iOS and Android. Download from the App Store or Google Play. The mobile app includes most features from the web version, optimized for on-the-go access." },
      { q: "How do I use keyboard shortcuts?", a: "Press '?' anywhere in the app to see a complete list of keyboard shortcuts. Common shortcuts include 'N' for new item, 'S' for search, and 'G then H' to go home. You can customize shortcuts in Settings > Preferences." },
      { q: "Can I undo changes?", a: "Yes, most actions can be undone using Ctrl+Z (Cmd+Z on Mac) or by clicking the Undo button that appears after making changes. We also maintain a complete revision history for all items, accessible via the History tab." }
    ]
  },
  {
    category: "Account & Privacy",
    questions: [
      { q: "How do I delete my account?", a: "To delete your account, go to Settings > Account > Delete Account. You'll need to confirm your password and the deletion. Note that this action is permanent and all your data will be erased within 30 days." },
      { q: "Can I download all my personal data?", a: "Yes, in compliance with GDPR and CCPA, you can request a complete export of your personal data. Go to Settings > Privacy > Download My Data. We'll prepare your data and email you a download link within 48 hours." },
      { q: "How do I manage cookie preferences?", a: "Click the cookie icon in the bottom left corner of any page, or go to Settings > Privacy > Cookie Preferences. You can enable or disable optional cookies for analytics and advertising while keeping essential cookies active." },
      { q: "Who can see my profile information?", a: "By default, only your name and profile picture are visible to other users. You can control visibility of additional fields in Settings > Privacy > Profile Visibility. You can also make your entire profile private." },
      { q: "How do I opt out of marketing emails?", a: "Click the unsubscribe link at the bottom of any marketing email, or go to Settings > Notifications > Email Preferences and uncheck 'Marketing and promotional emails'. You'll still receive essential account notifications." },
      { q: "What data do you collect about me?", a: "We collect data you provide directly (name, email, content you create) and some data automatically (IP address, browser type, usage patterns). See our Privacy Policy for complete details on data collection and usage." },
      { q: "How long do you retain my data?", a: "Active account data is retained as long as your account exists. After account deletion, we remove personal data within 30 days. Some anonymized analytics data may be retained longer. Backups are purged after 90 days." },
      { q: "Can I restrict data processing?", a: "Yes, you can request restrictions on how we process your data. Go to Settings > Privacy > Data Processing or contact privacy@example.com. Note that some restrictions may limit functionality available to you." },
      { q: "Is my data shared with third parties?", a: "We only share data with third parties as necessary to provide our services (e.g., payment processors, hosting providers). We never sell your data. See our Privacy Policy for a complete list of our sub-processors." },
      { q: "How do I report a privacy concern?", a: "Email our Data Protection Officer at privacy@example.com with details of your concern. We take all privacy matters seriously and will respond within 5 business days. For EU residents, you also have the right to lodge a complaint with a supervisory authority." }
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      { q: "Why is the page loading slowly?", a: "Slow loading can be caused by a poor internet connection, browser cache issues, or browser extensions. Try refreshing the page, clearing your cache (Ctrl+Shift+Delete), or using incognito mode. If issues persist, contact support." },
      { q: "I'm not receiving emails from you", a: "Check your spam/junk folder first. Add noreply@example.com to your contacts or safe sender list. If using a corporate email, ask your IT department to whitelist our domain. You can also verify your email address in Settings." },
      { q: "The app crashed or froze", a: "Try refreshing the page (Ctrl+R or Cmd+R). If the issue persists, clear your browser cache and cookies for our site. Check status.example.com for any ongoing incidents. Report persistent crashes to support with your browser version." },
      { q: "I can't log into my account", a: "First, make sure you're using the correct email address. Try the 'Forgot Password' link to reset your password. Check if Caps Lock is on. If your account is locked after too many attempts, wait 15 minutes or contact support." },
      { q: "Features are missing from my account", a: "Some features are only available on certain plans. Check your current plan in Settings > Subscription. If you recently upgraded, try logging out and back in. Clear your browser cache if features still don't appear." },
      { q: "My data didn't save properly", a: "Check your internet connection - data may not save if you're offline. Look for any error messages that appeared. Most items auto-save, but some require clicking a Save button. Check the revision history to recover previous versions." },
      { q: "The search isn't returning expected results", a: "Search looks at titles and content but may not search all fields. Try using different keywords or check your spelling. Use quotes for exact phrases. Advanced search operators like AND, OR, and NOT are supported." },
      { q: "I'm seeing an error message", a: "Note the exact error message and any error code. Try refreshing the page. If the error persists, check status.example.com for known issues. Contact support with the error details, steps to reproduce, and screenshots if possible." },
      { q: "Sync isn't working across devices", a: "Ensure you're logged into the same account on all devices. Check your internet connection. Try manually refreshing or pulling down to sync. If using the mobile app, make sure background sync is enabled in your device settings." },
      { q: "How do I clear my cache and cookies?", a: "In Chrome: Settings > Privacy > Clear browsing data. In Firefox: Options > Privacy > Clear Data. In Safari: Preferences > Privacy > Manage Website Data. Select 'Cached images and files' and 'Cookies' for our site, then clear." }
    ]
  }
];

// ============================================================
// WIDGET CODE - Edit below only if you know what you're doing
// ============================================================

class FaqWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isExpanded = false;
    this.activeCategory = null;
    this.expandedQuestions = new Set();
    this.searchQuery = '';
    this.boundClickOutside = this.handleClickOutside.bind(this);
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.boundClickOutside);
  }

  getStyles() {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

      :host {
        display: block;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        --accent-color: #4EC3E0;
        --text-color: #000000;
        --bg-color: #FFFFFF;
        --border-radius: 25px;
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s ease;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .faq-container {
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
        position: relative;
      }

      /* Collapsed Search Bar */
      .search-bar {
        background: var(--bg-color);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        padding: 16px 24px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: var(--transition);
        border: 1px solid #e0e0e0;
      }

      .search-bar:hover {
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }

      .search-bar.hidden {
        display: none;
      }

      .search-icon {
        width: 20px;
        height: 20px;
        stroke: #666;
        flex-shrink: 0;
      }

      .search-placeholder {
        color: #666;
        font-size: 15px;
        font-weight: 400;
      }

      /* Expanded Panel */
      .expanded-panel {
        display: none;
        background: var(--bg-color);
        border-radius: 20px;
        box-shadow: var(--shadow);
        overflow: hidden;
        border: 1px solid #e0e0e0;
        max-height: 70vh;
        flex-direction: column;
      }

      .expanded-panel.visible {
        display: flex;
      }

      /* Search Header */
      .search-header {
        padding: 16px 20px;
        border-bottom: 2px solid var(--accent-color);
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      .search-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text-color);
        background: transparent;
      }

      .search-input::placeholder {
        color: #999;
      }

      .close-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .close-btn svg {
        width: 20px;
        height: 20px;
        stroke: #666;
        transition: stroke 0.2s ease;
      }

      .close-btn:hover svg {
        stroke: #000;
      }

      /* Content Area */
      .content-area {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
      }

      /* Categories */
      .category-item {
        border-bottom: 1px solid #f0f0f0;
      }

      .category-item:last-child {
        border-bottom: none;
      }

      .category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 20px;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .category-header:hover {
        background: #f9f9f9;
      }

      .category-name {
        font-size: 15px;
        font-weight: 500;
        color: var(--text-color);
      }

      .arrow {
        width: 12px;
        height: 12px;
        stroke: #666;
        stroke-width: 2;
        fill: none;
        transition: transform 0.3s ease;
      }

      .arrow.rotated {
        transform: rotate(180deg);
      }

      /* Questions List */
      .questions-list {
        display: none;
        padding: 0 20px 12px 20px;
      }

      .questions-list.visible {
        display: block;
      }

      .question-item {
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
      }

      .question-item:last-child {
        border-bottom: none;
      }

      .question-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        padding: 4px 0;
      }

      .question-header:hover .question-text {
        color: #333;
      }

      .question-arrow {
        width: 10px;
        height: 10px;
        stroke: #888;
        stroke-width: 2;
        fill: none;
        flex-shrink: 0;
        margin-top: 5px;
        transition: transform 0.3s ease;
      }

      .question-arrow.rotated {
        transform: rotate(90deg);
      }

      .question-content {
        flex: 1;
      }

      .question-text {
        font-size: 14px;
        font-weight: 400;
        color: var(--text-color);
        line-height: 1.4;
        transition: color 0.2s ease;
      }

      .answer-preview {
        font-size: 13px;
        color: #666;
        margin-top: 4px;
        line-height: 1.4;
        font-weight: 300;
      }

      .answer-full {
        display: none;
        font-size: 13px;
        color: #444;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid var(--accent-color);
        line-height: 1.6;
        font-weight: 300;
      }

      .answer-full.visible {
        display: block;
      }

      /* Search Results */
      .search-results {
        padding: 8px 20px;
      }

      .no-results {
        padding: 20px;
        text-align: center;
        color: #666;
        font-size: 14px;
      }

      .search-result-item {
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .result-category {
        font-size: 11px;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      /* Scrollbar */
      .content-area::-webkit-scrollbar {
        width: 6px;
      }

      .content-area::-webkit-scrollbar-track {
        background: #f5f5f5;
      }

      .content-area::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
      }

      .content-area::-webkit-scrollbar-thumb:hover {
        background: #aaa;
      }

      /* Mobile Responsive */
      @media (max-width: 700px) {
        .faq-container {
          max-width: 100%;
          padding: 0 12px;
        }

        .expanded-panel {
          max-height: 85vh;
          border-radius: 16px;
        }

        .search-bar {
          border-radius: 20px;
          padding: 14px 20px;
        }

        .search-placeholder {
          font-size: 14px;
        }

        .search-header {
          padding: 14px 16px;
        }

        .search-input {
          font-size: 16px; /* Prevents zoom on iOS */
        }

        .category-header {
          padding: 12px 16px;
        }

        .category-name {
          font-size: 14px;
        }

        .questions-list {
          padding: 0 16px 10px 16px;
        }

        .question-text {
          font-size: 13px;
        }

        .answer-preview,
        .answer-full {
          font-size: 12px;
        }
      }

      /* Focus states for accessibility */
      .search-input:focus {
        outline: none;
      }

      .category-header:focus-visible,
      .question-header:focus-visible,
      .close-btn:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
      }

      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          transition: none !important;
        }
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.getStyles()}</style>
      <div class="faq-container">
        <!-- Collapsed Search Bar -->
        <div class="search-bar" id="searchBar">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <span class="search-placeholder">Search FAQ or browse categories...</span>
        </div>

        <!-- Expanded Panel -->
        <div class="expanded-panel" id="expandedPanel">
          <div class="search-header">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              class="search-input"
              id="searchInput"
              placeholder="Type to search..."
              autocomplete="off"
            >
            <button class="close-btn" id="closeBtn" aria-label="Close FAQ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="content-area" id="contentArea">
            ${this.renderCategories()}
          </div>
        </div>
      </div>
    `;
  }

  renderCategories() {
    return `
      <div class="categories-view" id="categoriesView">
        ${FAQ_DATA.map((cat, index) => `
          <div class="category-item">
            <div class="category-header" data-category="${index}" tabindex="0" role="button" aria-expanded="false">
              <span class="category-name">${cat.category}</span>
              <svg class="arrow" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <div class="questions-list" id="questions-${index}">
              ${cat.questions.map((item, qIndex) => `
                <div class="question-item">
                  <div class="question-header" data-category="${index}" data-question="${qIndex}" tabindex="0" role="button" aria-expanded="false">
                    <svg class="question-arrow" viewBox="0 0 24 24">
                      <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <div class="question-content">
                      <div class="question-text">${item.q}</div>
                      <div class="answer-preview">${this.truncateText(item.a, 60)}</div>
                    </div>
                  </div>
                  <div class="answer-full" id="answer-${index}-${qIndex}">${item.a}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="search-results" id="searchResults" style="display: none;"></div>
    `;
  }

  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  }

  attachEventListeners() {
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const closeBtn = this.shadowRoot.getElementById('closeBtn');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    // Open panel
    searchBar.addEventListener('click', () => this.expand());

    // Close panel
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.collapse();
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.handleSearch();
    });

    // Category headers
    this.shadowRoot.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => this.toggleCategory(header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleCategory(header);
        }
      });
    });

    // Question headers
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.addEventListener('click', () => this.toggleQuestion(header));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleQuestion(header);
        }
      });
    });

    // Click outside listener (added when expanded)
    document.addEventListener('click', this.boundClickOutside);
  }

  handleClickOutside(e) {
    if (!this.isExpanded) return;

    const panel = this.shadowRoot.getElementById('expandedPanel');
    const path = e.composedPath();

    if (!path.includes(panel) && !path.includes(this)) {
      this.collapse();
    }
  }

  expand() {
    this.isExpanded = true;
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    searchBar.classList.add('hidden');
    panel.classList.add('visible');

    // Focus search input after animation
    setTimeout(() => searchInput.focus(), 100);
  }

  collapse() {
    this.isExpanded = false;
    const searchBar = this.shadowRoot.getElementById('searchBar');
    const panel = this.shadowRoot.getElementById('expandedPanel');
    const searchInput = this.shadowRoot.getElementById('searchInput');

    panel.classList.remove('visible');
    searchBar.classList.remove('hidden');

    // Reset state
    searchInput.value = '';
    this.searchQuery = '';
    this.resetView();
  }

  resetView() {
    // Hide search results
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesView = this.shadowRoot.getElementById('categoriesView');

    searchResults.style.display = 'none';
    categoriesView.style.display = 'block';

    // Collapse all categories
    this.shadowRoot.querySelectorAll('.questions-list').forEach(list => {
      list.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.category-header .arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.category-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
    });

    // Collapse all answers
    this.shadowRoot.querySelectorAll('.answer-full').forEach(answer => {
      answer.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.question-arrow').forEach(arrow => {
      arrow.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.question-header').forEach(header => {
      header.setAttribute('aria-expanded', 'false');
    });

    this.expandedQuestions.clear();
    this.activeCategory = null;
  }

  toggleCategory(header) {
    const categoryIndex = header.dataset.category;
    const questionsList = this.shadowRoot.getElementById(`questions-${categoryIndex}`);
    const arrow = header.querySelector('.arrow');
    const isExpanded = questionsList.classList.contains('visible');

    // Close other categories
    this.shadowRoot.querySelectorAll('.questions-list').forEach(list => {
      list.classList.remove('visible');
    });
    this.shadowRoot.querySelectorAll('.category-header .arrow').forEach(a => {
      a.classList.remove('rotated');
    });
    this.shadowRoot.querySelectorAll('.category-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
    });

    // Toggle current category
    if (!isExpanded) {
      questionsList.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      this.activeCategory = categoryIndex;
    } else {
      this.activeCategory = null;
    }
  }

  toggleQuestion(header) {
    const catIndex = header.dataset.category;
    const qIndex = header.dataset.question;
    const answerId = `answer-${catIndex}-${qIndex}`;
    const answer = this.shadowRoot.getElementById(answerId);
    const arrow = header.querySelector('.question-arrow');
    const preview = header.querySelector('.answer-preview');
    const isExpanded = answer.classList.contains('visible');

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
      preview.style.display = 'block';
      this.expandedQuestions.delete(answerId);
    } else {
      answer.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      preview.style.display = 'none';
      this.expandedQuestions.add(answerId);
    }
  }

  handleSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    const searchResults = this.shadowRoot.getElementById('searchResults');
    const categoriesView = this.shadowRoot.getElementById('categoriesView');

    if (!query) {
      searchResults.style.display = 'none';
      categoriesView.style.display = 'block';
      return;
    }

    categoriesView.style.display = 'none';
    searchResults.style.display = 'block';

    // Search through all FAQs
    const results = [];
    FAQ_DATA.forEach((category, catIndex) => {
      category.questions.forEach((item, qIndex) => {
        const questionMatch = item.q.toLowerCase().includes(query);
        const answerMatch = item.a.toLowerCase().includes(query);

        if (questionMatch || answerMatch) {
          results.push({
            category: category.category,
            catIndex,
            qIndex,
            question: item.q,
            answer: item.a
          });
        }
      });
    });

    // Render results
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="no-results">No results found for "${this.searchQuery}"</div>
      `;
    } else {
      searchResults.innerHTML = results.map(result => `
        <div class="search-result-item">
          <div class="result-category">${result.category}</div>
          <div class="question-item">
            <div class="question-header" data-result-cat="${result.catIndex}" data-result-q="${result.qIndex}" tabindex="0" role="button" aria-expanded="false">
              <svg class="question-arrow" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="question-content">
                <div class="question-text">${result.question}</div>
                <div class="answer-preview">${this.truncateText(result.answer, 60)}</div>
              </div>
            </div>
            <div class="answer-full">${result.answer}</div>
          </div>
        </div>
      `).join('');

      // Add click handlers to search results
      searchResults.querySelectorAll('.question-header').forEach(header => {
        header.addEventListener('click', () => this.toggleSearchResult(header));
        header.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleSearchResult(header);
          }
        });
      });
    }
  }

  toggleSearchResult(header) {
    const answer = header.closest('.question-item').querySelector('.answer-full');
    const arrow = header.querySelector('.question-arrow');
    const preview = header.querySelector('.answer-preview');
    const isExpanded = answer.classList.contains('visible');

    if (isExpanded) {
      answer.classList.remove('visible');
      arrow.classList.remove('rotated');
      header.setAttribute('aria-expanded', 'false');
      preview.style.display = 'block';
    } else {
      answer.classList.add('visible');
      arrow.classList.add('rotated');
      header.setAttribute('aria-expanded', 'true');
      preview.style.display = 'none';
    }
  }
}

// Register the custom element
customElements.define('faq-widget', FaqWidget);
