import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Signin - Hire Hub",
  description:
    "HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform.",
};

const SingInPage = () => {
  return (
    <div className="pt-10 pb-20 bg-[#010103] px-4">
      <div className="text-center">
        <h3 className="text-2xl font-semibold md:text-4xl">Welcome Back</h3>
        <p className="mt-4">Enter your credentials to access your account</p>
      </div>
      <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto">
        <SignInForm />
      </div>
    </div>
  );
};

export default SingInPage;
