const ArticleModel = {
    date: null,
    title: null,
    href: null,
    tags: null,
    getDare: function() {
        return this.date.slice(0,10);
    }
};

const articleConstructor = ({title, canonical_url, tag_list, published_at
}) => {
	return Object.assign(
		{...ArticleModel}, {
            title: title, href: canonical_url, tags:tag_list, date: published_at
        }
	);
};

export default ArticleModel;
export {articleConstructor};