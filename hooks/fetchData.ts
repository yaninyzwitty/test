import { client } from "@/sanity/lib/client";
import { Experience, PageInfo, PageInfoProps, Project, Skill, Social } from "@/typings";
import { groq } from "next-sanity";

const skillsQuery = groq`
    *[_type == "skill"]`;
const experiencesQuery = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}`;


const aboutQuery = groq`
*[_type=="pageInfo"] {
    ...,
}`
const projectsQuery = groq`
*[_type=="project"] {
  ...,
}`

const socialsQuery = groq`
*[type == "social"]`;


export const fetchSkill = async () => {
    const res = await client.fetch(skillsQuery);

    const skills:Skill[] = res;

    return skills;


}

export const fetchExperience = async () => {
    const res = await client.fetch(experiencesQuery);
    const experiences: Experience[] = res;

    return experiences;
}

export const fetchAbout = async () => {
    const res = await client.fetch(aboutQuery);
    const pageInfo: PageInfoProps[] = res;

    return pageInfo;
}

export const fetchProjects = async () => {
    const res = await client.fetch(projectsQuery);
    const projects:Project[] = res;
    return projects;
}

export const fetchSocials = async () => {
    const res = await client.fetch(socialsQuery);
    const socials:Social[] = res;
    return socials;

 }