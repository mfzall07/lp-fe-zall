import MenuList from "@/components/MenuList";
import { menuCategories } from "@/data/menu";
import type { MenuItem } from "@/types";
import styles from "@/components/MenuCard/MenuCard.module.css";

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
        <div className={styles.menuCategoryGroup}>
            <div className={styles.menuCategoryHead}>
                <h2 className="heading-2">{category}</h2>
                <div className={styles.menuCategoryRule} />
            </div>
            <MenuList items={items} />
        </div>
    );
}

export default function MenuByCategory({ items }: MenuByCategoryProps) {
    return (
        <div className={styles.menuByCategory}>
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
