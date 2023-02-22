import * as React from 'react';

export default function Article({ article }) {
    return (
        <div>
            <h1>{article.title}</h1>
            <div>
            {article.lead}
            </div>
            <div>
            {article.content}
            </div>
        </div>
    );
}

export const getStaticProps = async (context) => {

    const setting = {
        article_id: context.params.id
    }

    const response = await fetch('http://89.110.53.157:19525/v1/singleArticle', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(setting),
    });
    const article = await response.json();

    return {
        props: { article },
        revalidate: 1,
    };
};
export async function getStaticPaths() {
    // Вызываем внешнюю конечную точку API для получения постов
    const setting = {
        start: 1,
        length: 10,
        search: "password",
    };

    const response = await fetch('http://localhost:8210/v1/listArticle', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(setting),
    });
    const articles = await response.json();

    // Получаем на основе постов пути, которые нужно предварительно отрисовать
    const paths = articles.articles.map((item) => ({
        params: { id: item.id.toString() },
    }));

    // В процессе сборки мы будем предварительно отрисовывать только эти пути
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}