// app/api/projects/route.ts

import { Project } from "@/types/project";
import { NextResponse } from "next/server";

export function GET() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Project 1",
      description: "Description of project 1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description of project 2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description of project 3",
    },
  ];

  return NextResponse.json(projects);
}
