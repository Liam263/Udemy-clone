"use client"

import { Category } from "@prisma/client"
import {
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
    FcMultipleDevices,
    FcFilmReel,
    FcEngineering
} from "react-icons/fc"
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./CategoryItem";
interface CategoriesProps {
    items: Category[]; 
}

const iconMap: Record<Category["name"], IconType> = {
    "Computer Science": FcMultipleDevices,
    "Music": FcMusic,
    "Fitness": FcSportsMode,
    "Photography": FcOldTimeCamera,
    "Accounting": FcSalesPerformance,
    "Filming": FcFilmReel,
    "Engineering": FcEngineering

}
export const Categories = ({
    items
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
        {items.map((item)=> (
            <CategoryItem
                key= {item.id}
                label= {item.name}
                icon = {iconMap[item.name]}
                value = {item.id}
            />
        ))}
        
    </div>
  )
}
