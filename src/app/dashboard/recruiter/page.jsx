import StatCard from "@/components/dashboard/StatCard";
import { auth } from "@/lib/auth";
import { Eye, FileText } from "@gravity-ui/icons";
import { headers } from "next/headers";
import { BiUser } from "react-icons/bi";
import { FiZap } from "react-icons/fi";

const RecruiterHomePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  // Recruiter Dashboard
  const recruiterStats = [
    {
      title: "Total Job Posts",
      value: 48,
      icon: <FileText size={18} />,
    },
    {
      title: "Total Applicants",
      value: 1284,
      icon: <BiUser size={18} />,
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: <FiZap size={18} />,
    },
    {
      title: "Jobs Closed",
      value: 32,
      icon: <Eye size={18} />,
    },
  ];
  return (
    <div className="mt-4">
      <h3 className="text-3xl">Welcome back, {user?.name}</h3>
      <div className="grid grid-cols-2 mt-4 gap-4 md:grid-cols-4">
        {recruiterStats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default RecruiterHomePage;
