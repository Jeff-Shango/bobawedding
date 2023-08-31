import { Theme } from '@models/Theme';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ShapeWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
type ShapeModel = {
    $timelinePointShape?: 'circle' | 'square' | 'diamond';
    dimension?: number;
    theme?: Theme;
};
export declare const Shape: import("styled-components").StyledComponent<"div", any, ShapeModel, never>;
export declare const TimelineTitleContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TimelineContentContainer: import("styled-components").StyledComponent<"div", any, {
    $active?: boolean;
    $cardWidth?: number;
    $highlight?: boolean;
    position?: string;
    theme?: Theme;
}, never>;
export {};
