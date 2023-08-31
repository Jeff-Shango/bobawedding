import { Theme } from '@models/Theme';
import { OutlinePosition } from './timeline-outline';
export declare const OutlineWrapper: import("styled-components").StyledComponent<"div", any, {
    open?: boolean;
    position?: OutlinePosition;
}, never>;
export declare const OutlinePane: import("styled-components").StyledComponent<"aside", any, {
    open?: boolean;
}, never>;
export declare const OutlineButton: import("styled-components").StyledComponent<"button", any, {
    open?: boolean;
    position?: OutlinePosition;
    theme?: Theme;
}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const ListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const ListItemName: import("styled-components").StyledComponent<"span", any, {
    selected?: boolean;
    theme?: Theme;
}, never>;
export declare const ListItemBullet: import("styled-components").StyledComponent<"span", any, {
    selected?: boolean;
    theme?: Theme;
}, never>;
