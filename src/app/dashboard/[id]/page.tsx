import ProjectTable from "@/components/project-table";

type Project = {
  id: string;
  title: string;
  description: string;
};

export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const response = await fetch("http://localhost:8000/projects", {
    cache: "no-store",
    headers: {
      Authorization: `Bearer TOKEN`,
    },
  });
  const initialProjects = await response.json();
  const { data } = initialProjects;

  const { id } = await params;
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {id}
      </h1>
      <ProjectTable data={data} />
    </>
  );
}
