export function getDocumentsByCategory(docs, category) {
    return docs.filter(doc => doc.category === category);
}

export function getDocumentsByAuthor(docs, author) {
    return docs.filter(doc => encodeURI(doc.author) === author);
}

export function getDocumentsByTag(docs, tag) {
    return docs.filter(doc => doc.tags.some(t => t === tag));
}


export function sortDocs(docs) {
    return docs.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    })
}