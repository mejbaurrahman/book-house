import SectionHeading from "../../components/SectionHeading/SectionHeading";

export default function Faq() {
  return (
    <div className="lg:conatiner mx-auto px-8">
      <SectionHeading heading="FAQ"></SectionHeading>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is React.js and Explain the concept of components in React.
        </div>
        <div className="collapse-content">
          <p>
            React.js is a JavaScript library for building user interfaces,
            primarily for single-page applications. It allows developers to
            create reusable UI components. <br />
            <br />
            Components are the building blocks of React applications. They are
            JavaScript functions or classes that accept inputs called props and
            return React elements describing what should appear on the screen.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is JSX in React, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSX stands for JavaScript XML. It allows developers to write
            HTML-like syntax within JavaScript code. JSX is then transpiled into
            JavaScript using tools like Babel, converting the code into
            React.createElement() function calls.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the Virtual DOM, and how does React use it to optimize
          performance?
        </div>
        <div className="collapse-content">
          <p>
            The Virtual DOM is an in-memory representation of the real DOM.
            React uses it to track changes by comparing the virtual and real
            DOM. This diffing process allows React to update only the parts of
            the actual DOM that have changed, improving performance
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Explain the concept of props in React and how they are used.
        </div>
        <div className="collapse-content">
          <p>
            Props are inputs passed from a parent component to a child
            component. They allow components to be dynamic and reusable. Props
            are read-only, meaning a component cannot modify its own props.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is state in React, and how does it differ from props?
        </div>
        <div className="collapse-content">
          <p>
            State is a built-in React object that stores dynamic data within a
            component, allowing it to respond to user interactions or events.
            Unlike props, which are passed from parent to child and are
            immutable, state is local to a component and can change over time.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Explain the useState hook and provide an example of how it is used.
        </div>
        <div className="collapse-content">
          <p>
            The useState hook allows you to add state to functional components
            in React. It returns an array with two values: the current state and
            a function to update that state.
            <br />
            <br />
            const [count, setCount] = useState(0); <br /> <br /> In this
            example, count is the state variable, and setCount is the function
            to update it.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the purpose of the useEffect hook in React, and when would you
          use it?
        </div>
        <div className="collapse-content">
          <p>
            The useEffect hook is used to handle side effects (like data
            fetching, DOM manipulation, or setting timers) in functional
            components. It runs after the render and can be configured to run
            when specific state or props change.
          </p>
        </div>
      </div>
    </div>
  );
}
