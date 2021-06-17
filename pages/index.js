import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <header className="introduction">
        <div className="hello">
          <h1 id="hello-world">
            {/* <!-- <span id="hello-world"></span>
                <img src="/img/Webp.net-gifmaker.gif" alt="" id="blink" />
                <img src="/img/black.png" alt="" id="not-blink" /> --> */}
            Hello world!
          </h1>
          <h2>
            I'm a high-school student, <br />
            programming is my hobby.
          </h2>
        </div>
        {/* <!-- <button type="button" className="btn-talk" id="talk">Let's Talk</button> --> */}
      </header>
      <section className="skills">
        <div className="description-img">
          <Image
            src="https://previews.123rf.com/images/welcomia/welcomia1510/welcomia151000045/47332506-programming-work-time-programmer-typing-new-lines-of-html-code-laptop-and-hand-closeup-working-time-.jpg"
            alt="Coder working on computer code"
            height="1000px"
            width="1500px"
          />
        </div>

        <div className="description">
          <h2>
            My skills include: <br />
          </h2>

          <h3>HTML, CSS, JavaScript, ReactJS, node.js, C#, Python, Django</h3>
          <h3>Database knowledge: MongoDB, Firebase</h3>
          <h3>
            And I can develop <strong>Full-Stack</strong> apps
          </h3>
          <div className="skills-imgs">
            <Image
              src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
              alt="html"
              height="100px"
              width="100px"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="css"
              height="100px"
              width="75px"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="javascript"
              height="100px"
              width="100px"
            />
            <Image
              src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
              alt="c#"
              height="100px"
              width="100px"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
              alt="python"
              height="100px"
              width="100px"
            />
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>
          If you would like to contact me, <br />
          please fill out this form or send an email at: test@example.com
        </h2>
        <form action="POST" className="contact-form">
          <div id="name-form">
            <label htmlFor="name">Your name</label>
            <input type="text" />
          </div>
          <div id="email-form">
            <label htmlFor="email">Your email</label>
            <input type="email" />
          </div>
          <div id="body-form">
            <label htmlFor="email-body">Your message</label>
            <textarea name="body" id="body" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
