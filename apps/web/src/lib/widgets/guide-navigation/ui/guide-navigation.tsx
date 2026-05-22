import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	type SidebarProps,
} from "@wintr/ui/components/sidebar";
import type { FC } from "react";

export interface GuideNavigationProps extends SidebarProps {}

export const GuideNavigation: FC<GuideNavigationProps> = ({
	side = "right",
	dir = "rtl",
	...props
}) => {
	return (
		<Sidebar dir={dir} side={side} {...props}>
			<SidebarHeader>WINTR Guide</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Section 1</SidebarGroupLabel>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Section 2</SidebarGroupLabel>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};
