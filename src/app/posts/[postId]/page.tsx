import Link from 'next/link';
import {notFound} from 'next/navigation'
import {getSortedPostData,getPostData } from '../../../../lib/posts'
import getFormattedDate from '../../../../lib/getFormattedDate';


export function generateStaticParams({params}: {params: {postId:string}}){
    const posts = getSortedPostData();
    return posts.map(post =>({postId:post.id}));
}

export async function generateMetadata({params}: {params: {postId:string}}) {
    const posts = getSortedPostData(); 
    const {postId } = params
    const post = posts.find(p => p.id === postId)
    if(!post){
        return{title:'Not Found',}
    }
    return {
        title: post.title,
        description: `blog about ${post.title}`
    }

}


export default async function Post({params}: {params: {postId:string}}) {
    const posts = getSortedPostData(); 
    const {postId } = params
    if(!posts.find(p => p.id === postId)){
        return notFound();
    }
    const {title, date, contentHtml} = await getPostData(postId)
    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-neutral dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section  dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}
