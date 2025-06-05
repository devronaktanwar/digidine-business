"use client";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
// import { toast } from "sonner";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { lOrderNotificationCardProps } from "@/common/types/Notifications";

const NotificationCard: FC<lOrderNotificationCardProps> = ({
  tableNo,
  isRead,
  customerInfo,
  createdAt,
}) => {
  const { name: customerName } = customerInfo;
  const router = useRouter();
  const handleView = async () => {
    // const response = await NotificationApis.markNotificationReadById({
    //   id: _id,
    // });
    // if (response.isSuccess) {
    //   toast.success("Notification marked as read", {
    //     position: "top-right",
    //     description: "You have read the notification",
    //   });
    // } else {
    //   toast.error("Opps! something went wrong", {
    //     position: "top-right",
    //     description: "Please try again later",
    //   });
    // }
    router.push("/kitchen-hub/orders");
  };
  return (
    <Card className="w-full overflow-hidden !py-4 md:!py-6">
      <CardContent className="flex items-center justify-between gap-4">
        <div className="relative flex-shrink-0">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
            <ShoppingBag className="text-primary h-5 w-5" />
          </div>
          {!isRead && (
            <span className="bg-primary absolute -right-1 -top-1 flex h-3 w-3 rounded-full">
              <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            </span>
          )}
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Avatar className="hidden h-8 w-8 flex-shrink-0 sm:flex">
            <AvatarImage
              src="https://avatar.iran.liara.run/public"
              alt={customerName}
            />
            <AvatarFallback>{customerName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {!isRead && <span className="text-primary mr-2">New:</span>}
              {customerName} placed an order
            </p>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <span>•</span>
              <span>{tableNo}</span>
              <span>•</span>
              <span>{new Date(createdAt).toDateString()}</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="flex-shrink-0"
          onClick={handleView}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">View</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
