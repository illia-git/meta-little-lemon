import React from "react";
import Article from "./Articles";
import Form from "./Form";

export default function Home(props) {
  const [hide, setHide] = React.useState(true);
  return (
      <>
        <main>
          <div class="main-ad">
            <h1>20% Off Everyday</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              dolorum dolore libero dolorem voluptatum! Distinctio voluptatem
              debitis quam, voluptas commodi, velit provident sint pariatur vero
              enim repellendus nulla, iusto doloribus!
            </p>
          </div>
          <section>
            <Article hide={hide} setHide={setHide}/>
          </section>
          {!hide ? <Form hide={hide} setHide={setHide}/> : null}
        </main>
      </>
  );
}
