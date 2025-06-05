import Navbar from "@/common/components/Navbar";
import AppSidebar from "@/components/sidebar/AppSidebar";
import { SidebarProvider} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="w-full">
      <AppSidebar />
      <main className="w-full flex flex-col">
        <Navbar />
        <div className="flex-1 px-4 md:px-8 bg-default py-3 md:py-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
