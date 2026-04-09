/**
 * Design System - Central Export
 * Import everything from a single location
 * 
 * @example
 * import { 
 *   colors, spacing, typography,
 *   Button, Card, Avatar,
 *   ThemeProvider, useTheme
 * } from './design-system';
 */

// Export all tokens
export * from './tokens';

// Export theme provider and hook
export { ThemeProvider, useTheme } from './theme-provider';

// Export all components
export * from './components';
