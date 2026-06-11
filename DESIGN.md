---
name: warkopmdj
description: Landing site and CMS for PT Warkop Medan Indonesia
colors:
  bg: "#FFFFFF"
  bg-alt: "#F7F7F5"
  surface: "#FFFFFF"
  primary: "#2D4D31"
  primary-dark: "#1F3522"
  primary-soft: "#4A6B4E"
  primary-tint: "#EEF3EF"
  secondary: "#2D4D31"
  secondary-soft: "#6E8C72"
  accent: "#2D4D31"
  accent-soft: "#4A6B4E"
  text: "#14201A"
  muted: "#6F7670"
  muted-soft: "#9CA39E"
  border: "#ECEDEA"
  border-soft: "#F2F2F0"
  border-strong: "#D8DAD6"
  danger: "#A2412B"
typography:
  display:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.85rem, 3.6vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "11px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.sm}"
    padding: "11px 22px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.primary}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    border: "1px solid {colors.border}"
---

# Design System: warkopmdj

## 1. Overview

**Creative North Star: "The Corner Cafe"**

Sistem visual ini menangkap suasana kedai kopi lokal yang hangat dan relax — seperti corner cafe yang jadi tempat kumpul anak muda Medan. Bukan corporate sophistication, tapi authentic local charm yang accessible. Palette white + deep forest green memberikan keyakinan dan ketenangan tanpa terlihat dingin atau terlalu korporat.

Font pairing Lora (serif) untuk heading + Inter (sans) untuk body memberikan karakter yang warmth tapi tetap readable. Setiap elemen didesain untuk membuat pelanggan merasa welcome, dari pelanggan biasa yang cari info outlet hingga investor yang tertarik partnership.

**Key Characteristics:**
- **Warm minimalism**: Clean tapi tidak sterile. White background dengan green accents yang purposeful
- **Quiet confidence**: Desain tidak rame. Biarkan konten (menu, outlet photos, events) jadi hero
- **Local authenticity**: Visual yang mencerminkan kultur Medan, bukan AI-generated aesthetic
- **Approachable**: Setiap pengguna merasa welcome — dari student yang cari kopi sampai businessman yang mau investasi

## 2. Colors

Palette white + deep forest green yang calm dan premium.

