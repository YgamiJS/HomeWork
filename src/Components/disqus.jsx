export default function Disqus(){
  return (
    <>
      div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://disqus-rhi7dnred7.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
Copy
(Recommended) Edit the RECOMMENDED CONFIGURATION VARIABLES section using your CMS or platform's dynamic values. See our documentation to learn why defining identifier and url is important for preventing duplicate threads.
How to display comment count

Place the following code before your site's closing </body> tag:
<script id="dsq-count-scr" src="//disqus-rhi7dnred7.disqus.com/count.js" async></script>
Copy
Append #disqus_thread to the href attribute in your links. This will tell Disqus which links to look up and return the comment count. For example: <a href="http://foo.com/bar.html#disqus_thread">Link</a>.
Additional customization
See our Adding comment count links to your home page documentation.
BackConfigure
Having trouble with installation?

Contact Support
FeaturesCompanyLogosHelpBlogAPIJobsTerms & Policies© 2022 · Disqus


    </>
  )
}
