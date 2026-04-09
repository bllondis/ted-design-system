Design System Guidelines
General rules

Always use components from src/app/design-system/components/
Always use CSS variables from theme.css — never hardcode colors
Follow 8pt spacing grid: 0, 2, 4, 8, 12, 16, 24, 32, 40, 48px
Use only lucide-react icons
Never create custom styles that duplicate existing component logic
Keep components small — one responsibility per component


Colors

Never use hardcoded hex values like #1f7a63 or #ffffff
Never use Tailwind color classes like bg-green-500, text-red-700, bg-neutral-100
Always use semantic tokens:

PurposeTokenBrand colorbg-primary / text-primaryPage backgroundbg-backgroundCard backgroundbg-cardSubtle backgroundbg-mutedPrimary texttext-foregroundSecondary texttext-muted-foregroundBordersborder-borderSuccess statesbg-success / text-successWarning statesbg-warning / text-warningError/danger statesbg-destructive / text-destructiveFocus ringsring-ringSidebarbg-sidebar / border-sidebar-border

Gradients

Never use color scale classes in gradients: from-primary-500, to-primary-600, from-green-400
Always use CSS variable gradients: from-primary to-primary/80
Never use hardcoded hex values in gradients


Typography

Font sizes — only from scale: text-xs (12px), text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px)
Font weights — only: font-normal (400), font-medium (500), font-semibold (600), font-bold (700)
Never use arbitrary sizes like text-[15px]


Spacing

Only use values from the 8pt grid
Never use arbitrary Tailwind like p-[13px], gap-[7px], mt-[18px]
Allowed Tailwind spacing: p-1, p-2, p-3, p-4, p-6, p-8, p-10, p-12, p-16


Border radius

Never use arbitrary values like rounded-[11px]
Only use: rounded-sm (6px), rounded-md (8px), rounded-lg (10px), rounded-xl (14px), rounded-full


Icons

Only use icons from lucide-react
Sizes must be explicit — never inherit from parent:

Inline icons: w-4 h-4
Button icons: w-5 h-5
Decorative icons: w-6 h-6



Icons inside components

Icon spacing is always created with gap between flex children — never with padding on the container
Never increase container width or height to create spacing around an icon
Icon and text must always be in a flex container with items-center
Never add a wrapper <div> or <span> around an icon just to add margin


Animations and transitions

Only use transition values from effects.transition in tokens.ts:

fast = 150ms cubic-bezier(0.4, 0, 0.2, 1)
base = 200ms cubic-bezier(0.4, 0, 0.2, 1)
slow = 300ms cubic-bezier(0.4, 0, 0.2, 1)


Never hardcode transition: all 0.3s ease or similar
Use Tailwind: transition-colors, transition-shadow, transition-all with duration-150, duration-200, duration-300


Layout and structure

Sidebar width is always w-56 (224px) — never change
Main content always: flex-1 overflow-y-auto p-6
Never use position: fixed for sidebar or header — use flexbox layout
Page background always bg-background
Never create full-page layouts with hardcoded heights


Components
Button

Use <Button> for all clickable actions — never custom <div onClick>
Variants: primary | secondary | outline | ghost | danger
Sizes: sm | md | lg
One primary button per section maximum
Never change button height to fit an icon — use the correct size prop

Card

Use <Card> for all content containers
Variants: default | elevated | outlined | ghost
Never build custom card-like containers with inline styles

Badge

Use <Badge> for all tags, labels, status indicators
Positive change → variant="success"
Negative change → variant="danger"
Never use colored <span> instead of Badge

StatCard

Use <StatCard> for all metric displays
Always pass isPositive prop — it controls badge color semantically

Avatar

Use <Avatar> for all user representations
Never use a plain <div> with initials
Online indicator always uses bg-success — never bg-green-500

Input

Use <Input> for all text inputs
Always pass error prop for validation messages — never style errors manually
Focus ring always uses ring-ring token — never hardcoded color

Dropdown and Select

Always use components from src/app/components/ui/select.tsx
Never build a custom dropdown from scratch with <div> and onClick
Never use native <select> HTML element — it cannot be styled consistently across browsers
Chevron icon spacing always via gap — never via pr-* on the container

Native browser elements — forbidden
Never use these native HTML elements directly — they are controlled by the browser/OS and cannot be fully styled:

<select> → use src/app/components/ui/select.tsx instead
<input type="checkbox"> → use src/app/components/ui/checkbox.tsx
<input type="radio"> → use src/app/components/ui/radio-group.tsx
<input type="range"> → use src/app/components/ui/slider.tsx
<progress> → use src/app/design-system/components/progress.tsx

How to recognize a native element in code:

The HTML tag is <select>, <input>, <progress> etc.
The element has appearance-none or -webkit-appearance: none — this is a signal someone tried to override native styles but couldn't fully control them


Dark mode

Never write separate dark mode styles manually
All tokens automatically adapt — trust the system
Never use dark:bg-green-900 or similar hardcoded dark overrides
Allowed exception: dark:bg-primary/20 only when token opacity variant is needed
Never use dark: prefix with color scale classes like dark:bg-neutral-800


Bug fixing rules

Fix ONLY what is broken — never change size, color, or structure of unrelated elements
Never increase container size to fix icon or text spacing
Never add wrapper elements (<div>, <span>) to solve a spacing problem
Never change component variant or size to fix a visual issue
When fixing padding/margin — change only the specific property that is wrong
After fixing, verify in both light and dark mode


Audit rules

Always show real code from the file — never summarize
Always show before → after for every change made
Never report "everything is fixed" without listing specific changes with file names and line numbers
If no violations found — show the code that was checked as proof
Audit must check: hex colors, Tailwind color classes, arbitrary values, gradient classes, transition values, z-index values
Audit must check for native HTML elements: <select>, <input type="checkbox">, <input type="radio">, <input type="range">, <progress> — these must be replaced with design system components


What is forbidden

Hardcoded hex colors anywhere outside tokens.ts and theme.css
Tailwind color palette classes: bg-green-*, text-red-*, bg-neutral-*, bg-blue-* etc.
Arbitrary Tailwind values: p-[*], text-[*], rounded-[*], gap-[*]
Custom inline styles that duplicate component logic
Icons without explicit size classes
Font weights other than 400, 500, 600, 700
z-index values outside the scale: 0, 1000, 1100, 1200, 1300, 1400, 1500, 1600
position: fixed for layout elements
Hardcoded transition values like transition: all 0.3s ease
Gradient classes with color scale: from-primary-500, to-green-400
Increasing container size to fix icon spacing
Custom dropdowns built from scratch
Native <select> element — use ui/select.tsx instead
Native <input type="checkbox"> — use ui/checkbox.tsx instead
Native <input type="radio"> — use ui/radio-group.tsx instead
dark: prefix with hardcoded color classes