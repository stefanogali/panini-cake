'use client';

import { Button } from 'components/button';

const Input = ({ label, id, type = 'text' }: { label: string; id: string; type?: string }) => (
  <div className="flex flex-col">
    <label className="block text-sm font-medium" htmlFor={id}>
      {label}
    </label>
    <input
      className="block w-full rounded-md border bg-transparent px-2.5 py-1 text-xs text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-hidden sm:leading-0"
      type={type}
      name={id}
      id={id}
    />
  </div>
);

export default function ContactForm() {
  const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('form submitted!');
  };

  return (
    <div className="mb-[70px]">
      <h2 className="text-header-2 mb-8 leading-none font-semibold">The form</h2>
      <p className="leading-7">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident.
      </p>
      <form className="w-full" onSubmit={formHandler}>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Your Name" id="name" />
          <Input label="Your Email" id="email" type="email" />
        </div>
        <div>
          <label className="lock text-sm font-medium" htmlFor="message">
            Your message
          </label>
          <textarea
            className="block w-full resize-none rounded-md border bg-transparent px-2.5 py-1 text-xs text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-hidden"
            id="message"
            rows={8}
          ></textarea>
        </div>
        <div className="mt-3">
          <Button>Send it</Button>
        </div>
      </form>
    </div>
  );
}
