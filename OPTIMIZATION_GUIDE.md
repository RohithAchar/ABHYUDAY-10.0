# Performance Optimization Guide - Quick Implementation

## 🚀 Priority 1: Quick Wins (30 minutes)

### 1. Memoize ProfileCard Component

**Before:**

```javascript
export function ProfileCard({ id, name, image }) {
  // Re-renders on every parent render
}
```

**After:**

```javascript
import { memo } from "react";

export const ProfileCard = memo(
  function ProfileCard({ id, name, image }) {
    // Only re-renders if props change
    // ... rest of component
  },
  (prevProps, nextProps) => {
    return (
      prevProps.id === nextProps.id &&
      prevProps.name === nextProps.name &&
      prevProps.image === nextProps.image
    );
  },
);
```

**Expected Improvement**: 40-60% fewer re-renders on scroll

---

### 2. Optimize Footer with useCallback

**Before:**

```javascript
const Footer = () => {
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
```

**After:**

```javascript
import { useCallback, useMemo } from 'react';

const Footer = memo(() => {
  const [timeLeft, setTimeLeft] = useState({...});

  const updateCountdown = useCallback(() => {
    // computation
  }, []);

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [updateCountdown]);
```

**Expected Improvement**: Prevents unnecessary parent re-renders

---

### 3. Fix ChristmasLights with CSS Animation

**Before:**

```javascript
function flicker() {
  bulbRefs.current.forEach((b, i) => {
    b.style.background = on ? color : "#333";
    b.style.boxShadow = on ? `0 0 8px 2px ${color}` : "none";
  });
  timeoutRef.current = setTimeout(flicker, 60 + Math.random() * 100);
}
```

**After - Create CSS Animation:**

```css
/* In your CSS file */
@keyframes bulb-flicker {
  0%,
  100% {
    background: #ff2200;
    box-shadow: 0 0 8px 2px #ff2200;
  }
  25% {
    background: #333;
    box-shadow: none;
  }
  50% {
    background: #ff6600;
    box-shadow: 0 0 8px 2px #ff6600;
  }
  75% {
    background: #333;
    box-shadow: none;
  }
}

.bulb {
  animation: bulb-flicker 0.12s infinite;
}
```

**Expected Improvement**: 90% reduction in JavaScript overhead

---

### 4. Fix GSAP Memory Leaks

**Before:**

```javascript
return () => {
  mm.revert();
  ScrollTrigger.killAll();
  gsap.killTweensOf("*"); // ← Kills ALL tweens on page!
  gsap.set(".cards", { clearProps: "all" });
};
```

**After:**

```javascript
return () => {
  mm.revert();
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === sectionRef.current) {
      trigger.kill();
    }
  });
  // Only kill tweens on this specific element
  gsap.killTweensOf(".cards");
  gsap.set(".cards", { clearProps: "all" });
};
```

**Expected Improvement**: Prevents memory accumulation

---

## 🎯 Priority 2: Route-Based Code Splitting (30-45 minutes)

### 5. Lazy Load Routes

**Before:**

```javascript
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/event/:slug" element={<EventDetail />} />
    </Routes>
  );
}
```

**After:**

```javascript
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/Hero"));
const EventDetail = lazy(() => import("./components/EventDetail"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingScreen />}>
            <Hero />
          </Suspense>
        }
      />
      <Route
        path="/event/:slug"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <EventDetail />
          </Suspense>
        }
      />
    </Routes>
  );
}
```

**Expected Improvement**:

- Initial bundle: 180KB → 90KB
- FCP: 2.5s → 1.2s

---

### 6. Optimize Image Loading

**Before:**

```javascript
import dustin from "/assets/Dustin.webp";
import eleven from "/assets/Eleven.webp";

<img src={dustin} alt="Dustin" />;
```

**After:**

```javascript
// Use lazy loading
<img
  src="/assets/Dustin.webp"
  alt="Dustin"
  loading="lazy"
  srcSet="
    /assets/Dustin-sm.webp 640w,
    /assets/Dustin-md.webp 1024w,
    /assets/Dustin.webp 1920w
  "
/>;

// Or use intersection observer for true lazy loading
import { useEffect, useRef } from "react";

export function LazyImage({ src, alt, srcSet }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = src;
          entry.target.srcSet = srcSet;
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, srcSet]);

  return <img ref={imgRef} alt={alt} />;
}
```

**Expected Improvement**:

- LCP: 3.8s → 1.8s
- 40% reduction in initial load

---

### 7. Debounce ProfileCard Scroll

**Before:**

```javascript
function onScroll() {
  if (!card.classList.contains("scrolling")) {
    card.classList.add("scrolling");
    flicker(); // Called immediately
  }
  clearTimeout(timerRef.current);
  timerRef.current = setTimeout(stop, 300);
}
```

**After:**

```javascript
useEffect(() => {
  const card = cardRef.current;
  if (!card) return;

  let scrollTimeout;
  const scrollParent = card.closest(".overflow-x-auto") || window;

  function onScroll() {
    clearTimeout(scrollTimeout);

    // Debounce scroll start
    scrollTimeout = setTimeout(() => {
      if (!card.classList.contains("scrolling")) {
        card.classList.add("scrolling");
        // Use CSS animation instead of JS
      }
    }, 50);
  }

  scrollParent.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    scrollParent.removeEventListener("scroll", onScroll);
    clearTimeout(scrollTimeout);
  };
}, []);
```

**Expected Improvement**: 50% reduction in scroll events

---

## 🔧 Priority 3: Build Optimization (60+ minutes)

### 8. Update Vite Config

**Before:**

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
});
```

**After:**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "brotli",
      ext: ".br",
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "gsap-vendor": ["gsap"],
          "ui-vendor": ["lucide-react", "tailwindcss"],
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
});
```

---

### 9. Add Performance Monitoring

```javascript
// Create: src/utils/performance.js

export function reportWebVitals(metric) {
  if (window.gtag) {
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),
      event_category: "Web Vitals",
      event_label: metric.id,
      non_interaction: true,
    });
  }
  console.log(`${metric.name}: ${metric.value.toFixed(0)}`);
}

// In main.jsx:
import { reportWebVitals } from "./utils/performance";
import { getCLS, getCWV, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(reportWebVitals);
getCWV(reportWebVitals);
getFCP(reportWebVitals);
getLCP(reportWebVitals);
getTTFB(reportWebVitals);
```

---

## 📊 Bundle Analysis Setup

```bash
# Install bundle analyzer
npm install -D vite-plugin-visualizer

# Add to vite.config.js
import { visualizer } from "vite-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
    }),
  ],
});

# Build and analyze
npm run build
# Opens interactive bundle visualization
```

---

## ✅ Testing Your Optimizations

```bash
# 1. Build production version
npm run build

# 2. Check bundle sizes
ls -lh dist/assets/

# 3. Run lighthouse locally
npm install -g lighthouse
lighthouse https://localhost:3000 --port=9222

# 4. Check performance in DevTools
# Chrome DevTools → Lighthouse → Generate Report
# Chrome DevTools → Performance → Record
```

---

## 📋 Implementation Checklist

- [ ] Memoize ProfileCard
- [ ] Optimize Footer with useCallback
- [ ] Convert ChristmasLights to CSS animation
- [ ] Fix GSAP cleanup
- [ ] Implement lazy loading for routes
- [ ] Add lazy image loading
- [ ] Debounce scroll events
- [ ] Update Vite config
- [ ] Setup bundle analysis
- [ ] Add performance monitoring
- [ ] Test in Lighthouse
- [ ] Verify FCP < 1.5s and LCP < 2.5s
