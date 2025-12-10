import { Send } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        "https://as-consultancy-1.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setIsSending(false);
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-200">
      <form className="space-y-6" onSubmit={sendEmail}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            required
            className="w-full h-32 border border-gray-300 rounded-lg px-4 py-3 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="flex items-center justify-center bg-purple-800 text-white px-6 py-3 rounded-lg w-full"
        >
          {isSending ? "Sending..." : "Send Message"}
          <Send className="w-5 h-5 ml-2" />
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-3">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center mt-3">
            Something went wrong, try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
