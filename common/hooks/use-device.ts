import { useWindowSize } from "usehooks-ts";

export function useDeviceType() {
  const { width } = useWindowSize();
  const isMobile = width < 640;
  const isTab = width <= 1024 && width > 640;
  const isDeskTop = width > 1024;
  const isTabAndMobile = width < 1024;
  return { isMobile, isTab, isDeskTop, isTabAndMobile };
}
