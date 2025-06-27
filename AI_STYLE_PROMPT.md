# 🤖 AI Style Application Prompt

## Instructions for AI Assistant

**Please apply this exact modern design system to my project. Use these specifications to create a consistent, professional, dark-themed interface with glassmorphism effects.**

---

## 🎨 Design System Specifications

### **Typography**
- **Font Family**: `-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif`
- **Google Fonts**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`
- **Letter Spacing**: `-0.01em` for body text, `-0.02em` to `-0.03em` for headings
- **Line Height**: `1.65` for body text

### **Color Palette**
```css
/* Primary Colors */
--primary-blue: #3b82f6;
--primary-blue-hover: #2563eb;
--success-green: #22c55e;
--error-red: #ef4444;
--warning-orange: #f6ad55;

/* Background */
--bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
--bg-dark: #0f172a;

/* Text Colors */
--text-primary: #f1f5f9;    /* Main headings, important text */
--text-secondary: #cbd5e1;  /* Subheadings */
--text-muted: #94a3b8;      /* Body text, descriptions */

/* Surface Colors (with backdrop-filter) */
--surface-primary: rgba(30, 41, 59, 0.6);     /* Main cards */
--surface-secondary: rgba(15, 23, 42, 0.6);   /* Darker variant */
--surface-navbar: rgba(30, 41, 59, 0.9);      /* Navigation */

/* Borders */
--border-subtle: rgba(148, 163, 184, 0.1);    /* Default borders */
--border-normal: rgba(148, 163, 184, 0.2);    /* Visible borders */
--border-hover: rgba(59, 130, 246, 0.2);      /* Hover states */
```

### **Visual Effects**
- **Glassmorphism**: Use `backdrop-filter: blur(16px)` for main elements, `blur(8px)` for subtle elements
- **Shadows**: 
  - Cards: `0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)`
  - Hover: `0 10px 25px -5px rgba(0, 0, 0, 0.4)`
  - Buttons: `0 10px 25px -5px rgba(59, 130, 246, 0.4)`
- **Transitions**: `all 0.3s ease` (standard), `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)` (smooth)
- **Border Radius**: 16px for large cards, 12px for buttons/small cards

### **Layout Specifications**
- **Container**: Max-width 1200px, centered with auto margins
- **Spacing**: Use consistent spacing scale (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px)
- **Mobile Breakpoint**: 768px
- **Grid**: Use CSS Grid with `repeat(auto-fit, minmax(300px, 1fr))` pattern

---

## 🎯 Component Patterns to Implement

### **1. Cards**
```css
.card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(148, 163, 184, 0.1);
    transition: all 0.3s ease;
    color: #f1f5f9;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    border-color: rgba(59, 130, 246, 0.2);
}
```

### **2. Buttons**
```css
.btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: -0.01em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
    background: #2563eb;
}
```

### **3. Navigation**
```css
.navbar {
    background: rgba(30, 41, 59, 0.9);
    backdrop-filter: blur(16px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}
```

### **4. Highlight/Definition Boxes**
```css
.highlight {
    background: rgba(59, 130, 246, 0.1);
    border-radius: 12px;
    padding: 20px;
    border-left: 4px solid #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.2);
    color: #f1f5f9;
    backdrop-filter: blur(8px);
}
```

### **5. Code Blocks**
```css
.code-block {
    background: #0f172a;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 12px;
    font-family: 'Courier New', monospace;
    overflow-x: auto;
    border: 1px solid rgba(148, 163, 184, 0.2);
}
```

---

## 📱 Responsive Design Rules

### **Mobile Adaptations (max-width: 768px)**
- Reduce hero text from `3.5em` to `2.5em`
- Switch grid layouts to single column
- Implement hamburger menu for navigation
- Reduce padding: cards from `40px` to `20px`
- Stack elements vertically in complex layouts

### **Container Structure**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px 20px 20px; /* Top padding for fixed navbar */
}
```

---

## 🎪 Animation Guidelines

### **Hover Effects**
- **Cards**: `transform: translateY(-4px)` with enhanced shadow
- **Buttons**: `transform: translateY(-2px)` with colored shadow
- **Interactive Elements**: `transform: scale(1.05)` for small elements

### **Loading Animation**
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-in { animation: fadeInUp 0.6s ease forwards; }
```

---

## 🎨 Typography Scale

- **Hero Heading**: `3.5em`, font-weight: 700, color: #f1f5f9
- **Section Headers**: `2.1em`, font-weight: 600, color: #f1f5f9
- **Sub Headers**: `1.4em`, font-weight: 600, color: #cbd5e1
- **Body Text**: `1em`, font-weight: 400, color: #f1f5f9, line-height: 1.65
- **Muted Text**: `1em`, font-weight: 400, color: #94a3b8

---

## 🔧 Essential CSS Setup

### **Base Styles to Apply**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif;
    line-height: 1.65;
    color: #f1f5f9;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    min-height: 100vh;
    font-weight: 400;
    letter-spacing: -0.01em;
}
```

### **Required HTML Head**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🎯 Implementation Instructions for AI

**When applying this style system:**

1. **Always use the exact color values** specified above
2. **Apply glassmorphism effects** (backdrop-filter + semi-transparent backgrounds)
3. **Implement hover animations** with transform and shadow changes
4. **Use consistent spacing** and border-radius values
5. **Make it fully responsive** with the mobile breakpoint at 768px
6. **Include emoji icons** in headings and navigation for personality
7. **Ensure high contrast** for accessibility while maintaining the dark aesthetic
8. **Use CSS Grid** for layouts with the auto-fit pattern
9. **Add loading animations** for elements that appear on scroll or interaction
10. **Test hover states** on all interactive elements

**Result should be:** A modern, professional, dark-themed interface with glassmorphism effects, smooth animations, and excellent user experience across all devices.

---

*Use this prompt by copying it and saying: "Apply this exact design system to my project" followed by your specific requirements.* 