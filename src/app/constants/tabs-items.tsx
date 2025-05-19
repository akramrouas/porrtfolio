import { TabItem } from "@/app/types/interfaces";
import { AppWindow, PencilRuler, TerminalSquare } from "lucide-react";

export const tabItems: TabItem[] = [
  {
    value: "frontend",
    icon: AppWindow,
    label: "frontend",
  },
  {
    value: "backend",
    icon: TerminalSquare,
    label: "back end",
  },
  {
    value: "tools",
    icon: PencilRuler,
    label: "tools",
  },
];