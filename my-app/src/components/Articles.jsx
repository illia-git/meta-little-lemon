import React from "react";
import Button from "./Button";
import {handleBook} from "./helper";

export default function Article(props) {
    return (
        <>
            <section>
                <article className="content">
                    <h2>Pasta</h2>

                    <img src={require("../logos/pasta.jpg")} alt="Little lemon pasta"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        optio voluptas temporibus amet? Fugiat, laboriosam voluptate.
                        Numquam libero et labore. Nemo est, adipisci nisi delectus natus cum
                        nam maiores minima.
                    </p>
                    <Button onClick={() => handleBook("pasta", props)}>
                        Book your table now
                    </Button>
                </article>
                <article className="content">
                    <h2>Chicken</h2>
                    <img
                        src={require("../logos/recipe1.jpg")}
                        alt="Little lemon fried chicken"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        optio voluptas temporibus amet? Fugiat, laboriosam voluptate.
                        Numquam libero et labore. Nemo est, adipisci nisi delectus natus cum
                        nam maiores minima.
                    </p>

                    <Button onClick={() => handleBook("chicken", props)}>
                        Book your table now
                    </Button>
                </article>
                <article className="content">
                    <h2>Burger</h2>
                    <img
                        src={require("../logos/recipe2.jpg")}
                        alt="Little lemon delicacy"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                        optio voluptas temporibus amet? Fugiat, laboriosam voluptate.
                        Numquam libero et labore. Nemo est, adipisci nisi delectus natus cum
                        nam maiores minima.
                    </p>
                    <Button onClick={() => handleBook("burger", props)}>
                        Book your table now
                    </Button>
                </article>
            </section>
        </>
    );
}
