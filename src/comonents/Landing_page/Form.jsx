import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    // handleSubmit,
    formState: { errors }
  } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted:", data);
//     alert("Thanks for contacting us!");
//   };

  return (
    <form
      action="https://formsubmit.co/kapilsharma09311@gmail.com"
  method="POST"
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Me</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email address"
            }
          })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <input
          {...register("subject", { required: "Subject is required" })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Subject"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full p-2 border border-gray-300 rounded h-28 resize-none"
          placeholder="Write your message here..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
