import { IconBadge } from "@/components/IconBadge"
import {  LucideIcon } from "lucide-react";

interface InfoCardProps {
    numberOfItems: number; 
    variant?: "default" | "success";
    icon: LucideIcon;
    label: string;
}
const InfoCard = ({
    variant,
    icon: Icon,
    numberOfItems,
    label,
}:InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
        <IconBadge
            variant={variant}
            icon={Icon}

        />
        <p className="font-medium">
            {label}
        </p>
        <p className="text-gray-500 text-sm">
            {numberOfItems} {numberOfItems === 1 ? "Course":"Courses" }
        </p>
    </div>
  )
}

export default InfoCard
