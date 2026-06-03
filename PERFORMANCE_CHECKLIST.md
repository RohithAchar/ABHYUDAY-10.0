# Performance Issues - Quick Reference

## 🔴 Critical (Fix Immediately)

| Issue                     | File                       | Severity | Effort | Impact               |
| ------------------------- | -------------------------- | -------- | ------ | -------------------- |
| Global Audio Object       | `App.jsx:24-26`            | 🔴 HIGH  | 15min  | 20-30% FCP           |
| ChristmasLights DOM Spam  | `ChristmasLights.jsx:8-24` | 🔴 HIGH  | 10min  | 60fps loss           |
| GSAP Memory Leaks         | `App.jsx:140-175`          | 🔴 HIGH  | 20min  | Accumulate over time |
| No Code Splitting         | `App.jsx:1-6`              | 🔴 HIGH  | 30min  | 30-50% slower        |
| Multiple Scroll Listeners | `ProfileCard.jsx:25`       | 🟡 MED   | 15min  | Mobile scroll jank   |
| Eager Image Import        | `App.jsx:10-20`            | 🟡 MED   | 20min  | 2-3s slower on 4G    |
| Countdown Re-renders      | `Footer.jsx:25`            | 🟡 MED   | 10min  | 10-15ms overhead     |

---

## 📊 How to Measure

### 1. **Chrome Lighthouse (Built-in)**

```
Chrome DevTools → Lighthouse → Generate Report
```

### 2. **React DevTools Profiler**

```
React DevTools → Profiler → Record & analyze renders
```

### 3. **Bundle Size**

```bash
npm run build
ls -lh dist/assets/
# Check file sizes
```

### 4. **Network Waterfall**

```
Chrome DevTools → Network Tab → Reload page
# Analyze load times and bottlenecks
```

---

## 🎯 Before & After Targets

| Metric                  | Now    | Target | Gain            |
| ----------------------- | ------ | ------ | --------------- |
| **FCP**                 | ~2.5s  | <1.5s  | **40% faster**  |
| **LCP**                 | ~3.8s  | <2.5s  | **34% faster**  |
| **JS Parse**            | ~850ms | <350ms | **59% faster**  |
| **Bundle Size**         | ~180KB | <100KB | **44% smaller** |
| **Time to Interactive** | ~4.2s  | <2.5s  | **40% faster**  |

---

## 🚀 Implementation Priority

### Phase 1 (TODAY - 30 minutes)

- [ ] Add `React.memo()` to ProfileCard
- [ ] Memoize Footer with `useCallback`
- [ ] Fix GSAP cleanup in App.jsx
- [ ] Test with Lighthouse

### Phase 2 (THIS WEEK - 1-2 hours)

- [ ] Implement route-based code splitting
- [ ] Add lazy loading to images
- [ ] Convert ChristmasLights to CSS
- [ ] Debounce scroll listeners

### Phase 3 (NEXT WEEK - 2-3 hours)

- [ ] Update Vite config for optimization
- [ ] Add bundle size analyzer
- [ ] Setup performance monitoring
- [ ] Final Lighthouse audit

---

## 🔗 File Locations

```
Performance Issues:
├── App.jsx
│   ├── Global audio (line 24)
│   ├── Image imports (line 10)
│   ├── GSAP cleanup (line 140)
│   └── State management improvements
├── src/components/
│   ├── ChristmasLights.jsx (DOM spam)
│   ├── ProfileCard.jsx (scroll listeners)
│   ├── Footer.jsx (countdown timer)
│   ├── Hero.jsx (heavy animations)
│   └── EventDetail.jsx (lazy load)
└── vite.config.js (build config)
```

---

## 💡 Key Optimizations

### Quick Wins (No Architecture Changes)

1. ✅ React.memo for ProfileCard
2. ✅ useCallback for Footer
3. ✅ CSS animations instead of JS
4. ✅ GSAP cleanup fixes

### Medium Effort (Some Refactoring)

1. 🟡 Route-based code splitting
2. 🟡 Image lazy loading
3. 🟡 Scroll event debouncing

### Advanced (Build-level)

1. 🔴 Bundle size optimization
2. 🔴 Chunk splitting in Vite
3. 🔴 Performance monitoring setup

---

## 📈 Success Metrics

After optimization, verify:

```bash
# Lighthouse Score
Performance: >85

# Web Vitals
FCP < 1.5s ✓
LCP < 2.5s ✓
CLS < 0.1 ✓

# Bundle Metrics
JS: <100KB (gzip) ✓
Images: <2MB total ✓
CSS: <50KB ✓

# Runtime Performance
60 FPS animations ✓
No layout shifts ✓
No console errors ✓
```

---

## 🛠️ Tools to Install

```bash
# Bundle analysis
npm install -D vite-plugin-visualizer

# Compression for production
npm install -D vite-plugin-compression

# Web Vitals tracking
npm install web-vitals

# Performance monitoring (optional)
npm install @sentry/react @sentry/tracing
```

---

## 📞 Questions?

Check:

1. **PERFORMANCE_ANALYSIS.md** - Full detailed analysis
2. **OPTIMIZATION_GUIDE.md** - Step-by-step implementation code
3. Lighthouse Report - Specific issues for YOUR device
