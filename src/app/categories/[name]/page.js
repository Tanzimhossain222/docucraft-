import ContentDisplay from "@/components/ContentDisplay"
import { getDocuments } from "@/lib/doc"
import { getDocumentsByCategory } from "@/utils/doc-utils"


const CategoriesPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs, name);
    return (
        <div>
            <ContentDisplay id={matchedDocs[0].id} />
        </div>
    )
}

export default CategoriesPage;