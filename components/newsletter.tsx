export default function Newsletter() {
  return (
    <div className="mb-6 w-full border-t border-orange-200 pt-6 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 className="font-medium leading-6 text-orange-200">
          Subscribe to our newsletter
        </h3>
        <p className="mt-2 leading-6 text-orange-100">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
      </div>
      <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-slate-100 px-3 py-1.5 text-base  text-slate-700 shadow-sm ring-1 ring-inset ring-slate-400 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:w-56 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-orange-200 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
