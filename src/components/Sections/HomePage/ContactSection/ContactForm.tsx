"use client";
import Button from "@/components/Base/Button";
import React from "react";

const ContactForm = () => {
  return (
    <form method="POST" autoComplete="off" className="text-black">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form-input w-full rounded"
          />
        </div>
        <div className="col-span-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-input w-full rounded"
          />
        </div>
      </div>
      <div className="mt-5">
        <textarea
          name=""
          id=""
          cols={20}
          rows={10}
          className="form-textarea w-full rounded"
          placeholder="Tell me more about your needs..."
        ></textarea>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button type="submit" accent="primary">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
