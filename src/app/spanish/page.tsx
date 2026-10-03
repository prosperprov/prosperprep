import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { G6_SPANISH_COURSE_ID } from "@/lib/spanishCourse";

export default async function SpanishRedirectPage() {
  const session = await getSession();
  const dest = `/courses/${G6_SPANISH_COURSE_ID}`;
  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent(dest)}`);
  }
  redirect(dest);
}
