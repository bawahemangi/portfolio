// The hero's signature element: a code window that reads like her own profile object.
export default function Terminal() {
  return (
    <div className="term" role="img" aria-label="Code window showing a developer profile object">
      <div className="term-bar">
        <span /><span /><span />
        <b>hemangi.py</b>
      </div>
      <pre>
<span className="c"># what I work with</span>{'\n'}
<span className="k">class</span> <span className="f">Hemangi</span>:{'\n'}
{'    '}role = <span className="s">"Python Full Stack Developer"</span>{'\n'}
{'    '}backend = [<span className="s">"Django"</span>, <span className="s">"Flask"</span>, <span className="s">"REST"</span>]{'\n'}
{'    '}frontend = [<span className="s">"React"</span>]{'\n'}
{'    '}databases = [<span className="s">"MySQL"</span>, <span className="s">"PostgreSQL"</span>]{'\n'}
{'    '}graduating = <span className="n">2027</span>{'\n'}
{'\n'}
{'    '}<span className="k">def</span> <span className="f">open_to</span>(self):{'\n'}
{'        '}<span className="k">return</span> [<span className="s">"internships"</span>, <span className="s">"entry-level roles"</span>]
      </pre>
    </div>
  )
}
