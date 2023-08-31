import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {
    $hideControls?: boolean;
    cardPositionHorizontal?: 'TOP' | 'BOTTOM';
}, never>;
export declare const TimelineMainWrapper: import("styled-components").StyledComponent<"div", any, {
    $scrollable?: boolean | {
        scrollbar: boolean;
    };
    mode?: TimelineMode;
    theme?: Theme;
}, never>;
export declare const TimelineMain: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Outline: import("styled-components").StyledComponent<"div", any, {
    color?: string;
    height?: number;
}, never>;
export declare const TimelineControlContainer: import("styled-components").StyledComponent<"div", any, {
    active?: boolean;
    mode?: TimelineMode;
}, never>;
export declare const TimelineContentRender: import("styled-components").StyledComponent<"div", any, {
    $showAllCards?: boolean;
}, never>;
