import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  ChartLine,
  ChartNoAxesCombined,
  LogOut,
  MessageCircleHeart,
  Pizza,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const dashboardItems = [
  {
    title: "Analytics",
    url: "/analytics",
    icon: <ChartNoAxesCombined size={20} />,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: <ChartLine size={20} />,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: <IoNotificationsOutline size={20} />,
  },
];

const foodItems = [
  {
    title: "Orders",
    url: "/orders",
    icon: <MessageCircleHeart size={20} />,
  },
  {
    title: "Menu",
    url: "/menu",
    icon: <Pizza size={20} />,
  },
];

const settingItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: <UserRoundCog size={20} />,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: <LogOut size={20} />,
  },
];

const groupItems = [
  {
    label: "Dashboard",
    items: dashboardItems,
    route: "/dashboard",
  },
  {
    label: "Kitchen Hub",
    items: foodItems,
    route: "/kitchen-hub",
  },
  {
    label: "Settings",
    items: settingItems,
    route: "/settings",
  },
];

const AppSidebar: FC = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-white p-2 text-sm">
        <div className="flex justify-center py-4">
          <h2 className="text-2xl font-bold">
            Digi<span className="text-primary">D</span>ine
          </h2>
        </div>
        {groupItems.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="uppercase tracking-widest text-gray-500">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="rounded-lg">
                {group.items.map((item) => {
                  const fullPath = group.route + item.url;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={fullPath}
                          className={`hover:bg-primary/10 flex items-center gap-2 rounded-md px-2 py-5 text-gray-500 transition-all ${
                            true
                              ? "bg-primary/10 text-primary font-semibold"
                              : ""
                          }`}
                        >
                          <div>{item.icon}</div>
                          <span className="text-sm">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
