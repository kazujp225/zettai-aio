declare module 'react-flickity-component' {
  import * as React from 'react';

  interface FlickityOptions {
    cellAlign?: 'left' | 'center' | 'right' | number;
    contain?: boolean;
    wrapAround?: boolean;
    pageDots?: boolean;
    prevNextButtons?: boolean;
    autoPlay?: boolean | number;
    draggable?: boolean | string;
    freeScroll?: boolean;
    groupCells?: boolean | number | string;
    initialIndex?: number;
    lazyLoad?: boolean | number;
    percentPosition?: boolean;
    resize?: boolean;
    setGallerySize?: boolean;
    watchCSS?: boolean;
    selectedAttraction?: number;
    friction?: number;
    freeScrollFriction?: number;
    imagesLoaded?: boolean;
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrowShape?: string | { x0: number; x1: number; y1: number; x2: number; y2: number; x3: number };
    cellSelector?: string;
    hash?: boolean;
    on?: Record<string, (...args: unknown[]) => void>;
  }

  interface FlickityProps {
    className?: string;
    elementType?: string;
    options?: FlickityOptions;
    disableImagesLoaded?: boolean;
    reloadOnUpdate?: boolean;
    static?: boolean;
    flickityRef?: (ref: Flickity) => void;
    children?: React.ReactNode;
  }

  class Flickity extends React.Component<FlickityProps> {}

  export default Flickity;
}
