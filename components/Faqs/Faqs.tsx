import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import Container from "react-bootstrap/Container";
import './Faq.css';

const FaqItem = ({ question, answer, eventKey }:any) => (
  <AccordionItem eventKey={eventKey}>
    <AccordionHeader className="py-2 fw-medium text-start customHeader" data-aos="fade-up" data-aos-duration="1000">
      {question}
    </AccordionHeader>
    <AccordionBody className="text-secondary" data-aos="fade-up" data-aos-duration="1000">
      {answer}
    </AccordionBody>
  </AccordionItem>
);

const Faqs = ({ faqs }:any) => {
  return (
    <Container className="px-4 py-5">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-dark mb-3" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto">
        <Accordion flush>
          {faqs && faqs.map((faq:any, index:number) => (
            <FaqItem
              key={index}
              eventKey={String(index)}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faqs;
