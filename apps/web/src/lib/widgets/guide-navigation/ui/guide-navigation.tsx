import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	type SidebarProps,
} from "@lensed/ui/components/sidebar";
import type { FC } from "react";

export interface GuideNavigationProps extends SidebarProps {}

export const GuideNavigation: FC<GuideNavigationProps> = ({
	variant = "floating",
	...props
}) => {
	return (
		<Sidebar {...props}>
			<SidebarHeader>Lensed Build Guide</SidebarHeader>
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
