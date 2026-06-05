import SignUpForm from "@/components/auth/SignUpForm";

export const metadata = {
  title: "Signup - Hire Hub",
  description:
    "HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform.",
};

const SignUpPage = () => {
  return (
    <div className="pt-10 pb-20 bg-[#010103] px-4">
      <div className="text-center">
        <h3 className="text-2xl font-semibold md:text-4xl">
          Create an Account
        </h3>
        <p className="mt-4">Fill in the fields below to get started</p>
      </div>
      <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
