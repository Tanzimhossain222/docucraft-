import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { sortDocs } from '@/utils/doc-utils';

const postsDirectory = path.join(process.cwd(), 'src/docs');


export function getDocuments() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map(fileName => {
        const id = fileName.replace(".md", "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data
        }
    })


    return sortDocs(allDocuments);


}

export async function getDocumentContent(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent =await remark().use(html).processSync(matterResult.content).toString();

    return {
        id,
        content: processedContent,
        ...matterResult.data
    }

}