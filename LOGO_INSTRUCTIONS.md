# Adding the Atrios Logo

To replace the text logo placeholder with the actual Atrios logo image:

## Step 1: Add the Logo File

Place your logo file in one of these locations:
- `public/logo.png` (or .svg, .jpg)
- `src/assets/logo.png` (or .svg, .jpg)

We recommend using SVG format for best quality at all sizes.

## Step 2: Update the Landing Page

Open `src/screens/Landing.jsx` and replace the logo placeholder section:

### Current (line 13-16):
```jsx
<div className="flex justify-center">
  <div className="text-3xl font-bold tracking-tight text-primary">
    ATRIOS
  </div>
</div>
```

### Replace with:
```jsx
<div className="flex justify-center">
  <img
    src="/logo.png"
    alt="Atrios"
    className="h-8 w-auto"
  />
</div>
```

Or if using src/assets:
```jsx
import logo from '@/assets/logo.png'

// Then in the component:
<div className="flex justify-center">
  <img
    src={logo}
    alt="Atrios"
    className="h-8 w-auto"
  />
</div>
```

## Recommended Logo Specifications

- **Format**: SVG (preferred) or PNG
- **Height**: 32-48px (adjust the `h-8` class as needed)
- **Background**: Transparent
- **Color**: Should work well on white background

## Adjusting Logo Size

Modify the height class in the img tag:
- `h-6` = 24px
- `h-8` = 32px (current)
- `h-10` = 40px
- `h-12` = 48px
