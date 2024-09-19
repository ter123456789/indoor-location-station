import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { HeaderLogin } from "@/components/page/login/header";
import { LoginCard } from "@/components/page/login/loginCard";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const Login = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="relative flex justify-center h-screen items-center flex-col">
        <HeaderLogin />
        <LoginCard />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%]"
          )}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
