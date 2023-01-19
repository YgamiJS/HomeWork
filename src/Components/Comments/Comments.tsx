const Comments = () => {
    (function () {
        var d = document,
            s = d.createElement("script");
        s.src = "https://disqus-rhi7dnred7.disqus.com/embed.js";
        s.setAttribute("data-timestamp", String(new Date()));
        (d.head || d.body).appendChild(s);
    })();
    return <div id="disqus_thread"></div>;
};

export default Comments;
