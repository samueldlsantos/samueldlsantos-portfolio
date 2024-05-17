export type PersonalInformation = {
    name: string,
    profession: string,
    location: string,
    introduction: string
}
export type Experience = {
    id: number,
    year: string,
    role: string,
    company: string,
    description: string
}

export type Project = {
    id: number,
    image: string,
    title: string,
    description: string,
    urlGithub: string,
    urlPreview: string
}