import { Fragment } from 'react';
import Link from 'next/link';

// domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJs is a Great Framework
          </Link>
        </li>
        <li>
          <Link href='/news/this-is-a-news-article'>
            This is a News Article
          </Link>
        </li>
        <li>
          <Link href='/news/another-news-article'>Another News Article</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
