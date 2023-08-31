import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const linearGradient: import("styled-components").FlattenSimpleInterpolation;
export declare const MediaWrapper: import("styled-components").StyledComponent<"div", any, {
    $active?: boolean;
    $cardHeight?: number;
    $slideShowActive?: boolean;
    $textOverlay?: boolean;
    align?: 'left' | 'right' | 'center';
    dir?: string;
    mode?: TimelineMode;
    theme?: Theme;
}, never>;
export declare const CardImage: import("styled-components").StyledComponent<"img", any, {
    $enableBorderRadius?: boolean;
    $visible?: boolean;
    dir?: string;
    fit?: string;
    mode?: TimelineMode;
}, never>;
export declare const CardVideo: import("styled-components").StyledComponent<"video", any, {
    height?: number;
}, never>;
export declare const MediaDetailsWrapper: import("styled-components").StyledComponent<"div", any, {
    $absolutePosition?: boolean;
    $borderLessCard?: boolean;
    $expandFull?: boolean;
    $expandable?: boolean;
    $gradientColor?: string | null;
    $showText?: boolean;
    $textInMedia?: boolean;
    mode?: TimelineMode;
    theme?: Theme;
}, never>;
export declare const ErrorMessage: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const IFrameVideo: import("styled-components").StyledComponent<"iframe", any, {}, never>;
export declare const DetailsTextWrapper: import("styled-components").StyledComponent<"div", any, {
    $expandFull?: boolean;
    $show?: boolean;
    background: string;
    theme?: Theme;
}, never>;
export declare const CardMediaHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ImageWrapper: import("styled-components").StyledComponent<"div", any, {
    height?: number;
}, never>;
