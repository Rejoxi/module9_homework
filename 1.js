const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

  const xmlDOM = parser.parseFromString(xmlString, "text/xml");
  const listNode = xmlDOM.querySelector("list");
  const studentNode = listNode.querySelector("student");
  const studentNode1 = listNode.firstElementChild;
  const studentNode2 = listNode.lastElementChild;
  const nameNode = studentNode.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute('lang');
 
const result = {
  student1: studentNode1.textContent,
  student2: studentNode2.textContent,
};

console.log(result);



