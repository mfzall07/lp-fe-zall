import AdminHeader from "@/components/admin/AdminHeader";
import AdminCard from "@/components/admin/AdminCard";
import BrandSettingsEditor from "@/components/admin/BrandSettingsEditor";
import { brandSettings } from "@/data/brand";
import layoutStyles from "@/app/admin/AdminLayout.module.css";

export default function AdminBrandSettingsPage() {
    return (
        <>
            <AdminHeader title="Brand & Logo" />
            <div className={layoutStyles.adminContent}>
                <div className={layoutStyles.adminPageHead}>
                    <div>
                        <h2 className="heading-2">Brand & Logo</h2>
                        <p>Logo dan nama brand yang tampil di navbar, footer, dan sidebar CMS.</p>
                    </div>
                </div>
                <AdminCard>
                    <BrandSettingsEditor initial={brandSettings} />
                </AdminCard>
            </div>
        </>
    );
}
