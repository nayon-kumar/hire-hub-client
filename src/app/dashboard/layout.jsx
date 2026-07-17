import DashboardSidebar from "@/components/dashboard/recruiter/DashboardSidebar";
import { getUserSession } from "@/lib/core/session";

const user = await getUserSession();
const role = user.role;
const capitalizedRole = role.charAt(0).toUpperCase() + role.slice(1);

export const metadata = {
  title: `${capitalizedRole} - Dashboard`,
  description:
    "HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform.",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="lg:flex min-h-screen pt-4 pb-20">
        <div>
          <DashboardSidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
