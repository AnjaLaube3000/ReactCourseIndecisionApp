console.log('app is running!');

// This is JSX = JAVASCRIPT XML

//Template One
const app = {
  title: 'Indesicion App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Option one', 'Option two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);


//Template Two
const user = {
  name: 'Anja',
  age: 35,
  location: 'Berlin, Germany'
}

function getLocation(location) {
  if (location)
  return <p>Location: {location}</p>
}

const templateTwo = (
 <div>
  <h1>{user.name ? user.name : "Anonymous"}</h1>
  {(user.age && user.age >=18) && <p>Ages: {user.age}</p>}
  {getLocation(user.location)}
 </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot)
