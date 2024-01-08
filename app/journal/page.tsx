export default async function Journal() {

    async function getDocument() {
        const docURL: string = process.env.DOC as string

        const res = await fetch(docURL, {next: {revalidate: 300}})

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')

        }
        return await res.text()
    }

    let doc = await getDocument()

    doc = doc.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    doc = doc.replace(/<div([^>]*)class\s*=\s*(['"])(?:(?!\2)[\s\S])*?\2([^>]*)>/i, '<div$1$3>');

    doc = doc.replace(/<p[^>]*>\s*<span[^>]*>\s*(<img[^>]*>)\s*<\/span>\s*<\/p>/gi, (match, imgMatch) => {
        return imgMatch ? imgMatch : match; // Return the img if found, else return the match
    });


    // const styleRegex = /<style[^>]*>[\s\S]*?<\/style>/gi;

    doc = doc
        .replace(/<img[^>]*\s+style="[^"]*"/gi, (match) => {
            // Remove style attributes within img tags
            return match.replace(/style="[^"]*"/gi, 'style="display: block; margin:auto; text-align: center; max-width: 80%; max-height: 80%;"');
        });

    // console.log(doc)

    return (
        <>
            <h1 className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter hover:animate-pulse sm:text-4xl md:text-5xl">
                Live Journal
            </h1>
            <div id="dotplanContainer w-full"
                 className="!prose"
                 dangerouslySetInnerHTML={{__html: doc}}>
            </div>
        </>
    );
}