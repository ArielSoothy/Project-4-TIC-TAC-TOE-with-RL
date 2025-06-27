# 🎨 Modern AI Project Style Guide

## Overview
This style guide documents the design system used in the Tic-Tac-Toe AI project website. It features a modern, dark-themed interface with glassmorphism effects, perfect for AI/tech projects.

## 🌈 Color Palette

### Primary Colors
- **Background**: `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`
- **Primary Blue**: `#3b82f6` (Brand color, buttons, accents)
- **Primary Blue Hover**: `#2563eb`

### Text Colors
- **Primary Text**: `#f1f5f9` (Main headings, important text)
- **Secondary Text**: `#cbd5e1` (Subheadings)
- **Muted Text**: `#94a3b8` (Body text, descriptions)

### Surface Colors
- **Card Background**: `rgba(30, 41, 59, 0.6)` with blur
- **Card Background Alt**: `rgba(15, 23, 42, 0.6)` (Darker variant)
- **Border Color**: `rgba(148, 163, 184, 0.1)` (Subtle borders)
- **Border Hover**: `rgba(59, 130, 246, 0.2)` (Interactive borders)

### Status Colors
- **Success**: `#22c55e` (Improvements, positive)
- **Error**: `#ef4444` (Errors, negative)
- **Warning**: `#f6ad55` (Numbers, highlights)

## 🔤 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', system-ui, sans-serif;
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700

### Typography Scale
- **Hero Text**: `3.5em` (Main page title)
- **Section Headers**: `2.1em` (H2 elements)
- **Sub Headers**: `1.4em` (H3 elements)
- **Body Text**: `1em` with `line-height: 1.65`
- **Large Text**: `1.3em` (Subtitles, important descriptions)
- **Small Text**: `0.9em` (Meta info, captions)

### Text Properties
- **Letter Spacing**: `-0.01em` (Tight, modern feel)
- **Heading Letter Spacing**: `-0.02em` to `-0.03em`

## 🎯 Component Patterns

### Cards
```css
.card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(148, 163, 184, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    border-color: rgba(59, 130, 246, 0.2);
}
```

### Buttons
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

### Navigation Bar
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

## ✨ Visual Effects

### Glassmorphism
- **Backdrop Filter**: `blur(16px)` for main elements
- **Backdrop Filter Light**: `blur(8px)` for subtle elements
- **Semi-transparent backgrounds** with `rgba()` values

### Shadows
- **Card Shadow**: `0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)`
- **Hover Shadow**: `0 10px 25px -5px rgba(0, 0, 0, 0.4)`
- **Button Shadow**: `0 10px 25px -5px rgba(59, 130, 246, 0.4)`

### Transitions
- **Standard**: `all 0.3s ease`
- **Smooth**: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- **Button**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### Border Radius
- **Large Cards**: `16px`
- **Small Cards**: `12px`
- **Buttons**: `12px`
- **Small Elements**: `5px` to `8px`

## 🎨 Special Components

### Definition/Highlight Boxes
```css
.definition {
    background: rgba(15, 23, 42, 0.6);
    border-radius: 12px;
    padding: 24px;
    border-left: 4px solid #3b82f6;
    border: 1px solid rgba(148, 163, 184, 0.2);
    backdrop-filter: blur(8px);
}
```

### Performance Bars
```css
.performance-bar {
    background: rgba(148, 163, 184, 0.2);
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.performance-fill {
    height: 100%;
    background: #10b981;
    border-radius: 10px;
    transition: width 2s ease;
}
```

### Tab System
```css
.tab {
    background: rgba(15, 23, 42, 0.6);
    color: #94a3b8;
    padding: 15px 25px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.tab.active {
    background: #3b82f6;
    color: white;
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `max-width: 768px`
- **Container Max Width**: `1200px`

### Mobile Adaptations
- **Font Size Reduction**: Hero text from `3.5em` to `2.5em`
- **Grid Layouts**: Switch to single column
- **Hamburger Menu**: For navigation
- **Padding Adjustments**: Reduce padding on small screens

## 🎯 Layout Patterns

### Grid Systems
```css
.method-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

### Container Structure
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px 20px 20px;
}
```

## 🎪 Animation Patterns

### Hover Effects
- **Lift Effect**: `transform: translateY(-4px)` for cards
- **Small Lift**: `transform: translateY(-2px)` for buttons
- **Scale Effect**: `transform: scale(1.05)` for interactive elements

### Loading Animations
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-in {
    animation: fadeInUp 0.6s ease forwards;
}
```

## 🔧 Code Styling

### Code Blocks
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

### Syntax Highlighting Colors
- **Keywords**: `#ff6b6b` (Red)
- **Strings**: `#68d391` (Green)
- **Comments**: `#94a3b8` (Gray, italic)
- **Functions**: `#63b3ed` (Blue)
- **Variables**: `#fbb6ce` (Pink)
- **Numbers**: `#f6ad55` (Orange)

## 📋 Usage Guidelines

### When to Use This Style
- ✅ AI/Tech projects
- ✅ Modern web applications
- ✅ Dashboard interfaces
- ✅ Educational platforms
- ✅ Interactive demos

### Key Principles
1. **Consistency**: Use the same spacing, colors, and effects throughout
2. **Accessibility**: Maintain contrast ratios and readable font sizes
3. **Performance**: Use CSS transforms for animations, not position changes
4. **Mobile-First**: Design for mobile, enhance for desktop
5. **Progressive Enhancement**: Ensure functionality without JavaScript

### Implementation Tips
1. **Use CSS Custom Properties** for colors and spacing
2. **Implement a design system** with reusable components
3. **Test on multiple devices** and browsers
4. **Optimize for performance** with proper image formats and lazy loading
5. **Use semantic HTML** for better accessibility

## 🎨 Customization

To adapt this style for other projects:

1. **Change the primary color** from blue (`#3b82f6`) to your brand color
2. **Adjust the background gradient** to match your theme
3. **Modify font choices** if needed (but Inter works great for most projects)
4. **Scale spacing and sizing** based on your content needs
5. **Add or remove effects** based on your performance requirements

---

*This style guide represents a modern, professional design system perfect for tech and AI projects. It emphasizes clarity, interactivity, and visual hierarchy while maintaining excellent user experience across all devices.* 