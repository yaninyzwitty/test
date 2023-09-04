import { defineField, defineType } from "sanity";

export default defineType({
    name: 'social',
    title: 'Social',
    type: 'document',
    fields: [
        defineField({
            name: "title",
            title: "Title",
            description: "Platform for the socialMedia",
            type: "string",
        }),
        defineField({
            name: "progress",
            title: "Progress",
            type: "number",
            description: "Progress of the skill from 0% to 100%",
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url'
        })

    ]
})