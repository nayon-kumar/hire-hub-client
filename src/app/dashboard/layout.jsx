import DashboardSidebar from "@/components/dashboard/recruiter/DashboardSidebar";

export const metadata = {
  title: "Recruiter - Dashboard",
  description:
    "HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform.",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="min-h-screen pt-4 pb-20">
        <div className="">
          <DashboardSidebar />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
