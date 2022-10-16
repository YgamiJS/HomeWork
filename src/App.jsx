import { Header , Footer } from './Components/HeaderFooter.jsx'
import Content from './Components/Content.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <div id="disqus_thread"></div>
    {
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://disqus-rhi7dnred7.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })()
  }
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      <Footer />
    </>
  )
}
