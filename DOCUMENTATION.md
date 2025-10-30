# ShiftSmart - Project Documentation

## Project Overview

ShiftSmart is an intelligent shift scheduling application built for Reuters editorial teams. The application enables managers to schedule staff assignments across multiple bureaus (Milan and Rome) with automated conflict detection, drag-and-drop scheduling, and comprehensive employee management.

**Tech Stack:**
- Next.js 16 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- @dnd-kit for drag and drop functionality

---

## Design System

### Color Palette

The application uses a minimal, professional color palette centered around the Reuters brand:

**Primary Colors:**
- **Reuters Orange** (`#FF6600`) - Primary brand color, used for CTAs, accents, and interactive elements
- **Warm Charcoal** (`#3A3A3A`) - Secondary accent for text and UI elements
- **White** (`#FFFFFF`) - Main background color
- **Light Gray** (`#F5F5F5`) - Card backgrounds and subtle containers

**Status Indicator Colors:**
- **Green** (`#22C55E`) - Success states, no conflicts, positive metrics
- **Yellow** (`#EAB308`) - Warnings, pending states
- **Red** (`#EF4444`) - Conflicts, errors, items needing attention

**Design Tokens (globals.css):**
\`\`\`css
--background: 0 0% 100%;           /* White */
--foreground: 0 0% 3.9%;           /* Near black for text */
--card: 0 0% 100%;                 /* White */
--card-foreground: 0 0% 3.9%;      /* Near black */
--primary: 16 100% 50%;            /* Reuters Orange #FF6600 */
--primary-foreground: 0 0% 98%;    /* White text on orange */
--muted: 0 0% 96.1%;               /* Light gray */
--muted-foreground: 0 0% 45.1%;    /* Medium gray text */
--accent: 0 0% 96.1%;              /* Light gray accent */
--accent-foreground: 0 0% 9%;      /* Dark text on accent */
--destructive: 0 84.2% 60.2%;      /* Red for destructive actions */
--border: 0 0% 89.8%;              /* Light gray borders */
--input: 0 0% 89.8%;               /* Input borders */
--ring: 16 100% 50%;               /* Orange focus rings */
--radius: 0.5rem;                  /* 8px border radius */
--charcoal: 0 0% 23%;              /* Warm charcoal #3A3A3A */
\`\`\`

### Typography

**Font Family:**
- **Knowledge2017** - Custom Reuters font loaded via @font-face
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Fallback: system-ui, sans-serif

**Font Usage:**
\`\`\`css
@font-face {
  font-family: 'Knowledge2017';
  src: url('/fonts/Knowledge2017-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Knowledge2017';
  src: url('/fonts/Knowledge2017-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Knowledge2017';
  src: url('/fonts/Knowledge2017-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
\`\`\`

**Typography Scale:**
- **Headings:** Bold weight (700), varying sizes
  - h1: `text-6xl` (60px) - Hero titles
  - h2: `text-3xl` (30px) - Section headers
  - h3: `text-xl` (20px) - Card titles
  - h4: `text-lg` (18px) - Subsection headers
- **Body Text:** Medium weight (500), `text-base` (16px)
- **Small Text:** Medium weight (500), `text-sm` (14px)
- **Captions:** Medium weight (500), `text-xs` (12px)

**Line Height:**
- Body text: `leading-relaxed` (1.625)
- Headings: `tracking-tight` for better visual hierarchy

### Layout & Spacing

**Container Widths:**
- Max content width: `max-w-7xl` (1280px)
- Card max width: `max-w-4xl` (896px)

**Spacing Scale:**
- Uses Tailwind's default spacing scale (4px base unit)
- Common spacing: `gap-4`, `p-6`, `mb-8`, `space-y-6`

**Layout Method Priority:**
1. **Flexbox** - Primary layout method for most components
2. **CSS Grid** - Used for calendar views and multi-column layouts
3. **Absolute positioning** - Minimal use, only for overlays

---

## CSS Architecture

### Tailwind CSS v4

The project uses Tailwind CSS v4 with inline theme configuration in `globals.css`:

\`\`\`css
@import 'tailwindcss';

@theme inline {
  --font-sans: 'Knowledge2017', 'Knowledge2017 Fallback';
  
  /* Design tokens defined above */
}
\`\`\`

### Component Styling Patterns

**Card Components:**
\`\`\`tsx
<Card className="shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-primary">
  <CardHeader className="min-h-[72px]">
    <CardTitle className="font-bold">Title</CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col">
    {/* Content */}
  </CardContent>
</Card>
\`\`\`

**Button Patterns:**
\`\`\`tsx
// Primary button (orange)
<Button className="font-semibold hover:scale-105 transition-transform">
  Click Me
</Button>

// Ghost button
<Button variant="ghost" className="hover:bg-gray-100 transition-colors">
  Secondary Action
</Button>
\`\`\`

**Status Badges:**
\`\`\`tsx
<Badge className="bg-green-100 text-green-700">Confirmed</Badge>
<Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
<Badge className="bg-red-100 text-red-700">Conflict</Badge>
\`\`\`

### Micro-Animations

**Hover Effects:**
- Scale: `hover:scale-105` or `hover:scale-[1.02]`
- Shadow: `hover:shadow-md` or `hover:shadow-lg`
- Background: `hover:bg-gray-100`
- Transform: `transition-all` or `transition-transform`

**Transitions:**
- Default: `transition-all` (200ms)
- Specific: `transition-colors`, `transition-transform`, `transition-shadow`
- Duration: `duration-300` for slower animations

**Progress Bars:**
\`\`\`tsx
<div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
  <div 
    className="h-full bg-primary transition-all duration-500" 
    style={{ width: '75%' }}
  />
</div>
\`\`\`

---

## Application Structure

### File Organization

\`\`\`
app/
├── page.tsx                          # Welcome/landing page
├── login/page.tsx                    # Login page
├── signup/page.tsx                   # Signup page
├── layout.tsx                        # Root layout
├── globals.css                       # Global styles & design tokens
└── dashboard/
    ├── layout.tsx                    # Dashboard layout with sidebar
    ├── page.tsx                      # Dashboard overview
    ├── schedule/page.tsx             # Schedule management
    ├── employees/
    │   ├── page.tsx                  # Employee directory
    │   ├── loading.tsx               # Loading state
    │   └── [id]/page.tsx             # Employee detail/edit page
    └── conflicts/page.tsx            # Conflict detection panel

components/
└── ui/                               # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── calendar.tsx
    ├── sidebar.tsx
    ├── table.tsx
    ├── tabs.tsx
    ├── badge.tsx
    ├── dialog.tsx
    ├── select.tsx
    ├── checkbox.tsx
    └── ... (other shadcn components)

public/
├── fonts/                            # Knowledge2017 font files
└── images/                           # Background images
\`\`\`

### Page Descriptions

#### 1. Welcome Page (`app/page.tsx`)

**Purpose:** Landing page for the application

**Key Features:**
- Reuters logo in header (120px width)
- Hero section with background image
- "ShiftSmart" title with two-tone styling (gray "Shift" + black "Smart")
- Feature list with orange icons as bullets
- Single orange "Log In" CTA button

**Background Image:**
- Dramatic journalistic photo with silhouettes
- Semi-transparent white overlay (90% opacity)
- Positioned behind all content

**CSS Highlights:**
\`\`\`tsx
// Hero section with background
<main className="flex-1 flex items-center justify-center px-6 py-16 relative">
  <div className="absolute inset-0 z-0">
    <img 
      src="[background-url]" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/90" />
  </div>
  <div className="max-w-4xl w-full relative z-10">
    {/* Content */}
  </div>
</main>
\`\`\`

#### 2. Login & Signup Pages

**Purpose:** Authentication flows for Reuters email addresses

**Key Features:**
- Centered card layout
- Reuters logo
- Email and password inputs
- Orange submit buttons
- Links to alternate auth page

**CSS Highlights:**
\`\`\`tsx
<Card className="w-full max-w-md shadow-lg">
  <CardHeader>
    <CardTitle className="text-2xl font-bold">Log In</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Form fields */}
  </CardContent>
</Card>
\`\`\`

#### 3. Dashboard Overview (`app/dashboard/page.tsx`)

**Purpose:** Main dashboard with schedule overview and metrics

**Key Features:**
- 4 stat cards with progress bars (aligned heights)
- Schedule overview with Week/Month/Quarter views
- Upcoming shifts table
- Recent conflicts panel

**Stat Cards CSS:**
\`\`\`tsx
<Card className="shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-[color]">
  <CardHeader className="min-h-[72px]">
    {/* Ensures consistent header height */}
  </CardHeader>
  <CardContent className="flex flex-col">
    <div className="mb-4">
      <div className="text-3xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground font-medium mt-1">
        {change}
      </p>
    </div>
    {/* Progress bar at bottom */}
  </CardContent>
</Card>
\`\`\`

**Calendar Views:**
- Week View: 7-column grid with shift cards
- Month View: Full calendar with shift badges in cells
- Quarter View: 3-month side-by-side display

#### 4. Schedule Management (`app/dashboard/schedule/page.tsx`)

**Purpose:** Create, edit, and manage shift schedules

**Key Features:**
- Multiple view modes (Week, Month, Quarter, List, Grid)
- Drag and drop functionality using @dnd-kit
- Add new shift dialog
- Edit/copy/delete actions

**Drag and Drop Implementation:**
\`\`\`tsx
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';

<DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
  {/* Droppable day cells */}
  <div className="ring-2 ring-primary ring-offset-2 transition-all">
    {/* Draggable shift cards */}
    <div className="cursor-move hover:ring-2 hover:ring-primary">
      <GripVertical className="h-4 w-4 opacity-0 group-hover:opacity-100" />
      {/* Shift content */}
    </div>
  </div>
</DndContext>
\`\`\`

**Visual Feedback:**
- Grip handle appears on hover
- Dragging: `opacity-50`
- Drop zones: `ring-2 ring-primary`
- Hover: `hover:shadow-md`

#### 5. Employee Directory (`app/dashboard/employees/page.tsx`)

**Purpose:** View and manage employee information

**Key Features:**
- Search and filter functionality
- Table and card view modes
- Edit button links to employee detail page
- Add new employee dialog

**Table CSS:**
\`\`\`tsx
<Table>
  <TableHeader>
    <TableRow className="hover:bg-transparent">
      <TableHead className="font-bold">Name</TableHead>
      {/* Other headers */}
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="hover:bg-muted/50 transition-colors">
      {/* Row content */}
    </TableRow>
  </TableBody>
</Table>
\`\`\`

#### 6. Employee Detail Page (`app/dashboard/employees/[id]/page.tsx`)

**Purpose:** Edit employee details and shift preferences

**Key Features:**
- Three tabs: Details, Shift Preferences, Shift History
- Editable form fields
- Preferred days selection with checkboxes
- Save/Cancel actions

**Tab Navigation:**
\`\`\`tsx
<Tabs defaultValue="details">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="details">Employee Details</TabsTrigger>
    <TabsTrigger value="preferences">Shift Preferences</TabsTrigger>
    <TabsTrigger value="history">Shift History</TabsTrigger>
  </TabsList>
  <TabsContent value="details">
    {/* Form fields */}
  </TabsContent>
</Tabs>
\`\`\`

#### 7. Conflict Detection (`app/dashboard/conflicts/page.tsx`)

**Purpose:** Identify and resolve scheduling conflicts

**Key Features:**
- Filter by severity (All, High, Medium, Low)
- Conflict cards with color-coded severity
- Resolve/dismiss actions
- Conflict details with affected employees

**Severity Styling:**
\`\`\`tsx
// High severity
<Badge className="bg-red-100 text-red-700">High</Badge>

// Medium severity
<Badge className="bg-orange-100 text-orange-700">Medium</Badge>

// Low severity
<Badge className="bg-yellow-100 text-yellow-700">Low</Badge>
\`\`\`

---

## Dashboard Layout

### Sidebar Navigation

**Structure:**
- Collapsible sidebar using shadcn/ui Sidebar component
- Reuters logo at top
- Navigation items with icons
- Background image with subtle overlay

**Sidebar CSS:**
\`\`\`tsx
<Sidebar>
  <SidebarHeader>
    <img src="[reuters-logo]" className="h-10 w-auto" />
  </SidebarHeader>
  <SidebarContent className="relative">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/95" />
    </div>
    {/* Navigation items */}
    <SidebarMenu className="relative z-10">
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Icon className="h-4 w-4" />
          <span>Label</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarContent>
</Sidebar>
\`\`\`

**Background Image:**
- Architectural photo with silhouettes
- 95% white overlay for subtlety
- Ensures navigation text remains readable

---

## Key Design Decisions

### 1. Color Usage
- **Orange** reserved for primary actions and Reuters branding
- **Charcoal** for secondary text and UI elements
- **Status colors** (green/yellow/red) only for indicators, not decorative
- No blue in the design to maintain brand consistency

### 2. Typography Hierarchy
- Bold headings (700 weight) for clear visual hierarchy
- Medium weight (500) for body text and UI labels
- Consistent use of `text-balance` for optimal line breaks
- Tight tracking on large headings for professional look

### 3. Depth & Layering
- Subtle shadows on cards: `shadow-sm` default, `shadow-md` on hover
- Border accents: `border-l-4` with color coding
- Hover elevation: `hover:scale-[1.02]` for subtle lift effect
- Smooth transitions: `transition-all` for cohesive animations

### 4. Alignment & Spacing
- Left-aligned headers throughout (flush left)
- Consistent card heights using `min-h-[72px]` on headers
- Progress bars aligned at same level using flexbox
- Generous spacing: `gap-6`, `p-6`, `space-y-6`

### 5. Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Sidebar collapses on mobile
- Grid layouts adapt: `md:grid-cols-2`, `lg:grid-cols-4`
- Touch-friendly button sizes: `h-10`, `px-4`

### 6. Accessibility
- Semantic HTML elements (`main`, `header`, `nav`)
- ARIA labels on icon buttons
- Focus rings using `ring-primary`
- Sufficient color contrast (WCAG AA compliant)
- Keyboard navigation support

---

## Component Patterns

### Card with Left Border Accent

\`\`\`tsx
<Card className="shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary">
  <CardHeader>
    <CardTitle className="font-bold">Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
\`\`\`

### Stat Card with Progress Bar

\`\`\`tsx
<Card className="shadow-sm hover:shadow-md transition-all border-l-4 border-l-green-500">
  <CardHeader className="min-h-[72px] flex flex-row items-center justify-between">
    <CardTitle className="text-sm font-semibold">Metric Name</CardTitle>
    <Icon className="h-4 w-4 text-muted-foreground" />
  </CardHeader>
  <CardContent className="flex flex-col">
    <div className="mb-4">
      <div className="text-3xl font-bold">94%</div>
      <p className="text-xs text-muted-foreground font-medium mt-1">
        +3% from last week
      </p>
    </div>
    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary transition-all duration-500" 
        style={{ width: '94%' }}
      />
    </div>
  </CardContent>
</Card>
\`\`\`

### Draggable Shift Card

\`\`\`tsx
<div className="group relative">
  <Card className="cursor-move hover:shadow-md hover:ring-2 hover:ring-primary transition-all">
    <CardContent className="p-3">
      <div className="flex items-start gap-2">
        <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        <div className="flex-1">
          <div className="font-semibold text-sm">Employee Name</div>
          <div className="text-xs text-muted-foreground">9:00 AM - 5:00 PM</div>
          <Badge className="mt-1 text-xs">Role</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
\`\`\`

### Calendar Day Cell

\`\`\`tsx
<div className="border border-border p-2 min-h-[120px] bg-card hover:bg-muted/30 transition-colors">
  <div className="text-sm font-semibold mb-2">
    {dayNumber}
  </div>
  <div className="space-y-1">
    {shifts.map(shift => (
      <div key={shift.id} className="text-xs p-1 bg-primary/10 rounded">
        {shift.employee}
      </div>
    ))}
  </div>
</div>
\`\`\`

### Feature List Item

\`\`\`tsx
<div className="flex gap-4 items-start">
  <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
  <div>
    <h3 className="text-lg font-bold mb-1">Feature Title</h3>
    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
      Feature description explaining the functionality.
    </p>
  </div>
</div>
\`\`\`

---

## Performance Considerations

### Image Optimization
- Background images loaded via Next.js Image component where possible
- Proper sizing and compression for web delivery
- Lazy loading for below-fold content

### CSS Performance
- Tailwind CSS purges unused styles in production
- Minimal custom CSS, leveraging utility classes
- No CSS-in-JS runtime overhead

### Component Optimization
- React Server Components for static content
- Client components only where interactivity needed
- Proper use of `use client` directive

---

## Future Enhancements

### Potential Improvements
1. **Dark Mode** - Add dark theme support using Tailwind dark: variants
2. **Animations** - More sophisticated animations using Framer Motion
3. **Data Visualization** - Charts using Recharts for analytics
4. **Real-time Updates** - WebSocket integration for live schedule changes
5. **Mobile App** - React Native version for mobile scheduling
6. **Notifications** - Push notifications for conflict alerts
7. **Export** - PDF/CSV export of schedules
8. **Integrations** - Calendar sync (Google Calendar, Outlook)

---

## Maintenance Notes

### Adding New Colors
Update `globals.css` with new design tokens:
\`\`\`css
@theme inline {
  --new-color: [h] [s%] [l%];
}
\`\`\`

### Adding New Fonts
1. Add font files to `/public/fonts/`
2. Add @font-face declarations in `globals.css`
3. Update font-family in theme configuration

### Modifying Spacing
Use Tailwind's spacing scale consistently:
- Small: `gap-2`, `p-2`, `mb-2` (8px)
- Medium: `gap-4`, `p-4`, `mb-4` (16px)
- Large: `gap-6`, `p-6`, `mb-6` (24px)
- Extra Large: `gap-8`, `p-8`, `mb-8` (32px)

### Component Updates
When updating shadcn/ui components:
\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

---

## Browser Support

**Supported Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

**CSS Features Used:**
- CSS Grid
- Flexbox
- CSS Custom Properties (design tokens)
- CSS Transitions
- backdrop-filter (for overlays)

---

## Conclusion

ShiftSmart is built with a focus on professional design, performance, and maintainability. The design system is minimal yet sophisticated, leveraging the Reuters brand identity while providing a clean, functional interface for shift scheduling. The use of Tailwind CSS ensures consistency and rapid development, while the component-based architecture allows for easy maintenance and future enhancements.

For questions or contributions, refer to the codebase structure outlined above and follow the established patterns for consistency.
