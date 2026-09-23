/**
 * Manga hand-ink SVG filter — feTurbulence + feDisplacementMap.
 * Apply to border shells only (never to text). Inject once under the JOJO root.
 *
 * @example
 * ```tsx
 * <div className={jojoRootClass}>
 *   <div dangerouslySetInnerHTML={{ __html: jojoInkFilterSvg }} />
 *   <ConfigProvider theme={jojoTheme}>…</ConfigProvider>
 * </div>
 * ```
 */
export const jojoInkFilterId = "jojo-ink-rough";

/** Subtle wobble for ink contours (scale ~2.2) */
export const jojoInkFilterSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">
  <defs>
    <filter id="${jojoInkFilterId}" x="-8%" y="-8%" width="116%" height="116%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="jojo-ink-rough-strong" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.6" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
</svg>`;
