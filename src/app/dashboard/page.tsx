import ProjectTable from "@/components/project-table";

type Project = {
  id: string;
  title: string;
  description: string;
};

export default async function Dashboard() {
  const res = await fetch("http://localhost:8000/projects", {
    headers: {
      Authorization: `Bearer TOKEN`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar projetos");
  }

  const projects = await res.json();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        projects
      </h1>
      <ProjectTable data={projects?.data} />
    </>
  );
}
