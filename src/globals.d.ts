declare module '*.md' {
    const content: string;
    export default content;
}

declare module 'react-granim' {
    import { HTMLProps } from 'react';
    
    type Direction = 'diagonal' | 'left-right' | 'top-bottom' | 'radial' | 'custom';
    type CustomDirection = {
        x0: string, y0: string, x1: string, y1: string
    };

    type Gradients = Array<Array<string>> | Array<Array<{ color: string, pos: number }>>;
    type States = {
        gradients?: Gradients,
        transitionSpeed?: number,
        loop?: boolean
    };

    type StretchMode = 'none' | 'stretch' | 'stretch-if-smaller' | 'stretch-if-bigger';
    type Image = {
        source?: string,
        position?: ['left' | 'center' | 'right', 'top' | 'center' | 'bottom'],
        stretchMode?: [StretchMode, StretchMode],
        blendingMode?: string;
    };

    export interface GranimData extends HTMLProps<any> {
        element?: string | HTMLCanvasElement;
        name?: string;
        elToSetClassOn?: string;
        direction?: Direction;
        customDirection?: CustomDirection;
        isPausedWhenNotInView?: boolean;
        scrollDebounceThreshold?: number;
        stateTransitionSpeed?: number;
        defaultStateName?: string;
        states?: States;
        image?: Image;
        onStart?: Function;
        onGradientChange?: Function;
        onEnd?: Function;
    }

    class Granim extends React.Component<GranimData, GranimData> {
        
        public play();

        public pause();

        public clear();

        public changeState(state: string);

        public changeDirection(direction: string);

        public changeBlendingMode(blendMode: string);

        public destroy();
    }
    export default Granim;
}