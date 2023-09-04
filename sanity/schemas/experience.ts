import { defineField, defineType } from "sanity";
export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            description: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'companyImage',
            title: 'Company Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'text'
        }),

        defineField({
            title: 'dateStarted',
            name: 'DateStarted',
            type: 'date'
          }),
        defineField({
            title: 'dateEnded',
            name: 'DateEnded',
            type: 'date'
        }),
        defineField({
            name: "isCurrentlyWorkingHere",
            title: "IsCurrentlyWorkingHere",
            type: "boolean",
        }),
        defineField({
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" }}],
        }),
        defineField({
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        }),
        

    ]
})