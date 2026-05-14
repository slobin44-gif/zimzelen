// CSS Styles
const styles = `
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F4F1EA;
  color: #2E2E2E;
}

header {
  background-color: #1F3A2E;
  color: #F4F1EA;
  padding: 20px;
}

header h1 {
  margin: 0;
}

header p {
  margin: 5px 0 15px;
}

nav a {
  color: #F4F1EA;
  text-decoration: none;
  margin-right: 15px;
}

section {
  padding: 40px 20px;
  border-bottom: 1px solid #ddd;
}

h2 {
  color: #1F3A2E;
}

div {
  margin-bottom: 20px;
}

a {
  color: #7A5C43;
}

footer {
  background-color: #1F3A2E;
  color: #F4F1EA;
  text-align: center;
  padding: 20px;
}
`;

// Inject styles into the document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
