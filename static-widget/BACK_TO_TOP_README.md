# Back to Top Button - Documentation

## Overview
A lightweight, accessible "Back to Top" button that appears after scrolling down the page. Designed to complement the floating WhatsApp and Call buttons without blocking them.

## Features
- ✅ **Auto Show/Hide**: Appears after scrolling 300px (configurable)
- ✅ **Smooth Animations**: Fade-in and fade-out with transform transitions
- ✅ **Responsive Design**: 56px on desktop, 48px on mobile
- ✅ **Positioned Left**: Doesn't block WhatsApp/Call buttons on the right
- ✅ **Smooth Scroll**: Uses `behavior: 'smooth'` for nice UX
- ✅ **Accessibility**: ARIA labels, keyboard focusable, hover tooltips
- ✅ **Bilingual Support**: English + Hindi text
- ✅ **Print Hidden**: Automatically hidden in print view
- ✅ **Dental Theme**: Matches clinic color scheme (#0ea5e9)

---

## React Component Usage

### Installation
The component is already integrated in `app/layout.tsx`.

### Props
\`\`\`typescript
interface BackToTopButtonProps {
  showAfterScroll?: number   // Default: 300 (pixels)
  language?: "en" | "hi" | "both"  // Default: "both"
  themeColor?: string         // Default: "#0ea5e9"
}
\`\`\`

### Example
\`\`\`tsx
import BackToTopButton from "@/components/widgets/BackToTopButton"

<BackToTopButton 
  showAfterScroll={500}
  language="both"
  themeColor="#0ea5e9"
/>
\`\`\`

---

## Standalone HTML/CSS/JS Usage

### Quick Integration
1. Copy the CSS from `back-to-top-standalone.html` (lines with `#backToTopBtn`)
2. Copy the button HTML before closing `</body>`:
\`\`\`html
<button id="backToTopBtn" aria-label="Back to Top" data-tooltip="Back to Top">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</button>
\`\`\`

3. Copy the JavaScript before closing `</body>`:
\`\`\`javascript
(function() {
  const SHOW_AFTER_SCROLL = 300;
  const btn = document.getElementById('backToTopBtn');

  function toggleButtonVisibility() {
    if (window.scrollY > SHOW_AFTER_SCROLL) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', toggleButtonVisibility);
  btn.addEventListener('click', scrollToTop);
  toggleButtonVisibility();
})();
\`\`\`

---

## Customization

### Change Color
\`\`\`css
#backToTopBtn {
  background-color: #10b981; /* Green */
}

#backToTopBtn:hover {
  background-color: #059669; /* Darker green */
}
\`\`\`

### Change Position (Right Side)
\`\`\`css
#backToTopBtn {
  right: 24px; /* Instead of left */
  left: auto;
}
\`\`\`

### Change Show Threshold
\`\`\`javascript
const SHOW_AFTER_SCROLL = 500; // Show after 500px
\`\`\`

### Change Size
\`\`\`css
#backToTopBtn {
  width: 64px;
  height: 64px;
}
\`\`\`

---

## Positioning Strategy

### Current Layout:
- **Bottom-Left**: Back to Top button
- **Bottom-Right**: WhatsApp + Call buttons (stacked vertically)

This ensures no overlap and all buttons remain accessible.

### Mobile Responsive:
- Desktop: 56px × 56px, positioned 24px from edges
- Mobile: 48px × 48px, positioned 16px from edges

---

## Google Analytics Integration

The React component automatically sends events if GA4 is available:

\`\`\`typescript
// Event sent on click
gtag('event', 'back_to_top_clicked', {
  event_category: 'Navigation',
  event_label: 'Back to Top Button'
});
\`\`\`

For standalone HTML version, uncomment the analytics code in the JavaScript.

---

## Accessibility Checklist

✅ **ARIA Label**: `aria-label="Back to Top / शीर्ष पर जाएं"`  
✅ **Keyboard Focus**: Fully keyboard accessible  
✅ **Visual Tooltip**: Shows on hover for clarity  
✅ **High Contrast**: Blue (#0ea5e9) on white background  
✅ **Screen Reader**: Announces button purpose  
✅ **Focus Indicator**: Native browser focus ring visible  

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (requires polyfill for `scrollTo` smooth behavior)

---

## Troubleshooting

### Button doesn't appear
- Check if you've scrolled past the threshold (default 300px)
- Verify JavaScript is loaded and no console errors
- Check z-index conflicts with other elements

### Button blocks other content
- Adjust `left` or `bottom` values in CSS
- Reduce button size on mobile

### Smooth scroll not working
- Ensure `behavior: 'smooth'` is supported (modern browsers)
- Add polyfill for older browsers if needed

---

## Performance Notes

- **Lightweight**: ~2KB total (HTML + CSS + JS)
- **No Dependencies**: Pure vanilla JavaScript
- **Optimized**: Uses CSS transitions (GPU accelerated)
- **Debounced**: Scroll listener is efficient

---

## File Structure

\`\`\`
static-widget/
├── back-to-top-standalone.html    # Full demo page
└── BACK_TO_TOP_README.md          # This file

components/widgets/
└── BackToTopButton.tsx            # React component
\`\`\`

---

## License
Free to use for Shree Dental Clinic website. Modify as needed.

## Support
For issues or customization requests, contact your web developer.
