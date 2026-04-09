# Design System Quick Reference

## 🎨 Color Palette

### Primary (Green)
- `#1f7a63` - primary.500 (Main brand color)
- `#2e8b6f` - primary.600 (Hover state)
- `#e6f3f0` - primary.50 (Light backgrounds)

### Semantic
- Success: `#10b981`
- Warning: `#f59e0b`
- Error: `#ef4444`
- Info: `#3b82f6`

### CSS Variables (Always Use These!)
- `--success` - Success state color (adapts to theme)
- `--success-foreground` - Success text color
- `--warning` - Warning state color (adapts to theme)
- `--warning-foreground` - Warning text color
- `--destructive` - Error/danger state color
- `--destructive-foreground` - Error text color
- `--ring` - Focus ring color (adapts to theme)
- `--primary` - Primary brand color
- `--muted` - Muted backgrounds
- `--border` - Border color

### Theme Colors
**Light Mode:**
- Background: `#f7f9fb`
- Cards: `#ffffff`
- Text: `#1a202c`

**Dark Mode:**
- Background: `#0f172a`
- Cards: `#1f2937`
- Text: `#f8fafc`

---

## 📏 Spacing (8pt Grid)

```
spacing[4]  = 8px   - Base unit
spacing[6]  = 12px  - Small gaps
spacing[8]  = 16px  - Medium spacing
spacing[12] = 24px  - Large spacing
spacing[16] = 32px  - XL spacing
```

---

## 🔤 Typography

### Font Sizes
```
xs   = 12px   text-xs
sm   = 14px   text-sm
base = 16px   text-base
lg   = 18px   text-lg
xl   = 20px   text-xl
2xl  = 24px   text-2xl
```

### Font Weights
```
normal   = 400
medium   = 500
semibold = 600
bold     = 700
```

---

## 🔘 Border Radius

```
lg   = 12px  - Buttons, small cards
xl   = 16px  - Medium elements
2xl  = 20px  - Large cards
full = 50%   - Circles
```

---

## 📦 Components

### Button
```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```
Variants: `primary | secondary | outline | ghost | danger`
Sizes: `sm | md | lg`

### Card
```tsx
<Card variant="default" padding="md">
  Content
</Card>
```
Variants: `default | elevated | outlined | ghost`
Padding: `none | sm | md | lg`

### Avatar
```tsx
<Avatar 
  initials="SJ" 
  size="md" 
  variant="rounded"
/>
```
Sizes: `xs | sm | md | lg | xl`
Variants: `circle | rounded | square`

### Badge
```tsx
<Badge variant="primary" size="md">
  New
</Badge>
```
Variants: `default | primary | success | warning | danger | outline`
**All variants use semantic tokens and adapt to dark mode automatically.**

### Input
```tsx
<Input 
  placeholder="Enter text"
  leftIcon={<Search />}
  error="Error message"
/>
```
Variants: `default | filled | outline`
**States:** Focus (ring-ring), Error (ring-destructive), Disabled

### Progress
```tsx
<Progress value={75} variant="default" showLabel />
```
Variants: `default | success | warning | danger`
**All variants use semantic tokens and adapt to dark mode automatically.**

### StatCard
```tsx
<StatCard
  title="Total Projects"
  value="24"
  change="+12%"
  isPositive={true}
  icon={FolderKanban}
/>
```

---

## 🎭 Theme Management

```tsx
import { ThemeProvider, useTheme } from './design-system/theme-provider';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

function Component() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle</button>;
}
```

---

## 📱 Responsive Breakpoints

```
sm:  640px  - Mobile landscape
md:  768px  - Tablet
lg:  1024px - Desktop
xl:  1280px - Large desktop
2xl: 1536px - Extra large
```

---

## ✅ Best Practices

1. ✅ Always use tokens instead of hardcoded values
2. ✅ Use design system components
3. ✅ Follow 8pt grid for spacing
4. ✅ Use semantic color names
5. ✅ Leverage ThemeProvider for dark mode
6. ✅ Maintain consistency across the app
7. ✅ Ensure proper contrast ratios

---

## 🎯 Interactive States

### Button States
- **Hover:** All variants (e.g., `bg-primary/90`)
- **Active:** All variants (e.g., `bg-primary/80`)
- **Focus:** Focus-visible ring using `--ring` token
- **Disabled:** `opacity-50` + `cursor-not-allowed`
- **Loading:** Shows spinner

### Input/Textarea States
- **Focus:** `ring-2 ring-ring`
- **Error:** `ring-2 ring-destructive`
- **Disabled:** `opacity-50` + `cursor-not-allowed`

### Icon Sizing Standards
- **Inline icons:** `w-4 h-4` (16px) - Buttons, inputs, text
- **Button icons:** `w-5 h-5` (20px) - Sidebar, navigation
- **Decorative icons:** `w-6 h-6` (24px) - Stat cards, headers

---

## 🚀 Quick Import

```tsx
// Import everything from design system
import { 
  colors, spacing, typography,
  Button, Card, Avatar, Badge,
  ThemeProvider, useTheme
} from './design-system';
```