### Primary
- **Forest Green** (#2D4D31): Primary actions, navigation links, brand elements. Used for buttons, links, dan accent borders.
- **Forest Dark** (#1F3522): Hover states for primary elements. Provides depth pada interaction.
- **Forest Soft** (#4A6B4E): Secondary accent untuk subtle highlights.
- **Forest Tint** (#EEF3EF): Background tint untukhover states dan selected items.

### Neutral
- **Pure White** (#FFFFFF): Main background, cards, surfaces at rest.
- **Warm Off-White** (#F7F7F5): Alternative background untuk section variations, memberikan subtle warmth.
- **Deep Charcoal** (#14201A): Primary text color. High contrast untuk readability.
- **Muted Gray** (#6F7670): Secondary text, descriptions, meta information.
- **Soft Gray** (#9CA39E): Placeholder text, dividers.
- **Light Border** (#ECEDEA): Default borders pada cards, inputs.
- **Soft Border** (#F2F2F0): Subtle dividers, alternative borders.
- **Strong Border** (#D8DAD6): Hover borders, active states.

### Semantic
- **Danger** (#A2412B): Error states, destructive actions.

### Named Rules
**The Subtle Surface Rule.** Background surfaces are white or warm off-white only. Never use tinted backgrounds beyond these two neutrals. The green is the accent, not the background.

**The Primary Scarcity Rule.** Forest green appears on ≤15% of any given screen. Its rarity is the point — used for CTAs, navigation active states, dan accent moments.

## 3. Typography

**Display/Heading Font:** Lora (with Georgia, "Times New Roman" fallback)
**Body Font:** Inter (with system-ui, -apple-system fallback)

**Character:** Classic serif heading memberikan warmth dan authenticity, mientras sans body memastikan readability dan modern touch. Seperti majalah kopi yang approachable.

### Hierarchy
- **Display** (500 weight, clamp(2.25rem, 4.6vw, 3.5rem), line-height 1.25): Hero headlines, page titles pada landing sections.
- **Headline** (500 weight, clamp(1.85rem, 3.6vw, 2.6rem), line-height 1.25): Section headings, card titles.
- **Title** (500 weight, clamp(1.4rem, 2.6vw, 2rem), line-height 1.25): Sub-sections, component titles.
- **Label** (600 weight, 0.75rem, letter-spacing 0.18em, uppercase): Eyebrow text, category labels, navigation small text.
- **Body** (400 weight, 1rem, line-height 1.6): Main content. Max line length 65-75ch untuk optimal readability.

### Named Rules
**The Heading Voice Rule.** All headings use Lora. Never mix heading fonts — consistency is the brand.

## 4. Elevation

Flat design dengan subtle shadows untuk depth. Tidak menggunakan heavy gradients atau glassmorphism.

### Shadow Vocabulary
- **Subtle** (`0 1px 2px rgba(20, 32, 26, 0.04)`): Card resting state, small elements.
- **Medium** (`0 4px 18px rgba(20, 32, 26, 0.06)`): Hover states, elevated cards.
- **Lifted** (`0 12px 36px rgba(20, 32, 26, 0.10)`): Modals, dropdowns, floating elements.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to interaction (hover, focus) or as elevation (modals). Never ship a card with a visible shadow by default.

## 5. Components

### Buttons
- **Shape:** 4px radius
- **Primary:** Forest green (#2D4D31) background, white text. Padding 11px 22px.
- **Primary Hover:** Forest dark (#1F3522) background, white text. Smooth transition.
- **Secondary:** Off-white background, forest dark text, light border.
- **Outline:** Transparent background, forest green border and text.
- **Ghost:** Transparent background, forest green text. Hover shows tint background.

### Cards
- **Corner Style:** 8px radius (md)
- **Background:** White (#FFFFFF)
- **Border:** Light border (#ECEDEA), 1px
- **Shadow Strategy:** None at rest. Medium shadow on hover.
- **Internal Padding:** 24px

### Inputs / Fields
- **Style:** White background, 1px light border, 8px radius
- **Focus:** Forest green border + subtle green glow (box-shadow 0 0 0 3px rgba(45, 77, 49, 0.10))
- **Error:** Danger color (#A2412B) for error text and border

### Navigation
- **Style:** Sticky navbar dengan blur backdrop. 72px height.
- **Links:** Muted gray by default, forest green on hover.
- **Active:** Forest green color, subtle underline or tint background.
- **Mobile:** Hidden on screens < 900px (hamburger menu placeholder)

### Chips / Tags
- **Style:** Off-white background, muted text, 4px radius, small border.
- **Accent Variant:** Tint background (#EEF3EF), primary-dark text, no border.

## 6. Do's and Don'ts

### Do:
- **Do** use white or warm off-white backgrounds only. Keep surfaces clean.
- **Do** use Lora for all headings and Inter for body text consistently.
- **Do** use forest green sparingly — for CTAs, active states, and accent moments only.
- **Do** maintain 4.5:1+ contrast ratio for body text against background.
- **Do** use the established 8px radius for cards and 4px for buttons.
- **Do** apply subtle shadows only on hover or elevation, never on resting state.

### Don't:
- **Don't** use gradient text (background-clip: text with gradient).
- **Don't** use glassmorphism or heavy blur effects decoratively.
- **Don't** add border-left/right colored stripes > 1px on cards or list items.
- **Don't** use numbered section markers (01/02/03) as default scaffolding.
- **Don't** add eyebrow (kicker) above every section — use purposefully.
- **Don't** create identical card grids with same icon + heading + text pattern repeated.
- **Don't** use placeholder gray text that doesn't meet 4.5:1 contrast.
- **Don't** mix heading fonts — Lora only for headings.
- **Don't** animate CSS layout properties unnecessarily.