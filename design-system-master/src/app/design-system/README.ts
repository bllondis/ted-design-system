/**
 * Design System Documentation
 * 
 * This design system provides a comprehensive set of tokens and components
 * to ensure consistency across the entire application.
 */

// ============================================
// USAGE EXAMPLES
// ============================================

/**
 * IMPORTING TOKENS
 * 
 * import { colors, spacing, typography, radius, shadows, effects } from './design-system/tokens';
 * 
 * // Use in styles
 * const buttonStyle = {
 *   backgroundColor: colors.primary[500],
 *   padding: spacing[4],
 *   borderRadius: radius.xl,
 *   boxShadow: shadows.md,
 * };
 */

/**
 * IMPORTING COMPONENTS
 * 
 * import { Button, Card, Avatar, Badge } from './design-system/components';
 * 
 * // Use in JSX
 * <Button variant="primary" size="md">Click me</Button>
 * <Card variant="default" padding="md">Content</Card>
 */

/**
 * USING THEME PROVIDER
 * 
 * import { ThemeProvider, useTheme } from './design-system/theme-provider';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * 
 * function Component() {
 *   const { theme, toggleTheme, setTheme } = useTheme();
 *   return <button onClick={toggleTheme}>Toggle Theme</button>;
 * }
 */

// ============================================
// COLOR TOKENS
// ============================================

/**
 * PRIMARY COLORS (Green Theme)
 * Main brand color used for primary actions and accents
 * 
 * - primary.50 to primary.900: Full scale from light to dark
 * - Use primary.500 as the main color
 * - Use primary.600 for hover states
 * - Use primary.700 for active states
 */

/**
 * NEUTRAL COLORS
 * Used for text, backgrounds, borders
 * 
 * - neutral.50-100: Light backgrounds
 * - neutral.200-300: Borders
 * - neutral.400-600: Muted text
 * - neutral.700-900: Dark backgrounds and text
 */

/**
 * SEMANTIC COLORS
 * Communicate meaning and state
 * 
 * - semantic.success: #10b981 (Green)
 * - semantic.warning: #f59e0b (Orange)
 * - semantic.error: #ef4444 (Red)
 * - semantic.info: #3b82f6 (Blue)
 * 
 * CSS VARIABLES (Use these in components):
 * - --success: Success state color (adapts to theme)
 * - --success-foreground: Success text color
 * - --warning: Warning state color (adapts to theme)
 * - --warning-foreground: Warning text color
 * - --destructive: Error/danger state color
 * - --destructive-foreground: Error text color
 * - --ring: Focus ring color (adapts to theme)
 */

/**
 * LIGHT/DARK MODE COLORS
 * Theme-specific colors that automatically switch
 * 
 * Light Mode:
 * - background: #f7f9fb
 * - backgroundAlt: #ffffff (cards)
 * - foreground: #1a202c (text)
 * - foregroundMuted: #6b7280 (secondary text)
 * 
 * Dark Mode:
 * - background: #0f172a
 * - backgroundAlt: #1f2937 (cards)
 * - foreground: #f8fafc (text)
 * - foregroundMuted: #9ca3af (secondary text)
 */

// ============================================
// TYPOGRAPHY TOKENS
// ============================================

/**
 * FONT SIZES (8pt Grid System)
 * xs: 12px, sm: 14px, base: 16px, lg: 18px
 * xl: 20px, 2xl: 24px, 3xl: 30px, 4xl: 36px
 * 
 * FONT WEIGHTS
 * normal: 400, medium: 500, semibold: 600, bold: 700
 * 
 * LINE HEIGHTS
 * none: 1, tight: 1.25, snug: 1.375, normal: 1.5, relaxed: 1.625, loose: 2
 */

// ============================================
// SPACING TOKENS (8pt Grid System)
// ============================================

/**
 * All spacing uses multiples of 8px for consistency
 * 
 * 1: 2px   - Fine adjustments
 * 2: 4px   - Tiny gaps
 * 3: 6px   - Small gaps
 * 4: 8px   - Base unit
 * 6: 12px  - Small spacing
 * 8: 16px  - Medium spacing
 * 10: 20px - Medium-large spacing
 * 12: 24px - Large spacing
 * 16: 32px - Extra large spacing
 * 20-64: Larger increments for layout
 */

// ============================================
// BORDER RADIUS TOKENS
// ============================================

