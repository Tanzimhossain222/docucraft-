import ContentDisplay from "@/components/ContentDisplay"
import { getDocuments } from "@/lib/doc"
import { getDocumentsByTag } from "@/utils/doc-utils"



const TagsPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByTag(docs, name);
    return (
        <>
        <ContentDisplay id={matchedDocs[0].id} />
        </>
    )
}

export default TagsPage