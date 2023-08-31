import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const TimelineNavWrapper: import("styled-components").StyledComponent<"ul", any, {
    theme?: Theme;
}, never>;
export declare const TimelineNavItem: import("styled-components").StyledComponent<"li", any, {
    $disable?: boolean;
}, never>;
export declare const TimelineNavButton: import("styled-components").StyledComponent<"button", any, {
    mode?: TimelineMode;
    rotate?: 'TRUE' | 'FALSE';
    theme?: Theme;
}, never>;
export declare const TimelineControlContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ControlButton: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme;
}, never>;
export declare const MediaToggle: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme;
}, never>;
export declare const ReplayWrapper: import("styled-components").StyledComponent<"button", any, {
    theme?: Theme;
}, never>;
