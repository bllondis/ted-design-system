import { ThemeProvider } from './design-system/theme-provider';

/**
 * Master Design System Template
 * 
 * This is a clean starting point for new projects.
 * 
 * Available components:
 * - src/app/design-system/components/ — custom design system components
 * - src/app/components/ui/ — shadcn/ui base components
 * 
 * Design tokens:
 * - src/app/design-system/tokens.ts
 * - src/styles/theme.css
 * 
 * Guidelines:
 * - guidelines/Guidelines.md
 * 
 * Usage:
 * Replace this file with your page content.
 * Always wrap with ThemeProvider for light/dark mode support.
 */

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Your page content here */}
      </div>
    </ThemeProvider>
  );
}
