"use client"
import Link from "next/link";
import React, { useState } from "react";
import RequestQuoteForm from "../request-quote-form/RequestQuoteForm";

const GsButton = ({ type, text }: any) => {
  const [open , setIsOpen] = useState(false);
  return (
    <>
      {type === "primary" && (
        <button className="button-primary button text-dark" onClick={() => setIsOpen(true)}>
          <span>Request Now</span>
        </button>
      )}
      {type === "primary-white" && (
        <button className="button-primary button" onClick={() => setIsOpen(true)}>
          <span>Request Now</span>
        </button>
      )}
      {type === "white" && (
        <button className="button-secondary button text-dark" onClick={() => setIsOpen(true)}>
          <span>Request Now</span>
        </button>
      )}
      {type === "defaultPrimary" && (
        <button className="btn btn-warning text-black fw-bold px-4 py-2" onClick={() => setIsOpen(true)}>
          <span>{ text }</span>
        </button>
      )}
      <RequestQuoteForm open={open} close={() => setIsOpen(false)} />
    </>
  );
};

export default GsButton;
