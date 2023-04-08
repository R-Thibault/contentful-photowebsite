import { useEffect } from "react";
import { useRouter } from "next/router";

export function Success() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#47555E] rounded-lg shadow-lg ">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-cyan-200">
          Méssage bien envoyer !{" "}
        </h2>
        <p className="mb-3 font-normal text-cyan-200">
          Vous serez automatiquement redirigez vers la page d'acceuil dans 5
          secondes.{" "}
        </p>
      </div>
    </>
  );
}
