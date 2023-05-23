import getCurrentUser from "@/actions/getCurrentUser";
import Header from "@/components/Header";
import Dropdown from "@/components/navbar/Dropdown";
import { User } from "@prisma/client";

export default async function Home() {
  const currentUser: User | null | undefined = await getCurrentUser();
  return (
    <div className="">
      <Dropdown currentUser={currentUser} />

      <Header />
    </div>
  );
}
