# Standalone Floating Contact Widget

## Quick Start

1. **Open** `floating-widget-standalone.html` in your browser to see the demo
2. **Customize** the phone numbers in the CONFIG object
3. **Copy** the entire HTML file or extract the widget code
4. **Paste** into your website before the closing `</body>` tag

## Configuration

Edit the CONFIG object in the JavaScript section:

\`\`\`javascript
const CONFIG = {
  phoneNumber: '+919471373777',    // Change to your clinic number
  whatsappNumber: '919471373777',   // WhatsApp number (no + or spaces)
  enableAnalytics: true              // Set to false to disable tracking
};
\`\`\`

## Features Included

✅ WhatsApp chat with pre-filled templates  
✅ One-click calling  
✅ English + Hindi bilingual support  
✅ Mobile and desktop responsive  
✅ localStorage for phone persistence  
✅ Google Analytics ready  
✅ No dependencies - pure HTML/CSS/JS  

## File Size

- **HTML**: ~15KB
- **CSS**: ~8KB (inline)
- **JavaScript**: ~4KB (inline)
- **Total**: ~27KB (uncompressed)

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Colors

Find these CSS variables and update:

\`\`\`css
.floating-btn-whatsapp {
  background-color: #25D366; /* WhatsApp green */
}

.floating-btn-call {
  background-color: #0ea5e9; /* Call button blue */
}

.modal-header {
  background: linear-gradient(135deg, #25D366, #128C7E);
}
\`\`\`

### Change Position

Adjust the `.floating-contact-widget` class:

\`\`\`css
.floating-contact-widget {
  right: 24px;  /* Distance from right */
  bottom: 24px; /* Distance from bottom */
}
\`\`\`

### Add More Templates

Add new buttons in the template grid:

\`\`\`html
<button class="template-btn" data-template="Your custom message here">
  <div class="template-btn-label">Custom Treatment</div>
  <div class="template-btn-label-hi">कस्टम उपचार</div>
</button>
\`\`\`

## Analytics Integration

The widget sends these events when `enableAnalytics: true`:

- `whatsapp_modal_open`
- `template_selected`
- `whatsapp_opened`
- `call_initiated`
- `call_confirm_shown`
- `call_confirmed`

To receive events, add Google Analytics to your page:

\`\`\`html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
\`\`\`

## Accessibility

The widget includes:

- ARIA labels for screen readers
- Keyboard navigation (Tab, Enter, ESC)
- Focus indicators
- Semantic HTML
- Minimum touch target sizes (44x44px)

## Privacy & GDPR

- Phone numbers stored in localStorage only with user consent
- No external requests except WhatsApp redirect
- Privacy notice displayed in modal
- User can clear data anytime

## Troubleshooting

**Widget not visible?**
- Check that JavaScript is enabled
- Ensure widget code is before `</body>`
- Check browser console for errors

**WhatsApp not opening?**
- Verify `whatsappNumber` format (no + or spaces)
- Check popup blockers
- Test on mobile device

**Styling issues?**
- Check for CSS conflicts with existing styles
- Add `!important` to critical styles if needed
- Increase z-index if widget is behind other elements

## Support

For issues or customization help:
- Email: shreedentalclinic804@gmail.com
- Phone: +91 9471373777
