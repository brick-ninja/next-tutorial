//our-domain.com/news
import Link from 'next/Link'
import { Fragment } from "react";

function NewsPage(){
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="/news/important-part">NextJs Is A Great Fremework</Link></li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  )
}
export default NewsPage