import React from "react";
import { Success } from "../components/Success";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzkywo");
  if (state.succeeded) {
    return <Success />;
  }
  return (
    <div className="py-6 lg:py-14 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-900">
        Contactez moi
      </h2>
      <form
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xoqzkywo"
        className="space-y-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-lg font-medium text-stone-900"
          >
            Nom:
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-lg font-medium text-stone-900"
          >
            Email:
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-lg font-medium text-stone-900"
          >
            Message:
          </label>
          <textarea
            required
            name="message"
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-400 focus:border-orange-400"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-stone-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
