import { auth } from "@/auth";
import Header from "@/components/Header";
import CarForm from "@/components/user/CarForm";
import { redirect } from "next/navigation";

export default async function page(url) {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  } else
    return (
      <>
        <Header />
        <CarForm
          userid={url.params.userid}
          carid={url.params.carid}
          carname={url.searchParams.carname}
          prix={url.searchParams.prix}
          carimg={url.searchParams.modelimg}
          range={url.searchParams.range}
          topSpeed={url.searchParams.topspeed}
          vitOut={url.searchParams.vitout}
        />
      </>
    );
}
