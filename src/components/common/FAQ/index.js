import React from "react";

const FAQ = () => {
  const faqs = [
    {
      title: "Who we are",
      desc:
        "Tech Blog is a personal blog for handcrafted, cameramade photography  content, fashion styles from independent creatives around the world.",
    },
    {
      title: "How we help?",
      desc:
        "Etiam vulputate urna id libero auctor maximus. Nulla dignissim ligula diam, in sollicitudin ligula congue quis turpis dui urna nibhs.",
    },
    {
      title: "Pre-Sale Question",
      desc:
        "Fusce dapibus nunc quis quam tempor vestibulum sit amet consequat enim. Pellentesque blandit hendrerit placerat. Integertis non.",
    },
  ];
  return (
    <>
      {faqs.map((faq, i) => (
        <React.Fragment key={i}>
          <h4>{faq.title}</h4>
          <p>{faq.desc}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default FAQ;
