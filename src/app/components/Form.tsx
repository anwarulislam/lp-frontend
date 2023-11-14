export function Form() {
  return (
    <form className="flex flex-col gap-3 justify-center h-full">
      <div>
        <label
          htmlFor="first_name"
          className="block mb-1 text-sm font-medium text-gray-900 "
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John"
          required
        />
      </div>

      <div>
        <label
          htmlFor="last_name"
          className="block mb-1 text-sm font-medium text-gray-900 "
        >
          Last name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Sturgis"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-900 "
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="example@email.com"
          required
        />
      </div>

      <div>
        <input id="tnc" type="checkbox" name="t_n_c" className="mr-3" />
        <label htmlFor="tnc">T&C</label>
      </div>

      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-primary"
      >
        Submit
      </button>
    </form>
  );
}
