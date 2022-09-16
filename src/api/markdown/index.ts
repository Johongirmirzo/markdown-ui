import {API} from "../index";

interface MarkdownDataInterface {
    markdown: string;
    markdownName: string;
}

const getAllMarkdowns = async ()=>{
    return await API.get("/markdown")
}
const getMarkdown = async ()=>{

}
const createMarkdown = async (markdownData: MarkdownDataInterface)=>{
    return await API.post("/markdown/createMarkdown", markdownData)
}
const editMarkdown = async (markdownData: MarkdownDataInterface, markdownId: string)=>{
    return await API.put(`/markdown/${markdownId}`, markdownData)
}
const deleteMarkdown = async (markdownId: string)=>{
    return await API.delete(`/markdown/${markdownId}`)
}

export {
    getAllMarkdowns,
    getMarkdown,
    createMarkdown,
    editMarkdown,
    deleteMarkdown
}