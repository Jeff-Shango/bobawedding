import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const TimelineVerticalWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const VerticalItemWrapper: import("styled-components").StyledComponent<"div", any, {
    $alternateCards?: boolean;
    $cardHeight?: number;
    $cardLess?: boolean;
    $isNested?: boolean;
    theme?: Theme;
}, never>;
export declare const TimelineCardContentWrapper: import("styled-components").StyledComponent<"div", any, {
    $alternateCards?: boolean;
    $cardLess?: boolean;
    $flip?: boolean;
    $noTitle?: boolean;
    height?: number;
}, never>;
export declare const TimelineTitleWrapper: import("styled-components").StyledComponent<"div", any, {
    $alternateCards?: boolean;
    $flip?: boolean;
    $hide?: boolean;
    mode?: TimelineMode;
}, never>;