/**
 * Consistent rounded corners
 * 
 * sm: 6px   - Subtle rounding
 * base: 8px - Default rounding
 * md: 10px  - Medium rounding
 * lg: 12px  - Large rounding (cards, buttons)
 * xl: 16px  - Extra large rounding
 * 2xl: 20px - Maximum rounding (major cards)
 * full: 50% - Circles and pills
 */

// ============================================
// SHADOW TOKENS
// ============================================

/**
 * Elevation and depth
 * 
 * sm: Subtle elevation (1-2px)
 * base: Default cards (2-3px)
 * md: Raised elements (4-6px)
 * lg: Floating elements (10-15px)
 * xl: Modals and popovers (20-25px)
 * 2xl: Maximum elevation (25-50px)
 * inner: Inset shadows
 */

// ============================================
// EFFECT TOKENS
// ============================================

/**
 * TRANSITIONS
 * fast: 150ms - Quick interactions
 * base: 200ms - Default transitions
 * slow: 300ms - Smooth animations
 * slower: 500ms - Dramatic effects
 * 
 * BLUR
 * sm to xl: Progressive blur levels
 */

// ============================================
// COMPONENT VARIANTS
// ============================================

/**
 * BUTTON VARIANTS
 * - primary: Main CTA (green background)
 * - secondary: Secondary actions (gray background)
 * - outline: Borders only
 * - ghost: Transparent background
 * - danger: Destructive actions (red)
 * 
 * BUTTON SIZES
 * - sm: 32px height
 * - md: 40px height
 * - lg: 48px height
 */

/**
 * CARD VARIANTS
 * - default: Standard card with border and shadow
 * - elevated: Enhanced shadow
 * - outlined: Bold border
 * - ghost: No background
 * 
 * CARD PADDING
 * - none: 0
 * - sm: 16px
 * - md: 24px
 * - lg: 32px
 */

/**
 * BADGE VARIANTS
 * - default: Neutral gray (uses --muted tokens)
 * - primary: Brand green (uses --primary tokens)
 * - success: Success green (uses --success tokens)
 * - warning: Warning orange (uses --warning tokens)
 * - danger: Error red (uses --destructive tokens)
 * - outline: Bordered (uses --border token)
 * 
 * All badge variants automatically adapt to dark mode using semantic tokens.
 */

/**
 * AVATAR VARIANTS
 * - circle: Fully rounded
 * - rounded: 16px radius
 * - square: 12px radius
 * 
 * AVATAR SIZES
 * - xs: 24px
 * - sm: 32px
 * - md: 40px
 * - lg: 48px
 * - xl: 64px
 */

/**
 * INPUT VARIANTS
 * - default: Light gray background
 * - filled: Filled neutral background
 * - outline: Bordered only
 */

/**
 * PROGRESS VARIANTS
 * - default: Primary green (uses --primary token)
 * - success: Success green (uses --success token)
 * - warning: Warning orange (uses --warning token)
 * - danger: Error red (uses --destructive token)
 * 
 * All progress variants automatically adapt to dark mode using semantic tokens.
 */

// ============================================
// INTERACTIVE STATES
// ============================================

/**
 * BUTTON STATES
 * - Hover: All variants have hover states (e.g., bg-primary/90)
 * - Active: All variants have active/pressed states (e.g., bg-primary/80)
 * - Focus: All variants have focus-visible rings using --ring token
 * - Disabled: opacity-50 + cursor-not-allowed
 * - Loading: Shows spinner, disables interaction
 * 
 * INPUT/TEXTAREA STATES
 * - Default: Uses variant background color
 * - Focus: ring-2 ring-ring (uses --ring token)
 * - Error: ring-2 ring-destructive (uses --destructive token)
 * - Disabled: opacity-50 + cursor-not-allowed
 * 
 * CARD STATES
 * - Hoverable: When hoverable={true}, adds hover:shadow-lg
 * 
 * AVATAR STATES
 * - Online: Uses --success token for online indicator
 * - Offline: Uses --muted token for offline indicator
 * 
 * All interactive states use semantic tokens to ensure proper dark mode support.
 */

// ============================================
// ICON SIZING STANDARDS
// ============================================

/**
 * CONSISTENT ICON SIZES
 * - Inline icons: w-4 h-4 (16px) - Used in text, buttons, inputs
 * - Button icons: w-5 h-5 (20px) - Used in sidebar, navigation
 * - Decorative icons: w-6 h-6 (24px) - Used in stat cards, headers
 * 
 * Examples:
 * - Search icon in input: w-4 h-4
 * - Sidebar menu icons: w-5 h-5
 * - StatCard icon: w-6 h-6
 */

export {};