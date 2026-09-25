import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";

export default async function DashboardIndex() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard");
  switch (session.user.role) {
    case "TEACHER":
      redirect("/dashboard/teacher");
    case "ADMIN":
      redirect("/dashboard/admin");
    case "PARENT":
      redirect("/dashboard/parent");
    default:
      redirect("/dashboard/student");
  }
}
