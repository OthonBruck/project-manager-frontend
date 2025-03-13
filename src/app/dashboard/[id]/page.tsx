import ProjectTable from "@/components/project-table";
import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";

type Project = {
  id: string;
  title: string;
  description: string;
};

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/tasks/${id}/tasks`, {
    headers: {
      Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar tasks");
  }

  const tasks = await res.json();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {id}
      </h1>
      <>heheh</>
    </>
  );
}
