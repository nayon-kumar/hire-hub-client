import DashboardSidebar from "@/components/dashboard/recruiter/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
