import MenuList from "@/components/MenuList";
import { menuCategories } from "@/data/menu";
import type { MenuItem } from "@/types";

interface MenuByCategoryProps {
    items: MenuItem[];
}

interface CategoryGroupProps {
    category: MenuItem["category"];
    items: MenuItem[];
}

function CategoryGroup({ category, items }: CategoryGroupProps) {
    if (items.length === 0) return null;

    return (
        <div className="menu-category-group">
            <div className="menu-category-head">
                <h2 className="heading-2">{category}</h2>
                <div className="menu-category-rule" />
            </div>
            <MenuList items={items} />
        </div>
    );
}

export default function MenuByCategory({ items }: MenuByCategoryProps) {
    return (
        <div className="menu-by-category">
            {menuCategories.map((category) => (
                <CategoryGroup
                    key={category}
                    category={category}
                    items={items.filter((item) => item.category === category)}
                />
            ))}
        </div>
    );
}
