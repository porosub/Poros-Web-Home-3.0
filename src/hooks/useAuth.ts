import { deleteCookie } from "@/lib/cookie";
import { useRouter } from "next/navigation";

interface UseAuthReturn {
  logout: () => Promise<void>;
}

const useAuth = (): UseAuthReturn => {
  const router = useRouter();

  const logout = async (): Promise<void> => {
    await deleteCookie("token");
    router.push("/login");
  };

  return {
    logout,
  };
};

export default useAuth;
