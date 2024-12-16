import AdminSidebar from "./adminSidebar";

interface AdminLDashboardLayoutProps {
  children: React.ReactNode;
}

function AdminLDashboardLayout({ children }: AdminLDashboardLayoutProps) {
  return (
    <div className="grid grid-cols-5 overflow_height">
      <aside className="col-span-1 bg-gray-900">
        <AdminSidebar />
      </aside>
      <main className="col-span-4 px-4 py-6 bg-gray-100 overflow_height overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default AdminLDashboardLayout;
