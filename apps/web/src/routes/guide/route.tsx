import { SidebarProvider, SidebarTrigger } from "@wintr/ui/components/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { GuideNavigation } from "~lib/widgets/guide-navigation";

export const Route = createFileRoute("/guide")({
	component: GuideLayout,
});

function GuideLayout() {
	return (
		<SidebarProvider>
			<GuideNavigation />
			<main>
				<SidebarTrigger />
				<Outlet />
			</main>
		</SidebarProvider>
	);
}
